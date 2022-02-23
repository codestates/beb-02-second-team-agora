const mongoose = require('mongoose');
const USER = require('../models/userSchema');

module.exports = {
    get: async (req,res) => {
        if(!req.params) {
            res.status(400).json("Wrong connection!");
        }
       const {account} = req.params;
       const user = await USER.findOne({account:account,})
       if(!user) {
        res.status(404).json("Not Found");
       } else {
        res.status(200).json(user);
       }
    },

    post: async (req,res) => {
        console.log("호출");
        const {account,profileImg,name,about,contractAddress} = req.body;
        const user = new USER({
            account,
            profileImg,
            name,
            about,
            contractAddress,
        })
        user.save()
            .then((res) => {
            console.log(res)
            })
            .catch((err) => {
                console.error(err);
            })
        res.status(200).json("Complete")
    },
    update: async (req,res) => {
        const {account,name, profileImg,about,contractAddress} = req.body;
        const user = await USER.updateOne({
            account:{$eq: account}},
            {
                $set: {
                    contractAddress,
                    name,
                    about,
                    profileImg,

                }
            }
        )
        res.status(200).json("ok");
    }
}


