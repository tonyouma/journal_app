<template>
  <div>
    <div v-for="journal of journals" :key="journal.id" class="card-styles">
      <h1 class="title">{{ journal.title }}</h1>
      <p class="py-2">{{ journal.description }}</p>
      <div class="bottom-content">
        <p class="timestamp">{{ journal.createdAt }}</p>
        <div class="flex items-center gap-x-4">
          <ShareIcon />
          <!-- for dynamic routing to a single journal post -->
          <nuxt-link :to="`journals/${journal.id}`"><ViewIcon /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShareIcon from '../Icons/Share/ShareIcon.vue'
import ViewIcon from '../Icons/View/ViewIcon.vue'
export default {
  props: {
    journals: Array,
  },
  components: { ShareIcon, ViewIcon },
}
</script>

<style lang="postcss">
.card-styles {
  @apply mb-3 bg-gray-50 rounded-md p-4;
}
.title {
  @apply text-2xl capitalize;
}
.bottom-content {
  @apply flex justify-between items-center;
}
.timestamp {
  @apply text-sm text-gray-400;
}
</style>
