const express = require('express');
const router = express.Router();
const { getEmployees, getRecruitment, getSetting, getCalendar } = require('../controller/mainController');

router.get('/employees', getEmployees);
router.get('/recruitment', getRecruitment);
router.get('/setting', getSetting);
router.get('/calendar', getCalendar);

module.exports = router;