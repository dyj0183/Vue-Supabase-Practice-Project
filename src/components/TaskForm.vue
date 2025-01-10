<script setup lang="ts">
import { ref } from 'vue';

const newTask = ref('');
const emit = defineEmits(['add-task']);
const isSubmitting = ref(false);

const addTask = async () => {
  if (newTask.value.trim()) {
    isSubmitting.value = true;
    await emit('add-task', newTask.value);
    newTask.value = '';
    isSubmitting.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="addTask" class="flex gap-4 mb-6">
    <input
      v-model="newTask"
      type="text"
      placeholder="Add a new task..."
      required
      :disabled="isSubmitting"
      class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
    />
    <button 
      type="submit"
      :disabled="isSubmitting"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
    >
      <span v-if="isSubmitting">Adding...</span>
      <span v-else>Add Task</span>
    </button>
  </form>
</template>
