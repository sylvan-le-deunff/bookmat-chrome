<template>
  <div class="home">
    <h1>This is a search page</h1>
    <form @submit.prevent="searchBookmark">
      <md-field md-clearable>
        <label>Type in your search...</label>
        <md-input v-model="query"></md-input>
      </md-field>
      <md-button type="submit" class="md-primary md-raised"> Search </md-button>
    </form>

    <BookMarkList :bookmarks="bookmarks" />
  </div>
</template>

<script>
import BookMarkList from "../components/BookMarkList";
import bookmatApi from "../http";

export default {
  name: "Home",
  components: { BookMarkList },
  data: () => ({
    query: null,
    bookmarks: [],
  }),
  methods: {
    searchBookmark() {
      bookmatApi.get("/bookmarks?q=" + this.query).then((response) => {
        this.bookmarks = response.data;
      });
      this.query = null;
    },
  },
};
</script>
