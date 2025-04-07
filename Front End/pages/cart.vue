<template>
  <!-- Empty Cart Section -->
  <div
    v-if="cartItems.length === 0"
    class="w-full h-screen flex items-center justify-center "
  >
    <div class="flex flex-col items-center justify-center gap-4">
      <img src="../assets/empty-cart.png" class="lg:w-48 w-32 lg:h-48 h-32" />

      <div class="flex flex-col items-center justify-center lg:gap-1 gap-2">
        <P class="text-black lg:text-xl text-sm font-medium leading-loose">
          The shopping cart is empty now.
        </P>
        <NuxtLink
          to="/market"
          class="cursor-pointer lg:px-6 px-3.5 lg:py-2 py-[5px] text-red-800 lg:text-lg text-xs font-bold leading-relaxed"
        >
          Go Shopping
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Cart Section -->
  <div
    v-else
    class="lg:ml-[120px] ml-[20px] md:ml[70px] lg:mr-[120px] mr-[20px] md:mr[70px] pt-10 lg:pb-20 pb-14 flex flex-col lg:gap-8 gap-6  justify-start items-start"
  >
    <SectionTitle title="Cart" />

    <div class="flex lg:flex-row flex-col gap-8 w-full md:flex-row">
      <div
        class="flex flex-col lg:w-[650px] w-96 justify-start items-start lg:pb-0 pb-8 lg:border-none border-b-2 border-red-800"
      >
        <!-- Cart Items -->
        <CartItems
          :items="cartItems"
          @remove="removeItem"
          @increase="increaseQuantity"
          @decrease="decreaseQuantity"
        />
      </div>

      <div class="flex flex-col items-center">
        <!-- Summary Section -->
        <CartSummary
          :total-items="totalItems"
          :total-price="totalPrice"
          @checkout="checkout"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "market",
});

import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);
const totalPrice = computed(() => cartStore.totalPrice);
const totalItems = computed(() => cartStore.totalItems);

const removeItem = (id) => {
  cartStore.removeItem(id);
};

const increaseQuantity = (item) => {
  cartStore.addItem(item, 1);
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.addItem(item, -1);
  }
};

const checkout = () => {
  alert('Proceeding to checkout... (Stripe payment integration)');
  cartStore.clearCart();
};
</script>
