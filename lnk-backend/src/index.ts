import { Hono } from 'hono'
import { cors } from 'hono/cors'
import urlRoute from './routes/urlRoute'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
  }
}>()

app.use('/*', cors())
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1/url', urlRoute);

export default app
