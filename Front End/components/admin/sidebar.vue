<script setup>
    const isCollapsed = ref(false)
    
    const toggleState = () => {
      isCollapsed.value = !isCollapsed.value;
    }
</script>

<template>
  <!-- sidebar -->
  <div
    :class="['h-screen bg-red-900 p-4 pt-6 flex flex-col items-start justify-between transition-all duration-300 relative',
      isCollapsed ? 'w-[7%]' : 'w-[15%]'
    ]"
  >
  <!-- close icon -->
    <div
    @click="toggleState"
      class="border-3 border-red-900 rounded-[35px] w-8 h-8 absolute right-[-10px] flex justify-center items-center bg-orange-100 cursor-pointer"
    >
      <i :class="['fa-solid  text-red-900',
        isCollapsed ? 'fa-angle-right' : 'fa-angle-left'
      ]"></i>
    </div>

    <div class="flex flex-col gap-10">
      <!-- logo -->
      <div class="flex justify-center items-center w-13 h-13">
        <img src="~/assets/Light_Logo.svg" class="w-12 h-11" />
      </div>
      <!-- <img src="/Dashboard-light.svg" class="w-10 h-10" /> -->
      <!-- main -->
      <div class="flex flex-col gap-1">
        <!-- dashboard -->
        <AdminPageRoutes
          path="/admin/dashboard"
          baseIcon="/admin/Dashboard-light.svg"
          activeIcon="/admin/Dashboard-fill.svg"
          title="Dashboard"
          :collapsed="isCollapsed"
        />

        <!-- users -->
        <AdminPageRoutes
          path="/admin/users"
          baseIcon="/admin/user.svg"
          activeIcon="/admin/user-fill.svg"
          title="User"
          :collapsed="isCollapsed"
        />

        <!-- orders -->
        <AdminPageRoutes
          path="/admin/orders"
          baseIcon="/admin/orders.svg"
          activeIcon="/admin/orders-fill.svg"
          title="Order"
          :collapsed="isCollapsed"
        />

        <!-- designs -->
        <AdminPageRoutes
          path="/admin/designs"
          baseIcon="/admin/designs.svg"
          activeIcon="/admin/designs-fill.svg"
          title="Design"
          :collapsed="isCollapsed"
        />

        <!-- products -->
        <AdminPageRoutes
          path="/admin/products"
          baseIcon="/admin/products.svg"
          activeIcon="/admin/products-fill.svg"
          title="Product"
          :collapsed="isCollapsed"
        />
      </div>
    </div>

    <!-- LOG OUT -->
    <AdminPageRoutes path="/" baseIcon="/admin/Log out.svg" title="Log out"  :collapsed="isCollapsed">
    </AdminPageRoutes>
  </div>
</template>
