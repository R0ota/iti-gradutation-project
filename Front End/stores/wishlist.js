import { defineStore } from 'pinia';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [] // Initialize as an empty array
  }),
  actions: {
    addToWishlist(product) {
      if (!this.items.find(item => item.id === product.id)) {
        this.items.push(product);
        this.saveToLocalStorage();
      }
    },
    removeFromWishlist(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.saveToLocalStorage();
    },
    isInWishlist(productId) {
      return this.items.some(item => item.id === productId);
    },
    saveToLocalStorage() {
      localStorage.setItem('wishlist', JSON.stringify(this.items));
    },
    loadwishlistFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          try {
            this.items = JSON.parse(storedWishlist);
          } catch (e) {
            console.error('Error parsing stored wishlist data:', e);
            localStorage.removeItem('wishlist');
          }
        }
      }
    }
  }
});
