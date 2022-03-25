<template>
  <div class="mx-auto md:w-1/2 px-4 mt-12">
    <div class="border-b border-gray-100">
      <ul class="nav-wrapper">
        <li class="md:mr-8 mr-6" v-for="(item, key) of items" :key="key">
          <nuxt-link
            :to="item.to"
            active-class="active-navlink"
            class="item-link"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
        <div class="ml-auto self-center">
          <div
            v-if="
              this.$route.name !== 'journals' && this.$route.name !== 'drafts'
            "
            class="flex gap-x-2 items-center"
          >
            <Cloud />
            <p>Saved</p>
          </div>
          <div v-else class="search">
            <ButtonComponent @click="handleSearch">
              <SearchIcon slot="default" />
            </ButtonComponent>
          </div>
        </div>
      </ul>
    </div>
    <div>
      <div
        v-show="
          this.$route.name === 'journals' || this.$route.name === 'drafts'
        "
        class="flex justify-between items-center"
      >
        <div v-if="this.$route.name != 'drafts'">
          <ButtonComponent @click="handleFilter" class="filter-button">
            <FilterIcon slot="prepend" />
            <span slot="default">Filter</span>
          </ButtonComponent>
        </div>
        <div v-else>
          <h3 class="font-medium text-xl capitalize">Your drafts</h3>
          <p class="text-gray-500">All pending drafts are here</p>
        </div>
        <ButtonComponent to="/journals/new" class="button-style">
          <EditIcon slot="prepend" />
          <span slot="default" v-if="this.$route.name !== 'drafts'"
            >New Journal</span
          >
          <span slot="default" v-else>Create New Draft</span>
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
import Cloud from '~/components/Icons/Cloud/index.vue'

export default {
  components: {
    ButtonComponent,
    EditIcon,
    FilterIcon,
    SearchIcon,
    FilterIcon,
    Cloud,
  },
  data() {
    return {
      items: [
        {
          title: 'All Journals',
          to: { name: 'journals' },
          icon: FilterIcon,
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
      // this.$router.push({ name: 'new' })
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
  @apply bg-blue-50 text-blue-900 font-medium rounded my-5 py-2 px-3 cursor-pointer;
}
.search {
  @apply bg-blue-50 p-2 rounded text-blue-600;
}
.filter-button {
  @apply border border-gray-200 py-1 rounded px-3 text-gray-400;
}
</style>
