<template>
  <div class="foods">
    <NavbarKulineran />
    <h2>Foods</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarKulineran from "@/components/Navbar.vue";

export default {
  name: "FoodsView",
  components: {
    NavbarKulineran,
  },
};
</script>
