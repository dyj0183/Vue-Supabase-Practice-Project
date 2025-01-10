<script setup lang="ts">
import { onMounted } from 'vue';
import TaskItem from './TaskItem.vue';
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.fetchTasks();
});

const toggleComplete = (taskId: number) => {
  const task = taskStore.tasks.find(t => t.id === taskId);
  if (task) {
    taskStore.toggleTask(taskId, !task.completed);
  }
};

const deleteTask = (taskId: number) => {
  taskStore.deleteTask(taskId);
};
</script>

<template>
  <div class="bg-gray-50 p-6 rounded-xl">
    <h2 class="text-xl font-semibold mb-4 text-gray-700">My Tasks</h2>
    <div class="space-y-2">
      <TaskItem
        v-for="task in taskStore.tasks"
        :key="task.id"
        :task="task"
        @toggle-complete="toggleComplete"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>
