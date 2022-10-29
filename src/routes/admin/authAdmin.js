const express = require('express');
const { requireSignin } = require('../../common-middleware');
const { signup, signin, signout, alluser } = require('../../controllers/admin/authAdmin');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../../validators/authUser');
const router = express.Router();






//API ROUTES
router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);
// router.post('/admin/signout',requireSignin,signout);
router.get('/admin/get',alluser);

module.exports = router;