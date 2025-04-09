<script setup>
import TrackBreak from "~/components/order/track-break.vue";
import fileSearch from "@/assets/file-search.png";
import print from "@/assets/print.png";
import deliveryTruck from "@/assets/delivery-truck.png";
import printFill from "@/assets/print-fill.png"
import deliveryTruckFill from "@/assets/delivery-truck-fill.png";
definePageMeta({
  layout: "order",
});

const currentStep = ref(0);

const goToNextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++;
  }
};

const isFinalClicked = ref(false);
const congratulationBlock = ref(false);
const handleFinalClick = () => {
  if (currentStep.value === 2) {
    isFinalClicked.value = true;
    congratulationBlock.value = true;
  }
};

watch(congratulationBlock, (newVal) => {
  document.body.classList.toggle('overflow-hidden', newVal);
});

</script>

<template>
  <div
    class="relative lg:ml-[120px] ml-[25px] lg:mr-[120px] mr-[25px] pt-10 pb-20 flex flex-col justify-start items-start gap-10"
  >
    <SectionTitle title="Ongoing Order" />
    <div class="w-full flex items-center justify-center gap-4">
      <div @click="currentStep === 0 && goToNextStep()">
        <OrderTrack
          currentStatus="In Review"
          finalStatus="Reviewed"
          :currentImg="fileSearch"
          :finalImg="fileSearch"
          :isActive="currentStep === 0"
          :isDisabled="currentStep !== 0 && !isFinalClicked"
          :isDone="currentStep > 0"
          :isFinalClicked="isFinalClicked"
        />
      </div>

      <TrackBreak />
      <div @click="currentStep === 1 && goToNextStep()">
        <OrderTrack
          currentStatus="In Printing"
          finalStatus="Printing"
          :currentImg="print"
          :finalImg="printFill"
          :isActive="currentStep === 1"
          :isDisabled="currentStep !== 1 && !isFinalClicked"
          :isDone="currentStep > 1"
          :isFinalClicked="isFinalClicked"
        />
      </div>

      <TrackBreak />
      <div @click="handleFinalClick">
        <OrderTrack
          currentStatus="In Delivery"
          finalStatus="Delivery"
          :currentImg="deliveryTruck"
          :finalImg="deliveryTruckFill"
          :isActive="currentStep === 2"
          :isDisabled="currentStep !== 2"
          :isDone="isFinalClicked"
          :isFinalClicked="isFinalClicked"
        />
      </div>
    </div>

    <div class="w-full flex flex-wrap justify-between">
      <div class="w-[680px] flex flex-col gap-6">
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
      </div>

      <div
        class="w-80 px-4 py-10 bg-gradient-to-br from-red-800 to-red-950 rounded-[32px] flex flex-col justify-start items-start gap-6"
      >
        <div
          class="px-6 border-l-[6px] border-orange-100 inline-flex justify-center items-center gap-2.5"
        >
          <div
            class="justify-start text-orange-100 text-2xl font-bold font-['Poppins']"
          >
            Order Invoice
          </div>
        </div>

        <div class="flex flex-col items-center gap-4 w-full">
          <div class="flex flex-col gap-2 w-full">
            <OrderInvoice info="Order Date" detailes="05/05/2025" />
            <OrderInvoice info="Delivery Date" details="25/05/2025" />
          </div>
          <!-- line break -->
          <div
            class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"
          ></div>

          <div class="flex flex-col gap-2 w-full">
            <OrderInvoice
              info="Address Line 1"
              detailes="Port Said - Al-Ahya District, Building 14, Selim Al-Ansari Street"
            />
            <OrderInvoice info="Phone Number" details="+20120001662" />
          </div>
          <!-- line break -->
          <div
            class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"
          ></div>

          <div class="flex flex-col gap-2 w-full">
            <OrderInvoice info="5 items" detailes="650 EGP" />
            <OrderInvoice info="Standard Shipping" details="250 EGP" />
          </div>
          <!-- line break -->
          <div
            class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"
          ></div>
          <div
            class="p-4 bg-orange-100 inline-flex justify-between items-center w-full"
          >
            <p class="text-red-800 text-lg font-bold font-['Poppins']">
              Total Payment
            </p>
            <p class="text-red-800 text-lg font-bold font-['Poppins']">
              900 EGP
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- congratulation block -->
  <div :class="[
    congratulationBlock ? 'flex' : 'hidden',
    'w-full h-screen items-center justify-center left-0 top-0 absolute bg-zinc-600/70']">
    <!-- block -->
    <div class="px-6 py-11   bg-orange-50 rounded-[42.35px] flex flex-col justify-center items-center gap-6">
      <div class="flex flex-col gap-4 items-center justify-centers w-96">
        <img src="~/assets/party-popper 1.png" class="w-44 h-44">
        <div class="flex flex-col gap-4 items-center justify-center w-full">
          <p class="text-red-800 text-4xl font-bold font-['Poppins']">Congratulation</p>
          <p class="text-black text-base text-center font-medium font-['Poppins']">Your order has been received, Enjoy your experience with Tabi, 
            and we look forward to your next order!</p>
        </div>
        <!-- order details -->
        <button 
          @click="congratulationBlock = false"
          class="flex items-center justify-center cursor-pointer text-orange-50 text-xl font-bold font-['Poppins'] px-8 py-4 bg-red-800 rounded-2xl shadow-[0px_0px_4.235293865203857px_0px_rgba(0,0,0,0.25)]">
          Oreder Details
        </button>
      </div>
    </div>
  </div>
</template>
