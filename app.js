import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))
app.use(express.json({limit:"16kb"})) /** we have set the limit for 16kb data taak hi aye */
app.use(express.urlencoded({extended:true,limit:"16kb"})) /** we can give the nested object object k andar object  */
app.use(express.static("public"))/** any thing in public folder can avaible to all */

/** we can cookieparser  secure cookie in user  */
app.use(cookieParser())

export {app}