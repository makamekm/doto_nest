<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  type="username"
                  class="input"
                  name="username"
                  v-model="username"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-primary is-fullwidth">Log In</button>
              <button type="button" class="button is-transparent is-fullwidth m-t-5">
                <span class="icon is-small">
                  <i class="fab fa-google"></i>
                </span>
                <span>Google Account</span>
              </button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Validator } from "vee-validate";

const AuthStore = namespace("auth");

@Component({
  beforeMount() {
    console.log(this.$store.state.auth.user);
    
    if (!!this.$store.state.auth.user) {
      this.$router.push({
        path: `/`,
      });
    }
  },
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
})
export default class extends Vue {
  @AuthStore.State('user') user;
  @AuthStore.Action('login') doLogin;
  @AuthStore.Action('loginGoogle') doLoginGoogle;

  username!: string;
  password!: string;
  error!: string;

  async login() {
    try {
      await this.doLogin({
        username: this.username,
        password: this.password,
      });
      const redirect = this.$route.query.redirect as string;
      this.$router.push({
        path: redirect || `/`,
      });
    } catch (e) {
      this.error = e.response.data.message;
      this.$toast.open({
        duration: 5000,
        message: this.error,
        position: 'is-bottom',
        type: 'is-danger',
      });
    }
  }

  async loginGoogle() {
    try {
      await this.doLoginGoogle();
    } catch (e) {
      this.error = e.response.data.message;
      this.$toast.open({
        duration: 5000,
        message: this.error,
        position: 'is-bottom',
        type: 'is-danger',
      });
    }
  }
}
</script>