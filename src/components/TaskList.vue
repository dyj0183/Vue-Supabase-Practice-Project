<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import TaskItem from './TaskItem.vue';
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await taskStore.fetchTasks();
  isLoading.value = false;
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

const completedCount = computed(() => 
  taskStore.tasks.filter(t => t.completed).length
);
const totalCount = computed(() => taskStore.tasks.length);
</script>

<template>
  <div class="bg-gray-50 p-6 rounded-xl">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold text-gray-700">My Tasks</h2>
      <div class="text-sm text-gray-600">
        {{ completedCount }}/{{ totalCount }} completed
      </div>
    </div>
    <div v-if="isLoading" class="space-y-2 animate-pulse">
      <div v-for="n in 3" :key="n" class="h-14 bg-gray-200 rounded-lg"></div>
    </div>
    <div v-else class="space-y-2">
      <TransitionGroup 
        name="list" 
        class="space-y-2"
        tag="div"
      >
        <TaskItem
          v-for="task in taskStore.tasks"
          :key="task.id"
          :task="task"
          @toggle-complete="toggleComplete"
          @delete-task="deleteTask"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
