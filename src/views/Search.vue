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
  </div>
</template>

<script>
import bookmatApi from "../http";

export default {
  name: "Home",
  data: () => ({
    query: null,
  }),
  components: {},
  methods: {
    searchBookmark() {
      bookmatApi.get("/browse?q=" + this.query).then((response) => {
        console.log(response);
      });
      this.query = null;
    },
  },
};
</script>
