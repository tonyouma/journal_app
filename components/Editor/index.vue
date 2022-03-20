<template>
  <section class="container">
    <div
      class="quill-editor"
      :content="content"
      @change="onEditorChange($event)"
      v-quill:myQuillEditor="editorOption"
    ></div>
  </section>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: '',
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic'],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: [] }],
            ['link', 'image'],
          ],
        },
      },
    }
  },
  mounted() {
    this.content = this.value
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
      this.$emit('input', this.content)
    },
  },
  watch: {
    value(newVal, oldVal) {
      this.content = this.value
    },
  },
}
</script>

<style lang="postcss">
.container .quill-editor {
  border: none;
}

.container .ql-editor {
  height: 124px !important;
  @apply w-full resize-none overflow-hidden bg-transparent py-8;
}
.container {
  @apply mt-6;
}

.container .ql-toolbar {
  @apply bg-slate-50 flex border-slate-100 rounded-md justify-center;
}

.container .ql-editor.ql-blank::before {
  content: 'Share your journal...';
  @apply text-gray-400 not-italic text-sm;
  font-family: inherit;
}
.quill-editor p {
  @apply text-sm;
}
</style>
