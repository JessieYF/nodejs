const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Ansible';
});

app.listen(3000);
