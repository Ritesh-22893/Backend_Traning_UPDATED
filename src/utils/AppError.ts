export class AppError extends Error{
    status:string;
    isoperation:boolean;
    constructor(public statuscode:number=500,public message:string){
        super(message)
        this.status='${statuscode}'.startsWith('4')?'fail':'error';
        this.isoperation=true
        Error.captureStackTrace(this,this.constructor)
    }
}