import * as express from "express"
import { getdata_librarydata, postdata_librarydata, deletedata_librarydata, updatedata_librarydata } from "../controller/library.controller"
import { upload } from "../utils/uploadfile"
const router = express.Router()

router.route('/library').get(getdata_librarydata).post(postdata_librarydata)
router.route('/library/:id').delete(deletedata_librarydata).patch(updatedata_librarydata)


export default router