<template>
  <div class="fitting">
    <!-- Video Carousel -->
    <router-link to="/about" class="carouselbox">
      <div id="videoCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active position-relative">
            <div class="blurred-bg">
              <video autoplay muted loop playsinline>
                <source src="fashioblack.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="foreground-video-container">
              <video class="foreground-video" autoplay muted loop playsinline>
                <source src="fashioblack.mp4" type="video/mp4" />
              </video>
              <div class="shopnow text-white d-flex flex-column">
                <p class="mx-auto">Limited Edition</p>
                <div class="collection px-3 text-black">Shop The Collection</div>
              </div>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <div class="blurred-bg">
              <video autoplay muted loop playsinline>
                <source src="topfashion.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="foreground-video-container">
              <video class="foreground-video" autoplay muted loop playsinline>
                <source src="topfashion.mp4" type="video/mp4" />
              </video>
              <div class="shopnow text-white d-flex flex-column">
                <p class="mx-auto">Limited Edition</p>
                <div class="collection px-3 text-black">Shop Now</div>
              </div>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <div class="blurred-bg">
              <video autoplay muted loop playsinline>
                <source src="fashion.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="foreground-video-container">
              <video class="foreground-video" autoplay muted loop playsinline>
                <source src="fashion.mp4" type="video/mp4" />
              </video>
              <div class="shopnow text-white d-flex flex-column">
                <p class="mx-auto">Limited Edition</p>
                <div class="collection px-3 text-black">Shop Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>

    <!-- Category Cards -->
    <div class="d-flex flex-wrap justify-content-center align-items-stretch category-section mt-2">
      <!-- Men Card -->
      <div
        class="category-card m-2 text-center"
        @mouseover="menLabel = 'Shop Men'"
        @mouseleave="menLabel = 'Men'"
      >
        <router-link to="/about">
          <img
            src="https://www.prada.com/content/dam/pradabkg_products/S/SC8/SC813M/172XF0SVF/SC813M_172X_F0SVF_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
            class="img-fluid"
            alt="Men"
          />
          <div class="label f-3">{{ menLabel }}</div>
        </router-link>
      </div>

      <!-- Women Card -->
      <div
        class="category-card m-2 text-center"
        @mouseover="womenLabel = 'Shop Women'"
        @mouseleave="womenLabel = 'Women'"
      >
        <router-link to="/ProductWomen">
          <img
            src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q04/17MKF0075/P3Q04_17MK_F0075_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg"
            class="img-fluid"
            alt="Women"
          />
          <div class="label f-3">{{ womenLabel }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCarousel",
  data() {
    return {
      menLabel: "Men",
      womenLabel: "Women",
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.carouselbox {
  z-index: 30;
  display: block;
  box-shadow: 5px 5px 30px gray;
}
.fitting{


}

#videoCarousel {
  z-index: -1;
}

.carousel-item {
  height: 100vh;
  position: relative;
}

.blurred-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
}

.blurred-bg video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(12px);
  transform: scale(1.1);
}

.foreground-video-container {
  z-index: 2;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.foreground-video {
  width: 70%;
  max-height: 80vh;
  border-radius: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
}

.shopnow {
  z-index: 10;
  position: relative;
  top: -42%;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.collection {
  z-index: 20;
  margin-top: -11px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.616);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-weight: 500;
  cursor: pointer;
}

.collection:hover {
  background: rgb(255, 255, 255);
}

@media (max-width: 768px) {
  .foreground-video {
    width: 90%;
    min-height: 60vh;
    object-fit: cover;
    max-height: 60vh;
    border-radius: 20px;
  }

  .shopnow {
    top: -35%;
    font-size: 14px;
  }

  .collection {
    padding: 6px 14px;
    font-size: 12px;
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .foreground-video {
    width: 95%;
    min-height: 45vh;
    object-fit: cover;
    max-height: 50vh;
  }

  .shopnow {
    top: -27%;
    font-size: 12px;
  }

  .collection {
    margin-top: -11px;
    font-size: 11px;
    padding: 5px 12px;
  }
}

.category-section {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.category-card {
  position: relative;
  width: 700px;
  transition: transform 0.3s;
  cursor: pointer;
}

.category-card img {
  width: 100%;
  border-radius: 5%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.category-card .label {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.416);
  padding: 8px 16px;
  border-radius: 30px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #000;
  transition: all 0.3s ease;
}
</style>
