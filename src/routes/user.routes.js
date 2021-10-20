const { Router } = require('express');
const { getUserDetail } = require('../controllers/user.controller');
const checkToken = require('../middlewares/checkToken.middleware');
const validate = require('../middlewares/validate.middleware');
const { resetPasswordValidationSchema } = require('../validations/user.validation');

const router = Router();

router.use(checkToken);

router.get('/me', getUserDetail);
router.patch('/reset-password', validate(resetPasswordValidationSchema));

module.exports = router;
