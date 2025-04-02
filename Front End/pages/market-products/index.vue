<script setup>
definePageMeta({
  layout: "market",
});

import { computed, onMounted, ref, watchEffect } from "vue";
import { useRoute } from 'vue-router';
import { useProductsStore } from "~/stores/products";
import PaginationComponent from "../components/paginiation.vue";

const route = useRoute();
const productsStore = useProductsStore();
const categoryParam = computed(() => route.query.category || '');

const currentPage = ref(1);
const itemsPerPage = 6;

// Fetch products from the store
onMounted(async () => {
  await productsStore.fetchProducts();
});

// Get all products from the store
const allProducts = computed(() => productsStore.getAllProducts);

// Filter products by category if provided in URL
const filteredProducts = computed(() => {
  if (!allProducts.value || allProducts.value.length === 0) return [];

  if (!categoryParam.value) {
    return allProducts.value; // Return all products if no category filter
  }

  // Filter products by category
  return allProducts.value.filter(product => {
    const productCategory = product.category?.toLowerCase() || '';
    return productCategory === categoryParam.value.toLowerCase();
  });
});

watchEffect(() => {
  console.log("Category Filter:", categoryParam.value);
  console.log("Filtered Products:", filteredProducts.value);
});

// Calculate total pages based on filtered products
const totalPages = computed(() => {
  if (!filteredProducts.value || filteredProducts.value.length === 0) return 1;
  return Math.ceil(filteredProducts.value.length / itemsPerPage);
});

// Get the current page's products from filtered products
const paginatedProducts = computed(() => {
  if (!filteredProducts.value || filteredProducts.value.length === 0) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredProducts.value.slice(start, end);
});

// Format the category name for display
const formattedCategory = computed(() => {
  if (!categoryParam.value) return "All Products";
  // Capitalize first letter of each word
  return categoryParam.value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
</script>

<template>
  <div class="lg:ml-[130px] lg:mr-[130px] lg:mt-[40px] lg:gap-[32px] flex flex-col gap-[24px] ml-[61px] mr-[61px]">
    <div class="px-6 border-l-[6px] border-red-800 inline-flex items-center">
      <p class="justify-start text-red-800 lg:text-3xl text-xl font-bold leading-loose lg:leading-[48px]">
        Market
        <span
          class="px-2 bg-red-800 inline-flex justify-center items-center text-white lg:text-2xl text-xl font-bold leading-9"
        >
          {{ formattedCategory }}
        </span>
      </p>
    </div>

    <!-- Display Paginated Products -->
    <div class="flex flex-row lg:flex-wrap lg:justify-start overflow-x-auto gap-4">
      <div
        v-for="product in paginatedProducts"
        :key="product._id"
        class="flex"
      >
        <ProductCard
          :id="product._id"
          :name="product.name"
          :type="product.category"
          :price="product.price"
          :description="product.description"
          :image="product.image || product.thumbnail" 
          currency="EGP"
        />
      </div>
    </div>

    <!-- Include Pagination Component -->
    <PaginationComponent
      class="mt-12 mb-12 lg:mb-0"
      v-model:currentPage="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>
