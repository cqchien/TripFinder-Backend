const { Router } = require('express');
const passport = require('passport');
const {
  login, register, loginWithSocialNetwork, getAccessToken,
} = require('../controllers/auth.controller');
const validate = require('../middlewares/validate.middleware');
const {
  registerValidationSchema,
  loginValidationSchema,
  getAccessTokenValidationSchema,
} = require('../validations/auth.validation');

const router = Router();

router.post('/register', validate(registerValidationSchema), register);
router.post('/login', validate(loginValidationSchema), login);

router.post('/login-gg', passport.authenticate('google-token', { session: false }), loginWithSocialNetwork);
router.post('/login-fb', passport.authenticate('facebook-token', { session: false }), loginWithSocialNetwork);

router.post('/refresh-token', validate(getAccessTokenValidationSchema), getAccessToken);

module.exports = router;
