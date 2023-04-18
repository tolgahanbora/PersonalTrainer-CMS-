import express, { Router } from 'express'

import {
    getAllTrickList,
    createTrickList,
    updateTrickList,
    deleteTrickList



} from '../controllers/trickList.controller.js'

const router = express.Router()

router.route('/').get(getAllTrickList)
router.route('/').post(createTrickList)
router.route('/:id').patch(updateTrickList)
router.route('/:id').delete(deleteTrickList)

export default Router