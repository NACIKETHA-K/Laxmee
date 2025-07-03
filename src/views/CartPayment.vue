<template>
  <div class="payment-page-container">
    <div class="top-banner-container">
      <img src="https://dashboard.ccavenue.com/ImgStore/Images/214507_LookNFeel_738403d3-aef1-411a-bf14-4b71a667ba87.png" alt="Pay with ZAAPAPP and Grab an Assured ₹100 SWIGGY Voucher" class="img-fluid w-100">
    </div>

    <div class="transaction-timeout-bar d-flex justify-content-center py-2 px-4 text-white">
      <span class="ms-3">Transaction times out in <span class="fw-bold">{{ formattedTime }}</span> mins</span>
    </div>

    <div class="container py-4 py-md-5">
      <div class="row g-4">
        <div class="col-md-7">
          <div class="payment-information-panel p-3 p-md-4">
            <h5 class="mb-3 mb-md-4 payment-section-title">Payment Information</h5>

            <div class="d-flex flex-column flex-md-row mb-3">
              <div class="nav nav-pills me-md-3 mb-3 mb-md-0 payment-tabs d-flex flex-row flex-md-column overflow-auto" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="flex-grow-1 nav-link active" id="v-pills-credit-tab" data-bs-toggle="pill" data-bs-target="#v-pills-credit" type="button" role="tab" aria-controls="v-pills-credit" aria-selected="true">Credit Card</button>
                <button class="flex-grow-1 nav-link" id="v-pills-debit-tab" data-bs-toggle="pill" data-bs-target="#v-pills-debit" type="button" role="tab" aria-controls="v-pills-debit" aria-selected="false">Debit Cards</button>
                <button class="flex-grow-1 nav-link" id="v-pills-upi-tab" data-bs-toggle="pill" data-bs-target="#v-pills-upi" type="button" role="tab" aria-controls="v-pills-upi" aria-selected="false">UPI</button>
              </div>

              <div class="tab-content flex-grow-1 payment-content-area" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-credit" role="tabpanel" aria-labelledby="v-pills-credit-tab">
                  <div class="d-flex align-items-center mb-3 card-types">
                    <span>We Accept :</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" class="card-logo ms-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" class="card-logo ms-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/375px-RuPay.svg.png" alt="RuPay" class="card-logo ms-2">
                  </div>

                  <div class="mb-3">
                    <label for="creditCardNumber" class="form-label fw-bold">Card Number</label>
                    <input type="text" class="form-control" id="creditCardNumber" placeholder="Card Number">
                  </div>

                  <div class="row mb-3">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <label for="creditExpiryMonth" class="form-label">Expiry Date</label>
                      <div class="d-flex">
                        <select class="form-select me-2" id="creditExpiryMonth">
                          <option value="" disabled selected>Month</option>
                          <option v-for="month in 12" :key="month" :value="month">{{ month.toString().padStart(2, '0') }}</option>
                        </select>
                        <select class="form-select" id="creditExpiryYear">
                          <option value="" disabled selected>Year</option>
                          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="creditCvv" class="form-label">CVV</label>
                      <div class="input-group">
                        <input type="text" class="form-control" id="creditCvv" placeholder="CVV">
                        <span class="input-group-text cvv-hint">
                          <img src="https://cdn-icons-png.flaticon.com/512/3716/3716801.png" alt="CVV Hint" style="width: 20px; height: 15px;">
                        </span>
                      </div>
                    </div>
                  </div>

                  <p class="privacy-policy-text">
                    I agree with the <a href="#" class="privacy-policy-link">Privacy Policy</a> by proceeding with this payment.
                  </p>

                  <div class="total-amount-display my-4">
                    INR {{ totalPrice.toFixed(2) }} <span class="total-payable-text">(Total Amount Payable)</span>
                  </div>

                  <button class="btn btn-success w-100 make-payment-btn mb-2" @click="makePayment">Make Payment</button>
                  <button class="btn btn-link text-muted w-100 cancel-btn" @click="cancelPayment">Cancel</button>
                </div>

                <div class="tab-pane fade" id="v-pills-debit" role="tabpanel" aria-labelledby="v-pills-debit-tab">
                  <div class="mb-3">
                    <label for="debitCardNumber" class="form-label fw-bold">Card Number</label>
                    <input type="text" class="form-control" id="debitCardNumber" placeholder="Card Number">
                  </div>

                  <div class="row mb-3">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <label for="debitExpiryMonth" class="form-label">Expiry Date</label>
                      <div class="d-flex">
                        <select class="form-select me-2" id="debitExpiryMonth">
                          <option value="" disabled selected>Month</option>
                          <option v-for="month in 12" :key="month" :value="month">{{ month.toString().padStart(2, '0') }}</option>
                        </select>
                        <select class="form-select" id="debitExpiryYear">
                          <option value="" disabled selected>Year</option>
                          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="debitCvv" class="form-label">CVV</label>
                      <div class="input-group">
                        <input type="text" class="form-control" id="debitCvv" placeholder="CVV">
                        <span class="input-group-text cvv-hint">
                          <img src="https://cdn-icons-png.flaticon.com/512/3716/3716801.png" alt="CVV Hint" style="width: 20px; height: 15px;">
                        </span>
                      </div>
                    </div>
                  </div>

                  <p class="privacy-policy-text">
                    I agree with the <a href="#" class="privacy-policy-link">Privacy Policy</a> by proceeding with this payment.
                  </p>

                  <div class="total-amount-display my-4">
                    INR {{ totalPrice.toFixed(2) }} <span class="total-payable-text">(Total Amount Payable)</span>
                  </div>

                  <button class="btn btn-success w-100 make-payment-btn mb-2" @click="makePayment">Make Payment</button>
                  <button class="btn btn-link text-muted w-100 cancel-btn" @click="cancelPayment">Cancel</button>
                </div>

                <div class="tab-pane fade" id="v-pills-upi" role="tabpanel" aria-labelledby="v-pills-upi-tab">
                  <div class="upi-qr-section p-3 mb-3 border rounded">
                    <div class="d-flex align-items-center mb-3">
                      <img src="https://img.icons8.com/color/512/bhim.png" alt="UPI Logo" class="upi-logo me-2">
                      <h6 class="mb-0">Pay through UPI QR Code</h6>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-Vector.svg/1200px-UPI-Logo-Vector.svg.png" alt="BHIM UPI" class="ms-auto upi-header-logo">
                    </div>
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="qr-code-placeholder d-flex flex-column align-items-center justify-content-center border rounded p-2">
                          <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/qr_code_icon.png" alt="QR Code" style="width: 100px; height: 100px;">
                          <button class="btn btn-sm btn-success mt-2">Generate QR</button>
                        </div>
                      </div>
                      <div class="col">
                        <p class="scan-and-pay-text mb-2">Scan the QR code using any UPI app on your phone</p>
                        <div class="upi-apps-logos d-flex flex-wrap gap-2">
                          <img src="https://lh6.ggpht.com/rGCJgNVPB-osrt52EGg4XM2njJLtrtfCEom7eqq0hKIf9e2gziiHWrXtLqBRGq-t95tJzFJgRA" alt="Google Pay" class="upi-app-logo">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/300px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" class="upi-app-logo">
                          <img src="https://www.phonepe.com/webstatic/10928/static/2a45180808d78ef097db0118995d3f7c/77401/photo.webp" alt="PhonePe" class="upi-app-logo">
                          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/BHIM_SVG_Logo.svg/500px-BHIM_SVG_Logo.svg.png" alt="BHIM UPI" class="upi-app-logo">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-center my-3 or-separator">OR</div>

                  <div class="upi-id-section p-3 mb-3 border rounded">
                    <div class="d-flex align-items-center mb-3">
                      <img src="https://img.icons8.com/color/512/bhim.png" alt="UPI Logo" class="upi-logo me-2">
                      <h6 class="mb-0">Pay through UPI ID</h6>
                    </div>
                    <div class="mb-3">
                      <label for="upiIdInput" class="form-label visually-hidden">UPI ID / Mobile No.</label>
                      <input type="text" class="form-control" id="upiIdInput" placeholder="Ex: yourname@bankname">
                    </div>
                    <a href="#" class="verify-vpa-link">Verify VPA</a>
                  </div>

                  <div class="upi-down-message text-danger mt-3">
                    UPI payment option is temporarily down. Please select another payment option.
                  </div>

                  <p class="privacy-policy-text mt-4">
                    I agree with the <a href="#" class="privacy-policy-link">Privacy Policy</a> by proceeding with this payment.
                  </p>

                  <div class="total-amount-display my-4">
                    INR {{ totalPrice.toFixed(2) }} <span class="total-payable-text">(Total Amount Payable)</span>
                  </div>

                  <button class="btn btn-success w-100 make-payment-btn mb-2" @click="makePayment">Make Payment</button>
                  <button class="btn btn-link text-muted w-100 cancel-btn" @click="cancelPayment">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="order-details-panel p-3 p-md-4 border bg-white">
            <h5 class="mb-3 mb-md-4 order-details-title">ORDER DETAILS</h5>
            <div class="d-flex justify-content-between mb-2">
              <span class="detail-label">Order #:</span>
              <span class="detail-value">{{ orderId }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="detail-label">Order Amount:</span>
              <span class="detail-value">INR {{ (totalPrice * 0.95).toFixed(2) }}</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
              <span class="total-label">Total Amount</span>
              <span class="final-total-amount">INR {{ totalPrice.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="payment-footer d-flex flex-column flex-md-row justify-content-between align-items-center py-3 px-4">
      <div class="powered-by d-flex mb-2 mb-md-0">
        <span class="text-muted">Powered By</span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/375px-HDFC_Bank_Logo.svg.png" alt="HDFC Bank" class="hdfc-logo ms-2">
      </div>
      <div class="card-security-logos d-flex gap-1">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" alt="Mastercard Secure" class="security-logo me-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/500px-Visa_2021.svg.png" alt="Visa Secure" class="security-logo me-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1920px-RuPay.svg.png" alt="RuPay Secure" class="security-logo me-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Norton-logo-2021.svg/1920px-Norton-logo-2021.svg.png" alt="Norton Security" class="security-logo">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const totalPrice = ref(0);
const orderId = ref('');
const timeLeft = ref(308);
let timerInterval = null;

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

const currentYear = new Date().getFullYear();
const years = computed(() => {
  const yearsArray = [];
  for (let i = 0; i <= 10; i++) {
    yearsArray.push(currentYear + i);
  }
  return yearsArray;
});

onMounted(() => {
  const storedTotalPrice = localStorage.getItem('totalPrice');
  if (storedTotalPrice) {
    totalPrice.value = parseFloat(storedTotalPrice);
  } else {
    router.push('/');
  }
  orderId.value = '4268325161';
  startTimer();
});

onUnmounted(() => {
  clearInterval(timerInterval);
});

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timerInterval);
      alert('Transaction time has expired!');
      router.push('/');
    }
  }, 1000);
};

const makePayment = () => {
  alert('Payment initiated! (This is a placeholder)');
  clearInterval(timerInterval);
  router.push({ name: 'payment-success' });
};

const cancelPayment = () => {
  clearInterval(timerInterval);
  router.push({ name: 'Cart' });
};
</script>

<style scoped>
.payment-page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}

.top-banner-container {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.top-banner-container img {
  display: block;
}

.transaction-timeout-bar {
  background-color: #5cb85c;
  color: white;
  font-size: 0.9rem;
}

.payment-information-panel,
.order-details-panel {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.payment-section-title,
.order-details-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
}

.payment-tabs {
  border-right: 1px solid #dee2e6;
  min-width: 150px;
}

.payment-tabs .nav-link {
  background-color: #f0f0f0;
  border: none;
  border-radius: 0;
  color: #333;
  text-align: left;
  padding: 12px 15px;
  margin-bottom: 1px;
  font-size: 0.95rem;
  transition: all 0.2s ease-in-out;
}

.payment-tabs .nav-link:hover:not(.active) {
  background-color: #e2e6ea;
}

.payment-tabs .nav-link.active {
  background-color: #5cb85c;
  color: white;
  font-weight: bold;
  border-right: 3px solid #5cb85c;
  position: relative;
  z-index: 1;
}

.payment-content-area {
  border: 1px solid #dee2e6;
  border-left: none;
  padding: 20px;
  border-radius: 0 5px 5px 0;
}

@media (max-width: 767.98px) {
  .payment-tabs {
    flex-direction: row !important;
    border-right: none;
    border-bottom: 1px solid #dee2e6;
    margin-bottom: 1rem !important;
    width: 100%;
    min-width: unset;
    flex-wrap: nowrap;
  }
  .payment-tabs .nav-link {
    text-align: center;
    border-radius: 5px 5px 0 0;
    margin-right: 5px;
    margin-bottom: 0;
    padding: 10px 15px;
    flex-shrink: 0;
  }
  .payment-tabs .nav-link.active {
    border-right: none;
    border-bottom: 3px solid #5cb85c;
    background-color: #e9ecef;
    color: #333;
  }
  .payment-content-area {
    border-left: 1px solid #dee2e6;
    border-radius: 0 0 5px 5px;
  }
  .payment-footer {
    flex-direction: column;
    text-align: center;
  }
  .powered-by {
    margin-bottom: 0.5rem !important;
  }
  .container {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.card-types {
  font-size: 0.9rem;
  color: #555;
}

.card-types .card-logo {
  height: 20px;
  margin-left: 5px;
}

.form-label.fw-bold {
    font-weight: bold;
}

.form-control,
.form-select {
  border-radius: 3px;
  border-color: #ced4da;
}

.cvv-hint {
  background-color: #e9ecef;
  border-left: none;
  border-radius: 0 3px 3px 0;
}

.privacy-policy-text {
  font-size: 0.85rem;
  color: #555;
}

.privacy-policy-link {
  color: #007bff;
  text-decoration: none;
}

.privacy-policy-link:hover {
  text-decoration: underline;
}

.total-amount-display {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

.total-payable-text {
  font-size: 0.9rem;
  font-weight: normal;
  color: #777;
}

.make-payment-btn {
  background-color: #5cb85c;
  border-color: #5cb85c;
  font-size: 1rem;
  padding: 10px 0;
  border-radius: 3px;
}

.make-payment-btn:hover {
  background-color: #4cae4c;
  border-color: #4cae4c;
}

.cancel-btn {
  font-size: 0.9rem;
  color: #6c757d !important;
  text-decoration: none;
}

.cancel-btn:hover {
  text-decoration: underline;
}

.order-details-panel {
  border: 1px solid #e0e0e0;
}

.detail-label {
  font-size: 0.9rem;
  color: #555;
}

.detail-value {
  font-size: 0.95rem;
  font-weight: bold;
}

.final-total-amount {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
}

.payment-footer {
  background-color: #f0f0f0;
  border-top: 1px solid #e0e0e0;
  margin-top: auto;
}

.powered-by img.hdfc-logo {
  height: 30px;
  vertical-align: middle;
}

.card-security-logos img.security-logo {
  height: 25px;
  opacity: 0.7;
}

.upi-logo {
  height: 25px;
  vertical-align: middle;
}

.upi-header-logo {
    height: 20px;
}

.upi-qr-section,
.upi-id-section {
  border-color: #e0e0e0 !important;
}

.qr-code-placeholder {
  width: 120px;
  height: 120px;
  background-color: #f8f9fa;
  border: 1px dashed #ced4da;
  font-size: 0.8rem;
  color: #6c757d;
}

.scan-and-pay-text {
  font-size: 0.9rem;
  color: #555;
}

.upi-apps-logos img.upi-app-logo {
  height: 30px;
  margin-right: 5px;
}

.or-separator {
  position: relative;
  font-size: 0.9rem;
  color: #888;
}
.or-separator::before,
.or-separator::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background: #ddd;
}
.or-separator::before {
  left: 0;
}
.or-separator::after {
  right: 0;
}

.verify-vpa-link {
  font-size: 0.85rem;
  color: #007bff;
  text-decoration: none;
}
.verify-vpa-link:hover {
  text-decoration: underline;
}

.upi-down-message {
  font-size: 0.9rem;
  font-weight: bold;
}
</style>