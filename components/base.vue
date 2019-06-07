<template>
  <div class="lc-container">
    <b-loading is-full-page :active.sync="isLoading"></b-loading>
    <nav :class="{'navbar': true, 'is-fixed-top-desktop': true, 'is-large-height': isOnTop}">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <div class="logo">
              KARPOV'S FURNITURE
              <div class="dot"/>
            </div>
            <!-- <img src="/raymond-james-logo-blue.svg" style="width: 250px; height: 22px"> -->
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isMenuOpen = !isMenuOpen">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
        </div>
        <div :class="{'navbar-menu': true, 'is-active': isMenuOpen}">
          <div class="navbar-start" @click="isMenuOpen = false">
            <nuxt-link class="navbar-item" to="/" active-class="is-active" exact>
              Collection
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/catalog" active-class="is-active" exact>
              Catalog
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/aboutus" active-class="is-active" exact>
              About Us
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/blog" active-class="is-active" exact>
              Blog
            </nuxt-link>
          </div>
          <div class="navbar-end" @click="isMenuOpen = false">
            <template v-if="isLoading">
              <nuxt-link class="navbar-item has-icon" to="/login" active-class="is-active" exact>
                <div class="has-text-centered">
                  <span class="icon">
                    <i class="fas fa-spinner fa-pulse is-size-5"></i>
                  </span>
                </div>
              </nuxt-link>
            </template>
            <template v-if="user && !isLoading">
              <div class="navbar-item has-icon has-dropdown is-hoverable">
                <a class="navbar-item">
                  <div class="has-text-centered">
                    <i class="fas fa-key is-size-5"></i>
                    <div :class="{'lc-item': true, 'lc-is-hidden': !isOnTop}">
                      <div>
                        Welcome
                      </div>
                      <div>
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </a>
                <div class="navbar-dropdown is-right">
                  <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                  <hr class="navbar-divider">
                  <nuxt-link class="navbar-item" to="/preferences">Preferences</nuxt-link>
                  <nuxt-link class="navbar-item" to="/logout" no-prefetch>Logout</nuxt-link>
                </div>
              </div>
            </template>
            <template v-if="!user && !isLoading">
              <nuxt-link class="navbar-item has-icon" to="/login" active-class="is-active" exact>
                <div class="has-text-centered">
                  <i class="fas fa-fingerprint is-size-5"></i>
                  <div :class="{'lc-item': true, 'lc-is-hidden': !isOnTop}">
                    <div>
                      Account
                    </div>
                    <div>
                      Login
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </template>
            <nuxt-link class="navbar-item has-icon" to="/search" active-class="is-active" exact>
              <div class="has-text-centered">
                <i class="fas fa-search is-size-5"></i>
                <div :class="{'lc-item': true, 'lc-is-hidden': !isOnTop}">
                  <div>
                    Search
                  </div>
                  <div>
                    Globally
                  </div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link class="navbar-item has-icon" to="/cart" active-class="is-active" exact>
              <div class="has-text-centered">
                <i class="fas fa-shopping-cart is-size-5"></i>
                <div :class="{'lc-item': true, 'lc-is-hidden': !isOnTop}">
                  <div>
                    Shopping
                  </div>
                  <div>
                    Cart
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <div
      :class="{'lc-flex-child': true, 'lc-can-dim': true, 'lc-is-dim': isMenuOpen}"
      @click="isMenuOpen = false"
    >
      <slot v-if="!isLoading"/>
    </div>
    <div :class="{'lc-can-dim': true, 'lc-is-dim': isMenuOpen}" @click="isMenuOpen = false">
      <default-footer/>
    </div>
  </div>
</template>

<script>
import DefaultFooter from '~/components/footer.vue';

export default {
  components: {
    DefaultFooter
  },
  data: () => ({
    isMenuOpen: false,
    isOnTop: true,
  }),
  head() {
    return {
      bodyAttrs: {
        class: 'has-navbar-fixed-top-desktop is-large-height',
      }
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
    // if (!this.$store.state.auth.user) {
    //   this.$store.dispatch('auth/check');
    // }
  },
  // async mounted(...args) {
  //   console.log(this);
  //   if (!this.$store.state.auth.user) {
  //     this.$nextTick(async () => {
  //       this.$nuxt.$loading.start();
  //       await this.$store.dispatch('auth/check');
  //       this.$nuxt.$loading.finish();
  //     });
  //   }
  // },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll(event) {
      this.isOnTop = window.scrollY < 60;
    }
  },
}
</script>

<style lang="scss" scoped>
.lc-item {
  overflow: hidden;
  margin-top: 0.3rem;
  line-height: 1.3;
  transition: all 300ms;
  max-height: 100px;
  font-size: 0.7rem;

  @include from($desktop) {
    &.lc-is-hidden {
      opacity: 0;
      max-height: 1px;
      margin-top: 0;
    }
  }
}

.lc-container
{
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - #{$navbar-large-height});
}

.lc-container .lc-flex-child {
  flex: 1;
  content: '';
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
