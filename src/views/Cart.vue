<template>
  <div class="container py-5">
    <div class="mb-4" style="font-family: poppins;margin-top: 60px;">[ SHOPPING BAG ]</div>

    <div v-if="cartItems.length > 0">
      <div class="row g-4">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <div class="position-relative">
            <div class="image-wrapper">
              <img
                :src="item.url1"
                class="card-img-top h-75 w-75"
                alt="Product Image"
              />
              <div class="remove-icon" @click="removeFromCart(index)">
                &times;
              </div>
            </div>
            <div class="d-flex gap-3 pt-2" style="font-size: 10px;">
              <div>{{ item.name.toUpperCase() }}</div>
              <div>{{ item.size }} | {{ item.color.toUpperCase() }}</div>
            </div>
            <p class="pt-1" style="font-size: 13px;">₹{{ item.price }}.00</p>

            <div class="d-flex gap-4 align-items-center">
              <div
                @click="decreaseQty(index)"
                style="cursor: pointer; width: 20px; text-align: center;"
              >
                -
              </div>
              <span>{{ item.qty }}</span>
              <div
                @click="increaseQty(index)"
                style="cursor: pointer; width: 20px; text-align: center;"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-summary mt-5 border-top pt-4">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-4">
          <div style="max-width: 500px;">
            <p style="font-size: 12px; margin-bottom: 10px;">
              By continuing, I declare that I have read and accept the
              <strong>Purchase Conditions</strong> and understand Zara's
              <strong>Privacy and Cookie Policy</strong>.
            </p>
            <div class="d-flex align-items-center gap-2">
              <p style="margin: 0; font-size: 14px;">Is your order a gift?</p>
              <button class="btn btn-outline-dark btn-sm px-3">Add</button>
            </div>
          </div>
          <div class="text-end" style="min-width: 200px;">
            <p class="m-0" style="font-weight: bold;">TOTAL</p>
            <p class="m-0">₹{{ total }}.00</p>
            <p class="text-muted m-0" style="font-size: 12px;">Including GST</p>
            <p class="text-muted" style="font-size: 12px;">* excl Shipping cost</p>
            <button class="btn btn-dark mt-2 px-4" @click="payNow">CONTINUE</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="" style="font-family: poppins; font-size: 12px;">
      <p class="">YOUR BAG IS EMPTY</p>
      <P>The item you add will be shown here</P>
      <router-link to="/" class="btn btn-dark">GO SHOPPING</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const cartItems = ref([])
const router = useRouter()

onMounted(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || []
  cartItems.value = storedCart.map(item => ({...item, qty: item.qty || 1,
  }))
})

const increaseQty = (index) => {
  cartItems.value[index].qty++
  saveCart()
}

const decreaseQty = (index) => {
  if (cartItems.value[index].qty > 1) {
    cartItems.value[index].qty--
    saveCart()
  }
}

const removeFromCart = (index) => {
  cartItems.value.splice(index, 1)
  saveCart()
}
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
}

const total = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0)
)
const payNow = () => {
  localStorage.setItem('totalPrice', total.value)
  router.push({ name: 'cart-payment' })
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}

.image-wrapper {
  position: relative;
  display: inline-block;
}

.remove-icon {
  position: absolute;
  left: 63%;
  font-weight: 300;
  top: 1px;
  font-size: 25px;
  color: black;
  width: 20px;
  height: 12px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .remove-icon {
  opacity: 1;
}

.footer-summary {
  border-top: 1px solid #ccc;
  padding-top: 1.5rem;
  margin-top: 2rem;
}
</style>
