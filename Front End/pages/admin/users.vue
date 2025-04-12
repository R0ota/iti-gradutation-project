<script setup>
definePageMeta({
  layout: "admin",
});

</script>

<template>
  <div class="flex flex-col gap-m m-[30px] ml-[240px] fixed w-[80%]">
    <div class="flex items-center justify-between w-full">
      <AdminTitle route="Users"/>
      <div class="w-[40%]">
        <Search/>
       </div>
    </div>
  </div>
</template>
