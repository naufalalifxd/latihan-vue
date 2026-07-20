<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex flex-col md:flex-row flex-1">
      <Sidebar />
      <main class="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <!-- Slot ini akan diisi secara dinamis oleh konten halaman -->
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
</script>