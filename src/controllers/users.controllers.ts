import { Request, Response } from 'express'
import databaseService from '~/services/database.services'
import User from '~/models/schemas/User.schema'
import userService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'nguyentrungkien@gmail.com' && password === '123456') {
    return res.status(200).json({
      message: 'Login success'
    })
  }

  return res.status(400).json({
    error: 'Login failed'
  })
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = userService.register({ email, password })
    return res.json({
      message: 'Register success',
      result
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: 'Register failed',
      error
    })
  }

  return res.status(400).json({
    error: 'Login failed'
  })
}
