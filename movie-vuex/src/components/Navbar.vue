<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
    <div class="container">
      <img src="../assets/brand.png" height="70" />
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <button class="btn btn-danger">
              <router-link to="/" class="router-link">Home</router-link>
            </button>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <button class="btn btn-danger" v-if="isLoggedIn">
              <router-link to="/bookmarks" class="router-link"
                >Bookmark</router-link
              >
            </button>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <button class="btn btn-danger" v-if="!isLoggedIn">
              <router-link to="/login" class="router-link">Sign in</router-link>
            </button>
          </li>
          <li class="nav-item" v-if="isLoggedIn" v-on:click.prevent="logOut">
            <button class="btn btn-danger" v-if="isLoggedIn">Log Out</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-danger" v-if="!isLoggedIn">
              <router-link to="/register" class="router-link"
                >Sign up</router-link
              >
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Navbar",
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    async logOut() {
      localStorage.clear();
      await this.$store.commit("DO_LOGIN", false);
      Swal.fire({
        icon: "success",
        title: "Logout succes.",
        text: "See you later on tvH.",
      });
      await this.$router.push({ name: "Home" });
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("DO_REFRESH");
    }
  },
};
</script>

<style>
.navbar {
  padding: 10px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-item {
  margin-left: 10px;
  margin-right: 10px;
}

.router-link {
  text-decoration: none;
  color: white;
  padding: 12px 5px;
  margin-top: 1rem;
  margin-left: 5px;
  width: 100%;
  text-align: center;
  justify-content: center;
}
</style>
