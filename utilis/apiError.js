/** humko j pata h ki  Error ki ek  class hoti h uske andar bhot saari cheez h  iss class m bhot saare constructor h lekin hum humrha constructor use karenge*/


class ApiError extends Error{
    constructor(
        statusCode,
        message= "something went wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors

        if(stack){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }

}

export {ApiError}