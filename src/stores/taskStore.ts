import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'
import type { Task } from '@/types/task'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])

  async function fetchTasks() {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    tasks.value = data || []
  }

  async function addTask(title: string) {
    const { error } = await supabase
      .from('tasks')
      .insert([{ title, completed: false }])

    if (error) throw error
    await fetchTasks()
  }

  async function toggleTask(id: number, completed: boolean) {
    const { error } = await supabase
      .from('tasks')
      .update({ completed })
      .eq('id', id)

    if (error) throw error
    await fetchTasks()
  }

  async function deleteTask(id: number) {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)

    if (error) throw error
    await fetchTasks()
  }

  return { tasks, fetchTasks, addTask, toggleTask, deleteTask }
}) 