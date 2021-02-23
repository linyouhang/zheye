<template>
  <validate-form @form-submit="onFormSubmit">
    <label class="form-label">邮箱地址</label>
    <validate-input type='email' :rules="validateEmail" v-model="email"></validate-input>
    <h2>{{ email }}</h2>
    <label class="form-label">用户密码</label>
    <validate-input type='password' :rules="validatePassword" v-model="password"></validate-input>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput from '../components/ValidateInput.vue'
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const email = ref('')
    const password = ref('')
    const store = useStore()
    const router = useRouter()
    const validateEmail = [{ type: 'required', message: '请输入邮箱' }, { type: 'email', message: '邮箱格式不正确' }]
    const validatePassword = [{ type: 'required', message: '请输入密码' }]
    const onFormSubmit = (result: boolean) => {
      if (result) {
        router.push('/')
        store.commit('login')
      }
    }
    return {
      router,
      validateEmail,
      validatePassword,
      onFormSubmit,
      email,
      password
    }
  }
})
</script>

<style>

</style>
