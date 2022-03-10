<template>
  <div>
    <div v-if="!journals.length" class="content-wrapper">
      <p class="">No Journals Available</p>
      <nuxt-link :to="'/new'" class="link-text">Create New Journal</nuxt-link>
    </div>
    <div v-else>
      <Card
        v-for="journal of journals"
        :key="journal.id"
        :title="journal.title"
        :description="journal.description"
        :id="journal.id"
        :createdAt="journal.createdAt"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card/Card.vue'
import { mapState } from 'vuex'

export default {
  layout(context) {
    return 'journal'
  },
  components: {
    Card,
  },

  mounted() {
    // journals: this.$store.state.journals
  },
  computed: mapState({
    journals: (state) => state.journals,
  }),
  async created() {
    try {
      //
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    addPost() {
      //
    },
  },
}
</script>

<style lang="postcss">
.link-text {
  @apply my-5 text-blue-600 underline;
}
.content-wrapper {
  @apply flex justify-center items-center flex-col md:my-10;
}
</style>
