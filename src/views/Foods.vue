<template>
  <div class="foods">
    <NavbarKulineran />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h2><strong>Food</strong> List</h2>
        </div>
        <div class="col">
          <b-input-group>
            <b-form-input
              v-model="search"
              @keyup="searchProduct"
              placeholder="eg: Nasi goreng..."
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="success">
                <b-icon-search></b-icon-search>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
      <div class="row mt-2" v-if="products.length > 0">
        <div
          class="col-md-4 col-sm-12 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
      <div class="row mt-2" v-else>
        <div class="col">
          <Empty :value="search" />
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
import CardProduct from "@/components/CardProduct.vue";
import Footer from "@/components/Footer.vue";
import Empty from "@/components/Empty.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavbarKulineran,
    CardProduct,
    Footer,
    Empty,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    getProduct() {
      let search = this.search ? this.search : "";
      axios
        .get(`http://localhost:3000/products?q=${search}`)
        .then((response) => {
          this.setProduct(response.data);
        })
        .catch(function (error) {
          console.log({ error });
        });
    },
    setProduct(data) {
      this.products = data;
    },
    searchProduct() {
      this.getProduct();
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
