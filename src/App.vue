<template>
  <div class="container">
    <global-header :user="userData"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <validate-form @form-submit="submitForm">
      <label>email</label>
      <validate-input :rules="rules" v-model="emalival" type='text'></validate-input>
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { HeaderProps } from './components/GlobalHeadr.vue'
import ValidateInput from './components/ValidateInput.vue'
import validateForm from './components/ValidateForm.vue'
const userData: HeaderProps = {
  isLogin: true,
  name: 'ling'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput,
    validateForm
  },
  setup () {
    const emalival = ref('lingyou')
    const rules = [{ type: 'required', message: '请填写邮箱' }, { type: 'email', message: '邮箱格式不正确' }]
    const submitForm = (result: boolean) => {
      console.log('result', result)
    }
    return {
      list: testData,
      userData,
      rules,
      emalival,
      submitForm
    }
  }
})
</script>

<style>
</style>
