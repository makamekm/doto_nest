<template>
  <div class="lc-container">
    <div>
      <div class="container">
        <nuxt/>
      </div>
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
.lc-container
{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.lc-container *:first-child {
  flex: 1;
}
</style>