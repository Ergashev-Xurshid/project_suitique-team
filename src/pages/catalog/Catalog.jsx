import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

function Catalog() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sizes, setSizes] = useState(null);
  const [sortOption, setSortOption] = useState('featured');
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    fetch('https://testaoron.limsa.uz/api/category')
      .then((res) => res.json())
      .then((result) => {
        if (Array.isArray(result.data)) {
          setCategories(result.data);
        }
      })
      .finally(() => setLoading(false));

    setLoading(true);
    fetch('https://testaoron.limsa.uz/api/product?page=1&limit=10&min_sell=2')
      .then((res) => res.json())
      .then((result) => {
        if (Array.isArray(result.data?.products)) {
          const productSizes = {};

          setProducts(result.data.products);
          console.log(result.data.products);

          result.data.products.forEach((product) => {
            product.sizes.forEach((size) => {
              productSizes[size.size] = size;
            });
          });

          setSizes(productSizes);

          setFilteredProducts(result.data.products);
          setLoading(false);
        } else {
          console.error('Unexpected product format:', result);
        }
      });
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category_id === selectedCategory);
    }

    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors?.some((c) => selectedColors.includes(c.color_en.toLowerCase()))
      );
    }

    if (sortOption === 'priceLow') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHigh') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedColors, products, sortOption]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    const urlCategory = query.get('category');
    if (urlCategory && categories.length > 0) {
      const matchedCategory = categories.find((cat) =>
        [cat.name_en, cat.name_ru, cat.name_de].includes(urlCategory)
      );
      if (matchedCategory) {
        setSelectedCategory(matchedCategory.id);
      } else {
        setSelectedCategory(null);
      }
    } else {
      setSelectedCategory(null);
    }
  }, [location.search, categories]);

  const handleColorClick = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeClick = (sizeId) => {
    setSelectedSize(sizeId);

    setLoading(true);
    setProducts([]);

    fetch(
      `https://testaoron.limsa.uz/api/product?page=1&limit=10&min_sell=2${
        sizeId ? '&sizes_id=' + sizeId : ''
      }`
    )
      .then((res) => res.json())
      .then((result) => {
        if (Array.isArray(result.data?.products)) {
          setProducts(result.data.products);

          setFilteredProducts(result.data.products);
          setLoading(false);
        } else {
          console.error('Unexpected product format:', result);
        }
      });
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedColors([]);
    handleSizeClick(null);
    sortOption(null);
  };

  const handleInlineColorClick = (color) => {
    handleColorClick(color.toLowerCase());
  };

  // sahifani tepaga olib chiqadi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='w-full mt-3 '>
        <div className='bg-gray-100 mx-auto px-10 py-20 catalog_cards'>
          <h1 className='text-center text-3xl font-bold mb-4'>
            {t('ourCollection')}
          </h1>
          <p className='text-center text-gray-500 max-w-lg mx-auto'>
            {t('collectionDescription')}
          </p>
        </div>
      </div>
      <div className='bg-white'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8 px-10 py-10'>
          <div className='hidden md:block w-full md:w-1/5'>
            <h3 className='text-lg font-semibold mb-4'>{t('Categories')}</h3>
            <div className='flex flex-col gap-2'>
              {categories &&
                categories
                  .sort((a, b) => (a.name_en < b.name_en ? -1 : 1))
                  .map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`py-1 px-3 rounded text-left text-sm text-gray-700 cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-black text-white'
                          : 'text-left'
                      }`}
                    >
                      {i18n.language === 'ru'
                        ? cat.name_ru
                        : i18n.language === 'de'
                        ? cat.name_de
                        : cat.name_en}
                    </button>
                  ))}
            </div>
            <h3 className='text-xl font-semibold mt-6 mb-2'>{t('Size')}</h3>
            <div className='flex flex-wrap gap-2 '>
              {sizes &&
                Object.values(sizes).map((size) => (
                  <button
                    key={size.id}
                    className={`px-3 py-1 border border-gray-100 rounded cursor-pointer text-sm ${
                      selectedSize === size.id
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    }`}
                    onClick={() => handleSizeClick(size.id)}
                  >
                    {size.size}
                  </button>
                ))}
            </div>
            <h3 className='text-md font-semibold mt-6 mb-2'>{t('Color')}</h3>{' '}
            <div className='flex flex-wrap gap-2 text-sm'>
              {['black', 'white', 'gray', 'blue', 'yellow', 'brown'].map(
                (color) => (
                  <button
                    key={color}
                    className={`flex items-center gap-1 px-2 py-1 border border-gray-100 rounded ${
                      selectedColors.includes(color)
                        ? 'border-gray-300'
                        : 'border-black'
                    }`}
                    onClick={() => handleColorClick(color)}
                  >
                    <span
                      className={`w-3 h-3 rounded-full`}
                      style={{ backgroundColor: color }}
                    ></span>
                    <span className='capitalize'>{t(`${color}`)}</span>{' '}
                  </button>
                )
              )}
            </div>
            <button
              onClick={clearFilters}
              className='mt-6 text-red-500 underline underline-offset-4 cursor-pointer'
            >
              {t('ClearFilters')}
            </button>
          </div>

          <div className='w-full px-4 sm:px-6 md:px-10 lg:w-3/4 mx-auto gap-8 '>
            <div className='flex items-center justify-between mb-8'>
              <div className='text-sm text-gray-600'>
                {t('Showing')} {filteredProducts.length} {t('products')}
              </div>
              <div>
                <label className='mr-2'>{t('Sort by')}:</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className='bg-gray-100 px-3 py-2 rounded text-sm'
                >
                  <option value='featured'>{t('Featured')}</option>
                  <option value='priceLow'>{t('priceLowToHigh')}</option>
                  <option value='priceHigh'>{t('priceHighToLow')}</option>
                </select>
              </div>
            </div>

            {loading && <div>Loading...</div>}

            {filteredProducts.length === 0 && (
              <div className='w-full h-full flex justify-center items-center'>
                <div className='h-50'>
                  <img
                    src='/images/noData.png'
                    alt='No data available'
                    loading='lazy'
                    className='w-40 h-40 object-contain mb-4 '
                  />
                  <p className='text-sm text-gray-500'>No data available</p>
                </div>
              </div>
            )}

            <div className='w-full relative md grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {filteredProducts.length > 0 &&
                filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className='w-[210px] gap-2 mb-6 flex flex-col relative group overflow-hidden cursor-pointer'
                  >
                    <Link to={`/product/${p.id}`}>
                      <div className='overflow-hidden'>
                        <img
                          src={`https://testaoron.limsa.uz/${p.images[0]}`}
                          alt={p.title_en}
                          loading='lazy'
                          className=' w-full h-auto  mx-auto transform transition-transform duration-500 hover:scale-150'
                        />
                      </div>
                    </Link>
                    <div className='flex justify-between gap-1 text-sm'>
                      <h4 className='font-semibold mb-1'>{p.title_en}</h4>
                      <p className='text-gray-600 mb-1'>${p.price}</p>
                    </div>
                    <p className='text-sm text-gray-500 flex-grow mb-2 line-clamp-2'>
                      {p.description_en}
                    </p>
                    {p.colors && p.colors.length > 0 && (
                      <div>
                        <div
                          onClick={() =>
                            handleInlineColorClick(p.colors[0].color_en)
                          }
                          className=' w-3 h-3 rounded-full cursor-pointer border-gray-100);'
                          style={{
                            backgroundColor: p.colors[0].color_en.toLowerCase(),
                          }}
                          title={`Filter by ${p.colors[0].color_en}`}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
