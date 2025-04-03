<script setup>
definePageMeta({
  layout: "market",
});
</script>

<template>
  <div
    class=" inline-flex flex-col justify-start items-start lg:ml-[115px] lg:mr-[115px] ml-[50px] mr-[50px] md:ml-50 md:mr-50" 
  >
    <!-- hero section -->
    <ProductDetails />

    <!-- product features -->
    <ProductFeatures />

    <!-- availible in this design -->
    <AvailableInThisDesign title="Available in this design"/>

    <!-- Other Designs -->
    <AvailableInThisDesign title="Other Designs"/>
   
  </div>
</template>
