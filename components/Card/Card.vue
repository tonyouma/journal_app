<template>
  <div class="mb-3 bg-white rounded p-4 bg-gray-50">
    <h1 class="text-2xl capitalize">{{ title }}</h1>
    <p class="py-2">{{ description }}</p>
    <div class="flex justify-between items-center">
      <p class="text-sm text-gray-400">{{ createdAt }}</p>
      <div class="flex">
        <ShareIcon />
        <!-- for dynamic routing to a single journal post -->
        <nuxt-link :to="'journals/' + id"><ViewIcon /></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ShareIcon from '../Icons/Share/ShareIcon.vue'
import ViewIcon from '../Icons/View/ViewIcon.vue'
export default {
  props: ['title', 'description', 'createdAt', 'id'],
  components: { ShareIcon, ViewIcon },
}
</script>
