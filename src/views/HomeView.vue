<template>
  <div class="home">
    <NavbarKulineran />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye> <span class="ml-2">See All</span>
          </router-link>
        </div>
      </div>
      <div class="row mt-2">
        <div
          class="col-md-4 col-sm-12 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
    <div class="mt-4">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarKulineran from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarKulineran,
    Hero,
    CardProduct,
    Footer,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch(function (error) {
        console.log({ error });
      });
  },
};
</script>
