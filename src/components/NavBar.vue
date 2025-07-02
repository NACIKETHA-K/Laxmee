<template>
  <nav class="navbar">
    <div class="reactbox d-flex space-between mx-auto mt-3 rounded">
      <div class="hamburger d-md-none px-3" @click="toggleSidebar">
        <i class="fa-solid fa-bars fs-4"></i>
      </div>

      <div class="fullbox d-none d-md-flex rounded px-3">
        <div class="innerbox rounded px-2 my-auto" v-for="items in navboxitem" :key="items.id">
          <router-link :to="items.link" class="linkstyle fs-8" style="padding: 0px; font-size: 15px;">{{ items.content }}</router-link>
        </div>
      </div>

      <div class="brandname text- fs-5 f-bold">LAXMÉE</div>

      <div class="endbox d-flex gap-2 mx-4">
        <div class="searchgroup py-auto rounded d-none d-sm-flex">
          <input type="search" class="searchbox muted my-auto ms-2" placeholder="Search" >
          <i class="fa-solid fa-magnifying-glass fs-8 my-auto " style="margin-right: 10px;"></i>
        </div>
        <div class="usericon px-3 rounded "><i class="fa-regular fa-user my-auto py-auto"></i></div>
        <div class="saveicon px-3 rounded "><i class="fa-regular fa-bookmark my-auto py-auto"></i></div>
        <div class="bagbox px-3 rounded py-auto">
          <router-link to="/cart" class="bagbox1 d-flex">
            <div>Bag</div>
            <div class="countbox my-auto ">{{ count }}</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="mob-sidebar" :class="{ show: sidebarOpen }">
      <div class="sidebar-header d-flex justify-content-between px-3 py-2">
        <span class="fs-5 f-bold">Menu</span>
        <i class="fa-solid fa-xmark fs-4" @click="toggleSidebar"></i>
      </div>
      <div class="sidebar-links d-flex flex-column px-3">
        <router-link
          v-for="items in navboxitem"
          :key="items.id"
          :to="items.link"
          class="linkstyle py-2"
          @click="toggleSidebar"
        >
          {{ items.content }}
        </router-link>
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
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Jaro:opsz@6..72&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.navbar {
  z-index: 40;
  width: 98%;
  position: fixed;
}

.countbox {
  font-weight: 500;
  margin-top: 3px;
  padding: 1px;
  border-radius: 50%;
  text-align: center;
  width: 18px;
  margin-left: 4px;
  font-size: 10px;
  text-decoration: none;
  background-color: rgba(128, 128, 128, 0.258);
}

.linkstyle, .bagbox1 {
  display: flex;
  text-decoration: none;
  color: black;
}

.reactbox {
  width: 98%;
  display: flex;
  justify-content: space-between;
}

.fullbox {
  background: rgba(255, 255, 255, 0.616);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  padding: 0;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.innerbox {
  font-family: poppins;
}

.brandname {
  z-index: 10;
  font-family: poppins;
  letter-spacing: 4px;
}

.innerbox:hover {
  background: rgb(242, 242, 242);
  cursor: pointer;
  backdrop-filter: blur(20px);
}

.reactbox:hover {
  background: rgba(255, 255, 255, 0.772);
  backdrop-filter: blur(20px);
  transition: 0.6s;
}

.searchgroup, .usericon, .saveicon, .bagbox {
  background: rgba(255, 255, 255, 0.616);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-family: poppins;
}

.searchbox {
  width: 115px;
  border: none;
  outline: 0;
  background: transparent;
}
.searchbox:hover{
  width: 270px;

  
}

/* New Sidebar Styles for Mobile */
.hamburger {
  display: none;
  cursor: pointer;
}

@media (max-width: 868px) {
  .hamburger {
    display: block;
  }
}

.mob-sidebar {
  position: fixed;
  top: 0;
  left: -260px;
  width: 240px;
  height: 50vh;
  background: transparent;
  backdrop-filter: blur;
  z-index: 2000;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  font-family: poppins;
}

.mob-sidebar.show {
  left: 0;
}

.sidebar-header {
  font-weight: 600;
}

.sidebar-links .linkstyle {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 500;
}

/* Overlay */
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
