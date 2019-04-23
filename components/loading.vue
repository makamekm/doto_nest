<template>
  <div/>
</template>

<script>
export default {
  methods: {
    start() {
      this.loadingComponent = this.$loading.open();
    },
    finish() {
      if (this.loadingComponent) {
        this.loadingComponent.close();
      }
    }
  }
}
</script>
