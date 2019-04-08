import server from './mt/main';

import * as next from 'next';

const promise = bootstrap();

async function bootstrap() {
    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev });
    await app.prepare();
    const handle = app.getRequestHandler();
    return handle;
}

server.get('*', async (req, res) => {
    const handle = await promise;
    return handle(req, res);
});

server.listen(process.env.PORT || 3000);
