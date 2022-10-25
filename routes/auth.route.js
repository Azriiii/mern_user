const express =require('express')
const router = express.Router()
const upload = require('../middlewares/upload');
const uploadImage = require('../middlewares/uploadImage');

//validation
const{
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')

//Load controllers
const {
    registerController,
    activationController,
    loginController,
    forgotPasswordController,
    resetPasswordController,
    googleController,
    uploadController
}= require('../controllers/auth.controller.js')


router.post('/register',validRegister,registerController,uploadImage, upload, uploadController.uploadAvar);
router.post('/login',validLogin,loginController);
router.post('/activation',activationController);
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
router.put('/resetpassword', resetPasswordValidator, resetPasswordController);
router.post('/googlelogin',googleController);
router.post('/uploads', uploadImage, upload, uploadController.uploadAvar);


module.exports=router;