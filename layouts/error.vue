<template>
  <section class="gl-layout-margin">
    <transition name="fade">
      <section class="hero is-light" v-if="show">
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
    </transition>
  </section>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  mounted: function() {
    if (process.client) {
      window.setTimeout(() => this.show = true, 300);
    } else {
      this.show = true;
    }
  },
  props: ['error'],
  methods: {
    reload() {
      this.$router.go();
    }
  }
}
</script>
