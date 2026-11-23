
import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'mini-task-manager-tasks'

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved !== null) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) return parsed
    }
  } catch (error) {
    console.error('Unable to load tasks:', error)
  }

  return [
    {
      id: 1,
      title: 'Study Vue.js Fundamentals',
      completed: true
    },
    {
      id: 2,
      title: 'Create Reusable Components',
      completed: false
    },
    {
      id: 3,
      title: 'Build My First Vue Application',
      completed: false
    }
  ]
}

const tasks = ref(loadTasks())
const newTask = ref('')
const filter = ref('all')

const totalTasks = computed(() => tasks.value.length)

const completedTasks = computed(() =>
  tasks.value.filter(task => task.completed).length
)

const pendingTasks = computed(() =>
  tasks.value.filter(task => !task.completed).length
)

const filteredTasks = computed(() => {
  if (filter.value === 'completed') {
    return tasks.value.filter(task => task.completed)
  }

  if (filter.value === 'pending') {
    return tasks.value.filter(task => !task.completed)
  }

  return tasks.value
})

function addTask() {
  const title = newTask.value.trim()

  if (!title) return

  tasks.value.push({
    id: crypto.randomUUID(),
    title,
    completed: false
  })

  newTask.value = ''
}

function toggleTask(id) {
  const task = tasks.value.find(task => task.id === id)

  if (task) {
    task.completed = !task.completed
  }
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(
    task => task.id !== id
  )
}

function clearCompleted() {
  tasks.value = tasks.value.filter(
    task => !task.completed
  )
}

watch(
  tasks,
  (updatedTasks) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedTasks)
      )
    } catch (error) {
      console.error('Unable to save tasks:', error)
    }
  },
  { deep: true }
)

export function useTasks() {
  return {
    tasks,
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
  }
}
