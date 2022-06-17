import express from 'express'
import cors from 'cors'
import personRoutes from './Routes/personRoute.mjs'


const app = express() 

//settings
app.set('port', "3000")

//middlewares
app.use(cors('http://localhost:8080/'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//Routes
app.use('/person', personRoutes);
export default app