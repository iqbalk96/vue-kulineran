<template>
  <section class="card-product">
    <div>
      <b-card
        no-body
        v-bind:title="product.title"
        v-bind:img-alt="product.alt"
        img-top
        class="mb-2"
      >
        <router-link :to="`/food-detail/${product.id}`">
          <b-card-img :src="require(`@/assets/img/${product.gambar}`)" />
        </router-link>
        <b-card-body>
          <b-card-title>{{product.nama}}</b-card-title>
          <b-card-text >Price IDR {{ product.harga }}</b-card-text>
          <b-button size="sm" variant="success"
          >Add to cart <b-icon-cart></b-icon-cart>
        </b-button>
        </b-card-body>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardProductComponent",
  props: ["product"],
};
</script>

<style></style>
