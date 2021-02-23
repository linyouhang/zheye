import { ref, onUnmounted, onMounted, Ref } from 'vue'
const useClickOutSide = (element: Ref<HTMLElement | null>) => {
  const isClickOutSide = ref(false)
  const handel = (e: MouseEvent) => {
    if (element.value) {
      isClickOutSide.value = element.value.contains(e.target as HTMLElement)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handel)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handel)
  })

  return isClickOutSide
}

export default useClickOutSide
