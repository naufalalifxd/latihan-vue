<template>
  <aside class="bg-gray-100 w-full md:w-60 min-h-screen p-6 shadow">
    <nav class="space-y-4">
      <RouterLink to="/" class="block hover:text-blue-600 font-medium">Home</RouterLink>
      <RouterLink to="/about" class="block hover:text-blue-600 font-medium">About</RouterLink>
      <RouterLink to="/contact" class="block hover:text-blue-600 font-medium">Contact</RouterLink>
      <!-- Halaman Baru Tambahan untuk Memenuhi Syarat Tugas -->
      <RouterLink to="/profile" class="block hover:text-blue-600 font-medium">Profile</RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>