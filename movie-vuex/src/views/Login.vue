<template>
  <div class="login-page">
    <section class="h-100">
      <div class="container h-100" style="margin-top: 90px">
        <div class="row justify-content-md-center h-100">
          <div class="card-wrapper">
            <div class="brand">
              <img src="../assets/logo1.png" alt="logo" />
            </div>
            <div class="card fill">
              <div class="card-body">
                <h4 class="card-title">Login</h4>
                <form @submit.prevent="login">
                  <div class="form-group">
                    <label for="email">E-Mail Address</label>
                    <input
                      v-model="email"
                      id="email"
                      type="text"
                      class="form-control"
                      name="email"
                      value=""
                      required
                      autofocus
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      v-model="password"
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-danger btn-block"
                    style="margin-bottom: 1rem"
                  >
                    Login
                  </button>
                </form>
                Don't have an account?
                <button
                  @click.prevent="toRegisterPage"
                  type="submit"
                  class="btn btn-danger btn-block"
                  style="margin-bottom: 1rem"
                >
                  Register Now
                </button>
                <!-- Button Google Sign In -->
                or Sign In with Google Account
                <GoogleLogin
                  :params="params"
                  :onSuccess="onSuccess"
                  :onFailure="onFailure"
                  class="btn btn-danger btn-block"
                >
                  Login With Google
                </GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import Swal from "sweetalert2";
export default {
  name: "Login",
  components: { GoogleLogin },
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "290709567405-eoptli2ral4mah64t86qd9h83ue8hqqs.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });

      if (localStorage.getItem("access_token")) {
        Swal.fire({
          icon: "success",
          title: "Login success.",
          text: "Welcome to tvH.",
        });
        this.$router.push({ name: "Home" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed.",
          text: "Invalid email/password",
        });
      }
    },
    toRegisterPage() {
      this.$router.push({ name: "Register" });
    },
    async onSuccess(googleUser) {
      console.log(googleUser.getBasicProfile());
      let gToken = googleUser.getAuthResponse().id_token;
      await this.$store.dispatch("googleLogin", gToken);
      if (localStorage.getItem("access_token")) {
        this.$router.push({ name: "Home" });
      }
    },
    onFailure(err) {
      console.log(err);
    },
  },
};
</script>

<style>
.login-page {
  height: 100%;
}

.login-page .brand {
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 70%;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(163, 163, 163, 0.05);
  position: relative;
  z-index: 1;
}

.login-page .brand img {
  width: 100%;
}

.login-page .card-wrapper {
  width: 400px;
}

.login-page .card {
  height: fit-content;
  border-color: transparent;
  box-shadow: 0 4px 8px rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  display: flex;
  text-align: center;
}

.login-page .card.fill {
  padding: 10px;
}

.login-page .form-control {
  border-width: 2.3px;
}

.login-page .form-group label {
  width: 100%;
  padding-top: 1rem;
}

.login-page .btn.btn-block {
  padding: 12px 5px;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  justify-content: center;
}

.login-page .g-signin2 {
  margin-top: 1rem;
}
</style>
