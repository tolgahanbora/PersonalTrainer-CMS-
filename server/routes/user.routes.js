import express from 'express'

// IMPORT ALL THE CONTROLLERS
import {
    getAllUsers,
    createUser,
    updateUser,
    getUserInfoByID
} from '../controllers/user.controller.js'

const router = express.Router()

router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').get(getUserInfoByID)
router.route('/:id').patch(updateUser)

export default router