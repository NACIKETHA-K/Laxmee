<template>
  <div v-if="product" class="fullproduct">
    <div class="image-row">
      <img :src="product.url1" class="product-image" alt="Product Image" />
      <img :src="product.url2" class="product-image" alt="Product Image" />
      <img :src="product.url3 || product.url2" class="product-image" alt="Product Image" />
    </div>

    <div class="cartbuy">
      <div class="description p-3">
        <div class="rate d-flex justify-content-between fs-6 mb-4 pop-font">
          <div>{{ product.name }}</div>
          <div>₹{{ product.price }}</div>
        </div>

        <div class="readmore d-flex w-100">
          <div class="text-muted read">
            {{ showFull ? fullText : shortText }}
          </div>
          <button
            class="btn bg-white p-0 ms-1 readalign mt-4"
            @click="showFull = !showFull"
          >
            {{ showFull ? 'Read Less' : 'Read More' }}
          </button>
        </div>
      </div>

      <div class="selection p-3 mt-2">
        <div class="title mb-2">
          <div class="colors fs-6">Material</div>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <button
            v-for="color in colors"
            :key="color.name"
            class="color-btn"
            :style="{ backgroundColor: color.hex }"
            :class="{ 'border border-dark': selectedColor === color.name }"
            @click="selectColor(color.name)"
            :title="color.name"
          ></button>
        </div>

        <!-- Red warning -->
        <p v-if="showWarning" class="text-danger mt-2" style="font-size: 14px;">
          ⚠️ Please select material
        </p>

        <hr />

        <button class="btn text-white bag-btn mt-4" @click="addToCart">
          Add to Bag
        </button>
        <div class="tax">
          Up to 2x of ₹{{ (product.price / 2).toFixed(2) }} interest-free
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p class="text-center">Loading accessory details...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emitter from '../event-bus'

const product = ref(null)
const selectedColor = ref(null)
const showWarning = ref(false)

const colors = [
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Platinum', hex: '#E5E4E2' },
  { name: 'Diamond', hex: '#B9F2FF' }
]

const showFull = ref(false)
const fullText =
  'This accessory is designed to combine style and function, offering premium materials, durability, and a perfect match to your outfit.'
const shortText = fullText.slice(0, 70) + '...'

onMounted(() => {
  const data = localStorage.getItem('AccesoriesDetail')
  if (data) {
    product.value = JSON.parse(data)
  }
})

const selectColor = (color) => {
  selectedColor.value = color
  showWarning.value = false
}

const addToCart = () => {
  if (!selectedColor.value) {
    showWarning.value = true
    return
  }

  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const itemToAdd = {
    ...product.value,
    color: selectedColor.value,
  }
  cart.push(itemToAdd)
  localStorage.setItem('cart', JSON.stringify(cart))
  emitter.emit('custom-message', 1)
}
</script>

<style scoped>
.fullproduct {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.image-row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.product-image {
  width: 33.3%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cartbuy {
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 2rem;
  min-width: 30%;
  min-height: 60%;
  max-height: 60%;
}

.description,
.selection {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px);
  font-family: 'Poppins', sans-serif;
}

.readmore {
  width: 270px;
}

.readalign {
  font-size: 12px;
  font-weight: 200;
  height: 20px;
  width: 90px;
  border-radius: 3px;
}

.read {
  font-size: 13px;
}

.color-btn {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  padding: 0;
}

.color-btn:hover {
  transform: scale(1.1);
  border-color: #333;
}

.bag-btn {
  background-color: rgb(54, 53, 53);
}

.tax {
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
}

@media (max-width: 991px) {
  .image-row {
    height: auto;
    flex-direction: column;
  }

  .product-image {
    display: none;
    width: 100%;
    height: auto;
  }

  .product-image:nth-child(2) {
    display: block;
  }

  .cartbuy {
    position: static;
    transform: none;
    width: 100%;
    max-height: none;
    padding: 1rem;
    margin-top: 20px;
  }
}
</style>
