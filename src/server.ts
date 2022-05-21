import express from "express";
import cors from 'cors'
import pupilRoutes from "./routes/pupil.routes";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true }))


app.use('/pupils', pupilRoutes)


app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running ...')
})
