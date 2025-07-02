<template>
  <div class="about">
    <div class="container my-4">
      <div class="row g-4">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(item, index) in shoes"
          :key="item.id"
        >
          <div class="position-relative overflow-hidden shoe-card">
            <img
              :src="hoveredIndex === index ? item.url2 || item.url1 : item.url1"
              class="img-fluid w-100"
              alt="Shoe Image"
              style="aspect-ratio: 3/4; object-fit: cover; cursor: pointer;"
              @click="goToProductDetail(item)"
              @mouseover="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            />
            <div class="dtbox d-flex justify-content-between py-2 px-2">
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

const shoes = ref([
  {
    id: 1,
    price: 4500,
    name: "ANike Dunk Low Retro SE",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9db82184-4d2b-4576-8b81-a229a344808c/NIKE+DUNK+LOW+RETRO+SE.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33219111-5dc0-42de-8bf7-1b1bba4d4712/NIKE+DUNK+LOW+RETRO+SE.png',
  },
  {
    id: 2,
    price: 4200,
    name: "Nike Blazer Phantom Low",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65ad9161-e0e6-45e6-b7ec-2a0bb014e69d/BLAZER+PHANTOM+LOW.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0b611fd7-4e2f-45df-9a27-b76def539364/BLAZER+PHANTOM+LOW.png',
  },
  {
    id: 3,
    price: 2800,
    name: "Nike SB Blazer Low Pro GT",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0229ef99-88ca-4cc7-8cce-6dd8769f9862/BLAZER+LOW+PRO+GT.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ec7eae08-b174-461f-b88e-32dbab6fce08/BLAZER+LOW+PRO+GT.png',
  },
  {
    id: 4,
    price: 6500,
    name: "Sports Running Shoes",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa3f10c0-4bb9-4578-a796-8fe99ac723fe/NIKE+SB+MALOR.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9176af60-67b7-43bd-97fa-ba88a294c5ab/NIKE+SB+MALOR.png',
  },
  {
    id: 5,
    price: 6500,
    name: "Nike Vaporfly 4",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8289b491-6de1-491a-b3ef-6fb5ae0c07a6/ZOOMX+VAPORFLY+NEXT%25+4.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c96e25ba-d9ed-4081-9d3d-3e37e8ec4d5e/ZOOMX+VAPORFLY+NEXT%25+4.png',
  },
  {
    id: 6,
    price: 7050,
    name: "Nike Motiva",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d2407438-7fdb-4a7b-9623-7c3b5bbacb9c/NIKE+MOTIVA.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/490bdad4-a357-4cfe-86f6-226a14256c01/NIKE+MOTIVA.png',
  },
  {
    id: 7,
    price: 5500,
    name: "Marcus Rashford",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e18fea2-2156-4d75-8e2f-85a1d76e400e/ZOOM+SUPERFLY+9+ELITE+MR+FG.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43a117d5-d945-498d-b6a8-26159dc9d71e/ZOOM+SUPERFLY+9+ELITE+MR+FG.png',
  },
  {
    id: 8,
    price: 6500,
    name: "Jr. Mercurial Superfly",
    url1: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f2e9d53-8da9-4074-9ba7-96fb00667354/JR+SUPERFLY+10+CLUB+FG%2FMG.png',
    url2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2e2b2e4a-ea27-439e-8d4d-fff2f79b5ae7/JR+SUPERFLY+10+CLUB+FG%2FMG.png',
  },
])

const goToProductDetail = (item) => {
  localStorage.setItem('shoe', JSON.stringify(item))
  router.push({ name: 'shoedetail', params: { id: item.id } })
}
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.shoe-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.shoe-card:hover {
  transform: scale(1.02);
}

.dtbox {
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.85);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

@media (max-width: 768px) {
  .dtbox {
    font-size: 0.8rem;
    padding: 6px;
  }
}

@media (max-width: 576px) {
  .dtbox {
    font-size: 0.75rem;
    padding: 4px;
  }
}
</style>
