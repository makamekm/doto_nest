<template>
  <b-loading is-full-page :active.sync="isLoading"></b-loading>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    start() {
      this.isLoading = true;
    },
    finish() {
      this.isLoading = false;
    }
  }
}
</script>
