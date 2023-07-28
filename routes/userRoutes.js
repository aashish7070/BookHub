const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.get('/', user_controller.user_list);

router.get('/create', user_controller.user_create_get);
router.post('/create', user_controller.user_create_post);

// router.get('/:id', user_controller.user_detail);

router.post('/addToCart', user_controller.user_cart);
router.get('/cart',user_controller.user_cart_display)

router.get('/refreshUserBook',user_controller.refresh_user_book)

router.post('/checkOut',user_controller.user_check_out)

module.exports = router;
