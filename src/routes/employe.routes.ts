import * as express from "express"
import {upload} from "../utils/uploadfile"
import { getdata,postdata,deletedata,updatedata } from "../controller/employe.controller"

const router = express.Router()
router.route("/employe").get(getdata).post(postdata)

router.route("/employe:id").delete(deletedata).patch(updatedata)

export default router