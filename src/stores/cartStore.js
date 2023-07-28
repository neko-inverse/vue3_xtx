// 封装购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const addCart = (goods) => {
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      item.count++
    } else {
      cartList.value.push(goods)
    }
  }
  return {
    cartList,
    addCart
  }
},
{
    persist: true,
})