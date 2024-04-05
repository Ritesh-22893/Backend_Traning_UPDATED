import * as express from "express"
import { Request,Response, NextFunction } from "express";
import { library } from "../entity/library";
import { AppError } from "../utils/AppError";
import { AppDataSource } from "../data-source";
import { Student } from "../entity/student";

const libraryRepo= AppDataSource.getRepository(library)
const StudentRepo=AppDataSource.getRepository(Student)
    //#swagger.tags=['library']


export const getdata_librarydata = async (req:Request, res:Response, next:NextFunction)=>{
    //#swagger.tags=['library']

    try{
        await libraryRepo.find().then(result =>{
            res.status(200).json({
                message:"Library data fetched successfully",
                data:result
            })
        }).catch(error=>{
            res.status(400).json({
                message:"Error fetching library data"
            })
        })
    }
    catch{
        res.status(500).json({
                message:"something went wrong"
        })
    }
}

export const postdata_librarydata = async(req:Request, res:Response, next:NextFunction)=>{
    //#swagger.tags=['library']

    try{
        let student=await StudentRepo.findOneBy({id:req.body.student})
        req.body.student=student
        await libraryRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"library data has been posted successfully",
                data:result
            })
        }).catch(error=>{
            console.log(error)
            res.status(400).json({
                message:"Error posting library data"
            })
        })
    }
    catch{
        res.status(500).json({
            message:"something went wrong"
        })
    }
}

export const deletedata_librarydata = async(req:Request,res:Response,next:NextFunction)=>{
    //#swagger.tags=['library']

    try{
        let data = await libraryRepo.findOneBy({ id: req.params.id })
        if(!data){
            return next(new AppError(404,"data doesn't exist"))
        }
        Object.assign(data,req.body)
        await libraryRepo.remove(req.body).then(result=>{
            res.status(200).json({
                message:"Library data removed successfully",
                data:result
            })
        }).catch(error=>{
            next(new AppError(400,'Error deleting library data'))
        })
    }
    catch(error){
        next(new AppError(400,"something went wrong"))
    }
}

export const updatedata_librarydata= async(req:Request,res:Response,next:NextFunction)=>{
    //#swagger.tags=['library']

    try{
        let data = await libraryRepo.findOneBy({id: req.params.id})
        if(!data){
            return next(new AppError(404,"data doesn't exist"))
        }
        Object.assign(data,req.body)
        await libraryRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"Library data updated sucsessfully",
                data:result
            })
        }).catch(error=>{
            next(new AppError(400,'Error updating library data'))
        })
    } 
    catch{
         next(new AppError(400,"Something went wrong"))
    }
}
