<template>
  <transition name="fade">
    <section class="hero" v-if="show">
      <div class="hero-bodys p-t-9 p-b-5">
        <div class="container has-text-centered">
          <div style="font-size: 5rem;">
            <i class="far fa-compass has-text-grey-lighter"></i>
          </div>
          <div class="title is-2 has-text-grey-dark">
            {{ error.statusCode }}
          </div>
          <div class="subtitle is-4 has-text-grey">
            {{ error.message }}
          </div>
          <button class="button is-medium" to="/" @click="reload">
            Refresh
          </button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  layout: 'full',
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
