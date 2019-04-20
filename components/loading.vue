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
      this.loadingComponent.close();
    }
  }
}
</script>
