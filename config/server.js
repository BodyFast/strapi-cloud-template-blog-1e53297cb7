module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['bQEJ/0EjAX1bOVwnvzYVTkf9ddwiwk+1CPxYX+ZfYAI=', 'ioCPQFVrvfkNmqDaV8ACo0Ltx1/OHbbxbNA1JE4CJhg=']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
