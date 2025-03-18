<template>
  <header
    class="flex w-[1360px] px-[24px] py-[12px] justify-between items-center"
  >
    <NuxtLink to="market">
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

    <div class="flex items-center justify-center gap-[10px]">
      <!-- Log in Button -->
      <NuxtLink to="login">
        <button
          class="p-[12px] px-[16px] text-[#A31D1D] text-center font-[Poppins] text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer transition-all duration-300 hover:bg-orange-100 hover:rounded-full"
        >
          Log in
        </button>
      </NuxtLink>

      <!-- Sign up Button -->
      <NuxtLink to="sign-up">
        <button
          class="p-[10px] px-[18px] rounded-[16px] bg-[#A31D1D] shadow-[0px_0px_4px_rgba(0,0,0,0.50)] text-[#ECDCBF] text-center font-[Poppins] text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer"
        >
          Sign up
        </button>
      </NuxtLink>
    </div>
  </header>
</template>
