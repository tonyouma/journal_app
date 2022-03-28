<template>
  <div class="w-full">
    <h1 class="font-bold my-3">Create New Journal</h1>
    <form @submit.stop.prevent="onSubmit">
      <div class="flex flex-col">
        <input
          placeholder="Title..."
          class="textAreaStyles"
          type="text"
          id="title"
          v-model="journal.title"
          autofocus
        />
        <!-- <textarea
          v-model="journal.description"
          id="description"
          placeholder="Share your thoughts..."
          class="w-full resize-none overflow-hidden p-4 mt-4 bg-gray-50 focus:outline-none text-md rounded"
          style="height: 124px !important"
        ></textarea> -->
        <Editor v-model="journal.description" />
      </div>
      <div>
        <ButtonComponent type="submit" class="button-style"
          >Publish</ButtonComponent
        >
      </div>
    </form>
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
import { mapActions, mapGetters } from 'vuex'
import Editor from '~/components/Editor/index.vue'

export default {
  layout(context) {
    return 'journal'
  },
  components: { ButtonComponent, Editor },
  data() {
    return {
      journal: {},
    }
  },
  computed: { ...mapGetters(['newJournal']) },
  methods: {
    ...mapActions(['createJournal']),
    onSubmit() {
      const { title, description } = this.journal
      this.createJournal({
        title: title,
        description: description,
        createdAt: new Date().toLocaleDateString('en-US', {
          timeZone: 'UTC',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      })
      // debugger
      // console.log(this.journal)
    },
    handleData: function (e) {
      console.log(e)
      this.editor = e
    },
  },

  watch: {
    newJournal: function () {
      if (this.newJournal !== null) {
        this.$toast.show('Success! Journal Created')

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
