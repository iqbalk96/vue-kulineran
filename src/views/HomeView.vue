<template>
  <div class="home">
    <NavbarKulineran />
    <div class="container">
      <Hero />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarKulineran from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "HomeView",
  components: {
    NavbarKulineran,
    Hero,
  },
};
</script>
