<template>
  <section class="hero">
    <div class="d-none d-sm-none d-md-block">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu</strong><br />
                in Your Gadget.
              </h2>
              <p>Come on, choose and order your favorite food.</p>
              <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-right></b-icon-arrow-right
                ><span class="ml-2">Order</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img
            :src="require('@/assets/img/ilustrasi.png')"
            alt="hero-ilustrasi"
            class="w-100"
          />
        </div>
      </div>
    </div>

    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img
            :src="require('@/assets/img/ilustrasi.png')"
            alt="hero-ilustrasi"
            class="w-100"
          />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu</strong><br />
                in Your Gadget.
              </h2>
              <p>Come on, choose and order your favorite food.</p>
              <router-link class="btn btn-lg btn-success" to="/cart">
                <b-icon-arrow-right></b-icon-arrow-right
                ><span class="ml-2">Order</span>
              </router-link>
            </div>
          </div>
        </div>
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
