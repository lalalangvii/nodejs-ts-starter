import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  const customers = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890"
    },
    {
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    }
  ]

  res.send(customers)
})

export default router