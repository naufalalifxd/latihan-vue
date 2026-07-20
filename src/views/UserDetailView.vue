<template>
  <Layout>
    <div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
      <router-link to="/users" class="text-sm text-blue-600 hover:underline inline-block mb-4">
        ← Kembali ke Daftar Users
      </router-link>

      <div v-if="loading" class="text-gray-600">Memuat detail pengguna...</div>

      <div v-else-if="user">
        <img :src="user.avatar" class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow" />
        <h3 class="text-xl font-bold text-gray-800">{{ user.first_name }} {{ user.last_name }}</h3>
        <p class="text-gray-600 text-sm mb-3">{{ user.email }}</p>
        <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-mono">
          User ID: {{ user.id }}
        </span>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const route = useRoute()
const user = ref(null)
const loading = ref(true)

onMounted(async () => {
  const userId = route.params.id || 2
  try {
    const res = await axios.get(`https://reqres.in/api/users/${userId}`)
    user.value = res.data.data
  } catch (err) {
    console.error('Error fetching user detail:', err)
  } finally {
    loading.value = false
  }
})
</script>