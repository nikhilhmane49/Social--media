
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const adminModel = require("../models/AdminModel");
const userModel = require("../models/Usermodel");

//******************API for admin login

const adminLogin = async (req, res) => {

    
    try {
  
    const {email,password}=req.body;

    const admin = await adminModel.findOne({email});

    if(!admin){
       return res.json({
            success:false,
            message:"user does not extist"
        })
    }
    
    const ismacth= await bcrypt.compare(password,admin.password);

    if(ismacth){

            const token = jwt.sign(email + password, process.env.JWT_SECRET);

            console.log(token);
            console.log(process.env.ADMIN_EMAIL);
            
            
            res.status(200).json({
                success: true,
                token: token,
                message: "Admin login successful"
            })

        }
        else {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    
    
    }


}




//*****************api for regester

const adminregester= async (req,res)=>{



    try {

        const{email,password}=req.body;


        if(!email||!password){
            return res.json({
                success:false,
                Message:"fille all the detail"
            })
        }
        
        //email validactor
        
        if (!validator.isEmail(email)) {
            return res.json({
                success:false,
                message:"Please provide a valid email"
            })
        }
        //password validation
        
        if(!validator.isLength(password,{min:3})){
            return res.json({
                success:false,
                message:"Password must be at least 8 characters long"
            })
        }
        
        
        //hashing the password
        
        const salt= await bcrypt.genSalt(10);
        
        const hashpassword = await bcrypt.hash(password,salt);
        
        
        const data ={
            email,
            password:hashpassword,
        }
        
        const adminmodel = new adminModel(data)
        
        const user= await adminmodel.save();
        
        
    

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }



}




const getalluser = async(req,res)=>{
    try {
    
        const userinformation = await userModel.find({});
        
     
        if(userinformation && userinformation.length > 0){
            res.status(200).json({
                success: true,
                data: userinformation,
                message: "User fetched successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No User found"
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}








module.exports = { adminLogin, adminregester , getalluser };