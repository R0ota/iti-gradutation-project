<script setup>
  const {data} = await useAsyncFetch("get", "/products")
  console.log(data);
  
</script>
<template>
  <div>
    <Header-Market />
    <div class=" lg:ml-[135px] lg:gap-32px lg:mr-[135px] lg:mt-[40px] gap-[24px] ml-[61px] mr-[61px] mt-[32px]">
      <slot />
    <div class=" lg:mt-[32px] sm:mt-[24px] flex flex-row justify-between flex-wrap ">
      
      <div  v-for="item in data.products" class=" ">
        <CardType  >{{ item.title }}</CardType>
      </div>
    </div>
    </div>
    
  </div>
</template>
