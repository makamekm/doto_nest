<template>
  <div>
    <nav class="navbar" style="box-shadow: none; border-bottom: none; background-color: transparent;">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="/raymond-james-logo-blue.svg" style="width: 250px; height: 22px">
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isMenuOpen = !isMenuOpen">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div :class="{'navbar-menu': true, 'is-active': isMenuOpen}">
          <div class="navbar-start" @click="isMenuOpen = false">
            <nuxt-link class="navbar-item is-size-5" style="margin-left: 2rem;" to="/aboutus" active-class="is-active" exact>
              About Us
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-5" style="margin-left: 2rem;" to="/career" active-class="is-active" exact>
              Career
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-5" style="margin-left: 2rem;" to="/investors" active-class="is-active" exact>
              Inverstors
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-5" style="margin-left: 2rem;" to="/investors" active-class="is-active" exact>
              Inverstors
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-5" style="margin-left: 2rem;" to="/contacts" active-class="is-active" exact>
              Contacts Us
            </nuxt-link>
          </div>
          <div class="navbar-end" @click="isMenuOpen = false">
            <nuxt-link class="navbar-item is-size-4" to="/facebook" active-class="is-active" exact>
              <i class="fab fa-facebook-square"></i>
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-4" to="/facebook" active-class="is-active" exact>
              <i class="fab fa-twitter-square"></i>
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-4" to="/facebook" active-class="is-active" exact>
              <i class="fab fa-linkedin"></i>
            </nuxt-link>
            <nuxt-link class="navbar-item is-size-4" to="/facebook" active-class="is-active" exact>
              <i class="fab fa-instagram"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <footer class="footer">
      <div class="content has-text-centered">
        <div>
          <span style="font-size: 14px;">© 2019 Raymond James Financial, Inc. All rights reserved.</span>
        </div>
        <br>
        <div>
          <small><span style="font-size: 13px;">Raymond James &amp; Associates, Inc., member <a href="https://www.nyse.com/index" target="_blank">New York Stock Exchange</a> / <a href="http://www.sipc.org/" target="_blank">SIPC</a>, and Raymond James Financial Services, Inc., member <a href="http://www.finra.org/" target="_blank">FINRA</a> / <a href="http://www.sipc.org/" target="_blank">SIPC</a>, are subsidiaries of Raymond James Financial, Inc.</span></small>
        </div>
        <div>
          <small><span style="font-size: 13px;">Raymond James® and Raymond James Financial® are registered trademarks of Raymond James Financial, Inc.</span></small>
        </div>
        <div>
          <small><span style="font-size: 13px;">Raymond James &amp; Associates, Inc. <a href="/-/media/rj/dotcom/files/our-company/about-us/rja-statement-of-financial-condition.pdf?la=en">Statement of Financial Condition</a></span></small>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.lc-footer
{
  text-align: center;
  padding: $column-gap * 2;
}
</style>
