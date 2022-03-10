<template>
  <div class="my-6">
    <label class="block text-sm leading-none">Journal Entry</label>
    <textarea type="text" class="textAreaStyles"></textarea>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.textAreaStyles {
  @apply w-full px-5 py-2 focus:outline-none focus:border-blue-200 mt-2 bg-gray-50 border rounded;
}
</style>
