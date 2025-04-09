<template>
  <div class="flex lg:gap-6 gap-1 w-full items-start w-[100%]">
    <!-- <ProductData item.image=""/> -->

    <div class="flex lg:gap-6 gap-2 w-full">
      <img class="lg:w-35 w-25 lg:h-35 h-25 bg-[#CDB17E] rounded-2xl" />
      <div class="flex flex-col justify-between py-1 w-full">
        <div class="flex flex-col lg:gap-1 gap-0.5">
          <p class="text-red-800 lg:text-xl text-sm font-bold ">
            Product name:
          </p>
          <p class="text-black lg:text-sm font-xs font-medium">
            Type:
          </p>
          <p class="text-black lg:text-sm font-xs font-medium ">
            Size:
          </p>
        </div>
        <p class="text-black lg:text-lg text-sm font-bold">
          Price EGP
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-2 w-[45%]">
      <div class="flex lg:flex-row flex-col justify-between items-center w-full">
        <p class="text-red-800 lg:text-xl text-sm lg:font-extrabold font-bold">Quantity</p>
        <p class="text-black text-sm lg:font-bold font-semibold ">10</p>
      </div>
      <div class="flex lg:flex-row flex-col justify-between items-center w-full">
        <p class="text-red-800 lg:text-2xl text-sm font-extrabold font-['Poppins'] ">
          Total Price
        </p>
        <p class="text-black text-sm  lg:font-bold font-semibold text-right ">
          1200 EGP
        </p>
      </div>
    </div>
  </div>
</template>
