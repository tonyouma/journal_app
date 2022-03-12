<template>
  <div class="flex justify-center items-center">
    <h1 class="text-5xl font-bold">404: Not Found Page</h1>
    <!-- <nuxt-link to="goBack()">Go Back</nuxt-link> -->
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
