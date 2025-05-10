import { useCartStore } from '../stores/cartStore';

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Savat</h1>
      {cart.map((item, i) => (
        <div key={i} className="mb-4 border-b pb-4">
          <p className="font-semibold">{item.title_en}</p>
          <p>Narxi: ${item.price}</p>

          <div className="flex items-center gap-2">
            <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-300">–</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-300">+</button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
            >
              🗑 O‘chirish
            </button>
          </div>

          <p className="mt-2">Jami: ${item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
