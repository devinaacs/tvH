<template>
  <div>
    <div class="container-fluid" style="margin-top: 90px">
      <div class="row">
        <!-- SIDEBAR START -->
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <h3 class="mt-0 mb-5">SHOWING MOVIE</h3>
            <h6 class="text-uppercase font-weight-bold mb-3">
              FILTER BY GENRE
            </h6>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="1"
                  class="form-check-input"
                  type="checkbox"
                  id="category-1"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-1"
                  >Horror</label
                >
              </div>
            </div>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="2"
                  class="form-check-input"
                  type="checkbox"
                  id="category-2"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-2"
                  >Thriller</label
                >
              </div>
            </div>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="3"
                  class="form-check-input"
                  type="checkbox"
                  id="category-3"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-3"
                  >Drama</label
                >
              </div>
            </div>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="4"
                  class="form-check-input"
                  type="checkbox"
                  id="category-4"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-4"
                  >Comedy</label
                >
              </div>
            </div>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="5"
                  class="form-check-input"
                  type="checkbox"
                  id="category-5"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-5"
                  >Romance</label
                >
              </div>
            </div>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="6"
                  class="form-check-input"
                  type="checkbox"
                  id="category-6"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-6"
                  >Sci-Fi</label
                >
              </div>
            </div>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="7"
                  class="form-check-input"
                  type="checkbox"
                  id="category-6"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-6"
                  >Fantasy</label
                >
              </div>
            </div>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="8"
                  class="form-check-input"
                  type="checkbox"
                  id="category-6"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-6"
                  >Action</label
                >
              </div>
            </div>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterGenre"
                  value="9"
                  class="form-check-input"
                  type="checkbox"
                  id="category-6"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="category-6"
                  >Adventure</label
                >
              </div>
            </div>
            <h6 class="text-uppercase mt-5 mb-3 font-weight-bold">
              FILTER BY OTHER
            </h6>
            <div class="mt-2 mb-2 pl-2">
              <div class="custom-control custom-checkbox">
                <input
                  v-model="filterYear"
                  value="year"
                  class="form-check-input"
                  type="checkbox"
                  id="filter-size-2"
                  style="margin-right: 10px"
                />
                <label class="custom-control-label" for="filter-size-2"
                  >Latest</label
                >
              </div>
            </div>

            <div>
              <div class="form-group">
                <h6 class="text-uppercase mt-5 mb-3 font-weight-bold">
                  Search by title
                </h6>
                <input
                  v-model="title"
                  type="text"
                  class="form-control"
                  name="title"
                  placeholder="Search title..."
                />
              </div>
            </div>

            <div>
              <button
                class="btn btn-danger btn-block mt-5"
                v-on:click.prevent="sendToBE"
              >
                SEARCH
              </button>
            </div>
          </div>
        </nav>
        <!-- SIDEBAR END -->

        <!-- MAIN CONTENT START -->
        <movie-list></movie-list>
        <!-- MAIN CONTENT END -->
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
export default {
  components: { MovieList },
  name: "Home",
  data() {
    return {
      filterGenre: [],
      filterYear: [],
      title: "",
    };
  },
  methods: {
    async sendToBE() {
      await this.$store.dispatch("fetchMovies", {
        title: this.title,
        filterGenre: this.filterGenre,
        filterYear: this.filterYear,
      });
    },
  },
};
</script>

<style>
body {
  height: 100%;
  width: 100%;
  background: #e9e9e9;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #010b26;
}

* {
  -webkit-transition: 300ms;
  transition: 300ms;
}

.intro {
  text-align: center;
}

ul {
  list-style-type: none;
}

h1,
h2,
h3,
h4,
h5,
p {
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #6abcea;
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.navbar-dark {
  padding: 15px !important;
  background: #13191d !important;
}

.sidebar {
  line-height: 26px;
  padding-top: 50px;
}

.sidebar ul {
  margin: 30px 0px;
}

.sidebar .nav-link {
  display: block;
  text-align: center;
}

.sidebar .nav-link i {
  display: block;
  text-align: center;
}

.sidebar .nav-link.active {
  color: #03a9f4;
}

.movie_list {
  padding-left: 4rem !important;
}

@media (max-width: 500px) {
  .card-view {
    width: 95%;
    max-width: 95%;
    margin: 1em;
    display: block;
  }
  .container {
    padding: 0;
    margin: 0;
  }
}
</style>
