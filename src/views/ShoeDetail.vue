<template>
  <div v-if="product" class="fullproduct">
    <div class="image-row">
      <img :src="product.url1" class="product-image" alt="Product Image" />
      <img :src="product.url2" class="product-image" alt="Product Image" />
      <img :src="product.url3" class="product-image" alt="Product Image" />
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
          <p class="mb-2">Select Your Size:</p>
          <div
            class="d-flex mx-auto gap-4 mt-4 flex-wrap justify-content-center"
          >
            <button
              v-for="size in sizes"
              :key="size"
              class="btn size-btn mx-2 mb-2"
              :class="{ active: selectedSize === size }"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>

          <button class="btn text-white bag-btn mt-4" @click="addToCart">
            Add to Bag
          </button>
          <div class="tax">
            Up to 2x of ₹{{ (product.price / 2).toFixed(2) }} interest-free
          </div>
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

const sizes = [6, 7, 8, 9, 10]
const colors = ['black', 'white', 'blue', 'grey']
const exampleProducts = [
  {
    id: 1,
    name: 'Nike Dunk Low Retro SE',
    price: 4500,
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9db82184-4d2b-4576-8b81-a229a344808c/NIKE+DUNK+LOW+RETRO+SE.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f761c2d3-55a8-4733-b251-f0f3ab580b8d/NIKE+DUNK+LOW+RETRO+SE.png',
    url3: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33219111-5dc0-42de-8bf7-1b1bba4d4712/NIKE+DUNK+LOW+RETRO+SE.png',
  },
  {
    id: 2,
    name: 'Classic Sneakers',
     id: 2,
    price: 4200,
    name: "Nike Blazer Phantom Low",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65ad9161-e0e6-45e6-b7ec-2a0bb014e69d/BLAZER+PHANTOM+LOW.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84e9724c-ece9-494f-899c-37e93f2418de/BLAZER+PHANTOM+LOW.png',
    url3: ' https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0b611fd7-4e2f-45df-9a27-b76def539364/BLAZER+PHANTOM+LOW.png',
   
  },
  {
    id: 3,
    name: 'Nike SB Blazer Low Pro GT',
    price: 2800,
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0229ef99-88ca-4cc7-8cce-6dd8769f9862/BLAZER+LOW+PRO+GT.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d1823c5-47c6-4605-8254-f7bbdcffc929/BLAZER+LOW+PRO+GT.png',
    url3: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ec7eae08-b174-461f-b88e-32dbab6fce08/BLAZER+LOW+PRO+GT.png',
  },
  {
    id: 4,
    name: 'Nike SB Malor',
    price: 6500,
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa3f10c0-4bb9-4578-a796-8fe99ac723fe/NIKE+SB+MALOR.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5d9e35f2-5e1e-46d2-b23d-9667dd397fe9/NIKE+SB+MALOR.png',
    url3: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9176af60-67b7-43bd-97fa-ba88a294c5ab/NIKE+SB+MALOR.png',
  },
  {
    id: 5,
    name: 'Nike Vaporfly 4',
    price: 6500,
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8289b491-6de1-491a-b3ef-6fb5ae0c07a6/ZOOMX+VAPORFLY+NEXT%25+4.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/73cf7faf-3dc1-4caf-9dc6-f3aec5b15f24/ZOOMX+VAPORFLY+NEXT%25+4.png',
    url3: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c96e25ba-d9ed-4081-9d3d-3e37e8ec4d5e/ZOOMX+VAPORFLY+NEXT%25+4.png',
  },
  {
    id: 6,
    name: 'Nike Motiva',
    price: 7050,
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d2407438-7fdb-4a7b-9623-7c3b5bbacb9c/NIKE+MOTIVA.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c8ebc4b3-7804-42f9-afbc-14137328e8ae/NIKE+MOTIVA.png',
    url3: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/490bdad4-a357-4cfe-86f6-226a14256c01/NIKE+MOTIVA.png',
  },
  {
    id: 7,
    name: 'Marcus Rashford',
    price: 5500,
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e18fea2-2156-4d75-8e2f-85a1d76e400e/ZOOM+SUPERFLY+9+ELITE+MR+FG.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cfe43fe9-1d0d-4dd3-b3ad-7cfe4d70e18c/ZOOM+SUPERFLY+9+ELITE+MR+FG.png',
    url3: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43a117d5-d945-498d-b6a8-26159dc9d71e/ZOOM+SUPERFLY+9+ELITE+MR+FG.png',
  },
  {
    id: 8,
    name: 'Jr. Mercurial Superfly',
    price: 6500,
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f2e9d53-8da9-4074-9ba7-96fb00667354/JR+SUPERFLY+10+CLUB+FG%2FMG.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4422b60d-9983-4805-a1bc-a7c2c39e07e1/JR+SUPERFLY+10+CLUB+FG%2FMG.png',
    url3: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f2e9d53-8da9-4074-9ba7-96fb00667354/JR+SUPERFLY+10+CLUB+FG%2FMG.png',
  },

]

onMounted(() => {
  const id = parseInt(route.params.id)
  product.value = exampleProducts.find((p) => p.id === id) || null
})

const fullText =
  'These premium shoes feature advanced cushioning, breathable materials, and a stylish design perfect for any occasion. Built for comfort and durability.'
const shortText = fullText.slice(0, 70) + '...'
const showFull = ref(false)

const addToCart = () => {
  if (!selectedSize.value || !selectedColor.value) {
    alert('⚠️ Please select size and color before adding to cart.')
    return
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
  alert('✅ Shoe added to cart!')
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

.size-btn {
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  transition: 0.3s;
}

.size-btn.active {
  background-color: rgb(54, 53, 53) !important;
  color: white !important;
}

.color-btn {
  border-radius: 10px;
  border: 1px solid white;
}

.bag-btn {
  background-color: rgb(54, 53, 53);
}

.tax {
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
}
</style>
