import server from './mt/main';

import * as Next from 'next';

const promise = bootstrap();

async function bootstrap() {
    const dev = process.env.NODE_ENV !== 'production';
    const app = Next({ dev });
    await app.prepare();
    const handle = app.getRequestHandler();
    return handle;
}

server.get('*', async (req, res, next) => {
    if (req.url.indexOf('/api') >= 0) {
        return next();
    } else {
        const handle = await promise;
        return handle(req, res);
    }
});

server.listen(process.env.PORT || 3000);
