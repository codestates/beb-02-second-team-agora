const express = require('express');
const router = express.Router();
const controller = require('../controllers')

router.get('/', (req,res) => {
    res.json("Welcome Server is running! 🔥")
});

router.post('/user/:account', controller.user.update); //유저정보업데이트
router.get('/user/:account', controller.user.get); //
router.post('/user', controller.user.post); //유저생성

module.exports = router;

