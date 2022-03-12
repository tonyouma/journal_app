<template>
  <div class="pt-7">
    <form>
      <InputComponent labelText="Title" :id="title" v-model="title" />
      <TextArea />
    </form>
    <ButtonComponent :onClick="handleSubmit" class="button-style"
      >Publish</ButtonComponent
    >
  </div>
</template>

<script>
import InputComponent from '../Inputs/InputComponent.vue'
import TextArea from '../Inputs/TextArea.vue'
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    //
    handleSubmit() {
      console.log('Hello')
    },
  },
  components: { TextArea, ButtonComponent, InputComponent },
}
</script>

<style lang="postcss">
.button-style {
  @apply px-8 py-2 bg-blue-100 text-blue-900 font-medium rounded my-5;
}
</style>
