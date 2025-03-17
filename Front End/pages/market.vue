<script setup>
definePageMeta({
  layout: "market",
});

const {data} = await useAsyncFetch("get", "/products")
  console.log(data);

</script>

<template>

  <div class="lg:ml-[135px] lg:mr-[135px] lg:gap-[32px] flex flex-col gap-[24px] ml-[61px] mr-[61px] mt-[32px]">
    <div class="text-[20px] tracking-[-0.38px] float-left font-[Poppins] lg:text-[24px] font-semibold leading-[150%] lg:tracking-[-0.456px]">
      Market Catigories
    </div>
    <div class="flex flex-row justify-between flex-wrap ">
      <div  v-for="item in data.products">
        <CardType  >{{ item.title }}</CardType>
      </div>
    </div> 
    <div class="flex flex-col items-center">
      <div class=" lg:w-[640px] lg:stroke-[2px] stroke-black">
        <svg  xmlns="http://www.w3.org/2000/svg" width="642" height="2" viewBox="0 0 642 2" fill="none">
        <path d="M641 1L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
    <div class="flex flex-row justify-between ">
      <p class="text-[20px] tracking-[-0.38px]  font-[Poppins] lg:text-[24px] font-semibold leading-[150%] lg:tracking-[-0.456px]">
        Best-selling products
      </p>
      <p class="lg:text-[16px] tracking-[-0.304px] font-semibold cursor-pointer">more</p>
    </div>
      
    <ProductCard>{{ item.title }} </ProductCard>
    
        
  </div>
  
  
</template>
