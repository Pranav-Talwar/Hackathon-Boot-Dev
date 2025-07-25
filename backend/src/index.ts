import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { cors } from 'hono/cors'

type Env = {
  DATABASE_URL: string
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Env }>()

app.use('/api/*', cors())
app.route('/api/v1/user', userRouter)
app.get('/', c => c.text('Hono ✓ Prisma ✓'))

export default app