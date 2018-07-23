import path from 'path'
import bodyParser from 'koa-bodyparser'
import staticFiles from 'koa-static'
import Send from './send'
export default app => {
  app.use(Send())
  app.use(bodyParser())
  //静态文件中间件
  app.use(staticFiles(path.resolve(__dirname, '../public')))
  // 增加错误的监听处理
  app.on('error', (err, ctx) => {
    // if (ctx && !ctx.headerSent && ctx.status < 500) {
    //   ctx.status = 500
    // }
    // if (ctx && ctx.log && ctx.log.error) {
    //   if (!ctx.state.logged) {
    //     // ctx.log.error(err.stack)
    //   }
    // }
  })
}
