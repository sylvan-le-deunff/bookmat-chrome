<template>
  <div id="bookmarklist">
    <md-button
      v-for="bookmark in bookmarks"
      :key="bookmark.name"
      :href="bookmark.link"
    >
      <img class="md-icon" :src="bookmark.icon" :alt="bookmark.name" />
      {{ bookmark.name }}
    </md-button>
  </div>
</template>

<script>
export default {
  props: {
    bookmarks: Array[Object],
  },
};
</script>