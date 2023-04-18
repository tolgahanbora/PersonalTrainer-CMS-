import express, { Router } from 'express'

import {
    getAllDietList,
    createDietList,
    updateDietList,
    deleteDietList

} from '../controllers/dietPlan.controller.js'

const router = express.Router()

router.route('/').get(getAllDietList)
router.route('/').post(createDietList)
router.route('/:id').patch(updateDietList)
router.route('/:id').delete(deleteDietList)

export default Router