import * as express from 'express'
import { postdataSave, postdatacmp } from '../controller/newUser.controller'
import Auth from '../utils/validateroutes'

const router = express.Router()  // CRUD (C:CREAT)

router.route('/newUser').post(postdataSave)
router.route('/login').post(postdatacmp)

// router.route('./newUser').get(Auth.getData).post(postdataSave)

export default router