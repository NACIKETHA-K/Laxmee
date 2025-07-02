<template>
  <div class="container py-5" style="font-family: poppins;">

    <div id="main-container">
  <div id="card-container">
    <div id="card">
      <div id="front">
        <div class="reflection"></div>
        <div class="type">PLATINUM</div>
        <div class="title-text">INDIAN BANK</div>
        <div class="details">
          <div class="name">Naciketha Karunanithi</div>
          <p id="hidden-number">830110 11000 9796</p>
        </div>
        <button id="show-btn">View Card Details</button>
        <div class="logo">MasterCard</div>
      </div>
      <div id="back">
        <div class="reflection"></div>
        <div id="chip">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="title-text">INDIAN BANK</div>
        <div class="details">
          <div class="name">Naciketha Karunanithi</div>
          <p id="hidden-number">1111 1223 1223 1452</p>
          <span id="cvv">CW: 482</span>
          <span id="valid-date"> Expiry: 07/35</span>
        </div>
        <button id="hide-btn">Hide Card Details</button>
        <div class="logo">MasterCard</div>
      </div>
    </div>
  </div>
</div>


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
      <!--     under construction     -start  -->

      <div class="mb-3">
        <div class="payment-type fs-5 ">Choose Payment Type</div>
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

      <!--     under construction     -end  -->

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

        <!-- UPI -->
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

onMounted(() => {
  
  cartItems.value = JSON.parse(localStorage.getItem('cart')) || []
  total.value = parseInt(localStorage.getItem('totalPrice')) || 0
})
flip = () => {
  document.getElementById("card").classList.toggle("flipped");
  document.querySelector("#front .reflection").classList.toggle("move");
  document.querySelector("#back .reflection").classList.toggle("move");
};
document.getElementById("show-btn").addEventListener("click", flip);
document.getElementById("hide-btn").addEventListener("click", flip);




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

@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Jaro:opsz@6..72&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  font-family: "Fjalla One";  
}

#main-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#card-container {
  width: 350px;
  height: 190px;
  perspective: 1000px;
  border-radius: 10px;
}

#card {
  width: 100%;
  height: 100%;
  color: white;
  transition: 1s;
  position: relative;
  border-radius: 10px;
  perspective: 1000px;
  transform-style: preserve-3d;
}

#front,
#back {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  border-radius: 10px;
  backface-visibility: hidden;
  background: linear-gradient(55deg, #0b0b0bfc 45%, rgb(25 25 25) 40%);
}

#back {
  transform: rotateY(180deg);
}

#front::after,
#front::before,
#back::after,
#back::before {
  content: "";
  width: 100%;
  height: 350px;
  position: absolute;
}

#front::before,
#back::before {
  left: -1%;
  transform: rotate(90deg);
  border-radius: 50% 95% 0% 100%;
  background: rgb(255 255 255 / 3%);
}

#front::after,
#back::after {
  height: 100%;
  right: -50%;
  top: -50%;
  border-radius: 100% 0 100% 80%;
  border: 1px solid rgb(239, 239, 239);
}

.type {
  position: relative;
  top: 10%;
  margin-left: 15px;
  font-weight: bold;
  background: linear-gradient(62deg, #ffffff 0%, #000000 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.title-text {
  position: absolute;
  right: 5%;
  top: 5%;
}

.details {
  position: relative;
  top: 35%;
  margin-left: 15px;
  font-size: 12px;
}

#hidden-number {
  margin-bottom: 10px;
}

#valid-date {
  margin-left: 15px;
}

#show-btn,
#hide-btn {
  position: absolute;
  bottom: 10%;
  left: 5%;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
  font-family: calibri;
  background: rgb(28, 28, 107);
}

.logo {
  position: absolute;
  font-size: 10px;
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  bottom: 3%;
  right: 0%;
}

.logo::before,
.logo::after {
  content: "";
  position: absolute;
  width: 50%;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.logo::before {
  background: rgba(255, 0, 0, 0.614);
  left: 10%;
}

.logo::after {
  background: rgba(255, 213, 0, 0.584);
  right: 10%;
}

.flipped {
  transform: rotateY(-180deg);
}

#chip {
  top: 10%;
  position: absolute;
  background: #e0ab89;
  width: 15%;
  height: 18%;
  border-radius: 5px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#chip span {
  position: absolute;
  background: #e0ab89;
  border: 1px solid black;
}

#chip span:nth-child(1) {
  height: 100%;
  width: 40%;
  border-top: none;
  border-bottom: none;
}

#chip span:nth-child(2) {
  height: 60%;
  width: 40%;
  left: 0;
  border-left: none;
  border-radius: 0 5px 5px 0;
}

#chip span:nth-child(3) {
  height: 60%;
  width: 40%;
  border-right: none;
  border-radius: 5px 0 0 5px;
  right: 0;
}

#chip span:nth-child(4) {
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
}

#chip span:nth-child(5) {
  aspect-ratio: 1/1;
  width: 25%;
  border-radius: 2px;
}

.reflection {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 1s;
}

.reflection::before {
  z-index: 0;
  top: 50%;
  content: "";
  left: -50%;
  height: 360px;
  position: absolute;
  background: #ffffff;
  transform: translate(-50%, -50%) rotate(50deg);
  box-shadow: 0px 0px 10px 10px #ffffff;
}

.move {
  transform: translateX(700px);
}



</style>
