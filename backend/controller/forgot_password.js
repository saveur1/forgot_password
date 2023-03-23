const User = require("../models/forgot_password");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { message } = require("../config/email");

exports.forgot_password = async(req,res,next)=>{
    try {
        const { email } = req.body;
        const found_user = await User.findOne({email:email});
        if(found_user){
            const NEW_SECRET = process.env.TOKEN_SECRET + found_user.password;
            const NEW_TOKEN =  jwt.sign({user_id:found_user._id,email:found_user.email},NEW_SECRET,{expiresIn:"15m"});
            const link = `http://localhost:3000/password_reset/${found_user._id}/${NEW_TOKEN}`;
            const transport = nodemailer.createTransport({service:"gmail",auth:{user:"bikorimanaxavier@gmail.com",pass:process.env.PASSWORD_EMAIL}});            
            const response=await transport.sendMail(message(email,found_user.full_name,link));
            res.status(200).json({status:"success",link:link,response:response});
        }else {
            res.status(403).json({status:"error",message:"User is not found in database"});
        }
    } catch (error) {
        res.status(500).json({status:"error",message:error.message});
    }
}

exports.create_new_user = async(req,res,next)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(req.body.password,salt);
        const newUser = await User.create(req.body);
        res.status(200).json({status:"success",messsage:"User Created Successfully",result:newUser});
    } catch (error) {
        res.status(400).json({status:"error",message:error.message});
    }
}

exports.reset_password = async(req,res,next)=>{
    try {
        let { password,userId } = req.body;
        const salt = await bcrypt.genSalt(10);
        password =await bcrypt.hash(password, salt);
        const updated = await User.findByIdAndUpdate(userId,{ password:password },{new:true});
        res.status(200).json({status:"success",message:"Password updated successfully",result:updated});
    } catch (error) {
        console.log(error);
        res.status(403).json({status:"error",message:error.message,requestData:req.body})
    }
}

exports.verify_token = async(req,res,next)=>{
    try {
        const { token,userId } = req.body;
        const foundUser = await User.findById(userId);
        const secret = process.env.TOKEN_SECRET + foundUser.password;
        const decoded = jwt.verify(token,secret);
        res.status(200).json({status:"success",message:"Token verified successfully"});
    } catch (error) {
        console.log(error);
        res.status(403).json({status:"error",message:error.message});
    }
}