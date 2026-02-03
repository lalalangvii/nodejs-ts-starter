import express, { json } from 'express'
import cors from 'cors'
import 'dotenv/config'

import customerRoutes from './routes/customers/index'

// const cors = require('cors')
const app = express()

app.use(cors())

const PORT = process.env.PORT || 8000

app.use(json())

app.use('/customers', customerRoutes)

app.listen(PORT, () => {
  console.log(`Server is runing on http://localhost:${PORT}`);
})