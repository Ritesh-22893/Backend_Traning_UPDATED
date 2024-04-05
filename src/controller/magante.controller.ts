import * as express from "express"
import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { magante } from "../entity/magante"
import { AppError } from "../utils/AppError"
import { error } from "console"

const maganteRepo=AppDataSource.getRepository(magante)
    //#swagger.tags=['magante']


export const getdata=async(req:Request,res:Response,next:NextFunction)=>{
    //#swagger.tags=['magante']

    try{
            await maganteRepo.find().then(result=>{
                res.status(200).json({
                    messgae:"magante data is been successfully fetched",
                    data:result
                })
            }).catch(error=>{
                    res.status(400).json({
                        message:"Error fetching data (data might not be present)."
                    })
            })
    }
    catch(errrr){[
        res.status(400).json({
            message:"might be server issue"
        })
    ]}
}

export const postdata=async(req:Request,res:Response,next:NextFunction)=>{
    //#swagger.tags=['magante']

    try{
        await maganteRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"magante data posted/created successfully",
                data:result
            })
        }).catch(error=>{
            next(new AppError(400,'error creating/posting data to the database'))
        })

    }
    catch(error){
        next(new AppError(400,'serrver issue, something went wrong'))
    }
}

export const deletedata = async(req:Request,res:Response,next:NextFunction)=>{
    //#swagger.tags=['magante']

try{
       await maganteRepo.softRemove({id:req.params.id}).then(result=>{
           res.status(200).json({
            message:"deleted magante data successfully",
            data:result
           })
       }).catch(error=>{
        next(new AppError(400,'Error on deleting'))
       })
}
catch(error){
next(new AppError(400,'server error, something went wrong'))
}
}

export const updatedata=async(req:Request,res:Response,next:NextFunction)=>{
    //#swagger.tags=['magante']

try{
    let data =await maganteRepo.findOneBy({id:req.params.id})
        if(!data){
            next(new AppError(400,'Error finding data to be updated i.e. data doesnt exist'))
        }
        Object.assign(data,req.body)
        await maganteRepo.save(data).then(result=>{
        res.status(200).json({
            message:"magante data successfully updated",
            data:result
        })
    }).catch((error)=>{
        next(new AppError(400,'Error updating the magante data'))
    })
}catch(error){
next(new AppError(400,'server error, something went wrong'))
}
}