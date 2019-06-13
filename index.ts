// import { Nuxt, Builder } from 'nuxt';
// import config from './nuxt.config';
import app, {
  tryStartBootstrap,
} from './api/main';

process.env.IS_EXPRESS = 'true';

// config.dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4000;

listen();

// const nuxt = new Nuxt(config);

// app.use(/^\/(?!api).*/, nuxt.render);

// if (config.dev) {
//   new Builder(nuxt)
//     .build()
//     .then(listen);
// } else {
  // listen();
// }

tryStartBootstrap();

async function listen() {
  app.listen(port);
}
