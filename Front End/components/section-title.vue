<script setup>
    import { defineProps } from 'vue';

   const data = defineProps ({
    title : String
   });
</script>
<template>
    <div class="px-6 border-l-[6px] border-red-800 inline-flex items-center">
      <p
        class="justify-start text-red-800 lg:text-2xl text-xl font-bold leading-loose lg:leading-9"
      >
        {{ title }}
    </p>
    </div>
    
</template>