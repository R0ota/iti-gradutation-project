// stores/wishlist.js
import { defineStore } from "pinia";
import { useAuthStore } from "./auth"; // Import auth store
import { getBaseURL } from "~/composables/helpers";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    items: [],
  }),
  actions: {
    async loadwishlistFromServer() {
      try {
        const res = await $fetch("/wishlist");
        this.items = res.data.map((entry) => entry.Item);
        this.saveToLocalStorage(); // optional
      } catch (error) {
        console.error("Failed to load wishlist:", error);
      }
    },
    // Helper method to get auth headers
    getAuthHeaders() {
      const authStore = useAuthStore();
      return {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      };
    },
    async toggleWishlistItem(product) {
      try {
        const res = await $fetch(`/wishlist/${product._id}`, {
          method: "patch",
          ...this.getAuthHeaders(),
        });
        await this.loadwishlistFromServer(); // Refresh list
      } catch (error) {
        console.error("Toggle wishlist failed:", error);
      }
    },
   

    addToWishlist(product) {
      if (!this.items.find((item) => item.id === product.id)) {
        this.items.push(product);
        this.saveToLocalStorage();
      }
    },
    removeFromWishlist(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveToLocalStorage();
    },
    isInWishlist(productId) {
      return this.items.some((item) => item.id === productId);
    },
    saveToLocalStorage() {
      localStorage.setItem("wishlist", JSON.stringify(this.items));
    },
    clearWishlist() {
      this.items = [];
      this.saveToLocalStorage();
    },
    loadwishlistFromLocalStorage() {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("wishlist");
        if (stored) {
          try {
            this.items = JSON.parse(stored);
          } catch (e) {
            console.error("Invalid JSON in wishlist:", e);
            localStorage.removeItem("wishlist");
          }
        }
      }
    },
  },
});
