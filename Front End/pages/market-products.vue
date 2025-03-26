<script setup>
definePageMeta({
  layout: "market",
});

// Fetch products
const { data, refresh } = await useAsyncFetch("get", "/products");

import { ref, computed, onMounted, watchEffect } from "vue";
import PaginationComponent from "../components/paginiation.vue"; // Ensure correct path

const currentPage = ref(1);
const itemsPerPage = 6; // Set how many products per page

// Debug: Check if products are loaded
watchEffect(() => {
  console.log("Fetched Products:", data.value?.products);
});

onMounted(() => {
  refresh(); // Force re-fetch on mount
});

// Calculate total pages dynamically
const totalPages = computed(() => {
  if (!data.value?.products || data.value.products.length === 0) return 1;
  return Math.ceil(data.value.products.length / itemsPerPage);
});

// Get the current page's products
const paginatedProducts = computed(() => {
  if (!data.value?.products || data.value.products.length === 0) return []; // Ensure products exist before slicing
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  console.log("Paginated Products:", data.value.products.slice(start, end));
  return data.value.products.slice(start, end);
});
</script>

<template>
  <div
    class="lg:ml-[130px] lg:mr-[130px] lg:mt-[40px] lg:gap-[32px] flex flex-col gap-[24px] ml-[61px] mr-[61px]"
  >
    <div class="px-6 border-l-[6px] border-red-800 inline-flex items-center">
      <p
        class="justify-start text-red-800 lg:text-3xl text-xl font-bold leading-loose lg:leading-[48px]"
      >
        Market
        <span
          class="px-2 bg-red-800 inline-flex justify-center items-center text-white lg:text-2xl text-xl font-bold leading-9"
        >
          Apparel
        </span>
      </p>
    </div>

    <!-- Display Paginated Products -->
    <div
      class="flex flex-row lg:flex-wrap lg:justify-start overflow-x-auto gap-4"
    >
      <div v-for="product in paginatedProducts" :key="product.id" class="flex">
        <ProductCard
          :name="product.title"
          :type="product.title"
          :price="product.id"
          :image="product.thumbnail"
          currency="EGP"
        />
      </div>
    </div>

    <!-- Include Pagination Component -->
    <PaginationComponent
      v-model:currentPage="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>
