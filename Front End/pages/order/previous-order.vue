<script setup>
definePageMeta({
  layout: "order",
});
</script>

<template>
  <div
    class="lg:ml-[120px] ml-[50px] lg:mr-[120px] mr-50px pt-10 pb-20 flex flex-col justify-start lg:items-start sm:items-start md:items-start items-center lg:gap-10 gap-4"
  >
    <OrderNvegation />

    <div class="flex flex-col justify-start items-start gap-8">
      
      <OrderPrevOrderSection/>
      <div
        class="w-full h-0 outline-2 outline-offset-[-1px] outline-red-800"
      ></div>
      <OrderPrevOrderSection/>
    </div>
  </div>
</template>
