const User = require('../models/User');


// module.exports.signIn = async function(req, res) {
//     const user = await User.findOne()
// }


module.exports.register = async function(req, res) {
    try {
       
        const {name, email, password} = req.body;

        let user = await User.findOne({email});

        if(user) {
            return res.status(400).json({
                success:false,
                message: "user already exists"
            })
        }

        user = await User.create({
            name,
            email,
            password,
           
        });

        return res.status(201).json({
            success: true,
            user,
        })



        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}


module.exports.login = async function(req, res) {
    try {
        
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}