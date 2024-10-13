import { Router } from 'express'
import { loginValidator } from '~/middlewares/users.middlewares'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, (req, res) => {
  res.json({
    message: 'login success'
  })
})

export default usersRouter
