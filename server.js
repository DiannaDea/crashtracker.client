const Koa = require('koa');
const respond = require('koa-respond');
const koaStatic = require('koa-static');
const path = require('path');
const cors = require('@koa/cors');
const send = require('koa-send');
const http = require('http');

const app = new Koa();
const port = 8000;

app.use(cors());
app.use(koaStatic(path.resolve(__dirname, './dist')));
app.use(respond());

app.use(async (ctx) => {
  await send(ctx, 'index.html', { root: path.resolve(__dirname, './dist') });
});

http.createServer(app.callback()).listen(port);

console.log(`Server running on port ${port}`);
