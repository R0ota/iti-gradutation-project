<script setup>
definePageMeta({
  layout: "order",
});
</script>

<template>
  <div
    class="lg:ml-[120px] ml-[25px] lg:mr-[120px] mr-[25px] pt-10 pb-20 flex flex-col justify-start lg:items-start sm:items-start md:items-start items-center lg:gap-10 gap-4"
  >
    <OrderNvegation />
      <div class="flex flex-wrap lg:justify-start justify-center gap-8 items-center w-full">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
  </div>
</template>
