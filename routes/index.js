const router = require('koa-router')()

router.prefix('/api')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/api', async (ctx, next) => {
  console.log(ctx.request.url)
  const data = await getData()
  ctx.body = { data, code: 0, message: 'success' }
})

function getData () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        return resolve([
          {
            name: 'dda',
            age: 32
          },
          {
            name: 'ccc',
            age: 30
          }
        ])
      } catch (err) {
        reject(err)
      }
    }, 300)
  })
}

module.exports = router
