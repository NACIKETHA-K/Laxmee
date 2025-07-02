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
              class="card-img-top img-fluid h-100"
              alt="Shirt Image"
              style="height: 280px; object-fit: cover; cursor: pointer;"
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
    url1: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4050-05_1_e34938c4-9306-4ecd-ac30-2d4b0b53dd65.jpg?v=1747055491&quality=20',
    url2: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4050-05_6_4e8fce8b-16bf-444b-b8ba-81340d8b6ec9.jpg?v=1747055491&quality=20',
    url3: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4050-05_4_02100089-d807-4547-9e9b-b912f34d1dbc.jpg?v=1747055491&quality=20'
  },
  {
    id: 2,
    price: 1200,
    name: "Slim Fit Plain Black Shirt",
    url1: 'https://static.zara.net/assets/public/5935/4db3/3306435baf9d/2edb93b4a29d/04047476800-a1/04047476800-a1.jpg?ts=1732265080962&w=1126',
    url2: 'https://static.zara.net/assets/public/cab6/99a2/c5f545199d42/065f64be774e/04047476800-a4/04047476800-a4.jpg?ts=1732265081614&w=750',
    url3:"https://static.zara.net/assets/public/6f03/c60b/a358465a8038/82921d575a7d/04047476800-a3/04047476800-a3.jpg?ts=1732265080430&w=750"
  },
  {
    id: 3,
    price: 1300,
    name: "Slim Fit Stretch White Luxe Shirt",
    url1: 'https://static.zara.net/assets/public/6003/a256/3f1f43e58f45/f5552f2ec07d/07545710250-a1/07545710250-a1.jpg?ts=1727344940857&w=1126',
    url2: 'https://static.zara.net/assets/public/7551/57a7/04184959a5ff/51db470b53c2/07545710250-a4/07545710250-a4.jpg?ts=1727344951798&w=750',
    url3: 'https://static.zara.net/assets/public/938e/9006/ad23415cafd6/d49bc7a66263/07545710250-p/07545710250-p.jpg?ts=1727344818158&w=1024',
  },
  {
    id: 4,
    price: 1400,
    name: "LINEN/COTTON SHIRT",
    url1: 'https://static.zara.net/assets/public/c161/a3df/04c349e2a4ce/66eae59c6b5e/04840442800-a1/04840442800-a1.jpg?ts=1749022015061&w=1126',
    url2: 'https://static.zara.net/assets/public/b9f0/8769/9f114aa783d6/9ec81783e565/04840442800-a4/04840442800-a4.jpg?ts=1749022015483&w=750',
    url3: 'https://static.zara.net/assets/public/831e/984d/853d46d48baf/cb7ca0f56690/04840442800-a3/04840442800-a3.jpg?ts=1749022014846&w=750'
  },
  {
    id: 5,
    price: 1600,
    name: "CREASED-EFFECT SHIRT",
    url1: 'https://static.zara.net/assets/public/3090/189e/ae6f4f84a8aa/cca4370d065c/06103400700-a1/06103400700-a1.jpg?ts=1746458174728&w=1126',
    url2: 'https://static.zara.net/assets/public/41e3/4414/9e534519af7a/ef5f6f84212c/06103400700-a4/06103400700-a4.jpg?ts=1746538946001&w=750',
    url3: 'https://static.zara.net/assets/public/01ec/469c/7dc04bd3878a/8104ee4008c6/06103400700-a3/06103400700-a3.jpg?ts=1746538945848&w=750'
  },
  {
    id: 6,
    price: 1200,
    name: "Sky blue | 7545/807/403",
    url1: 'https://static.zara.net/assets/public/74cf/b3f5/46ff4cb88858/785e25e4e00c/07545807403-a1/07545807403-a1.jpg?ts=1749027373872&w=1126',
    url2: 'https://static.zara.net/assets/public/22bb/7b6f/f1e444f681b6/a0307f5a0a8d/07545807403-a5/07545807403-a5.jpg?ts=1749027374686&w=750',
    url3: 'https://static.zara.net/assets/public/5ddf/4b5e/fede42a496fc/2fe340d62845/07545807403-a3/07545807403-a3.jpg?ts=1749027374325&w=750'
  },
  {
    id: 7,
    price: 1800,
    name: "LINEN/COTTON POLO SHIRT",
    url1: 'https://static.zara.net/assets/public/c782/30d1/64b2434a9029/08397ec59c8f/01063331400-a1/01063331400-a1.jpg?ts=1747758338998&w=1126',
    url2: 'https://static.zara.net/assets/public/4313/8a22/1cc241da9be1/8ca4659740d9/01063331400-a4/01063331400-a4.jpg?ts=1747758338848&w=750',
    url3: 'https://static.zara.net/assets/public/533b/4cb1/750341d899e0/2b9fc3c2b7bd/01063331400-a3/01063331400-a3.jpg?ts=1747758338216&w=750'
  },
  {
    id: 8,
    price: 1000,
    name: "STRIPED COTTON SHIRT",
    url1: 'https://static.zara.net/assets/public/ad07/b465/c7d94d84941b/ee0a382e1e38/04269574605-a5/04269574605-a5.jpg?ts=1738931960446&w=750',
    url2: 'https://static.zara.net/assets/public/8b98/7661/c4ce44129a26/afa5922ee934/04269574605-a4/04269574605-a4.jpg?ts=1738931960828&w=750',
    url3: 'https://static.zara.net/assets/public/b397/5f71/534b4ff88485/02b24246d20b/04269574605-a3/04269574605-a3.jpg?ts=1738931960099&w=750'
  }
])

const goToProductDetail = (item) => {
  localStorage.setItem('shirt', JSON.stringify(item))
  router.push({ name: 'productdetail', params: { id: item.id }})
}
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.card-img-top {
  height: 280px;
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
