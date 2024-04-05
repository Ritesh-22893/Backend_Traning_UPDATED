import * as express from 'express'
import { getdata, postdata, getsingledata, deletedata, updatedata } from '../controller/teacher.controller'
import { upload } from '../utils/uploadfile'

const router = express.Router()  // CRUD (C:CREAT)
router.route('/Teacher').get(getdata).post(postdata)

// router.route('/Teacher').get(getdata).post(upload.single("profile"), postdata)
router.route('/Teacher:id').get(getsingledata).delete(deletedata)
export default router