<template>
  <div class="container py-5" style="font-family: poppins;">


    <div class="card p-4 shadow-lg mx-auto" style="max-width: 600px;">
      <h3 class="text-center mb-4">🧾 Cart Payment</h3>

      <div class="mb-3">
        <h5>🛒 Cart Summary:</h5>
        <ul class="list-group mb-3">
          <li v-for="(item, index) in cartItems" :key="index" class="list-group-item d-flex justify-content-between">
            <span>{{ item.name || 'Shirt' }} (₹{{ item.price }})</span>
            <span>₹{{ item.price }}</span>
          </li>
        </ul>
        <h5>Total: ₹{{ total }}</h5>
      </div>

      <div class="mb-3">
        <div class="payment-type fs-5">Choose Payment Type</div>
        <button 
          class="btn btn-outline-primary me-2 mb-2"
          @click="paymentMethod = 'credit'"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/1200px-Rupay-Logo.png" width="50" class="me-1" />
        </button>
        <button 
          class="btn btn-outline-warning me-2 mb-2"
          :class="{ active: paymentMethod === 'mastercard' }"
          @click="paymentMethod = 'mastercard'"
        >
          <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" width="28" class="me-1" />
          MasterCard
        </button>
        <button 
          class="btn btn-outline-success mb-2"
          :class="{ active: paymentMethod === 'upi' }"
          @click="paymentMethod = 'upi'"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png?20221017164555" width="40" class="me-1" />
          UPI
        </button>
      </div>

      <form @submit.prevent="makePayment">
        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input v-model="name" type="text" class="form-control" required />
        </div>

        <div v-if="paymentMethod === 'credit' || paymentMethod === 'mastercard'">
          <div class="mb-3">
            <label class="form-label">Card Number</label>
            <input v-model="cardNumber" type="text" class="form-control" maxlength="16" required />
          </div>
          <div class="d-flex gap-2">
            <div class="mb-3 flex-fill">
              <label class="form-label">Expiry (MM/YY)</label>
              <input v-model="expiry" type="text" class="form-control" maxlength="5" required />
            </div>
            <div class="mb-3 flex-fill">
              <label class="form-label">CVV</label>
              <input v-model="cvv" type="text" class="form-control" maxlength="3" required />
            </div>
          </div>
        </div>

        <div v-if="paymentMethod === 'upi'">
          <div class="mb-3">
            <label class="form-label">UPI ID</label>
            <input v-model="upiId" type="text" class="form-control" placeholder="example@upi" required />
          </div>
        </div>

        <button class="btn btn-success w-100" type="submit">Pay ₹{{ total }}</button>
      </form>

      <router-link to="/" class="btn btn-link mt-3 d-block text-center">← Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const cardNumber = ref('')
const expiry = ref('')
const cvv = ref('')
const upiId = ref('')
const paymentMethod = ref('credit')
const cartItems = ref([])
const total = ref(0)

const flip = () => {
  document.getElementById("card").classList.toggle("flipped");
  document.querySelector("#front .reflection").classList.toggle("move");
  document.querySelector("#back .reflection").classList.toggle("move");
}

onMounted(() => {
  cartItems.value = JSON.parse(localStorage.getItem('cart')) || []
  total.value = parseInt(localStorage.getItem('totalPrice')) || 0

  const showBtn = document.getElementById("show-btn")
  const hideBtn = document.getElementById("hide-btn")

  if (showBtn) showBtn.addEventListener("click", flip)
  if (hideBtn) hideBtn.addEventListener("click", flip)
})

const makePayment = () => {
  if (!name.value.trim()) {
    alert('⚠️ Please enter your full name.')
    return
  }

  if (paymentMethod.value === 'credit' || paymentMethod.value === 'mastercard') {
    if (
      cardNumber.value.length !== 16 ||
      !/^\d{2}\/\d{2}$/.test(expiry.value) ||
      cvv.value.length !== 3
    ) {
      alert('⚠️ Please enter valid card details.')
      return
    }
  } else if (paymentMethod.value === 'upi') {
    if (!upiId.value.includes('@')) {
      alert('⚠️ Please enter a valid UPI ID.')
      return
    }
  }

  localStorage.removeItem('cart')
  localStorage.removeItem('totalPrice')
  router.push('/payment-success')
}
</script>

<style scoped>
/* Keep all your existing styles exactly as you have written */
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Jaro:opsz@6..72&family=Poppins&display=swap');

/* ... keep the rest of your CSS styles from your code */
</style>
