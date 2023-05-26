const express = require('express');

const router = express.Router();

const {
    getUsers,
    getUser,
    getAllTherapist,
    createUser,
    updateUser,
    deleteUser,
    updateUserPassword,
    getLoggedUserData,
    updateLoggedUserPassword,
    updateLoggedUserData,
    deleteLoggedUserData,
    uploadUserImage,
} = require('../services/UserServices');

const {protect } = require('../services/AuthServices');

router.get('/getMe',protect, getLoggedUserData, getUser )
router.put('/changeMyPassword',protect, updateLoggedUserPassword);
router.put('/updateMe',protect, uploadUserImage, updateLoggedUserData);
router.delete('/deleteMe',protect, deleteLoggedUserData);

router.put('/changePassword/:id', updateUserPassword);
router.get("/getAllTherapist", getAllTherapist);


router.route('/')
    .get(protect, getUsers)
    .post(protect, uploadUserImage, createUser);

router.route('/:id')
    .get(protect, getUser)
    .put(protect, uploadUserImage, updateUser)
    .delete(protect, deleteUser);

module.exports = router;