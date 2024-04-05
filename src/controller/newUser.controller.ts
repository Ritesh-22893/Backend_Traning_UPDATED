// suruma entity folder ma newUser.ts tespaxi controller folder ma newUser.controller.ts tespaxi routes folder ma newUser.routes.ts
import { Request, Response, NextFunction } from 'express'
import { newUser } from "../entity/newUser";
import { AppError } from "../utils/AppError";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"

// jsonwebtoken is a kind of validation response to the frontend user logging in the signin page 
// it is used to provide a token as a feedback to the login user when the login becomes successfull

const newUserRepo = AppDataSource.getRepository(newUser)
    //#swagger.tags=['newUser']


export const postdataSave = async (req: Request, res: Response, next: NextFunction) => {
    //#swagger.tags=['newUser']


    try {
        await bcrypt.hash(req.body.password, 10, function (err, hashedpassword) {
            if (err) {
                console.log(err)
                return next(new AppError(400, err.message))
            }
            console.log(hashedpassword)
            req.body.password = hashedpassword
            newUserRepo.save(req.body).then(result => {
                res.status(200).json({
                    message: "data has been post",
                    data: result
                })
            }).catch(error => {
                console.log(error)
                res.status(400).json({

                    message: "somthing went while fecting data",
                    error: error
                })
            })
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: "somthing went wrong",
            error: error
        })
    }
}

export const postdatacmp = async (req: Request, res: Response, next: NextFunction) => {
    //#swagger.tags=['newUser']


    try {
        let data = await newUserRepo.findOneBy({ email: req.body.email })
        await bcrypt.compare(req.body.password, data.password, function (err, hashedpassword) {
            if (err) {
                return next(new AppError(400, err.message))
            }
            console.log(hashedpassword)

            //newuserRepo.save(req.body).then(result=>{
            if (hashedpassword) {

                //for token using jwt

                let token = jwt.sign({
                    id: data.id,
                    email: data.email
                }, "secretkey")

                res.status(200).json({
                    message: "password is correct",

                    token: token

                    //date:result
                })
            }
            else {
                next(new AppError(400, "password is wrong"))
            }
            // }).catch(error=>{
            //     res.status(400).json({
            //         message:"something went while posting data",
            //         error:error
            //     })
        })
        // })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: "password wrong",
            error: error
        })
    }
}


