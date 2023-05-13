<template>
  <h1>{{ title }}</h1>
  <div class="children">
    <label for="input">
      {{ props.label }}
      <input type="text" id="input" v-model="state" @blur="handleBlur" />
    </label>

    <slot :msg="state" />
  </div>
</template>

<script setup lang="ts">
import type { Emits, Slots, Props } from './type'

defineOptions({
  inheritAttrs: false,
  name: 'ChildrenComponent'
})

const props = withDefaults(defineProps<Props & { title: string }>(), {
  label: '',
  title: ''
})

const emit = defineEmits<Emits>()

const slots = defineSlots<Slots>()

const state = defineModel<string>()

const handleBlur = (e: FocusEvent) => {
  emit('blur', (e.target as any).value)
}

console.log(slots, 'slots')
</script>

<style scoped>
.children {
  display: flex;
}
</style>
