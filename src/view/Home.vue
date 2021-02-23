<template>
  <column-list :list="columnDateList"></column-list>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ColumnList from '../components/ColumnList.vue'
import { GlobalDateProps } from '../store'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDateProps>()
    const columnDateList = computed(() => store.state.columns)
    return {
      columnDateList
    }
  }
})
</script>

<style>

</style>
