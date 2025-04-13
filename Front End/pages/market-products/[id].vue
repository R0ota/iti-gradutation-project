<template>
  <!-- Loading state -->

  <!-- Error state -->

  <div
    class="inline-flex flex-col lg:justify-start justify-center lg:items-start items-center md:ml-[70px] sm:ml-[70px] lg:ml-[120px] lg:mr-[120px] md:mr-[70px] sm:mr-[70px] ml-[25px] mr-[25px] md:ml-50 md:mr-50"
  >
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
    <div class="border-b-[2.50px] border-red-800"></div>

    <!-- Other Designs -->
    <!-- <ProductAvailableInThisDesign
      :loading="loadingAvailable"
      :products="availableInThisDesign"
      @toggle-wishlist="toggleWishlist"
    /> -->
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
