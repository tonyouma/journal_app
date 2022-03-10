<template>
  <div class="pt-7">
    <form>
      <Input :labeltext="'Title'" :id="'title'" :model="journalTitle" />
      <TextArea />
    </form>
    <ButtonComponent :onClick="handleSubmit" :buttonText="'Publish'" />
  </div>
</template>

<script>
import Input from '../Inputs/Input.vue'
import TextArea from '../Inputs/TextArea.vue'
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
export default {
  data() {
    return {
      journalTitle: '',
    }
  },
  methods: {
    //
    handleSubmit() {
      this.$emit('submit', {
        title: this.journalTitle,
        content: this.journalContent,
      })
    },
  },
  components: { Input, TextArea, ButtonComponent },
}
</script>
