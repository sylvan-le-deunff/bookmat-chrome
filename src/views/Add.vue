<template>
  <div class="about">
    <h1>This is an add page</h1>

    <form @submit.prevent="createBookmark">
      <md-field md-clearable>
        <label>Name</label>
        <md-input v-model="bookmark.name"></md-input>
      </md-field>

      <md-field md-clearable>
        <label>Description</label>
        <md-input v-model="bookmark.description"></md-input>
      </md-field>

      <md-field md-clearable>
        <label>Link</label>
        <md-input v-model="bookmark.link"></md-input>
      </md-field>

      <md-field md-clearable>
        <label>Icon</label>
        <md-input v-model="bookmark.icon"></md-input>
      </md-field>

      <md-button type="submit" class="md-primary md-raised"> Create </md-button>
    </form>
  </div>
</template>

<script>
import bookmatApi from "../http";

export default {
  data: () => ({
    bookmark: { name: "", description: "", link: "", icon: "" },
  }),
  methods: {
    validateBookmark() {
      return (
        !!this.bookmark.name &&
        !!this.bookmark.description &&
        !!this.bookmark.link &&
        !!this.bookmark.icon
      );
    },
    createBookmark() {
      console.log("coucou");
      if (this.validateBookmark()) {
        bookmatApi.post("bookmarks", this.bookmark).then((response) => {
          console.log(response.data);
        });
      }
    },
  },
};
</script>