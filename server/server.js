import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import bodyParser from 'body-parser';
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'

// Intialize Express

const app = express()

// Connect to DB
await connectDB()


//Middlewares
app.use(cors())
app.use(clerkMiddleware())



//Routes
app.get('/', (req, res) => res.send("API Working"))
// app.post('/clerk', express.json(), clerkWebhooks)
app.post('/clerk', bodyParser.raw({ type: 'application/json' }), clerkWebhooks);
app.use('/educator', express.json(), educatorRouter)
//Port 

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})  //