const mongoose = require('mongoose');


const assetSchema = new mongoose.Schema({
    //_id: Object  자동생성//게시글넘버정도로 해석
    account: String, //창작자
    title: String,  // 제목
    img: String,    // 이미지
    detail: String, // 설명
    contractAddress: String, //계약주소

    //최초 서버에서 계산
    competition: Number, // 몇 번째 컴피티션인지 기간설정을 위함.
    like: Object, //좋아요 누른사람 id
    //고려중인 항목 : tokenId

})
module.exports = mongoose.model('ASSET', assetSchema);

