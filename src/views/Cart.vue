<template>
  <div class="cart">
    <NavbarKulineran />
    <h2>Cart</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarKulineran from "@/components/Navbar.vue";

export default {
  name: "CartView",
  components: {
    NavbarKulineran,
  },
};
</script>
