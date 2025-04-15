import { Title } from "#components";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
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
    ],
  }),
  getters: {
    totalItems(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice(state) {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    // Existing actions — DO NOT CHANGE
    addItem(product, quantity = 1) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity });
      }
      this.saveCartToLocalStorage();
    },
    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveCartToLocalStorage();
    },
    clearCart() {
      this.items = [];
      this.saveCartToLocalStorage();
    },
    isInCart(productId) {
      return this.items.some((item) => item.id === productId);
    },
    saveCartToLocalStorage() {
      if (typeof window !== "undefined") {
        localStorage.setItem("cart_items", JSON.stringify(this.items));
      }
    },
    loadCartFromLocalStorage() {
      if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart_items");
        if (storedCart) {
          try {
            this.items = JSON.parse(storedCart);
          } catch (e) {
            console.error("Error parsing stored cart data:", e);
            localStorage.removeItem("cart_items");
          }
        }
      }
    },

    //  New: Load cart from server
    async loadCartFromServer() {
      try {
        const res = await $fetch("/cart");
        const serverCartItems = res.data.items.map((item) => ({
          id: item.product, // must be aligned with backend `_id`
          price: item.price,
          quantity: item.quantity,
          title: item.title,
          image: item.image,
          // You can add more fields if populated on backend
        }));
        this.items = serverCartItems;
        this.saveCartToLocalStorage(); // Optional
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    },

    // New: Add to cart (sync with backend)
    async syncAddToCart(productId, quantity = 1) {
      try {
        await $fetch("/cart/add", {
          method: "POST",
          body: {
            designedProductId: productId,
            quantity,
          },
        });
        await this.loadCartFromServer();
      } catch (error) {
        console.error("Add to cart failed:", error);
      }
    },

    //  New: Remove item by cart item ID (not productId!)
    async syncRemoveItem(cartItemId) {
      try {
        await $fetch(`/cart/remove/${cartItemId}`, {
          method: "DELETE",
        });
        await this.loadCartFromServer();
      } catch (error) {
        console.error("Remove from cart failed:", error);
      }
    },

    //  New: Clear cart
    async syncClearCart() {
      try {
        await $fetch("/cart/clear", {
          method: "DELETE",
        });
        this.clearCart(); // use existing action
      } catch (error) {
        console.error("Clear cart failed:", error);
      }
    },
  },
});
