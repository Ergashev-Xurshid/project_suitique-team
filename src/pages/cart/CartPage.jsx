import { FiShoppingBag } from "react-icons/fi";
import useCartStore from "../../store/cartStore";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { danger } from "../../assets";
import { IoClose } from "react-icons/io5";

const CartPage = () => {


    //language
    const { t , i18n } = useTranslation()
    const currentLang = i18n.language;

  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      {cart.length === 0 ? <div>
        <h1 className="text-4xl mb-10 text-center">Ваша корзина</h1>
        <div className="text-center py-16 space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <FiShoppingBag size={20} />
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
      </div> :""}
      {cart.length !== 0 ?  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item, i) => (
            <div key={i} className="flex gap-4 border border-border rounded-lg p-4 animate-fade-in">
              <div className="w-26 h-32  bg-secondary/20 rounded-md overflow-hidden">
                <img src={`https://back.aoron.uz/${item.images[0]}`} alt="img" />
              </div>
              <div className="flex-grow sm:ml-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item?.[`title_${currentLang}`]}</h3>
                    <div className="text-sm text-muted-foreground mt-1 space-y-1">
                      <p>{t("Size")} :{item?.sizes?.[0]?.size}</p>
                      <p>{t("Color")} : {item?.colors?.[0].color_en}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="cursor-pointer"><IoClose /></button>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center">
                    <button onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border rounded-l-md">-</button>
                    <span className="w-10 h-8 text-center border-t border-b border-border py-1">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border rounded-r-md">+</button>
                  </div>
                  <div className="font-medium">${item?.price}.00</div>
                </div>
              </div>
            </div>))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Промежуточный итог</span>
                <span className="">{totalQuantity}</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between font-medium">
                <span>Итого</span>
                <span>${totalPrice}</span>
              </div>
            </div>
            <Link to="check">
              <button className="w-full bg-black py-3 px-4 rounded-lg text-white hover:bg-black/90 cursor-pointer mb-4">Оформить заказ</button>
            </Link>
            <Link to={"/catalog"}  className="block w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors">Продолжить покупки</Link>
            <div className="mt-6 p-3 bg-accent rounded-md flex items-start space-x-2">
              <img src={danger} alt="danger" className="w-4 h-4" />
              <p className="text-xs text-muted-foreground">Доставка оплачивается отдельно.</p>
            </div>
          </div>
        </div>
      </div>:""}
    </div>
  );
};

export default CartPage;
