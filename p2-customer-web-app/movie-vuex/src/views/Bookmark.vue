<template>
  <div>
    <div class="container-fluid" style="margin-top: 90px">
      <h1 style="text-align: center">Bookmark</h1>
      <div class="pt-8 pb-2 mb-3 border-bottom">
        <div class="row">
          <!-- Movie Card Start -->
          <movie-card
            v-for="movie in listBookmarks"
            bookmark="true"
            :key="movie.id"
            :movie="movie.Movie"
          ></movie-card>
          <!-- Movie Card End -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
export default {
  components: { MovieCard },
  name: "Bookmark",
  computed: {
    listBookmarks() {
      return this.$store.state.listBookmarks;
    },
  },
  created() {
    this.$store.dispatch("fetchBookmarks");
  },
};
</script>

<style></style>
