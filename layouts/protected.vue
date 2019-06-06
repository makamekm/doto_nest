<template>
  <base-layout>
    <div class="container">
      <nuxt/>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from '~/components/base.vue'
export default {
  async beforeMount() {
    if (!this.$store.state.auth.user) {
      await this.$store.dispatch('auth.check');
    }
    if (!this.$store.state.auth.user) {
      this.$router.push({
        path: `/`,
      });
    }
  },
  components: {
    BaseLayout
  },
}
</script>
