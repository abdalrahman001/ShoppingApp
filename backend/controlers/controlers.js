const { validationResult }=require('express-validator');
exports.signup=async(req,res,next)=>{
    const errors=validationresult(req);
    if(!errors.isEmpty()){
        const name=req.body.name;
        const email=req.body.email;
        const password=req.body.password;
        const user=new User(name,email,password);
    }
    const resualt= await User.save(user)
    res.status(200).json({message:'User created'})
    

}