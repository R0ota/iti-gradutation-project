<script setup>
    definePageMeta({
  layout: "market",
});

const {data} = await useAsyncFetch("get", "/products")
</script>

<template>
    <div class="lg:ml-[130px] lg:mr-[130px] lg:mt-[40px] lg:gap-[32px] flex flex-col gap-[24px] ml-[61px] mr-[61px] ">
      <div class="px-6 border-l-[6px] border-red-800 inline-flex items-center ">
        <p class="justify-start text-red-800 lg:text-3xl text-xl font-bold  leading-loose lg:leading-[48px]">
          Market <span class="px-2 bg-red-800 inline-flex justify-center items-center text-white lg:text-2xl text-xl font-bold leading-9">Apparel</span></p>
      </div>

      <div  class="flex flex-row  lg:flex-wrap lg:justify-start  overflow-x-auto gap-4">
      <div v-for="product in data.products" class="flex">
        <ProductCard :name = "product.title" :type = "product.title" :price = "product.id" :image="product.thumbnail" currency="EGP"/>
      </div>
    </div> 
    </div>
</template>