<script setup lang="ts">
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();

const addTask = (title: string) => {
  taskStore.addTask(title);
};
</script> 

<template>
  <div class="max-w-2xl mx-auto p-4 mt-8">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">Task Manager</h1>
    <TaskForm @add-task="addTask" />
    <TaskList />
  </div>
</template>
