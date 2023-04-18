import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongoDB/connect.js'
import userRouter from './routes/user.routes.js'
import dietPlanRouter from './routes/dietPlan.routes.js'
import trainPlanRouter from './routes/trainPlan.routes.js'
import supplementPlanRouter from './routes/supplementPlan.routes.js'
import trickListRouter from './routes/trickList.routes.js'


dotenv.config()

const app = express()

//MIDDLEWARE
app.use(cors())
app.use(express.json({limit: "50mb"}))

app.use('/api/v1/users', userRouter)
app.use('/api/v1/dietplan', dietPlanRouter)
app.use('/api/v1/trainplan', trainPlanRouter)
app.use('/api/v1/supplementplan', supplementPlanRouter)
app.use('/api/v1/tricklist', trickListRouter)




//ROUTES
app.get('/', (req,res) => {
    res.send({message: "hello world!"})
})




const startServer = async () => {
    try {
        //Connect database !
        connectDB(process.env.MONGODB_URL)

         app.listen(8080, () => console.log('Server started on port http://localhost:8080'))
    } catch (error) {
        console.log(error)
    }
}
startServer()
