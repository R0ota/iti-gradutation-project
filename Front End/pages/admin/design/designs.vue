<script setup>
definePageMeta({
  layout: "admin",
});

const designs = ref([
  {
    id: "2297",
    img: "image",
    title: "Flower",
    category: "Art",
    admin: "User",
    date: "20/8/2024",
    status: "Active",
    
  },
  {
    id: "2972",
    img: "image",
    title: "Flower",
    category: "Art",
    admin: "User",
    date: "20/8/2024",
    status: "Active",
    
  },
  {
    id: "9722",
    img: "image",
    title: "Flower",
    category: "Art",
    admin: "User",
    date: "20/8/2024",
    status: "Active",
    
  },
  {
    id: "7229",
    img: "image",
    title: "Flower",
    category: "Art",
    admin: "User",
    date: "20/8/2024",
    status: "Active",
    
  },
  {
    id: "0101",
    img: "image",
    title: "Flower",
    category: "Art",
    admin: "User",
    date: "20/8/2024",
    status: "Active",
    
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
    selectedRows.value = designs.value.map((design) => design.id);
  }
  selectAll.value = !selectAll.value;
};

// delete one
const deleteUser = (id) => {
  const index = designs.value.findIndex((design) => design.id === id);
  if (index !== -1) {
    designs.value.splice(index, 1);
  }
  selectedRows.value = selectedRows.value.filter((i) => i !== id);
};

// delete all
const deleteAll = () => {
  selectedRows.value.forEach((id) => {
    const index = designs.value.findIndex((design) => design.id === id);
    if (index !== -1) {
      designs.value.splice(index, 1);
    }
  });

  selectedRows.value = [];
  selectAll.value = false;
};

</script>

<template>
  <div class="flex flex-col gap-8 m-[30px] ml-[250px] fixed w-[77%]">
    <!-- header -->
    <div class="flex items-center justify-between w-[100%]">
      <AdminTitle route="Orders" />
      <div class="w-[50%] flex gap-4">
        <Search />
        <AdminUploadBtn type="Design" path="/admin/design/upload-design"/>
      </div>
    </div>

    <!-- table data -->
    <table class="flex flex-col gap-4 w-[100%]">
      <thead class="w-full">
        <tr
          class="flex items-center justify-between gap-2 py-2 border-b-2 border-red-800"
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
          <th :class="headClasses">Design ID</th>
          <th :class="headClasses">Thumbnail</th>
          <th :class="headClasses">Design Title</th>
          <th :class="headClasses">category</th>
          <th :class="headClasses">Admin</th>
          <th :class="headClasses">Date Added</th>
          <th :class="headClasses">Status</th>
          <th class="flex-1 w-4 h-4"></th>
          <!-- delete all -->
          <th class="w-6 h-6 text-white py-1 px-1.5">
            <i
              v-if="isSelect"
              @click="deleteAll"
              class="fa-solid fa-trash text-red-800 cursor-pointer"
            ></i>
          </th>
        </tr>
      </thead>

      <tbody class="w-full">
        <tr
          v-for="design in designs"
          :key="design.id"
          class="py-1 flex items-center gap-2 justify-between w-full"
        >
          <!-- check icon -->
          <td>
            <i
              @click="toggleSelect(design.id)"
              class="text-black w-4 h-4 cursor-pointer"
              :class="
                selectedRows.includes(design.id)
                  ? 'fa-solid fa-square-check'
                  : 'fa-regular fa-square-full'
              "
            ></i>
          </td>
          <td :class="bodyClasses">#{{ design.id }}</td>
          <td :class="bodyClasses">{{ design.img }}</td>
          <td :class="bodyClasses">{{ design.title }}</td>
          <td :class="bodyClasses">{{ design.category }}</td>
          <td :class="bodyClasses">{{ design.admin }}</td>
          <td :class="bodyClasses">{{ design.date }}</td>
          <td class="flex-1/2 text-center px-2 py-1">
            <!-- dropdown -->
            <select
              v-model="design.status"
              :class="[
                'border-none rounded-[20px] text-sm px-2 py-1',
                statusClass(design.status),
              ]"
            >
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
            </select>
          </td>
          <!-- edit -->
          <!-- <td class="w-6 h-6">
            <img src="/admin/editpen.svg" class="w-6 h-6"/>
          </td> -->
          <!-- delete row -->
          <td class="flex-1 flex gap-1 items-center">
            <img src="/admin/editpen.svg" class="w-10 h-10 cursor-pointer"/>
            <i
              @click="deleteUser(design.id)"
              class="fa-solid fa-trash text-red-800 cursor-pointer"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
