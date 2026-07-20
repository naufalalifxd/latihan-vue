<template>
  <div class="user-container">
    <h2>Daftar Pengguna</h2>
    
    <div v-if="loading">Memuat data...</div>
    
    <ul v-else class="user-list">
      <li 
        v-for="user in users" 
        :key="user.id" 
        class="user-card"
      >
        <img :src="user.avatar" alt="Avatar" class="avatar" />
        <div class="info">
          <p class="name">{{ user.first_name }} {{ user.last_name }}</p>
          <p class="email">{{ user.email }}</p>
        </div>
        <!-- Navigasi ke Halaman Detail -->
        <router-link :to="'/user/' + user.id" class="btn-detail">
          Lihat Detail
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('https://reqres.in/api/users')
    users.value = res.data.data
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.user-container { max-width: 600px; margin: 0 auto; padding: 1rem; }
.user-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.user-card { display: flex; align-items: center; gap: 12px; padding: 10px; border: 1px solid #ccc; border-radius: 8px; }
.avatar { width: 50px; height: 50px; border-radius: 50%; }
.info { flex-grow: 1; }
.name { font-weight: bold; margin: 0; }
.email { font-size: 0.85rem; color: #666; margin: 0; }
.btn-detail { background-color: #3b82f6; color: white; padding: 6px 12px; border-radius: 4px; text-decoration: none; font-size: 0.85rem; }
.btn-detail:hover { background-color: #2563eb; }
</style>