<template>
  <div class="container">
    <div class="content">
      <nuxt/>
    </div>
    <div>
      <default-footer/>
    </div>
  </div>
</template>

<script>
import DefaultFooter from '~/components/footer.vue'
export default {
  components: {
    DefaultFooter
  }
}
</script>

<style scoped>
.container
{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>