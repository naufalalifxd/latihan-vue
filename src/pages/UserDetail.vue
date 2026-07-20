<template>
  <div class="detail-container">
    <router-link to="/users" class="btn-back">← Kembali ke Daftar</router-link>
    
    <div v-if="loading" class="mt-4">Memuat detail pengguna...</div>
    
    <div v-else-if="user" class="card-detail">
      <img :src="user.avatar" alt="Avatar" class="avatar-large" />
      <h2>{{ user.first_name }} {{ user.last_name }}</h2>
      <p class="email">{{ user.email }}</p>
      <p class="id-tag">ID Pengguna: {{ user.id }}</p>
    </div>
    
    <div v-else class="mt-4">Data pengguna tidak ditemukan.</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const user = ref(null)
const loading = ref(true)

onMounted(async () => {
  // Mengambil ID secara dinamis dari URL route (misal: /user/2)
  const userId = route.params.id || 2
  try {
    const res = await axios.get(`https://reqres.in/api/users/${userId}`)
    user.value = res.data.data
  } catch (error) {
    console.error('Gagal mengambil detail user:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.detail-container { max-width: 400px; margin: 2rem auto; text-align: center; }
.btn-back { display: inline-block; margin-bottom: 1rem; color: #3b82f6; text-decoration: none; }
.card-detail { border: 1px solid #ddd; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.avatar-large { width: 100px; height: 100px; border-radius: 50%; margin-bottom: 1rem; }
.email { color: #666; }
.id-tag { font-size: 0.8rem; background: #eee; padding: 4px 8px; border-radius: 4px; display: inline-block; }
</style>