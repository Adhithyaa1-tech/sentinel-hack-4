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
        const {email, password} = req.body;

        const user = await User.findOne({email}).select('+password');

       

        const isMatch = await user.matchPassword(password);

        if(!isMatch || !user) {
            return res.status(401).json({
                success: false,
                message: 'incorrect credentials'
            })
        }

        //once user is found, i.e, hes logged in, server will generate a token and this token will be stored in the cookie

        const token = await user.generateToken();


        res.status(200).cookie('token', token, {expires: new Date() + 1000* 60 * 60, httpOnly: true }).json({
            success: true,
            message: 'user found!',
            user,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}