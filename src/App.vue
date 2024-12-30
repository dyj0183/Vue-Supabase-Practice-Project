<template>
  <div class="max-w-2xl mx-auto p-4 mt-8">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">Task Manager</h1>
    <TaskForm @add-task="addTask" />
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

const addTask = (title: string) => {
  // We'll implement this later with Supabase
  console.log('New task:', title);
};
</script> 