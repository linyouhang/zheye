<template>
  <router-link :to="to" class="dropdown-item" :class="{'is-disabled': disabled}">
    <slot></slot>
  </router-link>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: '#'
    }
  }
})
</script>

<style>
.dropdown-item.is-disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
