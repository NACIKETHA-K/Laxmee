<template>
  <div class="accessories">
    <div class="container my-4">
      <div class="row g-4">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(item, index) in accessories"
          :key="item.id"
        >
          <div class="position-relative overflow-hidden accessory-card">
            <img
              :src="hoveredIndex === index ? item.url2 || item.url1 : item.url1"
              class="img-fluid w-100"
              alt="Accessory Image"
              style="aspect-ratio: 3/4; object-fit: cover; cursor: pointer;"
              @click="goToProductDetail(item)"
              @mouseover="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            />
            <div class="dtbox d-flex justify-content-between py-2 px-4">
              <div class="prname">{{ item.name }}</div>
              <div class="rate">₹{{ formatPrice(item.price) }}</div>
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

const formatPrice = (price) => {
  const numeric = typeof price === 'string' ? parseFloat(price.replace(/[^\d.]/g, '')) : price
  return numeric.toLocaleString('en-IN')
}

const accessories = ref([
  {
    id: 1,
    name: "Ringin Platinum",
    price: "1,661,800*",
    url1: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/sixteen-stone-by-tiffanyring-19186504_1039864_ED_M.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
    url2: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/sixteen-stone-by-tiffanyring-19186504_1032156_AV_1_M.jpg?&op_usm=1.75,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
    url3: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/sixteen-stone-by-tiffanyring-19186504_1032157_AV_2_M.jpg?&op_usm=1.75,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp"
  },
  {
    id: 2,
    name: "Ring",
    price: 2343000,
    url1: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/sixteen-stone-by-tiffanyring-23429446_1041816_ED_M.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
    url2: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/sixteen-stone-by-tiffanyring-23429446_1029137_AV_1_M.jpg?&op_usm=1.75,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
    url3: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/sixteen-stone-by-tiffanyring-23429446_1029138_AV_2_M.jpg?&op_usm=1.75,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp"
  },
  {
    id: 3,
    name: "Ring",
    price: "4,456,432",
    url1: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-solestering-30522931_1047912_ED_M.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
    url2: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-solestering-30522931_1047913_AV_1_M.jpg?&op_usm=1.75,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
    url3: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-solestering-30522931_1047914_AV_2_M.jpg?&op_usm=1.75,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp"
  },
  {
    id: 4,
    name: "Earrings",
    price: "373,324",
    url1: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriaearrings-11833187_1016110_ED.jpg?&op_usm=2.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
    url2: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriaearrings-11833187_1016108_AV_1.jpg?&op_usm=2.0,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
    url3: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriaearrings-11833187_1016109_AV_2.jpg?&op_usm=2.0,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp"
  },
  { 
  id: 5, 
  name: "Pendant", 
  price: "88,322,999", 
  url1: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriapendant-63106348_1025227_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&fmt=webp", 
  url2: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriapendant-63106348_1025226_AV_2.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&fmt=webp",
  url3:"https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriapendant-63106348_1025225_AV_1.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&fmt=webp"
},
{ 
  id: 6, 
  name: "Large Link Bracelet", 
  price: "453,000", 
  url1: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardwearlarge-link-bracelet-60715149_1013593_ED_M.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&fmt=webp",
  url2: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardwearlarge-link-bracelet-60715149_1013594_AV_1_M.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&fmt=webp", 
  url3:"https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardwearlarge-link-bracelet-60715149_1013592_AV_2_M.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&fmt=webp"
},
{ 
  id: 7, 
  name: "Fountain Pen", 
  price: "999,099", 
  url1: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/diamond-pointfountain-pen-60573670_980410_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&fmt=webp", 
  url2: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/diamond-pointfountain-pen-60573670_986342_AV_1.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&fmt=webp",
  url3:"https://media.tiffany.com/is/image/Tiffany/EcomItemL2/diamond-pointfountain-pen-60573670_984528_AV_2.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&fmt=webp"
},
{ 
  id: 8, 
  name: "2-Hand 24 mm Watch", 
  price: "323,341", 
  url1: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/atlas2-hand-24-mm-watch-69291686_1015173_ED.jpg?&op_usm=1.5,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&fmt=webp", 
  url2: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/atlas2-hand-24-mm-watch-69291686_1015172_AV_1.jpg?&op_usm=1.5,1.0,6.0&defaultImage=NoImageAvailableInternal&fmt=webp",
  url3:"https://media.tiffany.com/is/image/Tiffany/EcomItemL2/atlas2-hand-24-mm-watch-69291686_1015174_AV_2.jpg?&op_usm=1.5,1.0,6.0&defaultImage=NoImageAvailableInternal&fmt=webp"
}
])

const goToProductDetail = (item) => {
  const numericPrice =
    typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.]/g, '')) : item.price

  const fullItem = {
    ...item,
    price: numericPrice
  }

  localStorage.setItem('AccesoriesDetail', JSON.stringify(fullItem))
  router.push({ name: 'AccesoriesDetail', params: { id: item.id } })
}
</script>

<style scoped>
.accessories {
  min-height: 100vh;
}

.accessory-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.accessory-card:hover {
  transform: scale(1.02);
}

.dtbox {
  font-size: 11px;
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
