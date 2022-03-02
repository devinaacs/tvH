<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-6 movie_list">
    <div class="pt-8 pb-2 mb-3 border-bottom">
      <div class="row">
        <!-- Movie Card Start -->
        <movie-card
          v-for="movie in listMovies"
          :key="movie.id"
          :movie="movie"
        ></movie-card>
        <!-- Movie Card End -->
      </div>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a v-on:click.prevent="sendToBE0" class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a v-on:click.prevent="sendToBE1" class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a v-on:click.prevent="sendToBE2" class="page-link" href="#">3</a>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
export default {
  components: { MovieCard },
  name: "MovieList",
  computed: {
    listMovies() {
      return this.$store.state.listMovies;
    },
  },
  methods: {
    async sendToBE0() {
      await this.$store.dispatch("fetchMovies", { page: 0, size: 9 });
    },
    async sendToBE1() {
      await this.$store.dispatch("fetchMovies", { page: 1, size: 9 });
    },
    async sendToBE2() {
      await this.$store.dispatch("fetchMovies", { page: 2, size: 9 });
    },
  },
  created() {
    this.$store.dispatch("fetchMovies");
  },
};
</script>

<style></style>
