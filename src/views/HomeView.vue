<template>
  <router-link to="/about" class="carouselbox">
    <div id="videoCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-inner">
        <div class="carousel-item active position-relative">
          <div class="blurred-bg">
            <video autoplay muted loop playsinline>
              <source src="fashioblack.mp4" type="video/mp4">
            </video>
          </div>
          <div class="foreground-video-container">
            <video class="foreground-video" autoplay muted loop playsinline>
              <source src="fashioblack.mp4" type="video/mp4">
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
              <source src="topfashion.mp4" type="video/mp4">
            </video>
          </div>
          <div class="foreground-video-container">
            <video class="foreground-video" autoplay muted loop playsinline>
              <source src="topfashion.mp4" type="video/mp4">
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
              <source src="fashion.mp4" type="video/mp4">
            </video>
          </div>
          <div class="foreground-video-container">
            <video class="foreground-video" autoplay muted loop playsinline>
              <source src="fashion.mp4" type="video/mp4">
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
</template>

<script>
export default {
  name: "VideoCarousel"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.carouselbox {
  z-index: 30;
  display: block;
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
  .carousel-item {
    height: 80vh;
  }

  .foreground-video {
    width: 90%;
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
  .carousel-item {
    height: 70vh;
  }

  .foreground-video {
    width: 95%;
    max-height: 50vh;
  }

  .shopnow {
    top: -21%;
    font-size: 12px;
  }

  .collection {
    margin-top: -11px;
    font-size: 11px;
    padding: 5px 12px;
  }
}
</style>
