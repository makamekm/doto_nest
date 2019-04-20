<template>
  <section class="gl-layout-margin">
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ error.statusCode }}
          </h1>
          <h2 class="subtitle">
            {{ error.message }}
          </h2>
          <button class="button is-primary is-medium" to="/" @click="reload">
            Refresh
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ['error'],
  methods: {
    reload() {
      this.$router.go();
    }
  }
}
</script>