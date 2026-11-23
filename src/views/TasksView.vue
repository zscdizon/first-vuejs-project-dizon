<script setup>
import TaskCard from '../components/TaskCard.vue'
import { useTasks } from '../composables/useTasks'

const {
  newTask,
  filter,
  totalTasks,
  completedTasks,
  pendingTasks,
  filteredTasks,
  addTask,
  toggleTask,
  deleteTask,
  clearCompleted
} = useTasks()
</script>

<template>
  <div class="page">
    <div class="page-heading">
      <h1>My Tasks</h1>
      <p>Manage and organize your daily activities.</p>
    </div>

    <!-- Add Task Form -->
    <div class="form-card">
      <h2>Add New Task</h2>

      <form @submit.prevent="addTask" class="task-form">
        <input
          v-model="newTask"
          type="text"
          placeholder="What do you need to do?"
        />

        <button
          type="submit"
          class="btn-primary"
          :disabled="!newTask.trim()"
        >
          + Add Task
        </button>
      </form>
    </div>

    <!-- Task List -->
    <div class="tasks-section">
      <div class="section-heading">
        <div>
          <h2>Task List</h2>

          <p>
            {{ totalTasks }} total |
            {{ pendingTasks }} pending |
            {{ completedTasks }} completed
          </p>
        </div>

        <button
          v-if="completedTasks > 0"
          class="btn-outline"
          @click="clearCompleted"
        >
          Clear Completed
        </button>
      </div>

      <!-- Filters -->
      <div class="filter-buttons">
        <button
          :class="{ active: filter === 'all' }"
          @click="filter = 'all'"
        >
          All Tasks
        </button>

        <button
          :class="{ active: filter === 'pending' }"
          @click="filter = 'pending'"
        >
          Pending
        </button>

        <button
          :class="{ active: filter === 'completed' }"
          @click="filter = 'completed'"
        >
          Completed
        </button>
      </div>

      <!-- Task Cards -->
      <div v-if="filteredTasks.length > 0">
        <TaskCard
          v-for="task in filteredTasks"
          :key="task.id"
          :task="task"
          @toggle="toggleTask"
          @delete="deleteTask"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <div class="empty-icon">📭</div>
        <h3>No tasks found</h3>

        <p v-if="filter === 'all'">
          Start by adding your first task!
        </p>

        <p v-else>
          No tasks match the selected filter.
        </p>
      </div>
    </div>
  </div>
</template>
