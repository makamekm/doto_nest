<template>
  <div>
    <nav class="navbar" style="box-shadow: none; border-bottom: none; background-color: transparent;">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <div class="logo">
              KARPOV'S FURNITURE
              <div class="dot"/>
            </div>
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <nuxt-link class="navbar-item is-size-5 m-l-7-desktop" to="/aboutus" active-class="is-active" exact>
              About Us
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-5 m-l-7-desktop" to="/investors" active-class="is-active" exact>
              Investors
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-5 m-l-7-desktop" to="/contacts" active-class="is-active" exact>
              Contacts Us
            </nuxt-link>
          </div>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link class="navbar-item has-icon is-size-4 has-text-centered m-l-7-desktop" to="/facebook" active-class="is-active" exact>
              <i class="fab fa-facebook-square"></i>
            </nuxt-link>
            <nuxt-link class="navbar-item has-icon is-size-4 has-text-centered" to="/facebook" active-class="is-active" exact>
              <i class="fab fa-twitter-square"></i>
            </nuxt-link>
            <nuxt-link class="navbar-item has-icon is-size-4 has-text-centered" to="/facebook" active-class="is-active" exact>
              <i class="fab fa-linkedin"></i>
            </nuxt-link>
            <nuxt-link class="navbar-item has-icon is-size-4 has-text-centered" to="/facebook" active-class="is-active" exact>
              <i class="fab fa-instagram"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="lc-until-desktop has-text-centered m-t-4 m-b-4">
      <nuxt-link class="is-size-3 p-l-6 p-r-6" to="/facebook" active-class="is-active" exact>
        <i class="fab fa-facebook-square"></i>
      </nuxt-link>
      <nuxt-link class="is-size-3 p-l-6 p-r-6" to="/facebook" active-class="is-active" exact>
        <i class="fab fa-twitter-square"></i>
      </nuxt-link>
      <nuxt-link class="is-size-3 p-l-6 p-r-6" to="/facebook" active-class="is-active" exact>
        <i class="fab fa-linkedin"></i>
      </nuxt-link>
      <nuxt-link class="is-size-3 p-l-6 p-r-6" to="/facebook" active-class="is-active" exact>
        <i class="fab fa-instagram"></i>
      </nuxt-link>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <div class="is-size-6 has-text-grey">
          © 2019 Karpov's Furniture, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.lc-until-desktop
{
  display: none;

  @include until($desktop) {
    display: block;
  }
}
</style>
