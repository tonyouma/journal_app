<template>
  <div class="mx-auto md:w-1/2 px-4 mt-12">
    <div class="border-b border-gray-100">
      <ul class="nav-wrapper" id="tabs-tab" role="tablist">
        <li
          class="md:mr-8 mr-6 grow"
          role="presentation"
          v-for="(item, key) of items"
          :key="key"
        >
          <nuxt-link
            :to="item.to"
            exact-active-class="active-navlink"
            class="item-link"
            >{{ item.title }}</nuxt-link
          >
        </li>
        <div class="search">
          <ButtonComponent @click="handleSearch">
            <SearchIcon slot="default" />
          </ButtonComponent>
        </div>
      </ul>
    </div>
    <div v-if="this.$route.name !== 'new'">
      <div class="flex justify-between">
        <div class="flex items-center gap-x-4">
          <ButtonComponent @click="handleFilter" class="filter-button">
            <FilterIcon slot="prepend" />
            <span slot="default">Filter</span>
          </ButtonComponent>
        </div>
        <ButtonComponent @click="to" class="button-style">
          <EditIcon slot="prepend" />
          <span slot="default" v-if="this.$route.name !== 'drafts'"
            >New Journal</span
          >
          <span slot="default" v-else>New Draft</span>
        </ButtonComponent>
      </div>
    </div>

    <div class="py-2 w-full">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
import EditIcon from '~/components/Icons/Edit/EditIcon.vue'
import FilterIcon from '../components/Icons/Filter/FilterIcon.vue'
import SearchIcon from '../components/Icons/Search/SearchIcon.vue'

export default {
  components: {
    ButtonComponent,
    EditIcon,
    FilterIcon,
    SearchIcon,
    FilterIcon,
  },
  data() {
    return {
      items: [
        {
          title: 'All Journals',
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
    handleFilter() {
      //
    },
    handleSearch() {
      //
    },
  },
}
</script>

<style lang="postcss">
.nav-wrapper {
  @apply flex flex-wrap;
}
.item-link {
  @apply capitalize inline-block py-3 text-sm font-medium text-center text-gray-500 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300;
}

.active-navlink {
  border-bottom: 2px solid #1e3a8a;
  color: #1e3a8a;
}
.button-style {
  @apply bg-blue-50 text-blue-900 font-medium rounded my-5;
}
.search {
  @apply bg-blue-50 ml-auto self-center p-2 rounded text-blue-600;
}
.filter-button {
  @apply border border-gray-200 py-1 rounded px-3 text-gray-400;
}
</style>
