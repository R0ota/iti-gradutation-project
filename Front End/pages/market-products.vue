<script setup>
definePageMeta({
  layout: "market",
});

const { data } = await useAsyncFetch("get", "/products");
</script>

<template>
  <div
    class="lg:ml-[130px] lg:mr-[130px] lg:mt-[40px] lg:gap-[32px] flex flex-col gap-[24px] ml-[25px] mr-[25px]"
  >
  <div class=" inline-flex justify-between items-center">
    <div class="px-6 border-l-[6px] border-red-800 inline-flex items-center">
      <p
        class="justify-start text-red-800 lg:text-3xl text-xl font-bold leading-loose lg:leading-[48px]"
      >
        Market
        <span
          class="px-2 bg-red-800 inline-flex justify-center items-center text-white lg:text-2xl text-xl font-bold leading-9"
          >Apparel</span
        >
      </p>
    </div>
    <div class="lg:px-3 lg:py-1 px-2 py-1 bg-red-200 rounded-full inline-flex justify-center items-center gap-1 cursor-pointer">
      <div class="lg:w-6 lg:h-6 w-5 h-5 p-1 flex justify-start items-center ">
        <img src="../assets/filter-stroke.svg" >
      </div>
      <p class="text-red-800 lg:text-lg text-xs lg:font-medium font-semibold">
        Filter
      </p>
    </div>
  </div>
    

    <div
      class="flex flex-row lg:flex-wrap lg:justify-center justify-center  flex-wrap lg:gap-4 gap-8"
    >
      <div v-for="product in data.products" class="flex">
        <ProductCard
          :name="product.title"
          :type="product.title"
          :price="product.id"
          :image="product.thumbnail"
          currency="EGP"
        />
      </div>
    </div>
  </div>
</template>
