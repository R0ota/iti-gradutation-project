<script setup>
 const congratulationBlock = ref(false);

 watch(congratulationBlock, (newVal) => {
  document.body.classList.toggle('overflow-hidden', newVal);
});

</script>

<template>
     <div class="w-full h-screen flex items-center justify-center left-0 top-0 absolute bg-zinc-600/70">
    <!-- block -->
    <div class="px-6 py-11  bg-orange-50 lg:rounded-[42.35px] rounded-[40px] flex flex-col justify-center items-center gap-6 lg:w-[40%]  w-[80%]">
      <div class="flex flex-col gap-4  items-center justify-centers w-96">
        <img src="~/assets/party-popper 1.png" class="lg:w-44 w-32 lg:h-44 w-32">
          <p class="text-red-800 lg:text-4xl text-2xl font-bold font-['Poppins']">Congratulation</p>
          <p class="text-black text-base text-center font-medium font-['Poppins'] lg:w-full w-[70%]">Your order has been received, Enjoy your experience with Tabi, 
            and we look forward to your next order!</p>
        <!-- order details -->
        <NuxtLink 
        to="/"
        @click="$emit('scroll')"
          class="flex items-center justify-center cursor-pointer text-orange-50 lg:text-xl text-lg font-bold font-['Poppins'] lg:px-8 px-14 py-4 bg-red-800 rounded-2xl shadow-[0px_0px_4.235293865203857px_0px_rgba(0,0,0,0.25)]">
          Home
          </NuxtLink>
      </div>
    </div>
  </div>
</template>