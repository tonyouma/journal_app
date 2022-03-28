<template>
  <div>
    <div v-if="!loading">
      <div class="my-4">
        <h1 class="font-medium text-3xl capitalize">{{ journal.title }}</h1>
        <p class="my-3 text-gray-400 text-sm">{{ journal.createdAt }}</p>
      </div>

      <p v-html="journal.description" class="text-gray-700 text-xl"></p>

      <div class="flex justify-between items-center mt-6">
        <ButtonComponent @click="to" class="button-link"
          >Previous Page</ButtonComponent
        >
        <div class="flex gap-x-3">
          <nuxt-link
            :to="{ name: 'journals-edit', params: { id: journal.id } }"
            class="button-link underline"
          >
            <span slot="default">Edit</span>
          </nuxt-link>
          <ButtonComponent @click="deleteJournalEntry(journal.id)">
            <Trash />
          </ButtonComponent>
        </div>
      </div>
    </div>
    <div v-if="loading">
      <Loader />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
import Loader from '~/components/Loader/index.vue'

import { mapActions, mapGetters } from 'vuex'
import FilterIcon from '~/components/Icons/Filter/FilterIcon.vue'
import Trash from '~/components/Icons/Trash/index.vue'

export default {
  layout(context) {
    return 'journal'
  },
  components: { ButtonComponent, Loader, FilterIcon, Trash },
  transitions: 'page-slide',

  created() {
    this.id = this.$route.params.id
    this.fetchJournal(this.id)
  },
  computed: {
    ...mapGetters(['journal', 'loading', 'isDraft']),
  },
  methods: {
    ...mapActions(['fetchJournal', 'deleteJournal']),
    deleteJournalEntry(id) {
      this.deleteJournal(id)
      this.$router.push('/journals')
    },
    // Go to previous page
    to() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="postcss" scoped>
.button-link {
  @apply py-2 text-blue-900 font-medium cursor-pointer;
}

.page-slide-enter-active {
  transition: all 0.35s cubic-bezier(0, 0.25, 0, 0.75);
}
</style>
