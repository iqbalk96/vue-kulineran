<template>
  <section class="empty-state">
    <div class="mt-3 text-center">
      <b-card-group deck>
        <b-card
          title="No product"
        >
          <b-card-text>No product found for : {{ value }}</b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </section>
</template>

<script>
export default {
  name: "EmptyStateComponent",
  props: ["value"],
};
</script>

<style></style>
