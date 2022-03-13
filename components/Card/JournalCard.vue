<template>
  <div>
    <div v-for="journal of journals" :key="journal.id" class="card-styles">
      <h1 class="title">{{ journal.title }}</h1>
      <p class="py-2 text-gray-600">{{ journal.description }}</p>
      <div class="bottom-content">
        <p class="timestamp">{{ journal.createdAt }}</p>
        <div class="flex items-center gap-x-4">
          <ButtonComponent @click="handleShare">
            <ShareIcon />
          </ButtonComponent>
          <!-- for dynamic routing to a single journal post -->
          <ButtonComponent :to="`journals/${journal.id}`" class="btn-style">
            <ViewIcon />
          </ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShareIcon from '../Icons/Share/ShareIcon.vue'
import ViewIcon from '../Icons/View/ViewIcon.vue'
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue'
export default {
  props: {
    journals: Array,
  },
  components: { ShareIcon, ViewIcon, ButtonComponent },
  methods: {
    handleShare() {
      //
    },
  },
}
</script>

<style lang="postcss">
.card-styles {
  @apply mb-3 bg-gray-50 rounded-md p-4;
  box-shadow: 'rgba(0, 0, 0, 0.15) 0px 0px 1px';
}
.title {
  @apply text-lg capitalize font-medium;
}
.bottom-content {
  @apply flex justify-between items-center;
}
.timestamp {
  @apply text-sm text-gray-400;
}
.btn-style {
  @apply cursor-pointer;
}
</style>
