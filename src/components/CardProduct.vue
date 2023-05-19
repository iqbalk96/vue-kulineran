<template>
  <section class="card-product">
    <div>
      <b-card
        :title="product.nama"
        :img-src="require(`@/assets/img/${product.gambar}`)"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2"
      >
        <b-card-text>
          Price IDR {{ product.harga }}
        </b-card-text>

        <b-button size="sm" variant="success">Add to cart <b-icon-cart></b-icon-cart> </b-button>
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
