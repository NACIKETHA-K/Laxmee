<template>
  <div class="container py-5">
    <div class="mb-4 bag-header" style="font-family: poppins; margin-top: 60px;">[ BAG ]</div>

    <div v-if="cartItems.length > 0">
      <div class="row">
        <div class="col-md-8">
          <div class="cart-items-list">
            <div
              class="d-flex align-items-center justify-content-between mb-4 pb-4 border-bottom"
              v-for="(item, index) in cartItems"
              :key="index"
            >
              <div class="d-flex align-items-start">
                <img
                  :src="item.url1"
                  class="product-thumbnail me-3"
                  alt="Product Image"
                />
                <div>
                  <div class="product-name">{{ item.name.toUpperCase() }}</div>
                  <div class="product-variant">{{ item.color.toUpperCase() }} / {{ item.size }}</div>
                  <div class="quantity-control d-flex align-items-center mt-2">
                    <button class="qty-btn " @click="decreaseQty(index)">-</button>
                    <span class="qty-display">{{ item.qty }}</span>
                    <button class="qty-btn" @click="increaseQty(index)">+</button>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column align-items-end">
                <div class="product-price mb-2">R$ {{ item.price.toFixed(2).replace('.', ',') }}</div>
                <button class="remove-product-btn" @click="removeFromCart(index)">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="order-summary-panel p-4 border bg-light">
            <h5 class="mb-4">Order Summary</h5>
            <div class="mb-3 d-flex align-items-center">
              <input type="text" class="form-control me-2" placeholder="Discount Coupon">
              <button class="btn btn-outline-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </button>
            </div>
            <hr>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="total-label">Total</span>
              <span class="total-amount">R$ {{ total.toFixed(2).replace('.', ',') }}</span>
            </div>
            <button class="btn btn-dark w-100 mb-2" @click="payNow">Finalize Purchase</button>
            <button class="btn btn-link text-dark w-100 continue-shopping-link" @click="router.push('/')">Continue Shopping</button>
          </div>
        </div>
      </div>

      <div class="footer-policy-info mt-5 pt-4">
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

    </div>
    <div v-else class="empty-bag-message" style="font-family: poppins; font-size: 12px;">
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
  cartItems.value = storedCart.map(item => ({...item, qty: item.qty || 1}))
})

const increaseQty = (index) => {
  cartItems.value[index].qty++
  saveCart()
}

const decreaseQty = (index) => {
  if (cartItems.value[index].qty > 1) {
    cartItems.value[index].qty--
    saveCart()
  } else {
    removeFromCart(index);
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
.container {
  max-width: 1200px;
  font-family: poppins;
}

.bag-header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px !important;
}

.product-thumbnail {
  height: 70px;
  width: 70px;
  object-fit: cover;
}

.product-name {
  font-size: 0.9rem;
  font-weight: bold;
}

.product-variant {
  font-size: 0.8rem;
  color: #666;
}

.product-price {
  font-size: 1rem;
  font-weight: bold;
}

.quantity-control {
  gap: 5px;
}

.qty-btn {
  background-color: white;
  font-family: poppins;
  border: none;
  border-radius: 50%;
  color: #333;
  cursor: pointer;
}

.qty-btn:hover {
  background-color: #f0f0f0;
}

.qty-display {
  font-size: 0.9rem;
  min-width: 20px;
  text-align: center;
}

.remove-product-btn {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  color: #333;
  padding: 4px 12px;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
}

.remove-product-btn:hover {
  background-color: #e0e0e0;
  border-color: #ccc;
}

.order-summary-panel {
  border-radius: 0;
}

.order-summary-panel h5 {
  font-weight: bold;
  font-size: 1.1rem;
}

.order-summary-panel .form-control {
  border-radius: 0;
}

.order-summary-panel .btn {
  border-radius: 0;
  text-transform: uppercase;
}

.total-label {
  font-size: 1.2rem;
  font-weight: bold;
}

.total-amount {
  font-size: 1.3rem;
  font-weight: bold;
}

.continue-shopping-link {
  font-size: 0.9rem;
  text-decoration: underline;
}

.footer-policy-info {
}

.empty-bag-message {
  text-align: center;
  padding: 50px 0;
}
</style>