<template>
 <div class="validate-form-contain">
   <slot name="default"></slot>
   <div class="submit-area" @click.prevent="submitForm">
     <slot name="submit">
       <button type="submit" class="btn btn-primary">提交</button>
     </slot>
   </div>
 </div>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
type ValidateFunc = () => boolean
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      console.log(funcArr.map(func => func()))
      context.emit('form-submit', funcArr.map(func => func()).every(result => result))
    }
    const callback = (func: any) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      console.log('unmounted')
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style>

</style>
