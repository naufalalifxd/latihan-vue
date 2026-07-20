<template>
  <div>
    <h1>Halaman Utama (Home)</h1>

    <!-- Implementasi Pinia -->
    <section>
      <h3>State Management (Pinia)</h3>
      <p>Angka saat ini: {{ counter.count }}</p>
      <button @click="counter.increment">Tambah Angka</button>
    </section>

    <hr />

    <!-- Implementasi Axios -->
    <section>
      <h3>HTTP Client (Axios)</h3>
      <button @click="fetchPost">Ambil Data API</button>
      <p v-if="post">Data API Title: <strong>{{ post.title }}</strong></p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/store/counter'
import api from '@/services/api'

const counter = useCounterStore()
const post = ref(null)

const fetchPost = async () => {
  try {
    const response = await api.get('/posts/1')
    post.value = response.data
  } catch (error) {
    console.error("Gagal mengambil data:", error)
  }
}
</script>