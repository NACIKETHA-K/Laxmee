<template>
  <div class="about">
    <div class="container my-4">
      <div class="row g-4">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(item, index) in shirts"
          :key="item.id"
        >
          <div class="position-relative overflow-hidden">
            <img
              :src="hoveredIndex === index ? item.url2 || item.url1 : item.url1"
              class="card-img-top h-75"
              alt="Shirt Image"
              style="height: 250px; object-fit: cover; cursor: pointer;"
              @click="goToProductDetail(item)"
              @mouseover="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            />
            <div class="dtbox d-flex justify-content-between py-2">
              <div class="prname">{{ item.name }}</div>
              <div class="rate">₹{{ item.price }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const hoveredIndex = ref(null)

const shirts = ref([
  {
    id: 1,
    price: 1600,
    name: "Slim Fit Plain Sage Green Shirt",
    url1: 'https://static.zara.net/assets/public/d39d/38b9/43e44a8d9ae5/8ffe466216fb/02731105800-a2/02731105800-a2.jpg?ts=1748526641421&w=750',
    url2: 'https://static.zara.net/assets/public/aa47/4a36/35ec4a10a5de/336b43ab679c/02731105800-a1/02731105800-a1.jpg?ts=1748526642735&w=1126',
    url3: 'https://static.zara.net/assets/public/ab84/d0fd/fede46c18a55/4af376a7168a/02731105800-p/02731105800-p.jpg?ts=1748526641341&w=1024'
  },
  {
    id: 2,
    price: 1600,
    name: "PRINTED SHIRT",
    url1: 'https://static.zara.net/assets/public/483c/e165/38644d7996a9/8258769b7910/03664836061-a1/03664836061-a1.jpg?ts=1749115411017&w=1126',
    url2: 'https://static.zara.net/assets/public/139b/e77a/c42242e2a0fb/f4a20f940dfa/03664836061-a2/03664836061-a2.jpg?ts=1749115417310&w=750',
    url3: 'https://static.zara.net/assets/public/27a3/fe1e/34b74bf295a3/2a2c4b6c899f/03664836061-p/03664836061-p.jpg?ts=1749115418428&w=1024'
  },
  {
    id: 3,
    price:  2950,
    name: "TROPICAL PRINT BLOUSE",
    url1: 'https://static.zara.net/assets/public/f6ef/598b/1a3544aebc09/c5a299c577c0/02298090080-a1/02298090080-a1.jpg?ts=1749035440373&w=1126',
    url2: 'https://static.zara.net/assets/public/58a2/90ed/92694413bb24/597406793e52/02298090080-a2/02298090080-a2.jpg?ts=1749035439481&w=750',
    url3: 'https://static.zara.net/assets/public/1e7c/7e2a/07104f308a21/fae441a8e8c7/02298090080-p/02298090080-p.jpg?ts=1749035445898&w=1024'
  },
  {
    id: 4,
    price: 1900,
    name: "STRIPED SHIRT WITH TIES",
    url1: 'https://static.zara.net/assets/public/2370/7f20/3bff4385a2bf/61df782743cb/03552157712-a1/03552157712-a1.jpg?ts=1749115384647&w=1126',
    url2: 'https://static.zara.net/assets/public/8891/9d07/8a5544acbb7d/89567193e18e/03552157712-a3/03552157712-a3.jpg?ts=1749115384517&w=750',
    url3: 'https://static.zara.net/assets/public/8cf5/929f/d06246beb285/169dc2d48864/03552157712-p/03552157712-p.jpg?ts=1749115385356&w=1024'
  },
  {
    id: 5,
    price: 2000,
    name: "ANIMAL PRINT SHOULDER",
    url1: 'https://static.zara.net/assets/public/7087/1960/b92a48e7b7be/a56259dfe96d/03826840121-a1/03826840121-a1.jpg?ts=1749470303917&w=1126',
    url2: 'https://static.zara.net/assets/public/bb7c/2734/b5774a40bf13/22619cc1566c/03826840121-a2/03826840121-a2.jpg?ts=1749470301827&w=750',
    url3: 'https://static.zara.net/assets/public/de33/384c/95bc4c08aa7d/1b6fa4b2baa9/03826840121-p/03826840121-p.jpg?ts=1749470302075&w=1024'
  },
  {
    id: 6,
    price: 2600,
    name: "SEMI-SHEER BLOUSE",
    url1: 'https://static.zara.net/assets/public/cb82/038d/5e124ca1b387/4d7822d851aa/02298111800-a1/02298111800-a1.jpg?ts=1749124423112&w=1126',
    url2: 'https://static.zara.net/assets/public/eb72/dc4a/1e5644af8c7b/37df621bd55a/02298111800-a3/02298111800-a3.jpg?ts=1749124422734&w=750',
    url3: 'https://static.zara.net/assets/public/80a9/7b2e/476242a5b8f6/537d79accf93/02298111800-p/02298111800-p.jpg?ts=1749124427917&w=1024'
  },
  {
    id: 7,
    price: 1950,
    name: "STRIPED LINEN BLEND BLOUSE",
    url1: 'https://static.zara.net/assets/public/c142/13a1/743643698528/b86c75cbcec4/03464665108-a1/03464665108-a1.jpg?ts=1747738942569&w=1126',
    url2: 'https://static.zara.net/assets/public/e367/8267/28a34a178971/276f336b00b5/03464665108-a2/03464665108-a2.jpg?ts=1747738942544&w=750',
    url3: 'https://static.zara.net/assets/public/e6bf/344a/d895433cbae0/14d229f38dac/03464665108-p/03464665108-p.jpg?ts=1747738942559&w=1024'
  },
  {
    id: 8,
    price: 1600,
    name: "Slim Fit Plain Sage Green Shirt",
    url1: 'https://static.zara.net/assets/public/89b8/b6c1/a6354c8f967a/88995cca6bf6/02731046800-a3/02731046800-a3.jpg?ts=1739443112507&w=750',
    url2: 'https://static.zara.net/assets/public/25cb/5d87/709946b5ae29/a9a9a92f5124/02731046800-a1/02731046800-a1.jpg?ts=1739443114889&w=1126',
    url3: 'https://static.zara.net/assets/public/d0fa/3c20/e83f4d62a2a9/533e29e2b1d7/02731046800-p/02731046800-p.jpg?ts=1739443113715&w=1920'
  },
  
])

const goToProductDetail = (item) => {
  localStorage.setItem('shirt', JSON.stringify(item))
  router.push({ name: 'productdetail', params: { id: item.id } })
}
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.card-img-top {
  border-radius: 15px;
  width: 100%;
  transition: 0.3s ease-in-out;
}

.dtbox {
  font-size: 12px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
}
</style>
