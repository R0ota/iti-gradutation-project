<template>
  <header class="flex items-center gap-12 self-stretch p-3 px-8">
    <!-- Logo -->
    <!-- <div
      class="text-black text-center font-poppins text-[20px] font-bold leading-[30px] tracking-[-0.38px]"
    >
      <img src="../Logo.svg" />
    </div> -->
    <div
      class="text-black text-center font-poppins text-[20px] font-bold leading-[30px] tracking-[-0.38px]"
    >
      <NuxtLink to="/" class="cursor-pointer">
        <img src="../Logo.svg" alt="Logo" />
      </NuxtLink>
    </div>
    <!-- Search Bar -->
    <div
      class="flex items-center justify-between h-[48px] p-[12px] px-[16px] flex-[1_0_0] self-stretch rounded-[16px] border-[1.5px] border-[#A31D1D] bg-[#FFF5E3] relative"
    >
      <!-- Search Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 aspect-square text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_390_1421)">
          <path
            d="M19.5 9.75C19.5 11.9016 18.8016 13.8891 17.625 15.5016L23.5594 21.4406C24.1453 22.0266 24.1453 22.9781 23.5594 23.5641C22.9734 24.15 22.0219 24.15 21.4359 23.5641L15.5016 17.625C13.8891 18.8062 11.9016 19.5 9.75 19.5C4.36406 19.5 0 15.1359 0 9.75C0 4.36406 4.36406 0 9.75 0C15.1359 0 19.5 4.36406 19.5 9.75ZM9.75 16.5C10.6364 16.5 11.5142 16.3254 12.3331 15.9862C13.1521 15.647 13.8962 15.1498 14.523 14.523C15.1498 13.8962 15.647 13.1521 15.9862 12.3331C16.3254 11.5142 16.5 10.6364 16.5 9.75C16.5 8.86358 16.3254 7.98583 15.9862 7.16689C15.647 6.34794 15.1498 5.60382 14.523 4.97703C13.8962 4.35023 13.1521 3.85303 12.3331 3.51381C11.5142 3.17459 10.6364 3 9.75 3C8.86358 3 7.98583 3.17459 7.16689 3.51381C6.34794 3.85303 5.60382 4.35023 4.97703 4.97703C4.35023 5.60382 3.85303 6.34794 3.51381 7.16689C3.17459 7.98583 3 8.86358 3 9.75C3 10.6364 3.17459 11.5142 3.51381 12.3331C3.85303 13.1521 4.35023 13.8962 4.97703 14.523C5.60382 15.1498 6.34794 15.647 7.16689 15.9862C7.98583 16.3254 8.86358 16.5 9.75 16.5Z"
            fill="#A31D1D"
          />
        </g>
      </svg>

      <!-- Search Input -->
      <input
        type="text"
        v-model="searchText"
        placeholder="Explore a variety of designs and products"
        class="flex-1 p-[12px] pl-10 pr-10  outline-none placeholder-[#B24343]  text-[#B24343] "
      />

      <!-- Close (X) Icon (Appears When Typing) -->
      <svg
        v-if="searchText.length > 0"
        @click="clearInput"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        class=" w-6 h-6 aspect-square absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
      >
        <g clip-path="url(#clip0_424_4598)">
          <path
            d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM8.20312 8.20312C8.64375 7.7625 9.35625 7.7625 9.79219 8.20312L11.9953 10.4062L14.1984 8.20312C14.6391 7.7625 15.3516 7.7625 15.7875 8.20312C16.2234 8.64375 16.2281 9.35625 15.7875 9.79219L13.5844 11.9953L15.7875 14.1984C16.2281 14.6391 16.2281 15.3516 15.7875 15.7875C15.3469 16.2234 14.6344 16.2281 14.1984 15.7875L11.9953 13.5844L9.79219 15.7875C9.35156 16.2281 8.63906 16.2281 8.20312 15.7875C7.76719 15.3469 7.7625 14.6344 8.20312 14.1984L10.4062 11.9953L8.20312 9.79219C7.7625 9.35156 7.7625 8.63906 8.20312 8.20312Z"
            fill="#A31D1D"
          />
        </g>
        <defs>
          <clipPath id="clip0_424_4598">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <!-- <div class="flex justify-start items-center">
      <div
        data-status="Default"
        class="px-4 py-2.5 flex justify-center items-center gap-1"
      >
        <div
          class="text-center justify-start text-red-800 text-lg font-medium font-['Poppins'] leading-relaxed"
        >
          Home
        </div>
      </div>
      <div
        data-status="Clicked"
        class="px-4 py-2.5 border-b-[3px] border-red-800 flex justify-center items-center gap-1"
      >
        <div
          class="text-center justify-start text-red-800 text-lg font-semibold font-['Poppins'] leading-relaxed"
        >
          Marketplace
        </div>
      </div>
    </div> -->

    <div class="flex justify-start items-center ">
      <NuxtLink
        to="/"
        class="px-4 py-2.5 flex justify-center items-center gap-1 transition-all duration-300 hover:bg-orange-100 hover:rounded-full"
      >
        <div
          class="text-center justify-start text-red-800 text-lg font-medium font-['Poppins'] leading-relaxed "
        >
          Home
        </div>
      </NuxtLink>

      <!-- Marketplace -->
      <NuxtLink
        to="/market"
        class="px-4 py-2.5 flex justify-center items-center gap-1 border-b-[3px] border-red-800 transition-all duration-300 hover:bg-orange-100 hover:rounded-full"
      >
        <div
          class="text-center justify-start text-red-800 text-lg font-semibold font-['Poppins'] leading-relaxed"
        >
          Marketplace
        </div>
      </NuxtLink>
    </div>
    <!-- New Heart Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-[28px] h-[28px] flex-shrink-0 fill-[#A31D1D] cursor-pointer"
      viewBox="0 0 28 25"
      fill="none"
    >
      <path
        d="M12.3484 23.6047L12.2117 23.4789L2.63047 14.5812C0.951562 13.0226 0 10.8351 0 8.54374V8.36327C0 4.51327 2.73438 1.21014 6.51875 0.488268C8.67344 0.0726432 10.8773 0.570299 12.6328 1.80624C13.125 2.15624 13.5844 2.56092 14 3.02577C14.2297 2.76327 14.4758 2.52264 14.7383 2.29842C14.9406 2.12342 15.1484 1.95936 15.3672 1.80624C17.1227 0.570299 19.3266 0.0726433 21.4812 0.4828C25.2656 1.20467 28 4.51327 28 8.36327V8.54374C28 10.8351 27.0484 13.0226 25.3695 14.5812L15.7883 23.4789L15.6516 23.6047C15.2031 24.0203 14.6125 24.2555 14 24.2555C13.3875 24.2555 12.7969 24.0258 12.3484 23.6047ZM13.0758 5.92968C13.0539 5.91327 13.0375 5.89139 13.0211 5.86952L12.0477 4.77577L12.0422 4.7703C10.7789 3.35389 8.87031 2.70858 7.01094 3.06405C4.4625 3.55077 2.625 5.77108 2.625 8.36327V8.54374C2.625 10.1023 3.27578 11.5953 4.41875 12.6562L14 21.5539L23.5813 12.6562C24.7242 11.5953 25.375 10.1023 25.375 8.54374V8.36327C25.375 5.77655 23.5375 3.55077 20.9945 3.06405C19.1352 2.70858 17.2211 3.35936 15.9633 4.7703C15.9633 4.7703 15.9633 4.7703 15.9578 4.77577C15.9523 4.78124 15.9578 4.77577 15.9523 4.78124L14.9789 5.87499C14.9625 5.89686 14.9406 5.91327 14.9242 5.93514C14.6781 6.18124 14.3445 6.31796 14 6.31796C13.6555 6.31796 13.3219 6.18124 13.0758 5.93514V5.92968Z"
        fill="#A31D1D"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-[28px] h-[28px] flex-shrink-0 fill-[#A31D1D] cursor-pointer"
      viewBox="0 0 32 28"
      fill="none"
    >
      <g clip-path="url(#clip0_390_1429)">
        <path
          d="M0.271484 1.11117C0.271484 0.372276 0.865929 -0.222168 1.60482 -0.222168H4.1326C5.35482 -0.222168 6.43815 0.488943 6.94371 1.55561H29.777C31.2381 1.55561 32.3048 2.9445 31.9215 4.35561L29.6437 12.8167C29.1715 14.5612 27.5882 15.7778 25.7826 15.7778H9.75482L10.0548 17.3612C10.177 17.9889 10.727 18.4445 11.3659 18.4445H27.3826C28.1215 18.4445 28.7159 19.0389 28.7159 19.7778C28.7159 20.5167 28.1215 21.1112 27.3826 21.1112H11.3659C9.44371 21.1112 7.79371 19.7445 7.43815 17.8612L4.57148 2.80561C4.5326 2.5945 4.34926 2.4445 4.1326 2.4445H1.60482C0.865929 2.4445 0.271484 1.85005 0.271484 1.11117ZM7.3826 25.5556C7.3826 24.8484 7.66354 24.1701 8.16364 23.67C8.66373 23.1699 9.34202 22.8889 10.0493 22.8889C10.7565 22.8889 11.4348 23.1699 11.9349 23.67C12.435 24.1701 12.7159 24.8484 12.7159 25.5556C12.7159 26.2629 12.435 26.9411 11.9349 27.4412C11.4348 27.9413 10.7565 28.2223 10.0493 28.2223C9.34202 28.2223 8.66373 27.9413 8.16364 27.4412C7.66354 26.9411 7.3826 26.2629 7.3826 25.5556ZM26.0493 22.8889C26.7565 22.8889 27.4348 23.1699 27.9349 23.67C28.435 24.1701 28.7159 24.8484 28.7159 25.5556C28.7159 26.2629 28.435 26.9411 27.9349 27.4412C27.4348 27.9413 26.7565 28.2223 26.0493 28.2223C25.342 28.2223 24.6637 27.9413 24.1636 27.4412C23.6635 26.9411 23.3826 26.2629 23.3826 25.5556C23.3826 24.8484 23.6635 24.1701 24.1636 23.67C24.6637 23.1699 25.342 22.8889 26.0493 22.8889Z"
          fill="#A31D1D"
        />
      </g>
    </svg>
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
          class="p-[14px] px-[18px] rounded-[16px] bg-[#A31D1D] shadow-[0px_0px_4px_rgba(0,0,0,0.50)] text-[#ECDCBF] text-center font-[Poppins] text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer"
        >
          Sign up
        </button>
      </NuxtLink>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';

const searchText = ref('');

const clearInput = () => {
  searchText.value = '';
};
</script>
