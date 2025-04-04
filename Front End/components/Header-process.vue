<template>
  <nav
    class="flex h-[43px] justify-center items-end gap-6 self-stretch bg-[#A31D1D] border-b-2 border-[#A31D1D]"
  >
    <NuxtLink
      to="/profile"
      :class="[baseClasses, route.path === '/profile' ? activeClasses : '']"
    >
      Profile
    </NuxtLink>

    <NuxtLink
      to="/order/ongoing-order"
      :class="[
        baseClasses,
        route.path === '/order/ongoing-order' ? activeClasses : '',
      ]"
    >
      Orders
    </NuxtLink>
    
    <NuxtLink
      to="/security"
      :class="[baseClasses, route.path === '/security' ? activeClasses : '']"
    >
      Security
    </NuxtLink>
  </nav>
</template>

<script setup>
const route = useRoute();
const baseClasses = `
  text-[#FFEFD1] text-center font-poppins text-[18px] font-bold leading-[27px] tracking-[-0.342px]
  px-6 py-2 rounded-none 
  flex justify-center items-center
  transition-none transform-none
`;

const activeClasses = `
  bg-[#FFEFD1] text-red-800 rounded-t-[24px] px-6 py-2 gap-[10px]
`;
</script>
