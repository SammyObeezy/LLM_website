import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'

// Initialize Express
const app = express()

// Connect to DB
await connectDB()

// CORS Middleware - allow specific origin
const corsOptions = {
    origin: "http://localhost:5173",  // Allow requests from localhost:5173
    methods: ["GET", "POST"],        // Allow specific methods (optional)
    allowedHeaders: ["Content-Type"], // Allow specific headers (optional)
};

// Use CORS with options
app.use(cors(corsOptions));

// Middleware
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/educator', express.json(), educatorRouter)

// Port 
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
