import NuxtConfiguration from '@nuxt/config';

delete process.env.http_proxy;
delete process.env.HTTP_PROXY;
delete process.env.https_proxy;
delete process.env.HTTPS_PROXY;

const config: NuxtConfiguration = {
  head: {
    title: 'Karpov\'s Furniture',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Karpov\'s Furniture.\n The best place to buy your next luxury furniture` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro|Merriweather|Playfair+Display+SC&display=swap' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
        integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
        crossorigin: 'anonymous',
      },
    ],
  },
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/buefy',
    '~/plugins/form-creator',
    { src: '~/plugins/vuex-shared-mutations', ssr: false },
  ],
  css: [
    '~/assets/scss/main.scss',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
    ],
  },
  manifest: {
    name: 'Karpov\'s Furniture',
    short_name: 'Karpov\'s Furniture',
    description: `Karpov\'s Furniture.\n The best place to buy your next luxury furniture`,
    lang: 'en',
    theme_color: '#EDD888',
    start_url: '/',
  },
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/axios', {
      credentials: false,
      proxyHeaders: false,
      prefix: '/api',
      browserBaseURL: '/api',
    }],
    // '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
  ],
  loading: '~/components/loading.vue',
  axios: {},
  ignore: [
    '**/sw*.js',
    'api/**/*',
    '**/*.spec.*',
    '**/*.*-spec.*',
    'test-utils/**/*',
  ],
  build: {
    extend(configExtended, { isClient }) {
      if (isClient) {
        configExtended.devtool = '#source-map';
      }
    },
    watch: process.env.IS_EXPRESS ? [] : ['api/**/*'],
  },
  serverMiddleware: process.env.IS_EXPRESS ? [] : [
    { path: '/api', handler: '~/api/main.ts'},
  ],
  router: {
    middleware: ['fwdcookies', 'auth'],
  },
  proxy: process.env.IS_EXPRESS ? {
    '/api': 'http://localhost:4000',
  } : {},
  // auth: {
  //   redirect: {
  //     login: '/login',
  //     register: '/register',
  //     callback: '/callback',
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: 'login', method: 'post', propertyName: 'token' },
  //         register: { url: 'register', method: 'post', propertyName: '' },
  //         user: { url: 'user', method: 'get', propertyName: '' },
  //         logout: false,
  //       },
  //     },
  //   },
  // },
};

export default config;
