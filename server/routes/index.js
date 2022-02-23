const express = require('express');
const router = express.Router();
const controller = require('../controllers')

router.get('/', (req,res) => {
    res.json("Welcome Server is running! 🔥")
});
//USER
router.post('/user/:account', controller.user.update); //유저정보업데이트(profile정보수정 제출)
router.get('/user/:account', controller.user.get); //유저정보가져오기(profile첫페이지 로딩)
router.post('/user', controller.user.post); //유저생성
//ASSET
router.post('/create', controller.assets.post); //

module.exports = router;

