<template>
  <div
    class="h-screen w-[20%] bg-red-900 p-8 flex flex-col items-start justify-between relative"
  >
    <div
      class="border-3 border-red-900 rounded-[35px] w-8 h-8 absolute right-[-10px] flex justify-center items-center bg-orange-100 cursor-pointer"
    >
      <i class="fa-solid fa-angle-left text-red-900"></i>
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
        />

        <!-- users -->
        <AdminPageRoutes
          path="/admin/users"
          baseIcon="/admin/user.svg"
          activeIcon="/admin/user-fill.svg"
          title="Users"
        />

        <!-- orders -->
        <AdminPageRoutes
          path="/admin/orders"
          baseIcon="/admin/orders.svg"
          activeIcon="/admin/orders-fill.svg"
          title="Orders"
        />

        <!-- designs -->
        <AdminPageRoutes
          path="/admin/designs"
          baseIcon="/admin/designs.svg"
          activeIcon="/admin/designs-fill.svg"
          title="Designs"
        />

        <!-- products -->
        <AdminPageRoutes
          path="/admin/products"
          baseIcon="/admin/products.svg"
          activeIcon="/admin/products-fill.svg"
          title="Products"
        />
      </div>
    </div>

    <!-- LOG OUT -->
    <AdminPageRoutes path="/" baseIcon="/admin/Log out.svg" title="Log out">
    </AdminPageRoutes>
  </div>
</template>
