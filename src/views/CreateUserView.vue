<template>
  <Layout>
    <div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Tambah User Baru (POST API)</h2>

      <form @submit.prevent="createUser" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Nama</label>
          <input 
            v-model="name" 
            type="text" 
            class="w-full border border-gray-300 p-2.5 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none" 
            placeholder="Masukkan nama" 
            required 
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Pekerjaan</label>
          <input 
            v-model="job" 
            type="text" 
            class="w-full border border-gray-300 p-2.5 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none" 
            placeholder="Masukkan pekerjaan" 
            required 
          />
        </div>

        <button 
          type="submit" 
          class="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 font-bold transition disabled:bg-gray-400"
          :disabled="submitting"
        >
          {{ submitting ? 'Mengirim Data...' : 'Kirim Ke API' }}
        </button>
      </form>

      <!-- Respons dari Server -->
      <div v-if="response" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
        <p class="font-bold text-base mb-1">✅ Berhasil Dikirim ke Server!</p>
        <p><strong>Generated ID:</strong> <code>{{ response.id }}</code></p>
        <p><strong>Nama:</strong> {{ response.name }}</p>
        <p><strong>Pekerjaan:</strong> {{ response.job }}</p>
        <p class="text-xs text-gray-500 mt-2">Waktu Dibuat: {{ response.createdAt }}</p>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Layout from '../components/Layout.vue'

const name = ref('')
const job = ref('')
const response = ref(null)
const submitting = ref(false)

const createUser = async () => {
  submitting.value = true
  try {
    const res = await axios.post('https://reqres.in/api/users', {
      name: name.value,
      job: job.value
    })
    response.value = res.data
    name.value = ''
    job.value = ''
  } catch (err) {
    console.error('Error creating user:', err)
  } finally {
    submitting.value = false
  }
}
</script>