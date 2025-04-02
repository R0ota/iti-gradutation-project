import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      // Schema for an item in the cart:
      // {
      //   id: Number, // Unique identifier for the product
      //   name: String, // Name of the product
      //   price: Number, // Price of the product
      //   image: String, // URL of the product image
      //   quantity: Number, // Quantity of the product in the cart
      //   options: { // Selected options for the product (e.g., color, size, storage, style)
      //     color: String, // e.g., 'Space Gray'
      //     size: String, // e.g., 'M'
      //     storage: String, // e.g., '256GB'
      //     style: String // e.g., 'Classic'
      //   }
      // }
    ]
  }),
  getters: {
    totalItems(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice(state) {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  actions: {
    addItem(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity });
      }
      this.saveCartToLocalStorage();
    },
    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.saveCartToLocalStorage();
    },
    clearCart() {
      this.items = [];
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart_items', JSON.stringify(this.items));
      }
    },
    loadCartFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const storedCart = localStorage.getItem('cart_items');
        if (storedCart) {
          try {
            this.items = JSON.parse(storedCart);
          } catch (e) {
            console.error('Error parsing stored cart data:', e);
            localStorage.removeItem('cart_items');
          }
        }
      }
    }
  }
});
