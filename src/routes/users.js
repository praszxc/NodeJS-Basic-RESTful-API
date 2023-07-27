const express = require('express')

const UserController = require('../controller/users.js')

const router = express.Router()


//CREATE
router.post('/', UserController.createNewUser)

//READ
router.get('/', UserController.getAllUsers)

//UPDATE
router.patch('/:id', UserController.updateUser)

//DELETE
router.delete('/:id', UserController.deleteUser)

module.exports = router