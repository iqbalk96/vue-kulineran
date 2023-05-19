<template>
  <section class="hero">
    <div class="row">
      <div class="col">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h2>
              <strong>Delicious Food Menu</strong><br />
              in Your Gadget.
            </h2>
            <p>Ayo segera pilih dan pesan makanan favorit Anda.</p>
            <router-link class="btn btn-lg btn-success" to="/cart">
                <b-icon-arrow-right></b-icon-arrow-right><span class="ml-2">Pesan</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <img
          :src="require('@/assets/img/ilustrasi.png')"
          alt="hero-ilustrasi"
          class="w-100"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style></style>
