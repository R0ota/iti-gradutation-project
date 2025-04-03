
<script setup>
    const props = defineProps(["img"]);
</script>

<template>
     <div class="flex lg:gap-6 gap-3 w-full">
        <img :src="img" class="lg:w-32 w-25 lg:h-32 h-25 rounded-2xl" />
        <div class="flex flex-col justify-between lg:h-32 h-25 py-1">
          <div class="flex flex-col lg:gap-1 gap-0.5">
            <p class="text-red-800 lg:text-lg text-sm font-bold leading-relaxed">
              Product name
            </p>
            <p class="text-black lg:text-sm font-xs font-medium lg:leading-tight">Type</p>
            <p class="text-black lg:text-sm font-xs font-medium lg:leading-tight">Size</p>
          </div>
          <p class="text-black lg:text-lg text-sm font-semibold leading-relaxed">
            Price EGP
          </p>
        </div>
      </div>
</template>