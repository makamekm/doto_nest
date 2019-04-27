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
          <div class="navbar-start" @click="isMenuOpen = false">
            <nuxt-link class="navbar-item" to="/" active-class="is-active" exact>
              Nodes
            </nuxt-link>
          </div>
          <div class="navbar-end" @click="isMenuOpen = false">
            <nuxt-link class="navbar-item" to="/contacts" active-class="is-active" exact>
              Contacts
            </nuxt-link>
            <div class="navbar-item has-dropdown is-hoverable" v-if="$auth.$state.loggedIn">
              <a class="navbar-link">
                {{ $auth.user.username }}
              </a>
              <div class="navbar-dropdown">
                <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                <hr class="navbar-divider">
                <a class="navbar-item" @click="$auth.logout();$router.go();">Logout</a>
              </div>
            </div>
            <template v-else>
              <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
              <nuxt-link class="navbar-item" to="/login">Log In</nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </nav>
    <div :class="{'lc-flex-child': true, 'lc-can-dim': true, 'lc-is-dim': isMenuOpen}" @click="isMenuOpen = false">
      <div class="container">
        <nuxt/>
      </div>
    </div>
    <div :class="{'lc-can-dim': true, 'lc-is-dim': isMenuOpen}" @click="isMenuOpen = false">
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
  }),
}
</script>

<style lang="scss" scoped>
.lc-container
{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.lc-container .lc-flex-child {
  flex: 1;
}

@include until($desktop) {
  .navbar-menu {
    transition: max-height 0.4s;
    display: block;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
    max-height: 0px;

    &.is-active {
      overflow: auto;
      max-height: 100vh;
    }
  }
}

.lc-can-dim {
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.0);
    pointer-events: none;
    transition: background-color 0.5s;
  }
}

.lc-is-dim {
  &:after {
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: all;
  }
}
</style>
