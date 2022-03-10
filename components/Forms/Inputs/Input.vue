<template>
  <div>
    <label for="id" class="block text-sm leading-none">{{ labeltext }}</label>
    <input
      id="id"
      v-model="model"
      type="text"
      placeholder=""
      class="inputStyle"
    />
  </div>
</template>

<script>
export default {
  props: ['labeltext', 'model', 'id'],
}
</script>

<style lang="postcss">
.inputStyle {
  @apply w-full px-2 py-2 focus:outline-none focus:border-blue-200 mt-2 bg-white border rounded;
}
</style>
