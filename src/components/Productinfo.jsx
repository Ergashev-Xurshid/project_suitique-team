import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Productinfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://back.aoron.uz/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setProduct(data.data);
        }
      })
      .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className='flex p-8'>
      <div className='w-2/1'>
        {product?.images?.[0] && (
          <img
            src={`https://back.aoron.uz/${product.images[0]}`}
            alt={product.title_en}
            className='w-full max-w-md object-cover mb-6 rounded shadow'
          />
        )}
      </div>
      <div>
        <h1 className='text-2xl font-bold mb-4'>{product.title_en}</h1>
        <p className='text-gray-600 mb-2'>${product.price}</p>
        <p className='text-gray-500'>{product.description_en}</p>
        {product.colors && product.colors.length > 0 && (
          <div>
            <div
              // onClick={() => handleInlineColorClick(p.colors[0].color_en)}
              className=' w-3 h-3 rounded-full cursor-pointer border-gray-100);'
              style={{
                backgroundColor: product.colors[0].color_en.toLowerCase(),
              }}
              title={`Filter by ${product.colors[0].color_en}`}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Productinfo;
