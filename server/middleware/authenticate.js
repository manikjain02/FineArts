// Authenticate is the middleware here. It will checked before the response.

const Users =  require('../models/userSchema')
const authenticate = async (req, resp, next)=>{
    try{
        // Get the cookie
        const token = req.cookies.jwt
        if(!token){
            resp.status(401).send("No Token")
        }else{
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
            const rootUser = await Users.findOne({_id: verifyToken._id, "token.token": token})
            if(!rootUser){
                resp.status(401).send("User Not Found")
            }else{
                resp.status(200).send("Authorized User")
            }
        }
        next()
    }catch(error){
        resp.status(401).send("Error")
        console.log(error)
    }
}

module.exports = authenticate