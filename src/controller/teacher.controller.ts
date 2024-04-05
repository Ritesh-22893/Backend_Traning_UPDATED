// suruma entity folder ma teacher.ts tespaxi controller folder ma teacher.controller.ts tespaxi routes folder ma teacher.routes.ts
import { Request, Response, NextFunction } from 'express'
import { Teacher } from "../entity/teacher";
import { AppError } from "../utils/AppError";
import { AppDataSource } from "../data-source";
import { json } from "stream/consumers";
import { Student } from '../entity/student';

const TeacherRepo = AppDataSource.getRepository(Teacher)
const StudentRepo = AppDataSource.getRepository(Student)
//#swagger.tags=['Teacher']

export const getdata = async (req: Request, res: Response, next: NextFunction) => {
    //#swagger.tags=['Teacher']

    try {
        await TeacherRepo.find({
            relations:{
                student:true
            }
        }).then(result => {
            res.status(200).json({
                message: "Data has been fetched successfully",
                data: result
            })
        }).catch(error => {
            next(new AppError(400, 'Error fetching data'))
        })
    }
    catch (error) {
        next(new AppError(400, 'error'))
    }
}

export const postdata = async (req: Request, res: Response, next: NextFunction) => {
    //#swagger.tags=['Teacher']
    /* #swagger.requestBody={
        required:true,
        content:{
            "multipart/form-data":{
                schema:{
                    $ref:"#/components/schemas/teacherSchema"
                }
            }
        }
    } 
    */
    try {

        // console.log(req.body, req.file)
        // req.body.profile = req.file.filename
        let student= await StudentRepo.findOneBy({id:req.body.student})
        console.log(student)
        req.body.student=student
        await TeacherRepo.save(req.body).then(result => {
            res.status(200).json({
                message: "Teacher data has been posted successfully",
                data: result
            })
        }).catch(error => {
            res.status(400).json({
                message: "Error while posting data",
                error: error
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
export const getsingledata = async (req: Request, res: Response, next: NextFunction) => {
    //#swagger.tags=['Teaceher']

    try {
        console.log(req.params)
        await TeacherRepo.findOneBy({ id: req.params.id }).then(result => {
            res.status(200).json({
                message: "Teacher data has been fetch successfully",
                data: result
            })
        }).catch(error => {
            next(new AppError(400, "error"))
        })
    }
    catch (error) {
        next(new AppError(400, "error"))
    }

}

export const updatedata = async (req: Request, res: Response, next: NextFunction) => {
    //#swagger.tags=['Teacher']

    try {
        console.log(req.params)
        let data = await TeacherRepo.findOneBy({ id: req.params.id })
        if (!data) {
            return next(new AppError(404, "data doesn't exist"))
        }
        Object.assign(data, req.body)
        await TeacherRepo.save(data).then((result) => {
            res.status(200).json({
                message: "Teacher data has been fetch successfully",
                data: result

            })
        }).catch((error) => {
            next(new AppError(400, "error"))
        })
    }
    catch (error) {
        next(new AppError(400, "error"))
    }
}



export const deletedata = async (req: Request, res: Response, next: NextFunction) => {
    //#swagger.tags=['Teacher']

    try {
        console.log(req.params)
        let Data = await TeacherRepo.findOneBy({ id: req.params.id })
        if (!Data) {
            return next(new AppError(404, "data doesn't exist"))
        }
        await TeacherRepo.remove(Data).then(result => {
            res.status(200).json({
                message: "Teacher data has been fetch successfully",
                data: result
            })
        }).catch(error => {
            next(new AppError(400, "error"))
        })

    }
    catch (error) {
        next(new AppError(400, "error"))
    }

}



