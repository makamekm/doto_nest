import { Nuxt, Builder } from '@nuxt/server';
import app from './api/main';
import config from './nuxt.config';

config.dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const nuxt = new Nuxt(config);

app.use(nuxt.render);

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
