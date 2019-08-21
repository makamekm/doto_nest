<template>
  <div></div>
</template>

<script>
import Base from './base.vue';

export default {
  components: {
    Base
  },
  methods: {
    start() {
      this.$store.dispatch('app/setLoading', true);
    },
    finish() {
      this.$store.dispatch('app/setLoading', false);
    }
  }
}
</script>
