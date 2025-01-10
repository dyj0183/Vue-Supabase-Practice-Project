<script setup lang="ts">
import type { Task } from '@/types/task';

defineProps<{
task: Task;
}>();
</script>

<template>
  <div class="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm mb-2 hover:bg-gray-50">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle-complete', task.id)"
      class="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
    />
    <span 
      :class="[
        'flex-1',
        task.completed ? 'text-gray-400 line-through' : 'text-gray-700'
      ]"
    >
      {{ task.title }}
    </span>
    <button 
      @click="$emit('delete-task', task.id)"
      class="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Delete
    </button>
  </div>
</template>