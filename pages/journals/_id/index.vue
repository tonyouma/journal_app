<template>
  <div>
    <h1>Title1</h1>
    <button @click="to" class="buttonLink">Previous Page</button>
  </div>
</template>

<script>
export default {
  //
  methods: {
    // Go to previous page
    to() {
      this.$router.go(-1)
    },
  },
  layout(context) {
    return 'journal'
  },
}
</script>

<style lang="postcss" scoped>
.buttonLink {
  @apply py-2 text-blue-900 font-medium text-right;
}
</style>
