import * as express from "express"
import {upload} from "../utils/uploadfile"
import { getdata,postdata,deletedata,updatedata } from "../controller/magante.controller"

const router = express.Router()
router.route("/magante").get(getdata).post(postdata)

router.route("/magante:id").delete(deletedata).patch(updatedata)

export default router