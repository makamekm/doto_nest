import NuxtConfiguration from '@nuxt/config';

delete process.env.http_proxy;
delete process.env.HTTP_PROXY;
delete process.env.https_proxy;
delete process.env.HTTPS_PROXY;

const config: NuxtConfiguration = {
  head: {
    title: 'Node Version Control',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Node Version Control. \
A simple planning todo list per day. Made by Dundeeops team` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap' },
    ],
  },
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/buefy',
    '~/plugins/form-creator',
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
    name: 'Node Version Control',
    short_name: 'Node VC',
    description: `Node Version Control. \
A simple planning todo list per day. Made by Dundeeops team`,
    lang: 'en',
    theme_color: '#f5f5f5',
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
    '@nuxtjs/auth',
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
    middleware: ['auth'],
  },
  auth: {
    redirect: {
      login: '/login',
      register: '/register',
      callback: '/callback',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'token' },
          register: { url: 'register', method: 'post', propertyName: '' },
          user: { url: 'user', method: 'get', propertyName: '' },
          logout: false,
        },
      },
    },
  },
};

export default config;
