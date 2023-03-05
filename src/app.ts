import fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './interfaces/routes'

const app = fastify()

app.register(cors)

routes.forEach((route) => {
    app.register(route.routes, { prefix: route.path })
})


export default app