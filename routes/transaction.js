var express = require('express');
var router = express.Router();
var transactionController = require('../controllers/transactionController');

router.get('/index', transactionController.index);
router.post('/store', transactionController.store);
router.get('/guestCheckout', transactionController.guestCheckout);
router.get('/:id/show', transactionController.show);
router.get('/:id/edit/:category_id?', transactionController.edit);
// router.post('/update/:id', transactionController.update);
router.post('/:id/destroy', transactionController.destroy);

router.post('/addItem', transactionController.addItem);
router.post('/:id/deleteItem', transactionController.deleteItem);
router.post('/:id/applyDiscount', transactionController.applyDiscount);
router.post('/:id/applyDiscountCode', transactionController.applyDiscountCode);
router.get('/:id/recalTotal', transactionController.recalTotal);
router.post('/:id/byCard', transactionController.byCard);
router.post('/:id/byCash', transactionController.byCash);
router.post('/:id/refund', transactionController.refund);

router.get('/summary', transactionController.summaryIndex);
router.post('/summary/search', transactionController.summarySearch);

module.exports = router;