
<script setup>
import { ref, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'

const isDark = ref(localStorage.getItem('taskflow-theme') === 'dark')

watch(isDark, (value) => {
  localStorage.setItem('taskflow-theme', value ? 'dark' : 'light')
})
</script>

<template>
  <div class="app" :class="{ 'dark-mode': isDark }">

    <!-- Animated Abstract Background -->
    <div class="ambient-background" aria-hidden="true">
      <div class="ambient-shape shape-green-top"></div>
      <div class="ambient-shape shape-purple-top"></div>
      <div class="ambient-shape shape-purple-bottom"></div>
      <div class="ambient-shape shape-green-bottom"></div>
      <div class="ambient-dots"></div>
    </div>

    <!-- Header -->
    <AppHeader
      :dark="isDark"
      @toggle-theme="isDark = !isDark"
    />

    <!-- Main Content -->
    <main class="main-content">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>TaskFlow · Make room for what matters.</p>
    </footer>

  </div>
</template>
