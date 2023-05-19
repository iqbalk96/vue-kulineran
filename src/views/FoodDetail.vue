<template>
    <div class="food-detail">
      <NavbarKulineran />
      <div class="container">
        <div class="row mt-5">
          <div class="col">
            <h2><strong>Food</strong> Detail</h2>
          </div>
        </div>
        <div class="row">
            <div class="col">
                <pre>{{ product }}</pre>
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
  import Footer from "@/components/Footer.vue";
  import axios from "axios";

  export default {
    name: "FoodsView",
    components: {
      NavbarKulineran,
      Footer,
    },
    data() {
      return {
        product: null,
        search: "",
      };
    },
    methods: {
      getProduct() {
        let id = this.$route.params.id ? this.$route.params.id : "";
        axios
          .get(`http://localhost:3000/products/${id}`)
          .then((response) => {
            this.setProduct(response.data);
          })
          .catch(function (error) {
            console.log({ error });
          });
      },
      setProduct(data) {
        this.product = data;
      },
    },
    mounted() {
      this.getProduct();
    },
  };
  </script>
