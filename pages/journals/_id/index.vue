<template>
  <div>
    <h1>Title1</h1>
    <ButtonComponent @click="to" class="button-link"
      >Previous Page</ButtonComponent
    >
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
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
  components: { ButtonComponent },
}
</script>

<style lang="postcss" scoped>
.button-link {
  @apply py-2 text-blue-900 font-medium text-right;
}
</style>
