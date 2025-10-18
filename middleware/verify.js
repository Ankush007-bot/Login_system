
const jwt= require("jsonwebtoken")

module.exports = (req, res, next) => {
    let token = req.headers['authorization'].split(" ")
    token=token[1]
    if(!token) return res.status(403).json({
        status:'Token is missing'
    })
    if (token) {
         
        jwt.verify(token, process.env.secret_key, (err, user) => {
            if (err) return res.status(400).json({
                'status':'token is not valid'
            })
            req.user = user
            next()
        })

    }
}