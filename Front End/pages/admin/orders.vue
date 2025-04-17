<script setup>
definePageMeta({
  layout: "admin",
});

const orders = ref([
  {
    id: "M1",
    username: "Mohamed10",
    product: "Mug",
    design: "Flower lorem",
    total: "200 EGP",
    date: "20/8/2024",
    status: "Reviewing",
    approved: "false",
    rejected: "false",
  },
  {
    id: "N2",
    username: "nour",
    product: "Shirt",
    design: "Flower lorem",
    total: "200 EGP",
    date: "2/8/2024",
    status: "Printing",
    approved: "true",
    rejected: "false",
  },
  {
    id: "R3",
    username: "reham",
    product: "board",
    design: "Flower lorem",
    total: "200 EGP",
    date: "20/8/2024",
    status: "Rejected",
    approved: "false",
    rejected: "true",
  },
  {
    id: "S4",
    username: "Sayed",
    product: "Mug",
    design: "Flower lorem",
    total: "200 EGP",
    date: "20/8/2024",
    status: "Delivering",
    approved: "true",
    rejected: "false",
  },
  {
    id: "A5",
    username: "Ali",
    product: "Mug",
    design: "Flower",
    total: "200 EGP",
    date: "20/8/2024",
    status: "Completed",
    approved: "true",
    rejected: "false",
  },
]);

const statusClass = (status) => {
  switch (status) {
    case "Reviewing":
      return "bg-[#E2E2E2] text-[#878787]";
    case "Printing":
      return "bg-[#BEDAFF] text-[#0045BD]";
    case "Rejected":
      return "bg-[#FFBFBC] text-[#D60000]";
    case "Delivering":
      return "bg-[#FFE2AF] text-[#E17500]";
    case "Completed":
      return "bg-[#CCFFCC] text-[#01D001]";
  }
};

// style thead & tbody
const headClasses = `flex-1/2 py-1 px-1.5 text-red-900 font-semibold text-lg w-full`;

const bodyClasses = `flex-1/2 text-center py-1 px-1.5 text-black font-medium text-sm w-full`;

import { ref, computed } from "vue";

const selectedRows = ref([]);
const selectAll = ref(false);

const isSelect = computed(() => selectedRows.value.length > 0);

// select one
const toggleSelect = (id) => {
  if (selectedRows.value.includes(id)) {
    selectedRows.value = selectedRows.value.filter((i) => i !== id);
  } else {
    selectedRows.value.push(id);
  }
};

// select all
const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedRows.value = [];
  } else {
    selectedRows.value = orders.value.map((order) => order.id);
  }
  selectAll.value = !selectAll.value;
};

// delete one
const deleteOrder = (id) => {
  const index = orders.value.findIndex((order) => order.id === id);
  if (index !== -1) {
    orders.value.splice(index, 1);
  }
  selectedRows.value = selectedRows.value.filter((i) => i !== id);
};

// delete all
const deleteAll = () => {
  selectedRows.value.forEach((id) => {
    const index = orders.value.findIndex((order) => order.id === id);
    if (index !== -1) {
      orders.value.splice(index, 1);
    }
  });

  selectedRows.value = [];
  selectAll.value = false;
};

// update status
const updateStatus = (orderId, newStatus) => {
  const order = orders.value.find((order) => order.id === orderId);
  if (order) {
    order.status = newStatus;
  }
};
</script>

<template>
  <div class="flex flex-col gap-8 m-[30px] w-[77%]">
    <!-- header -->
    <div class="flex items-center justify-between w-full">
      <AdminTitle route="Orders" />
      <div class="w-[40%]">
        <Search />
      </div>
    </div>

    <!-- table data -->
    <table class="flex flex-col gap-4 w-full">
      <thead>
        <tr
          class="flex items-center justify-between gap-2 py-2 border-b-2 border-red-900"
        >
          <!-- select icon -->
          <th>
            <i
              @click="toggleSelectAll"
              class="text-black w-4 h-4 cursor-pointer"
              :class="
                isSelect
                  ? 'fa-solid fa-square-check'
                  : 'fa-regular fa-square-full'
              "
            >
            </i>
          </th>
          <th :class="headClasses">Order ID</th>
          <th :class="headClasses">Username</th>
          <th :class="headClasses">ProductType</th>
          <th :class="headClasses">Design Title</th>
          <th :class="headClasses">Total Cost</th>
          <th :class="headClasses">Order Date</th>
          <th :class="headClasses">ٍStatus</th>
          <th :class="headClasses">Action</th>
          <!-- delete all -->
          <th class="w-6 h-6 text-white py-1 px-1.5">
            <i
              v-if="isSelect"
              @click="deleteAll"
              class="fa-solid fa-trash text-red-900 cursor-pointer"
            ></i>
          </th>
        </tr>
      </thead>

      <tbody class="w-full">
        <tr
          v-for="order in orders"
          :key="order.id"
          class="py-1 flex items-center gap-2 justify-between w-full"
        >
          <!-- check icon -->
          <td>
            <i
              @click="toggleSelect(order.id)"
              class="text-black w-4 h-4 cursor-pointer"
              :class="
                selectedRows.includes(order.id)
                  ? 'fa-solid fa-square-check'
                  : 'fa-regular fa-square-full'
              "
            ></i>
          </td>
          <td :class="bodyClasses">#{{ order.id }}</td>
          <td :class="bodyClasses">{{ order.username }}</td>
          <td :class="bodyClasses">{{ order.product }}</td>
          <td :class="bodyClasses">{{ order.design }}</td>
          <td :class="bodyClasses">{{ order.total }}</td>
          <td :class="bodyClasses">{{ order.date }}</td>
          <td class="flex-1/2 text-center px-2 py-1">
            <!-- span state -->
            <span
              v-if="order.status === 'Reviewing' || order.status === 'Rejected'"
              class="flex-1/2 text-center flex gap-1 items-center rounded-[20px] justify-center font-medium text-sm px-2 py-1"
              :class="statusClass(order.status)"
            >
              {{ order.status }}
            </span>

            <!-- dropdown -->
            <select
              v-else
              v-model="order.status"
              :class="[
                'border-none rounded-[20px] text-sm px-2 py-1',
                statusClass(order.status),
              ]"
            >
              <option value="Printing">Printing</option>
              <option value="Delivering">Delivering</option>
              <option value="Completed">Completed</option>
            </select>
          </td>
          <!-- action btns-->
          <td class="flex-1/2 py-1 flex justify-center items-left gap-2">
            <button
              v-if="
                order.status === 'Reviewing' ||
                order.status === 'Printing' ||
                order.status === 'Delivering' ||
                order.status === 'Completed'
              "
              @click="
                updateStatus(order.id, 'Printing');
                order.approved = true;
              "
              class="bg-green-200 text-green-600 text-sm px-2 py-1 text-center rounded-[20px] cursor-pointer"
            >
              Approve
            </button>

            <button
              v-if="order.status === 'Reviewing' || order.status === 'Rejected'"
              @click="
                updateStatus(order.id, 'Rejected');
                order.rejected = true;
              "
              class="bg-[#FFBFBC] text-red-900 font-medium text-sm px-2 py-1 text-center rounded-[20px] cursor-pointer"
            >
              Reject
            </button>
          </td>
          <!-- delete row -->
          <td class="flex-1">
            <i
              @click="deleteOrder(order.id)"
              class="fa-solid fa-trash text-red-900 cursor-pointer"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
