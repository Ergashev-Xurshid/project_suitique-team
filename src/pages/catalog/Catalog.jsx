import { useEffect, useState } from 'react';

function Catalog() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortOption, setSortOption] = useState('featured');

  useEffect(() => {
    fetch('https://back.aoron.uz/api/category')
      .then((res) => res.json())
      .then((result) => {
        if (Array.isArray(result.data)) {
          setCategories(result.data);
        }
      });

    fetch('https://back.aoron.uz/api/product')
      .then((res) => res.json())
      .then((result) => {
        if (Array.isArray(result.data?.products)) {
          setProducts(result.data.products);
          console.log(result.data.products[0].images);

          setFilteredProducts(result.data.products);
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

    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes?.some((s) => selectedSizes.includes(s.size))
      );
    }

    if (sortOption === 'priceLow') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHigh') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedColors, selectedSizes, products, sortOption]);

  const handleColorClick = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeClick = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedColors([]);
    setSelectedSizes([]);
    sortOption(null);
  };

  const handleInlineColorClick = (color) => {
    handleColorClick(color.toLowerCase());
  };
  return (
    <>
      <div className='w-full mt-3 '>
        <div className=' bg-gray-100 mx-auto px-10 py-20 catalog_cards'>
          <h1 className='text-center text-3xl font-bold mb-4'>
            Our Collection
          </h1>
          <p className='text-center  text-gray-500 max-w-lg mx-auto'>
            Browse our collection of premium menswear, designed with quality and
            style in mind.
          </p>
        </div>
      </div>
      <div className='bg-white'>
        <div className=' container mx-auto flex gap-8 py-10'>
          <div className='w-1/5'>
            <h3 className='text-lg font-semibold mb-4'>Categories</h3>
            <div className='flex flex-col gap-2'>
              <button
                className={`text-sm py-1 px-3 rounded cursor-pointer ${
                  selectedCategory === null
                    ? 'bg-black text-left text-white'
                    : ' text-gray-700 text-left'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                View All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`py-1 px-3 rounded text-left text-sm text-gray-700 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-black text-white'
                      : 'text-left'
                  }`}
                >
                  {cat.name_en}
                </button>
              ))}
            </div>
            <h3 className='text-xl font-semibold mt-6 mb-2'>Sizes</h3>
            <div className='flex flex-wrap gap-2'>
              {['44 - 52'].map((size) => (
                <button
                  key={size}
                  className={`px-2 py-1 border rounded  text-sm cursor-pointer ${
                    selectedSizes.includes(size)
                      ? 'bg-black text-white'
                      : 'bg-white'
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <h3 className='text-md font-semibold mt-6 mb-2'>Colors</h3>
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
                    <span className='capitalize'>{color}</span>
                  </button>
                )
              )}
            </div>

            <button
              onClick={clearFilters}
              className='mt-6 text-red-500 underline underline-offset-4 cursor-pointer'
            >
              Clear Filters
            </button>
          </div>

          <div className='w-3/4'>
            <div className='flex items-center justify-between mb-8'>
              <div className='text-sm text-gray-600'>
                Showing {filteredProducts.length} products
              </div>
              <div>
                <label>Sort by: </label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className='bg-gray-100 px-3 py-2 rounded text-sm'
                >
                  <option value='featured'>Featured</option>
                  <option value='priceLow'>Price: Low to High</option>
                  <option value='priceHigh'>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-4 gap-8'>
              {filteredProducts.map((p) => (
                <div key={p.id} className='gap-2 mb-6 flex flex-col'>
                  <img
                    src={`https://back.aoron.uz/${p.images[0]}`}
                    alt={p.title_en}
                    className=' w-full object-cover mb-2'
                  />
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
