<template>
  <div>
    <section class="h-100" style="margin-top: 90px">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <img :src="movie.imgUrl" class="img-fluid" />
          </div>
          <div class="col-md-8 col-sm-8">
            <p>Movie id : {{ movie.id }}</p>
            <p>Movie Title : {{ movie.title }}</p>
            <p>Movie Synopsis : {{ movie.synopsis }}</p>
            <p>Movie Rating : {{ movie.rating }}</p>
            <p>Movie Genre : {{ movie.Genre.name }}</p>
            <p>
              Movie Trailer:
              <a v-bind:href="movie.trailerUrl" target="_blank">
                {{ movie.trailerUrl }}</a
              >
            </p>
            <p>Movie Author : {{ movie.User.username }}</p>
            <p>Movie Year : {{ movie.year }}</p>
            <img :src="qrCode.qrcode" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  data() {
    return {
      movie: {
        title: "",
        synopsis: "",
        trailerUrl: "",
        imgUrl: "",
        rating: "",
        genre: "",
        athor: "",
        year: "",
      },
    };
  },
  computed: {
    movieDetail() {
      return this.$store.state.movieDetail;
    },
    qrCode() {
      return this.$store.state.qrcode;
    },
  },
  watch: {
    movieDetail() {
      this.movie = this.movieDetail;
    },
  },
  created() {
    this.$store.dispatch("seeDetail", this.$route.params.id);
  },
};
</script>

<style></style>
