<template>
    <header class="flex py-[16px] px-[24px] justify-between items-center">
      <NuxtLink to="/market">
        <div
          class="text-center justify-start text-red-800 text-lg font-medium font-['Poppins'] leading-relaxed"
        >
          Explore Marketplace
        </div>
      </NuxtLink>
      <!-- Logo -->
      <NuxtLink to="/">
        <div
          class="text-black text-center font-[Poppins] text-[20px] not-italic font-bold leading-[30px] tracking-[-0.38px]"
        >
          <img src="../Logo.svg" />
        </div>
      </NuxtLink>
  
      <div 
       
        class="flex items-center justify-center gap-[10px]"
      >
        <!-- Log in Button -->
      <NuxtLink
      to="/profile"
       class="px-[5px] py-[3px] -flex flex-col">
        <p class="text-red-800 text-xs font-medium">Hello</p>
        <p class="text-red-800 text-xs font-extrabold">Nour</p>
      </NuxtLink>
  
            <!-- Logout Button -->
            <button
        @click="handleLogout"
          class="p-[12px] px-[16px] text-[#A31D1D]  cursor-pointer transition-all duration-300 hover:bg-orange-100 hover:rounded-full"
        >
           <i class="fa-solid fa-right-from-bracket rotate-180 "></i>
        </button>
       
      </div>   
  
      <!-- <div
        
        class="flex items-center space-x-4"
      >
    
      </div> -->
    </header>
  </template>
  
  <script setup>
//   import { useAuthStore } from '~/stores/auth';
  import { NuxtLink } from '#components';
import { useAuth } from '~/composables/useAuth';
  
//   const authStore = useAuthStore();
  const { logout } = useAuth();
//   const isAuthenticated = computed(() => authStore.isAuthenticated);
  
  const handleLogout = () => {
    logout();
  };
  </script>
  