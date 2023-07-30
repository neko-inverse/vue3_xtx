// 封装倒计时逻辑函数
import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
  let timer = null
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const start = (currentTime) => {
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
     }, 1000)
  }
  // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}