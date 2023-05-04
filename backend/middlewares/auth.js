const User = require('../models/User')

module.exports.isAuthenticated = async function(req, res){
    try {
        const {token} = req.cookies;

        if(!token){
            return res.status(401).json({
                success: false,
                message: 'login first'
            })
        }

        const decoded = await jwt.verify(token, 'adi');

        req.user = await User.findById(decoded._id);

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}