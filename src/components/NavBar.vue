<template>
  <nav class="navbar">
    <!-- ✅ Desktop View -->
    <div class="reactbox d-none d-md-flex space-between mx-auto mt-3 rounded">
      <div class="fullbox d-flex rounded px-3">
        <div class="innerbox rounded px-2 my-auto" v-for="items in navboxitem" :key="items.id">
          <router-link :to="items.link" class="linkstyle fs-8" style="padding: 0px; font-size: 15px;">{{ items.content }}</router-link>
        </div>
      </div>

      <div class="brandname text- fs-5 f-bold">LAXMÉE</div>

      <div class="endbox d-flex gap-2 mx-4">
        <div class="searchgroup py-auto rounded d-none d-sm-flex">
          <input type="search" class="searchbox muted my-auto ms-2" placeholder="Search">
          <i class="fa-solid fa-magnifying-glass fs-8 my-auto" style="margin-right: 10px;"></i>
        </div>
        <div class="usericon px-3 rounded"><i class="fa-regular fa-user my-auto py-auto"></i></div>
        <div class="saveicon px-3 rounded"><i class="fa-regular fa-bookmark my-auto py-auto"></i></div>
        <div class="bagbox px-3 rounded py-auto">
          <router-link to="/cart" class="bagbox1 d-flex">
            <div>Bag</div>
            <div class="countbox ">{{ count }}</div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- ✅ Mobile View -->
    <div class="mobile-wrapper d-flex d-md-none align-items-center justify-content-center position-relative">
      <!-- Brand circle outside left -->
      <div class="outside-logo ps-2">
        <div class="circle-logo text-uppercase">Laxmee</div>
      </div>

      <!-- Mobile navbar pill -->
      <div class="mobile-navbar ms-2 d-flex justify-content-between align-items-center px-3 py-2">
        <div class="d-flex align-items-center gap-3">
          <div class="menu-text f-bold" @click="toggleSidebar">Menu</div>
        </div>

        <!-- Icons -->
        <div class="d-flex gap-3 align-items-center">
          <div class="mb-searchcontainer d-flex gap-2">
            <div class="mb-search">search</div>
            <i class="fa-solid fa-magnifying-glass fs-6 my-auto"></i>
          </div>
          <router-link to="/cart" class="bagbox1 d-flex align-items-center position-relative">
            <i class="fa-solid fa-bag-shopping me-1"></i>
          </router-link>
        </div>
      </div>
    </div>

    <!-- ✅ Glassmorphic Mobile Sidebar -->
    <div class="mob-sidebar glass-sidebar" :class="{ show: sidebarOpen }">
      <div class="sidebar-header d-flex justify-content-between px-3 py-2">
        <span class="fs-5 f-bold">Menu</span>
        <i class="fa-solid fa-xmark fs-4" @click="toggleSidebar"></i>
      </div>

      <div class="sidebar-links d-flex flex-column px-3">
        <router-link
          v-for="items in navboxitem"
          :key="items.id"
          :to="items.link"
          class="linkstyle py-2 fw-bold d-flex justify-content-between align-items-center"
          @click="toggleSidebar"
        >
          {{ items.content }}
          <i class="fa-solid fa-chevron-right fs-7"></i>
        </router-link>

        <hr class="my-2" />

        <div class="text-muted fw-semibold mb-2">More</div>

        <router-link to="/account" class="linkstyle py-2" @click="toggleSidebar">My Account</router-link>
        <router-link to="/orders" class="linkstyle py-2" @click="toggleSidebar">My Orders</router-link>
        <router-link to="/wishlist" class="linkstyle py-2" @click="toggleSidebar">Wishlist</router-link>
      </div>
    </div>

    <div v-if="sidebarOpen" class="overlay" @click="toggleSidebar"></div>
  </nav>
</template>

<script>
import emitter from '../event-bus';

export default {
  name: "NavBar",
  data() {
    return {
      navboxitem: [
        { id: 1, content: "NewIn", link: "" },
        { id: 2, content: "Men", link: "/about" },
        { id: 3, content: "Women", link: "/ProductWomen" },
        { id: 4, content: "Accessories", link: "/accessories" },
        { id: 5, content: "Shoes", link: "/ProductShoes" },
        { id: 6, content: "Outlet", link: "" },
      ],
      count: 0,
      sidebarOpen: false,
    };
  },
  mounted() {
    emitter.on('custom-message', (msg) => {
      this.count += msg;
    });
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.navbar {
  z-index: 40;
  width: 98%;
  position: fixed;
}

.reactbox {
  width: 98%;
  display: flex;
  justify-content: space-between;
}

.countbox {
  margin-top:5px ;
  text-align: center;
  margin-left: 2px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 12px;
  text-align: center;
  font-size: 11px;
  background-color: rgba(128, 128, 128, 0.258);
}

.linkstyle, .bagbox1 {
  display: flex;
  text-decoration: none;
  color: black;
}

.fullbox {
  background: rgba(255, 255, 255, 0.616);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.innerbox {
  font-family: 'Poppins', sans-serif;
}

.brandname {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 4px;
  font-weight: bold;
}

.innerbox:hover {
  background: rgb(242, 242, 242);
  cursor: pointer;
}

.endbox .searchgroup,
.usericon,
.saveicon,
.bagbox {
  background: rgba(255, 255, 255, 0.616);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.searchbox {
  width: 115px;
  border: none;
  outline: 0;
  background: transparent;
}
.searchbox:hover {
  width: 270px;
}

/* ✅ Mobile */
.mobile-wrapper {
  position: relative;
  width: 100%;
  padding-left: 48px;
  margin-top: 12px;
}

.outside-logo {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.circle-logo {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.616);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: black;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 6px;
  text-align: center;
  line-height: 1.2;
}

.mobile-navbar {
  background: rgba(255, 255, 255, 0.616);
  border-radius: 50px;
  max-width: 450px;
  width: 94%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: 'Poppins', sans-serif;
}

.menu-text {
  font-weight: 500;
  font-family: poppins;
  font-size: 15px;
  cursor: pointer;
}

/* ✅ Glass Sidebar */
.mob-sidebar {
  position: fixed;
  top: 0;
  left: -60%;
  width: 50%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 2000;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  font-family: 'Poppins', sans-serif;
}

.mob-sidebar.show {
  left: 0;
}

.sidebar-header {
  font-weight: 600;
}

.sidebar-links .linkstyle {
  padding: 12px 0;
  font-weight: 500;
  color: black;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.sidebar-links .text-muted {
  font-size: 13px;
  color: gray;
}

.sidebar-links .fw-bold {
  font-weight: 600;
}

.sidebar-links i.fa-chevron-right {
  font-size: 10px;
  color: #999;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1500;
}
</style>
