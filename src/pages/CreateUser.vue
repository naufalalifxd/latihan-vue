<template>
  <div class="form-container">
    <h2>Tambah Pengguna Baru</h2>
    
    <form @submit.prevent="createUser" class="form">
      <input 
        v-model="name" 
        type="text" 
        placeholder="Nama Lengkap" 
        class="input" 
        required 
      />
      <input 
        v-model="job" 
        type="text" 
        placeholder="Pekerjaan" 
        class="input" 
        required 
      />
      <button type="submit" class="btn" :disabled="submitting">
        {{ submitting ? 'Mengirim...' : 'Tambah' }}
      </button>
    </form>

    <!-- Menampilkan respons ID dari server -->
    <div v-if="response" class="response-box">
      <p>✅ <strong>Pengguna berhasil dibuat!</strong></p>
      <p>ID: <code>{{ response.id }}</code></p>
      <p>Nama: {{ response.name }}</p>
      <p>Pekerjaan: {{ response.job }}</p>
      <p>Dibuat Pada: {{ response.createdAt }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

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
    // Reset form
    name.value = ''
    job.value = ''
  } catch (err) {
    console.error('Gagal menambah user:', err)
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.form-container { max-width: 400px; margin: 2rem auto; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; }
.form { display: flex; flex-direction: column; gap: 12px; }
.input { padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 1rem; }
.btn { background-color: #16a34a; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.btn:hover { background-color: #15803d; }
.btn:disabled { background-color: #9ca3af; }
.response-box { margin-top: 1.5rem; padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; color: #166534; font-size: 0.9rem; }
</style>