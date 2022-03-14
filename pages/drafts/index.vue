<template>
  <div>
    <div class="content-wrapper" v-if="!drafts.length">
      <p class="">You have no drafts yet</p>
      <ButtonComponent to="/new" class="link-text"
        >Start New Draft</ButtonComponent
      >
    </div>
    <div v-else>
      <JournalCard :journals="drafts" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout(context) {
    return 'journal'
  },
  computed: {
    ...mapGetters(['drafts', 'loading']),
  },
  methods: {
    ...mapActions(['fetchDrafts']),
  },
  created() {
    this.fetchDrafts()
  },
}
</script>
