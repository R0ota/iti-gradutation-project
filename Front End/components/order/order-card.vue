<template>
    <NuxtLink
    to="/order/order-in-review"
      class="lg:w-[533px] w-85 lg:px-6 px-4 lg:py-6 py-3  bg-orange-200 hover:bg-orange-300 cursor-pointer group lg:rounded-[48px] rounded-3xl flex flex-col justify-center items-start "
    >
      <div class="lg:h-44 h-28 inline-flex justify-start items-center lg:gap-4 gap-3 w-full">
        <img src="" class="lg:w-44 w-28 lg:h-44 h-28 bg-yellow-50 lg:rounded-[40px] rounded-3xl" />
        <div
          class="lg:py-2 py-1 lg:h-44 h-28 flex flex-col justify-between items-center w-full"
        >
          <div class="flex flex-col lg:gap-2 gap-0.5 jutify-start items-start w-full">
            <div class="flex justify-between items-center w-full">
              <p
                class="text-neutral-800 group-hover:text-yellow-50 lg:text-lg text-xs lg:font-semibold font-bold font-['Poppins']"
              >
                Order Status
              </p>
              <p
                class="text-neutral-800 group-hover:text-yellow-50 lg:text-lg text-xs lg:font-semibold font-bold font-['Poppins'] "
              >
                Processing
              </p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p
                class="text-neutral-800 group-hover:text-yellow-50 lg:text-lg text-xs lg:font-semibold font-bold font-['Poppins']"
              >
                Quantity
              </p>
              <p
                class="text-neutral-800 group-hover:text-yellow-50 lg:text-lg text-xs lg:font-semibold font-bold font-['Poppins']"
              >
                15 items
              </p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p
                class="text-neutral-800 group-hover:text-yellow-50 lg:text-lg text-xs lg:font-semibold font-bold font-['Poppins']"
              >
                Order Date
              </p>
              <p
                class="text-neutral-800 group-hover:text-yellow-50 lg:text-lg text-xs lg:font-semibold font-bold font-['Poppins']"
              >
                25 / 01 / 2025
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-red-800 lg:text-lg text-xs lg:font-semibold font-bold font-['Poppins']">
              Total Price
            </p>
            <p class="text-red-800 lg:text-lg text-xs lg:font-semibold font-bold font-['Poppins']">
              900 EGP
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
</template>