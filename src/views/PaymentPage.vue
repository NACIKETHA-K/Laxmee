<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light" style="font-family: 'Poppins', sans-serif;">
    <div>
      <img :src="paymentGif" @load="handleGifLoad" ref="gifElement" class="payment-gif" />
    </div>
    <div v-if="showMessage" class="animate__animated animate__fadeIn mt-4">
      <h2 class="text-success fw-bold">Payment Successful!</h2>
      <p class="text-muted">Thank you for your purchase.</p>
      <router-link to="/" class="back-btn mt-3">← Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const paymentGif = 'payment.gif' // Replace with your actual GIF path
const showMessage = ref(false)
const gifElement = ref(null)

function handleGifLoad() {
  setTimeout(() => {
    showMessage.value = true
  }, 3000) // Adjust to match your GIF duration
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.payment-gif {
  width: 180px;
  height: auto;
}

.back-btn {
  display: inline-block;
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.back-btn:hover {
  background-color: #333;
  transform: scale(1.05);
}
</style>
