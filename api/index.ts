import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  return c.json({
    success: true,
    userName: 'themuuln',
    firstName: 'Temuulen',
    lastName: 'Undrakhbayar',
    email: 'themuln.official@gmail.com',
    phoneNumber: 88650115,
  });
});

export default handle(app);
