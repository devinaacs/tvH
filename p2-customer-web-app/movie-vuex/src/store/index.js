import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: 'http://localhost:3000',
    isLoggedIn: false,
    listMovies: [],
    listBookmarks: [],
    movieDetail: null,
    qrcode: null,
  },
  mutations: {
    DO_LOGIN(state, payload) {
      state.isLoggedIn = payload;
    },
    DO_LOGOUT(state) {
      state.isLoggedIn = false
    },
    DO_FETCH_MOVIES(state, payload) {
      state.listMovies = payload
    },
    DO_REFRESH(state) {
      state.isLoggedIn = true
    },
    DO_FETCH_BOOKMARKS(state, payload) {
      state.listBookmarks = payload
    },
    DO_SEE_DETAILS(state, payload) {
      state.movieDetail = payload
    },
    GET_QRCODE(state, payload) {
      state.qrcode = payload
    }
  },
  actions: {
    async register(context, payload) {
      try {
        const response = await axios.post(`${context.state.url}/pub/register`, payload);
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async login(context, payload) {
      try {
        const response = await axios.post(`${context.state.url}/pub/login`, payload)
        localStorage.setItem("access_token", response.data.access_token)
        context.commit('DO_LOGIN', true)
      } catch (err) {
        console.log(err)
      }
    },
    async googleLogin(context, payload) {
      try {

        const response = await axios.post(
          `${context.state.url}/pub/login-google`,
          { token: payload }
        );
        localStorage.setItem("access_token", response.data.access_token)
        context.commit('DO_LOGIN', true)
      } catch (err) {
        console.log(err);
      }
    },
    async fetchMovies(context, payload) {
      try {
        const response = await axios.get(`${context.state.url}/pub/movies`, { params: payload });
        context.commit('DO_FETCH_MOVIES', response.data);
      } catch (err) {
        console.log(err)
      }
    },
    async addBookmark(context, payload) {
      try {
        const response = await axios.post(`${context.state.url}/pub/bookmarks/${payload}`, {}, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        console.log(response.data)
      } catch (err) {
        console.log(err.response)
      }
    },
    async fetchBookmarks(context) {
      try {
        const response = await axios.get(`${context.state.url}/pub/bookmarks`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        context.commit('DO_FETCH_BOOKMARKS', response.data);
      } catch (err) {
        console.log(err)
      }
    },
    async seeDetail(context, payload) {
      try {

        const response = await axios.get(`${context.state.url}/pub/movies/${payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        context.commit('DO_SEE_DETAILS', response.data)
        const qrcode = await axios({
          methods: "get",
          url: 'https://api.happi.dev/v1/qrcode',
          params: {
            data: response.data.trailerUrl
          },
          headers: {
            "x-happi-key": "c8a954pAmISmcjNHXEQofmsNkOtn3Jn9i2e0NuEPrHCJv9OG2dCAmXsL"
          }
        })
        context.commit("GET_QRCODE", qrcode.data)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteFromBookmark(context, payload) {
      try {
        const response = await axios.delete(`${context.state.url}/pub/bookmarks/${payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        console.log(response.data)
        context.dispatch("fetchBookmarks")
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {},
});
