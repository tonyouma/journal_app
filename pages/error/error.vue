<template>
  <div class="relative h-screen items-center flex justify-center flex-col">
    <div class="flex items-center">
      <div
        class="border-r border-gray-600 px-6 text-gray-600 text-3xl font-medium"
      >
        404
      </div>
      <ButtonComponent @click="goBack" class="text-blue-500 px-6"
        >Page Not Found</ButtonComponent
      >
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  components: { ButtonComponent },
}
</script>
