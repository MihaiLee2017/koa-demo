import koaRouter from 'koa-router'
let router = new koaRouter()
export default app => {
  router.get('/', (ctx, next) => {
    console.log('-------------------------')
    console.log(ctx.body)
    ctx.send(
      {
        isOk: true
      },
      '成功'
    )
    // ctx.response.body = 'hello world'
  })
  app.use(router.routes()).use(router.allowedMethods())
}
