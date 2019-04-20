<template>
  <div class="lc-container">
    <nav class="navbar is-light">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <div class="title is-4">
              Version Control
            </div>
          </div>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isMenuOpen = !isMenuOpen">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div :class="{'navbar-menu': true, 'is-active': isMenuOpen}">
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
  },
  data: () => ({
    isMenuOpen: false,
  })
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