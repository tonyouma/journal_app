<template>
  <div>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else-if="!journals.length" class="content-wrapper">
      <p class="">No Journals Available</p>
      <ButtonComponent to="/new" class="link-text"
        >Create New Journal</ButtonComponent
      >
    </div>
    <div v-else>
      <JournalCard :journals="journals" />
    </div>
  </div>
</template>

<script>
import JournalCard from '~/components/Card/JournalCard.vue'
import Loader from '~/components/Loader/index.vue'

import { mapActions, mapGetters } from 'vuex'
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'

export default {
  layout(context) {
    return 'journal'
  },
  components: {
    JournalCard,
    ButtonComponent,
    Loader,
  },

  computed: {
    ...mapGetters(['journals', 'loading']),
  },
  methods: {
    ...mapActions(['fetchJournals']),
  },
  created() {
    this.fetchJournals()
  },
}
</script>

<style lang="postcss">
.link-text {
  @apply my-5 text-blue-600 underline;
}
.content-wrapper {
  @apply flex justify-center items-center flex-col md:my-10 cursor-pointer;
}
</style>
