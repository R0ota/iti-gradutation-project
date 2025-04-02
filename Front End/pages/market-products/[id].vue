<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Loading state -->
    <div
      v-if="loading"
      class="flex justify-center items-center py-16"
    >
      <Spinner
        :size="60"
        label="Loading product details..."
        :show-label="true"
      />
    </div>

    <!-- Error state -->
    <div
      v-else-if="error"
      class="text-center py-8"
    >
      <p class="text-red-500">{{ error }}</p>
      <button
        @click="$router.push('/')"
        class="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Return to homepage
      </button>
    </div>

    <div v-else>
      <!-- Product details -->
      <ProductDetails
        :product="fetchedProduct"
        :is-in-wishlist="isWishlisted"
        @toggle-wishlist="toggleWishlist"
      />

      <!-- Available in this design section -->
      <ProductAvailableInThisDesign
        :loading="loadingAvailable"
        :products="availableInThisDesign"
        @toggle-wishlist="toggleWishlist"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "market",
});

import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/stores/products';
import { useWishlistStore } from '~/stores/wishlist';

const route = useRoute();
const productId = computed(() => route.params.id);
const productsStore = useProductsStore();
const wishlistStore = useWishlistStore();

// States
const loading = ref(false);
const error = ref(null);
const fetchedProduct = ref(null);
const availableInThisDesign = ref([]);
const loadingAvailable = ref(false);

const isWishlisted = computed(() => wishlistStore.isInWishlist(fetchedProduct.value?.id));

// Toggle product in wishlist
const toggleWishlist = () => {
  if (!fetchedProduct.value) return;

  if (isWishlisted.value) {
    wishlistStore.removeFromWishlist(fetchedProduct.value.id);
  } else {
    wishlistStore.addToWishlist(fetchedProduct.value);
  }
};

// Get random products from the same category
const fetchSimilarProducts = async () => {
  if (!fetchedProduct.value?.category) return;

  loadingAvailable.value = true;
  try {
    // Check if we already have products in the store
    if (productsStore.products.length === 0) {
      await productsStore.fetchProducts();
    }

    // Filter products from the same category, excluding current product
    const sameCategory = productsStore.products.filter(
      product => product.category === fetchedProduct.value.category && product._id !== fetchedProduct.value._id
    );

    if (sameCategory.length === 0) {
      availableInThisDesign.value = [];
      return;
    }

    availableInThisDesign.value = sameCategory.slice(0, 4); // Default to first 4 products
  } catch (err) {
    console.error('Error fetching similar products:', err);
    availableInThisDesign.value = [];
  } finally {
    loadingAvailable.value = false;
  }
};

onMounted(async () => {
  loading.value = true;
  error.value = null;

  try {
    fetchedProduct.value = await productsStore.fetchProduct(productId.value); // Fetch the product by ID
    if (!fetchedProduct.value) {
      error.value = 'Product not found.';
    } else {
      // Fetch similar products after main product is loaded
      await fetchSimilarProducts();
    }
  } catch (err) {
    error.value = 'Failed to load product details.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>