import * as express from 'express'
import { getdata, postdata, getsingledata, deletedata, updatedata } from '../controller/student.controller'
import { upload, uploadbuff } from '../utils/uploadfile'
import Auth from '../utils/validateroutes'

const router = express.Router()  // CRUD (C:CREAT)

// router.route('/Student').get(getdata).post(uploadbuff.single('profile'), postdata)

router.route('/Student').get(Auth, getdata).post(upload.single('profile'), postdata)

// router.route('/Student').get(Auth, getdata).post(postdata)

router.route('/Student:id').get(getsingledata).delete(deletedata).patch(updatedata)
export default router