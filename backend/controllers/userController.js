import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'

// @desc     Auth user & get token
// @route    POST /api/users/login
// @access   Public
//     ipv try-catch blok gebruik van functie asyncHandler
const authUser = asyncHandler(async (req, res) => {
  res.send('auth user')
})

// @desc     Register user
// @route    POST /api/users
// @access   Public
//     ipv try-catch blok gebruik van functie asyncHandler
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user')
})

// @desc     Logout user / clear cookie
// @route    POST /api/users/logout
// @access   Private
//     ipv try-catch blok gebruik van functie asyncHandler
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user')
})

// @desc     Get user profile
// @route    POST /api/users/profile
// @access   Private
//     ipv try-catch blok gebruik van functie asyncHandler
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile')
})

// @desc     Update user profile
// @route    PUT /api/users/profile
// @access   Private
//     ipv try-catch blok gebruik van functie asyncHandler
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile')
})

// @desc     Get users
// @route    GET /api/users
// @access   Private/Admin
//     ipv try-catch blok gebruik van functie asyncHandler
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users')
})

// @desc     Get users by ID
// @route    GET /api/users/:id
// @access   Private/Admin
//     ipv try-catch blok gebruik van functie asyncHandler
const getUserByID = asyncHandler(async (req, res) => {
  res.send('get users by id')
})

// @desc     Delete user
// @route    DELETE /api/users/:id
// @access   Private/Admin
//     ipv try-catch blok gebruik van functie asyncHandler
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user')
})

// @desc     Update user
// @route    PUT /api/users/:id
// @access   Private/Admin
//     ipv try-catch blok gebruik van functie asyncHandler
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user')
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserByID, updateUser, }
