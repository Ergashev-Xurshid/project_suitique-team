import { FiShoppingBag } from "react-icons/fi";
import useCartStore from "../../store/cartStore";
import { Link } from "react-router-dom";


const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="text-4xl mb-10 text-center">Ваша корзина</h1>
      <div className="text-center py-16 space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <FiShoppingBag  size={20}/>
          </div>
        </div>
        <h2 className="text-xl font-medium">Ваша корзина пуста</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Похоже, вы еще не добавили ничего в корзину.</p>
        <Link to="/catalog">
          <span className="bg-black mt-4 inline-block text-white text-center py-2 px-4 rounded-lg">
            Продолжить покупки
          </span>
        </Link>
      </div>
      {cart && cart.map((item, i) => (
        <div key={i} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex gap-4 border border-border rounded-lg p-4 animate-fade-in">
                <div className="w-26 h-32  bg-secondary/20 rounded-md overflow-hidden">
                  <img src="https://back.aoron.uz/86bced26-8e74-4cee-a158-ad4d45705af5.jpeg" alt="" />
                </div>
                <div className="flex-grow sm:ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Мужской костюм ID1020</h3>
                      <div className="text-sm text-muted-foreground mt-1 space-y-1">
                        <p>Размеры</p>
                        <p>Цвета</p>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="cursor-pointer">x</button>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center">
                      <button onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border rounded-l-md">-</button>
                      <span className="w-10 h-8 text-center border-t border-b border-border py-1">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}  className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border rounded-r-md">+</button>
                    </div>
                    <div className="font-medium">$86</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Промежуточный итог</span>
                  <span className="">$86</span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between font-medium">
                    <span>Итого</span>
                    <span>$86</span>
                </div>
              </div>
              <button className="w-full btn-primary mb-4">Оформить заказ</button>
              <a href="" className="block w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors">Продолжить покупки</a>
              <div className="mt-6 p-3 bg-accent rounded-md flex items-start space-x-2">
                <p className="text-xs text-muted-foreground">Доставка оплачивается отдельно.</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
