<script setup>
 const prop = defineProps ({
    route : String
 })
</script>
<template>
    <div class="flex items-center justify-between w-full">
      <SectionTitle :title = route>
        <div class="flex items-center px-2 bg-red-900">
          <p class="text-white text-2xl font-bold font-['Poppins']">
            Management
          </p>
        </div>
      </SectionTitle>
      <!-- search block -->
       <div class="w-[40%]">
        <Search/>
       </div>
       <slot/>
    </div>
</template>