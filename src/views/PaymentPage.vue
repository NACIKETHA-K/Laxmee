<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
    <div class="">
      <span class="checkmark">✅</span>
    </div>
    <h2 class="text-success">🎉 Payment Successful!</h2>
    <p class="text-muted">Thank you for your purchase.</p>
    <router-link to="/" class="btn btn-primary mt-3">← Back to Home</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.success-circle {
  width: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pop 0.4s ease-out;
}

.checkmark {
  font-size: 60px;
  color: white;
  animation: bounce 0.4s ease-out;
}

@keyframes pop {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
