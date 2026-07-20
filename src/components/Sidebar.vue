<template>
  <aside class="bg-gray-100 w-full md:w-60 min-h-screen p-6 shadow">
    <nav class="space-y-4">
      <p class="text-xs font-bold text-gray-400 uppercase">Menu Utama</p>
      <RouterLink to="/" class="block hover:text-blue-600 font-medium">Home</RouterLink>
      <RouterLink to="/about" class="block hover:text-blue-600 font-medium">About</RouterLink>
      
      <hr class="border-gray-300 my-2" />
      
      <p class="text-xs font-bold text-gray-400 uppercase">Integrasi API</p>
      <RouterLink to="/users" class="block hover:text-blue-600 font-medium">Daftar Users (GET)</RouterLink>
      <RouterLink to="/create-user" class="block hover:text-blue-600 font-medium">Tambah User (POST)</RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>