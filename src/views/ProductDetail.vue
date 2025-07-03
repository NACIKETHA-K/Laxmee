<template>
  <div v-if="product" class="fullproduct">
    <div class="image-row">
      <img :src="product.url1" class="product-image" alt="Product Image" />
      <img :src="product.url2" class="product-image" alt="Product Image" />
      <img :src="product.url3" class="product-image" alt="Product Image" />
    </div>

    <div class="cartbuy" style="font-family: poppins;">
      <div class="description p-3">
        <div class="rate d-flex justify-content-between fs-6 mb-4 pop-font">
          <div>{{ product.name }}</div>
          <div>R${{ product.price }}</div>
        </div>

        <div class="readmore d-flex w-100">
          <div class="text-muted read">
            {{ showFull ? fullText : shortText }}
          </div>
          <button class="btn bg-white p-0 ms-1 readalign mt-4" @click="showFull = !showFull">
            {{ showFull ? 'Read Less' : 'Read More' }}
          </button>
        </div>
      </div>

      <div class="selection p-3 mt-2">
        <div class="title">
          <div class="colors fs-6">Color</div>
        </div>
        <button
          v-for="color in colors"
          :key="color"
          class="btn m-1 color-btn p-2"
          :style="{ backgroundColor: color.toLowerCase(), color: 'white' }"
          :class="{ 'border border-dark': selectedColor === color }"
          @click="selectedColor = color"
        ></button>

        <hr />

        <div class="my-3 mx-auto d-flex flex-column">
          <p class="mb-2" :class="{ 'text-danger': sizeError }">
            {{ sizeError ? 'Please select a size' : 'Find Your Size:' }}
          </p>
          <div class="d-flex mx-auto gap-4 mt-5">
            <button
              v-for="size in sizes"
              :key="size"
              class="btn size-btn mx-auto mb-4"
              :class="{ active: selectedSize === size }"
              @click="selectedSize = size; sizeError = false"
            >
              {{ size }}
            </button>
          </div>

          <button class="btn text-white bag-btn" @click="addToCart">Add to Bag</button>
          <div class="tax">Up to 2x of R${{ (product.price / 2).toFixed(2) }} interest-free</div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p class="text-center">Loading product details...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import emitter from '../event-bus'

const route = useRoute()
const product = ref(null)

const selectedSize = ref(null)
const selectedColor = ref(null)
const sizeError = ref(false)

const sizes = ['S', 'M', 'L', 'XL']
const colors = ['black', 'beige', 'navy']

onMounted(() => {
  const id = parseInt(route.params.id)
  const fromLocal = JSON.parse(localStorage.getItem('shirt'))
  if (fromLocal?.id === id) {
    product.value = fromLocal
  }
})

const fullText =
  'Shirt with a fitted design, adjusted to the body. Light cotton fabric with elastane, for comfort. Washed and softened garment.'
const shortText = fullText.slice(0, 70) + '...'
const showFull = ref(false)

const addToCart = () => {
  if (!selectedSize.value) {
    sizeError.value = true
    return
  }

  // Auto-set default color if not selected
  if (!selectedColor.value) {
    selectedColor.value = colors[0] // default to 'black'
  }

  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const itemToAdd = {
    ...product.value,
    size: selectedSize.value,
    color: selectedColor.value,
  }
  cart.push(itemToAdd)
  localStorage.setItem('cart', JSON.stringify(cart))
  emitter.emit('custom-message', 1)
}
</script>

<style scoped>
.readalign {
  font-size: 12px;
  font-weight: 200;
  height: 20px;
  width: 90px;
  border-radius: 3px;
}
.readmore {
  width: 270px;
}
.bag-btn {
  background-color: rgb(54, 53, 53);
}
.tax {
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
}
.size-btn {
  font-size: 14px;
  font-weight: 450;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
}
.color-btn {
  border-radius: 10px;
  border: 1px solid white;
}
.read {
  font-size: 13px;
}
.description,
.selection {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.719);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px);
}
.pop-font {
  font-family: poppins;
  font-weight: 500;
}
.description {
  font-family: poppins;
}
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
  position: relative;
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
button.active {
  background-color: rgb(54, 53, 53) !important;
  color: white !important;
}
/* ✅ Responsive Styles */
@media (max-width: 768px) {
  .image-row {
    flex-direction: column;
    height: auto;
  }
  .product-image {
    display: none;
  }
  .product-image:nth-child(2) {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .cartbuy {
    position: static;
    transform: none;
    padding: 1.5rem 1rem;
    width: 100%;
    max-height: none;
  }
  .readmore {
    width: 100%;
  }
  .description,
  .selection {
    width: 100%;
  }
  .size-btn {
    width: 40px;
    height: 40px;
  }
  .color-btn {
    height: 28px;
    width: 28px;
  }
  .btn.bag-btn {
    width: 100%;
    font-weight: 500;
  }
  .tax {
    font-size: 12px;
  }
}
</style>
