module.exports = {
    getCompetition: async () => {
        //주차 == 몇회차 컴피티션
        const start = new Date("2022-01-01T00:00:00+0900");
        const now = new Date();
        const competition = Math.ceil((now.getTime() - start.getTime()) / (1000*60*60*24*7))+1;
        return competition;
    },
    
    likeToggle: async (_id, name) => {
        
        const existing = await Asset.findOne({Like: name});
        if(existing) {
            //데이터 삭제

        } else {
          //데이터추가
          const addLike = await Asset.updatOne({
              id:_id,},
              {
              $unset: {like:name},
          })
              
          
        }
    
    }
}
