import express, { Request, Response } from 'express'
import { EventHandlers } from './events'
import { MyService } from './services'
import { EventEmitter } from 'events'

const app = express()

const eventEmitter = new EventEmitter();

const eventHandler = new EventHandlers(eventEmitter)
const myService = new MyService(eventEmitter)

eventHandler.registerRouteEventHandlers()

app.get('/start', (req: Request,res: Response) => {
    try {
        myService.accessRoute('start')
        return res.status(200).json({"message" : "Welcome to EDA"})
    } catch (error) {
        return res.status(500).json({"message" : "An Error Occured on The Server"})   
    }

})

const PORT = 8083

app.listen(PORT, ()=> {
    console.log(`Server Running on Port ${PORT}`)
})