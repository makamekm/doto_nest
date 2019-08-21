<template>
  <base :isLoadingBase="isLoading"/>
</template>

<script>
import Base from './base.vue';

export default {
  components: {
    Base
  },
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
