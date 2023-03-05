import { env } from './config/env';
import server from './app';

server
    .listen({
        port: env.PORT,
        host: '0.0.0.0',
    })
    .then(() => {
        console.log(`Server running on port ${env.PORT}`)
    })