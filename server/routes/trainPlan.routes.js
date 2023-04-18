import express, { Router } from 'express'

import {
    getAllTrainList,
    createTrainList,
    updateTrainList,
    deleteTrainList


} from '../controllers/trainPlan.controller.js'

const router = express.Router()

router.route('/').get(getAllTrainList)
router.route('/').post(createTrainList)
router.route('/:id').patch(updateTrainList)
router.route('/:id').delete(deleteTrainList)

export default Router