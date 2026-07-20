<template>
  <Layout>
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Daftar Pengguna (GET API)</h2>

      <div v-if="loading" class="text-gray-600 font-medium">Sedang memuat data dari API ReqRes...</div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="user in users" 
          :key="user.id" 
          class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:shadow-md transition"
        >
          <img :src="user.avatar" alt="Avatar" class="w-16 h-16 rounded-full border" />
          <div class="flex-1">
            <h3 class="font-bold text-gray-800 text-lg">{{ user.first_name }} {{ user.last_name }}</h3>
            <p class="text-sm text-gray-500 mb-3">{{ user.email }}</p>
            <router-link 
              :to="'/users/' + user.id" 
              class="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition inline-block"
            >
              Lihat Detail
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const users = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('https://reqres.in/api/users')
    users.value = res.data.data
  } catch (err) {
    console.error('Error fetching API:', err)
  } finally {
    loading.value = false
  }
})
</script>