import NuxtConfiguration from '@nuxt/config';

delete process.env.http_proxy;
delete process.env.HTTP_PROXY;
delete process.env.https_proxy;
delete process.env.HTTPS_PROXY;

const config: NuxtConfiguration = {
  srcDir: 'src/main/ts',
  generate: {
    dir: 'src/main/resources/public',
  },
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
    // ['@nuxtjs/proxy', {
    //   pathRewrite: {
    //     '^/api': '/demo-api',
    //   },
    // }],
    ['@nuxtjs/axios', {
      credentials: false,
      proxyHeaders: false,
      baseURL: process.env.API_URL || 'http://localhost:3000/demo-api',
    }],
    '@nuxtjs/style-resources',
  ],
  // proxy: {
  //   '/api/': { target: 'http://localhost:3000', pathRewrite: {'^/api/': 'demo-api'} },
  // },
  // proxy: {
  //   '/api/**': 'http://localhost:3000/demo-api',
  // },
  loading: '~/components/loading.vue',
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
};

export default config;
