<template>
  <div class="lc-container">
    <nav class="navbar is-light">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link class="navbar-item" to="/" active-class="is-active" exact>
              Nodes
            </nuxt-link>
          </div>
          <div class="navbar-end">
            <nuxt-link class="navbar-item" to="/contacts" active-class="is-active" exact>
              Contacts
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="lc-flex-child">
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

.lc-container .lc-flex-child {
  flex: 1;
}
</style>