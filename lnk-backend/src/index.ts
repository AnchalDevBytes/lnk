import { Hono } from 'hono'
import { cors } from 'hono/cors'
import urlRoute from './routes/urlRoute'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
  }
}>()

app.use('*', cors({
  origin: ['http://localhost:3000', 'https://lnk-kappa.vercel.app'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
  credentials: true
}))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1/url', urlRoute);

export default app;
