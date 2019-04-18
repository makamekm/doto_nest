import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
  head: {
    title: 'DoTo [Dundeeops]',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DoTo Dundeeops. A simple planning todo list per day. Made by Dundeeops team' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/buefy',
  ],
  css: [
    '~/assets/scss/main.scss',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
    ],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  loading: { color: '#3B8070' },
  axios: {},
  configureWebpack: {
    devtool: 'source-map',
  },
  build: {
    // vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    // extend(config, ctx) {
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/,
    //     });
    //   }
    // },
  },
  serverMiddleware: [
    { path: '/api', handler: '~/api/main.ts'},
  ],
};

export default config;
