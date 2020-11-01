<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view />
  </div>
</template>

<script>
// built-in themes from vue-material
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// -- main --
import Navigation from "./components/Navigation";

export default {
  components: { Navigation },
};
</script>