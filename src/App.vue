<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/users">Daftar User</router-link> | 
      <router-link to="/create-user">Tambah User Baru</router-link>
    </nav>
    <hr />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
#app { font-family: sans-serif; }
.navbar { text-align: center; padding: 1rem; background-color: #f8fafc; }
.navbar a { margin: 0 10px; color: #2563eb; text-decoration: none; font-weight: bold; }
.navbar a.router-link-exact-active { color: #dc2626; }
</style>