// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./src/db/main.js"
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
/** connect hone k baad j ek promise return krta h toh promise theb and catch se handle kr lenge*/
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port http://localhost:${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
