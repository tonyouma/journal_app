<template>
  <div>
    <!-- JSX -->
    <form @submit="onSubmit">
      <input
        type="text"
        name="title"
        id="title"
        :value="journal.title"
        @input="updateAction"
        class="textAreaStyles"
      />
      <!-- <input
        type="text"
        name="description"
        id="description"
        :value="journal.description"
        @input="updateAction"
        class="w-full resize-none overflow-hidden p-4 mt-4 bg-gray-50 focus:outline-none text-md rounded"
        style="height: 124px !important"
      /> -->
      <Editor v-model="journal.description" />
      <ButtonComponent type="submit" class="button-style"
        >Update Journal</ButtonComponent
      >
    </form>
  </div>
</template>
<script>
// JS
import { mapGetters, mapActions } from 'vuex'
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
import Editor from '~/components/Editor/index.vue'

export default {
  layout(context) {
    return 'journal'
  },
  data() {
    return {
      id: null,
    }
  },
  created: function () {
    this.id = this.$route.params.id
    this.fetchJournal(this.id)
  },
  computed: {
    ...mapGetters(['journal', 'updatedJournal']),
  },
  methods: {
    ...mapActions(['fetchJournal', 'updateJournal', 'updateJournalInput']),
    updateAction(e) {
      this.updateJournalInput(e)
    },
    onSubmit() {
      const { title, description } = this.journal

      this.updateJournal({
        id: this.id,
        title: title,
        description: description,
        createdAt: new Date().toLocaleDateString('en-US', {
          timeZone: 'UTC',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      })
      this.$router.push({ name: 'journals' })
    },
  },
  components: { ButtonComponent, Editor },
  watch: {
    updatedJournal: function () {
      if (this.updatedJournal !== null) {
        this.$toast.show('Journal Updated Successfully!')

        this.$router.push({ name: 'journals' })
      }
    },
  },
}
</script>

<style lang="postcss">
.textAreaStyles {
  @apply w-full px-4 focus:outline-none focus:border-blue-200 mt-2 font-medium rounded;
}
</style>
