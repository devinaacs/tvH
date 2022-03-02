<template>
  <div class="card-view">
    <div class="card-header">
      <div class="card-header-icon">
        <img :src="movie.imgUrl" style="height: 350px" width="100%" />
      </div>
    </div>

    <div class="card-movie-content">
      <div class="card-movie-content-head">
        <a href="#" v-on:click.prevent="goToDetail(movie.id)">
          <h3 class="card-movie-title">{{ movie.title }}</h3>
        </a>
        <div class="ratings">
          <span>{{ movie.rating }}</span
          >/10
        </div>
      </div>
      <div class="card-movie-info">
        <div class="movie-author">
          <label>Author</label>
          <span>{{ movie.User.username }}</span>
        </div>
        <div class="movie-author">
          <label>Genre</label>
          <span>{{ movie.Genre.name }}</span>
        </div>
      </div>
      <div class="card-movie-info">
        <button
          v-if="!bookmark"
          class="btn btn-danger btn-block"
          v-on:click.prevent="addToBookmark(movie.id)"
          type="button"
        >
          Add to Bookmark
        </button>
        <button
          v-if="bookmark"
          class="btn btn-danger btn-block"
          v-on:click.prevent="deleteBookmark(movie.id)"
          type="button"
        >
          Delete From Bookmark
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["movie", "bookmark"],
  methods: {
    addToBookmark(id) {
      this.$store.dispatch("addBookmark", id);
      this.$router.push({ name: "Bookmark" });
    },
    async goToDetail(id) {
      console.log(id, "----CARD");
      await this.$store.dispatch("seeDetail", id);
      await this.$router.push({ name: "MovieDetail", params: { id: id } });
    },
    async deleteBookmark(id) {
      console.log(id);
      await this.$store.dispatch("deleteFromBookmark", id);
    },
  },
  created() {
    this.$store.dispatch("fetchBookmarks");
  },
};
</script>

<style>
.card-view {
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 315px;
  margin: 2em;
  border-radius: 10px;
  display: inline-block;
}

.card-header {
  padding: 0;
  margin: 0;
  height: 350px;
  /* width: 100%; */
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.header-icon {
  /* width: 100%; */
  height: 350px;
  line-height: 350px;
  text-align: center;
  vertical-align: middle;
  margin: 0 auto;
  color: #ffffff;
  font-size: 54px;
  text-shadow: 0px 0px 20px #6abcea, 0px 5px 20px #6abcea;
  opacity: 0.85;
}

.header-icon:hover {
  background: rgba(0, 0, 0, 0.15);
  font-size: 74px;
  text-shadow: 0px 0px 20px #6abcea, 0px 5px 30px #6abcea;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 1;
}

.card-view:hover {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
}

.card-movie-content {
  padding: 18px 18px 24px 18px;
  margin: 0;
}

.card-movie-content-head,
.card-movie-info {
  display: table;
  width: 100%;
}

.card-movie-title {
  font-size: 22px;
  margin: 0;
  display: table-cell;
}

.ratings {
  width: 50px;
  height: 15px;
  background-size: contain;
  display: table-cell;
  text-align: right;
  position: relative;
  margin-top: 5px;
  font-weight: 600;
}

.ratings span {
  color: #2196f3;
}

.card-movie-info {
  margin-top: 1em;
}

.movie-author {
  display: table-cell;
  text-transform: uppercase;
  text-align: center;
}

.movie-author:first-of-type {
  text-align: left;
}

.movie-author:last-of-type {
  text-align: right;
}

.movie-author label {
  display: block;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5em;
  font-size: 9px;
}

.movie-author span {
  font-weight: 700;
  font-size: 11px;
}
</style>
