<template>
  <validate-form @form-submit="onFormSubmit">
    <h2>新建文章</h2>
    <label class="form-label">文章标题:</label>
    <validate-input type='email' :rules="validateTitile"></validate-input>
    <label class="form-label">文章详情:</label>
    <validate-input rows='10' tag='textarea' :rules="validateContent" v-model="contentVal"></validate-input>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput from '../components/ValidateInput.vue'
import { PostProps, GlobalDateProps } from '../store'
export default defineComponent({
  name: 'creatPost',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const store = useStore<GlobalDateProps>()
    const router = useRouter()
    const titleVal = ref('')
    const contentVal = ref('')
    const validateTitile = [{ type: 'required', message: '请输入文章标题' }]
    const validateContent = [{ type: 'required', message: '请输入文章' }]
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { id } = store.state.user
        if (id) {
          const newPost: PostProps = {
            id: new Date().getTime(),
            titile: titleVal.value,
            content: contentVal.value,
            createdAt: new Date().toString(),
            columnId: id
          }
          store.commit('creatPost', newPost)
          router.push({ name: 'column', params: { id } })
        }
      }
    }
    return {
      router,
      validateTitile,
      validateContent,
      onFormSubmit,
      titleVal,
      contentVal
    }
  }
})
</script>

<style>

</style>
