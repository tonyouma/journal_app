<template>
  <div class="mx-auto md:w-1/2 px-4 bg-gray-50 mt-12">
    <div class="text-right">
      <!-- <Button :buttonText="Add" @click="addPost" /> -->
      <ButtonComponent :onClick="to" :buttonText="'New Journal'" />
    </div>
    <div class="flex items-start">
      <ul class="nav-wrapper">
        <li
          class="nav-item flex-grow"
          role="presentation"
          v-for="(item, key) of items"
          :key="key"
        >
          <nuxt-link
            :to="item.to"
            exact-active-class="active"
            class="item-link"
            >{{ item.title }}</nuxt-link
          >
        </li>
      </ul>
      <div class="py-2 w-full">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
export default {
  components: {
    ButtonComponent,
  },
  data() {
    return {
      items: [
        {
          title: 'Journals',
          to: { name: 'journals' },
        },
        {
          title: 'drafts',
          to: { name: 'drafts' },
        },
      ],
    }
  },
  methods: {
    to() {
      this.$router.push({ name: 'new' })
    },
  },
}
</script>

<style lang="postcss">
.nav-wrapper {
  @apply flex flex-col flex-wrap list-none border-r pl-0 mr-4;
}
.item-link {
  @apply block font-medium leading-tight capitalize border-b-2 border-transparent px-2 md:px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent;
}
</style>
