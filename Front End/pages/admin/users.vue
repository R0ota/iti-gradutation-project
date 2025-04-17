<script setup>
definePageMeta({
  layout: "admin",
});


const users = ref([
  {
    id: "M2",
    username: "Mohamed10",
    fullname: "Mohamed Eldesouky",
    email: "mohamed@gmail.com",
    role: "User",
    data: "20/8/2024",
    status: "Active",
    
  },
  {
    id: "N1",
    username: "Nour22",
    fullname: "Nourhan Ali",
    email: "nour@gmail.com",
    role: "User",
    data: "22/2/2022",
    status: "Suspended",
    
  },
  {
    id: "R3",
    username: "Reham30",
    fullname: "Reham Mohamed",
    email: "reham@gmail.com",
    role: "User",
    data: "25/2/2025",
    status: "Active",
    
  },
  {
    id: "S5",
    username: "Sayed50",
    fullname: "Sayed Khalil",
    email: "sayed@gmail.com",
    role: "User",
    data: "12/2/2025",
    status: "Suspended",
    
  },
  {
    id: "A7",
    username: "Ahmed70",
    fullname: "Ahmed Adel",
    email: "ahmed@gmail.com",
    role: "User",
    data: "02/04/2025",
    status: "Suspended",
    
  },
]);

const statusClass = (status) => {
  switch (status) {
    case "Active":
        return "bg-[#CCFFCC] text-[#01D001]";
    case "Suspended":
        return "bg-[#FFBFBC] text-[#D60000] py-1";
  }
};



// style thead & tbody
const headClasses = `flex-1/2 py-1 px-1.5 text-red-900 font-semibold font-['Poppins'] text-lg w-full`;

const bodyClasses = `flex-1/2 text-center py-1 px-1.5 text-black font-['Poppins'] font-medium text-sm w-full`;

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
    selectedRows.value = users.value.map((user) => user.id);
  }
  selectAll.value = !selectAll.value;
};

// delete one
const deleteUser = (id) => {
  const index = users.value.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.value.splice(index, 1);
  }
  selectedRows.value = selectedRows.value.filter((i) => i !== id);
};

// delete all
const deleteAll = () => {
  selectedRows.value.forEach((id) => {
    const index = users.value.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.value.splice(index, 1);
    }
  });

  selectedRows.value = [];
  selectAll.value = false;
};

</script>

<template>
  <div class="flex flex-col gap-8 m-[30px] w-[77%]">
    <!-- header -->
    <div class="flex items-center justify-between w-full">
      <AdminTitle route="Users"/>
      <div class="w-[40%]">
        <Search search="Find the user you looking for"/>
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
          <th :class="headClasses">User ID</th>
          <th :class="headClasses">Username</th>
          <th :class="headClasses">Full Name</th>
          <th :class="headClasses">Email</th>
          <th :class="headClasses">Role</th>
          <th :class="headClasses">Date Added</th>
          <th :class="headClasses">Status</th>
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
          v-for="user in users"
          :key="user.id"
          class="py-1 flex items-center gap-2 justify-between w-full"
        >
          <!-- check icon -->
          <td>
            <i
              @click="toggleSelect(user.id)"
              class="text-black w-4 h-4 cursor-pointer"
              :class="
                selectedRows.includes(user.id)
                  ? 'fa-solid fa-square-check'
                  : 'fa-regular fa-square-full'
              "
            ></i>
          </td>
          <td :class="bodyClasses">#{{ user.id }}</td>
          <td :class="bodyClasses">{{ user.username }}</td>
          <td :class="bodyClasses">{{ user.fullname }}</td>
          <td :class="bodyClasses">{{ user.email }}</td>
          <td :class="bodyClasses">{{ user.role }}</td>
          <td :class="bodyClasses">{{ user.data }}</td>
          <td class="flex-1/2 text-center px-2 py-1">
            <!-- dropdown -->
            <select
              v-model="user.status"
              :class="[
                'border-none rounded-[20px] text-sm px-2 py-1',
                statusClass(user.status),
              ]"
            >
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
            </select>
          </td>
          
          <!-- delete row -->
          <td class="flex-1">
            <i
              @click="deleteUser(user.id)"
              class="fa-solid fa-trash text-red-900 cursor-pointer"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
