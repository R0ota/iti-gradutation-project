<script setup>
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div class="flex flex-col gap-8 m-[30px] ml-[250px] w-[80%]">
    <!-- Section title -->
    <SectionTitle title="Dashboard" />

    <!--  Stat Cards Row -->
    <div class="flex gap-6 flex-wrap mt-6">
      <AdminStatCard title="Visitors" :value="1250" />
      <AdminStatCard title="Designs" :value="320" />
      <AdminStatCard title="Total Selling" :value="300000" />
    </div>

    <!--  Revenue Chart + Top Products Row -->
    <div class="flex flex-wrap gap-8 mt-8">
      <AdminRevenueCard />
      <AdminTopSellingProducts />
    </div>
  </div>
</template>
