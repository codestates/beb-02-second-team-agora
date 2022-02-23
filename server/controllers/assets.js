
const Asset = require('../models/assetSchema')
const objectId = require('mongodb').ObjectId;
const {getCompetition, likeToggle} = require('../function/func');


module.exports = {
    //CREATE요청시 생성
    post : async (req,res) => {
        const {account, title, detail, img, contractAddress} = req.body;
        const competition = getCompetition();
        const nft = new Asset({
            account, //만든이
            title, // 제목
            detail, //세부사항
            img, //이미지
            contractAddress, //계약주소
            competition, //몇 주차
            //like 생략
        })
        nft.save()
            .then(() => {
                return res.json("Success!");
            })
            .catch((err) => {
                console.log(err);
            })
    },
    //NFT 관련사항(좋아요, 제목,내용 등) 변경시 업데이트
     update : async (req,res) => {
        const  {id, name, title, detail} = req.body;
        const nftId  = new Object(id);
        //code 에 따라서 업데이트를 한다면 ? 내용변경은 0 좋아요는 code 1
        //1. 좋아요 변경
        likeToggle(id,name);
        res.status(200).json("Ok")
     },

}

