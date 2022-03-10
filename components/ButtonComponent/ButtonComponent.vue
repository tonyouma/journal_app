<template>
  <div>
    <button @click="onClick" class="buttonStyle">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['buttonText', 'onClick'],
}
</script>

<style lang="postcss">
.buttonStyle {
  @apply px-8 py-2 bg-blue-100 text-blue-900 font-medium rounded my-5;
}
</style>
