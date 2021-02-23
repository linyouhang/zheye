<template>
  <div class="column-detail-container">
    <h2>{{ currentColumn.title }}</h2>
    <p>{{ currentColumn.description }}</p>
    <div v-for="post of currentPosts" :key="post.id">
      <h4>{{ post.titile }}</h4>
      <p>{{ post.content }}</p>
      <small>{{ post.createdAt }}</small>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDateProps } from '../store'
export default defineComponent({
  setup () {
    const store = useStore<GlobalDateProps>()
    const router = useRouter()
    const currentId = +router.currentRoute.value.params.id
    const currentColumn = store.getters.getCurrentColumn(currentId)
    const currentPosts = store.getters.getCurrentPosts(currentId)
    return {
      router,
      currentColumn,
      currentPosts
    }
  }
})
</script>

<style>

</style>
