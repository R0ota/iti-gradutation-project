import { defineStore } from 'pinia';
import { getBaseURL } from '~/composables/helpers';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    categories: [],
    loading: false,
    error: null
  }),

  getters: {
    // Get all products
    getAllProducts: state => state.products,

    // Get products by category
    getProductsByCategory: state => categorySlug => {
      return state.products.filter(product => product.category === categorySlug);
    },

    // Get product by ID
    getProductById: state => id => {
      return state.products.find(product => product._id === id);
    },

    // Get all categories
    getAllCategories: state => state.categories,

    // Get product image URL from the complex product structure
    getProductImageUrl: () => product => {
      return product?.colors?.[0]?.images?.[0]?.url || '';
    }
  },

  actions: {
    // Fetch all products from the backend API
    async fetchProducts() {
      if (this.products.length > 0 || this.loading) {
        return; // Return early if products are already loaded or loading
      }

      console.log('Fetching products...');
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(`${getBaseURL()}/products`, {
          method: 'GET'
        });

        // Add an image key to each product
        const modifiedProducts = response.map(product => ({
          ...product,
          image: this.getProductImageUrl(product) // Use the computed property
        }));

        this.products = modifiedProducts || [];
        this.extractCategories(); // Extract categories after fetching products
      } catch (error) {
        console.error('Error fetching products:', error);
        this.error = error.message || 'Failed to load products';
      } finally {
        this.loading = false;
      }
    },

    // Extract unique categories with the first image of the product in each category
    extractCategories() {
      const categoryMap = new Map();

      this.products.forEach(product => {
        if (!categoryMap.has(product.category)) {
          categoryMap.set(product.category, { name: product.category, image: product.image });
        }
      });

      this.categories = Array.from(categoryMap.values());
    },

    // Fetch products by category
    async fetchProductsByCategory(categorySlug) {
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(`${getBaseURL()}/products?category=${categorySlug}`, {
          method: 'GET'
        });

        this.products = response || [];
      } catch (error) {
        console.error(`Error fetching products for category ${categorySlug}:`, error);
        this.error = error.message || 'Failed to load products';
      } finally {
        this.loading = false;
      }
    },

    // Fetch a single product by ID
    async fetchProduct(id) {
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(`${getBaseURL()}/products/${id}`, {
          method: 'GET'
        });

        // Add an image key to the product
        const modifiedProducts = {
          ...response,
          image: this.getProductImageUrl(response) // Use the computed property
        };

        return modifiedProducts;
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        this.error = error.message || 'Failed to load product';
        throw error; // Re-throw the error for further handling
      } finally {
        this.loading = false;
      }
    }
  }
});
