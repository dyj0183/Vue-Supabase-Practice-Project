<template>
  <div class="bg-gray-50 p-6 rounded-xl">
    <h2 class="text-xl font-semibold mb-4 text-gray-700">My Tasks</h2>
    <div class="space-y-2">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-complete="toggleComplete"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskItem from './TaskItem.vue';

const tasks = ref([
  { id: 1, title: 'Learn Vue 3', completed: false },
  { id: 2, title: 'Set up Supabase', completed: false },
]);

const toggleComplete = (taskId: number) => {
  const task = tasks.value.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
};

const deleteTask = (taskId: number) => {
  tasks.value = tasks.value.filter(t => t.id !== taskId);
};
</script> 