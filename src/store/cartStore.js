import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      // Mahsulotni qo‘shish, quantity bilan
      addToCart: (product, quantity = 1, size = null, color = null) => {
        const cart = get().cart;

        // ID + sizeID + colorID orqali tekshirish
        const existing = cart.find(item =>
          item.id === product.id &&
          item.size?.id === size?.id &&
          item.color?.id === color?.id
        );

        if (existing) {
          // mavjud bo‘lsa, quantityni oshirish
          const updatedCart = cart.map(item =>
            item.id === product.id &&
              item.size?.id === size?.id &&
              item.color?.id === color?.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          set({ cart: updatedCart });
        } else {
          // yangisini qo‘shish
          set({
            cart: [
              ...cart,
              {
                ...product,
                quantity,
                size,
                color,
                cartId: `${product.id}-${size?.id || "noSize"}-${color?.id || "noColor"}` // unique id
              },
            ],
          });
        }
      },


      // Mahsulot sonini 1 taga oshirish
      increaseQuantity: (productId) => {
        const cart = get().cart;
        const updatedCart = cart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        set({ cart: updatedCart });
      },

      // Mahsulot sonini 1 taga kamaytirish (1 dan kam bo‘lmasligi uchun tekshiruv bilan)
      decreaseQuantity: (productId) => {
        const cart = get().cart;
        const updatedCart = cart.map(item => {
          if (item.id === productId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        set({ cart: updatedCart });
      },

      // Mahsulotni butunlay olib tashlash
      removeFromCart: (cartId) => {
        const cart = get().cart;
        const updatedCart = cart.filter(item => item.cartId !== cartId);
        set({ cart: updatedCart });
      }
    }),
    {
      name: 'cart-storage', // localStorage key nomi
      getStorage: () => localStorage, // brauzer localStorage dan foydalanish
    }
  )
);

export default useCartStore;
