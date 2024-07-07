import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        require:[true,"User name must be filled"],
        unique:[true,"User name must be unique"]
    },

    email:{
        type:String,
        require:true,
        unique:[true,"Your mail is already registered"]
    },

    password:{
        type:String,
        require:true,
    },

    isAdmin:{
       type:Boolean,
       default:false,
    },
},{timestamps:true});

const User = new mongoose.model("User",userSchema);
export default User;