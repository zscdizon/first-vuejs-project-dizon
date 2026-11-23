
<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'delete'])
</script>

<template>
  <div
    class="task-card"
    :class="{ completed: task.completed }"
  >
    <div class="task-info">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="emit('toggle', task.id)"
      />

      <div class="task-details">
        <h3>{{ task.title }}</h3>

        <span
          class="status"
          :class="task.completed ? 'done' : 'pending'"
        >
          {{ task.completed ? 'Completed' : 'Pending' }}
        </span>
      </div>
    </div>

    <div class="task-actions">
      <button
        class="btn-small"
        @click="emit('toggle', task.id)"
      >
        {{ task.completed ? 'Undo' : 'Complete' }}
      </button>

      <button
        class="btn-delete"
        @click="emit('delete', task.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>
