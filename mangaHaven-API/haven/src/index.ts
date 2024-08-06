import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import logger from './Logs/logger';
import { middleWareError } from './Error/MidleWareError';

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        const error = err as middleWareError;
        logger.error('Server error', error);
        ctx.status = error.status || 500;
        ctx.body = error.message || 'Internal Server Error';
    }
});


app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.info(`Server init listening on ${PORT}`);
});