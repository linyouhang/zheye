<template>
  <div class="mb-3">
      <input
        v-if="tag !== 'textarea'"
        v-bind="$attrs"
        class="form-control"
        :class="{'is-invalid': inputRef.error}"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        @blur="validateInput">
      <textarea
        v-else
        v-bind="$attrs"
        class="form-control"
        :class="{'is-invalid': inputRef.error}"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        @blur="validateInput">
      </textarea>
      <span class="invalid-feedback" v-if="inputRef.error">{{ inputRef.message }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export type TagProps = 'input' | 'textarea'
export interface RulesProps {
  type: 'required' | 'email' ;
  message: string;
}

export default defineComponent({
  name: 'ValidateInput',
  props: {
    modelValue: String,
    rules: Array as PropType<RulesProps[]>,
    tag: {
      type: String as PropType<TagProps>,
      default: 'input'
    }
  },
  inheritAttrs: false,
  setup (props) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    function validateInput () {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    return {
      inputRef,
      validateInput
    }
  }
})
</script>

<style>

</style>
