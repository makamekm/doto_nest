import { Nuxt, Builder } from 'nuxt';
import config from './nuxt.config';
import app from './api/main';

process.env.IS_EXPRESS = 'true';

config.dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const nuxt = new Nuxt(config);

app.use(/^\/(?!api).*/, nuxt.render);

if (config.dev) {
  new Builder(nuxt)
    .build()
    .then(listen);
} else {
  listen();
}

function listen() {
  app.listen(port);
}
