import express, { Router } from 'express'

import {
    getAllSupplementPlan,
    createSupplementPlan,
    updateSupplementPlan,
    deleteSupplementPlan


} from '../controllers/supplementPlan.controller.js'

const router = express.Router()

router.route('/').get(getAllSupplementPlan)
router.route('/').post(createSupplementPlan)
router.route('/:id').patch(updateSupplementPlan)
router.route('/:id').delete(deleteSupplementPlan)

export default Router