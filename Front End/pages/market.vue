<script setup>
definePageMeta({
  layout: "market",
});

const {data} = await useAsyncFetch("get", "/products")
  console.log(data);

</script>

<template>
  <div class="lg:ml-[130px] lg:mr-[130px] lg:mt-[40px] lg:gap-[32px] flex flex-col gap-[24px] ml-[61px] mr-[61px] ">
    <div class="px-6 border-l-[6px] border-red-800 inline-flex items-center ">
      <p class="justify-start text-red-800 lg:text-3xl text-xl font-bold  leading-loose lg:leading-[48px]">
        Market Catigories</p>
    </div>

    <div class="flex flex-row justify-center gap-6 flex-wrap self-stretch pb-10 lg:border-b-[1.50px] border-b-[0.50px] border-red-800 ">
      <div  v-for="item in data.products">
        <CardType :catigory ="item.sku" :img = "item.thumbnail"/>
      </div>
    </div> 

    <div class="flex flex-row justify-between ">
      <p class="text-[20px] tracking-[-0.38px] lg:text-[24px] font-semibold leading-[150%] lg:tracking-[-0.456px]">
        Best-selling products
      </p>
      <p class="lg:text-[16px] tracking-[-0.304px] font-semibold cursor-pointer">more</p>
    </div>

    <div  class="flex flex-row  lg:flex-wrap lg:justify-start  overflow-x-auto gap-4">
      <div v-for="product in data.products" class="flex">
        <ProductCard :name = "product.title" :type = "product.title" :price = "product.id" :image="product.thumbnail"/>
      </div>
    </div> 
  </div>
</template>
