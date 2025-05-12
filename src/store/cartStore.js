import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const cart = get().cart;
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
          const updatedCart = cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ cart: updatedCart });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },

      increaseQuantity: (productId) => {
        const cart = get().cart;
        const updatedCart = cart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        set({ cart: updatedCart });
      },

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

      removeFromCart: (productId) => {
        const cart = get().cart;
        const updatedCart = cart.filter(item => item.id !== productId);
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
