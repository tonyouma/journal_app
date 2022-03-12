<template>
  <div>
    <label for="id" class="input-label">{{ labelText }}</label>
    <input
      id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="input-style"
    />
  </div>
</template>

<script>
export default {
  props: {
    labelText: String,
    modelValue: String,
    id: String,
  },
}
</script>

<style lang="postcss">
.input-style {
  @apply w-full px-2 py-2 focus:outline-none focus:border-blue-200 mt-2 bg-white border rounded;
}
.input-label {
  @apply block text-sm leading-none;
}
</style>
