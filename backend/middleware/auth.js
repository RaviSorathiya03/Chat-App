 export const authentication = async(req, res, next)=>{
 const authHeader = req.headers['Authentication'];
 const token = authHeader && authHeader.split(' ')[1];
 if(!token){
    return res.status(401).json({error: 'Token is required'});
 }

 try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
 } catch(err){
    return res.status(401).json({error: 'Token is invalid'});
 }
}