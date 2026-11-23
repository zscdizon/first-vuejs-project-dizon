
<script setup>
defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-theme'])
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <span class="logo-icon">✦</span>
        <h2>TaskFlow<span class="logo-dot">.</span></h2>
      </div>

      <nav class="navigation">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/tasks">My Tasks</RouterLink>
      </nav>

      <button
        class="theme-toggle"
        @click="$emit('toggle-theme')"
        :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        {{ dark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
  </header>
</template>
