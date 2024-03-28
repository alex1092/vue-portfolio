import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ref, onMounted, onUnmounted } from 'vue'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Detects if the user is on a mobile device
 * @returns boolean
 */
export function useMobileDetection() {
  const isMobile = ref(false)

  const handleResize = () => {
    isMobile.value = window.matchMedia('(max-width: 768px)').matches
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { isMobile }
}