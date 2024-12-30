<template>
  <form @submit.prevent="addTask" class="flex gap-4 mb-6">
    <input
      v-model="newTask"
      type="text"
      placeholder="Add a new task..."
      required
      class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button 
      type="submit"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Add Task
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newTask = ref('');
const emit = defineEmits(['add-task']);

const addTask = () => {
  if (newTask.value.trim()) {
    emit('add-task', newTask.value);
    newTask.value = '';
  }
};
</script>