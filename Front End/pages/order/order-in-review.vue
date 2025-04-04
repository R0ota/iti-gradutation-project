<script setup>
import TrackBreak from "~/components/order/track-break.vue";
import fileSearch from "@/assets/file-search.png";
import print from "@/assets/print.png";
import deliveryTruck from "@/assets/delivery-truck.png";
definePageMeta({
  layout: "order",
});
</script>

<template>
  <div
    class="lg:ml-[120px] ml-[50px] lg:mr-[120px] mr-50px pt-10 pb-20 flex flex-col justify-start items-start gap-10"
  >
    <SectionTitle title="Ongoing Order" />
    <div class="w-full flex items-center justify-center gap-4">
      <OrderTrack
        currentStatus="In Review"
        finalStatus="Reviewed"
        :img="fileSearch"
      />
      <TrackBreak />
      <OrderTrack
        currentStatus="In Printing"
        finalStatus="Printing"
        :img="print"
      />
      <TrackBreak />
      <OrderTrack
        currentStatus="In Delivery"
        finalStatus="Delivery"
        :img="deliveryTruck"
      />
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
           <OrderInvoice info="Order Date" detailes="05/05/2025"/>
           <OrderInvoice info="Delivery Date" details="25/05/2025"/>
          </div>
          <!-- line break -->
          <div class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"></div>

          <div class="flex flex-col gap-2 w-full">
            <OrderInvoice info="Address Line 1" detailes="Port Said - Al-Ahya District, Building 14, Selim Al-Ansari Street"/>
           <OrderInvoice info="Phone Number" details="+20120001662"/>
          </div>
          <!-- line break -->
          <div class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"></div>

          <div class="flex flex-col gap-2 w-full">
            <OrderInvoice info="5 items" detailes="650 EGP"/>
           <OrderInvoice info="Standard Shipping" details="250 EGP"/>
          </div>
            <!-- line break -->
            <div class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"></div>
            <div class="p-4 bg-orange-100 inline-flex justify-between items-center w-full">
              <p class="text-red-800 text-lg font-bold font-['Poppins']">Total Payment</p>
              <p class="text-red-800 text-lg font-bold font-['Poppins']">900 EGP</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
