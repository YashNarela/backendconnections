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

///routes
import userRouter from "./src/routes/user.routes.js"

/** router decelration
 * app.get kr k hum likh dete ssidhe but vo tb hota h jb hum router decelare nhi kr rhe the but 
 * ab jb router decelare kr rahe h toh humko middleware use krna padega 
 * middleware khuch nhi jao toh humse milte jana app.use('/users' ,bhai konsa router active karwana h)
 * ab jaise hi koi /users pr click karega toh uska control jayega uss active wali p in this userRouter wali p
 * 
 */
app.use('/api/v1/users',userRouter)






export {app}