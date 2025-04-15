<script setup>

import { AdminInputData } from "#components";
definePageMeta({
  layout: "admin",
});
</script>

<template>
     <div
    class="flex justify-between items-center m-[30px] ml-[250px] fixed w-[77%]"
  >
    <div class="flex items-center justify-center flex-1">
      <!-- upload design -->
      <div class="flex flex-col items-center justify-center gap-4 h-screen">
        <a href="/admin/product/upload-product-data"><img src="/admin/upload.png" /></a>
        <p href="#" class="text-black text-base font-semibold font-['Poppins']">
          Upload Product Template
        </p>
      </div>
    </div>
  </div>

</template>