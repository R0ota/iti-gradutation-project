<template>
  <div class="w-full">
    <CartItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @remove="$emit('remove', $event)"
      @increase="$emit('increase', $event)"
      @decrease="$emit('decrease', $event)"
    />
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
});

defineEmits(['remove', 'increase', 'decrease']);
</script>
