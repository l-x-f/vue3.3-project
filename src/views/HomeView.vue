<template>
  <main>
    <Children v-model="state" label="名称" title="表单">
      <template #default="data">
        <div>{{ data }}</div>
      </template>
    </Children>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Children from '@/components/Children/index.vue'

const state = ref('')
</script>
