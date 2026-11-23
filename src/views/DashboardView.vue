<script setup>
import { useTasks } from '../composables/useTasks'

const {
  totalTasks,
  completedTasks,
  pendingTasks
} = useTasks()
</script>

<template>
  <div class="page">
    <div class="page-heading">
      <h1>Dashboard</h1>
      <p>Welcome back! Here's your task overview.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon purple">📋</div>
        <div>
          <p>Total Tasks</p>
          <h2>{{ totalTasks }}</h2>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon orange">⏳</div>
        <div>
          <p>Pending Tasks</p>
          <h2>{{ pendingTasks }}</h2>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon green">✓</div>
        <div>
          <p>Completed Tasks</p>
          <h2>{{ completedTasks }}</h2>
        </div>
      </div>
    </div>

    <div class="welcome-card">
      <h2>Ready to be productive?</h2>

      <p>
        Organize your daily activities,
        track your progress, and complete
        your tasks efficiently.
      </p>

      <RouterLink to="/tasks" class="btn-primary">
        Manage My Tasks →
      </RouterLink>
    </div>
  </div>
</template>
