import  asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js"
import User from "../models/user.model.js"
import uploadOnCloudinary from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
 
const registerUser = asyncHandler( async (req, res) => {

    // res.status(200).json({
    //     message: "i am ritesh jha and my registration number is 20244ugcs010"
    // })
// get user details from frontend
//  validation - not empty 
//  check if user already exists : username, email
// check for image, check for avtar
//upload them to cloudinary , avtar
// create user object - create entry in db
// remove password and refresh token field from response
// check for user creation
// return res

const {fullName, email, username, password }= req.body

// console.log("email:", email);
// console.log(req.body)

if ([fullName ,email,username,password].some((field) => field?.trim() === "")

) {
    throw new ApiError(400,"All fields are required")
}
 const existedUser = await  User.findOne({
    $or:[{username},{email}]
})

if (existedUser) {
    throw new ApiError (409, "user with email or username already exists")
    
}
// console.log(req.files);
    // support both `upload.fields()` and `upload.single()` usage
    const avatarLocalpath =  req.files?.avatar?.[0]?.path;

    //const coverImageLocalpath = req.files?.coverImage?.[0]?.path;


let coverImageLocalpath;

if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length >0 ){
    coverImageLocalpath = req.files.coverImage[0].path
}




    if (!avatarLocalpath) {
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalpath);
 if (!avatar) {
    throw new ApiError(400, "Avatar file is required")
 }
    let coverImage;
    if (coverImageLocalpath) {
        coverImage = await uploadOnCloudinary(coverImageLocalpath);
    }



 const user = await User.create({

    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
 })

const createduser = await User.findById(user._id).select(

    " -password -refreshToken "
)

if (!createduser) {
    throw new ApiError(500,"something went wrong whule registering the user")
}

return res.status(201).json(
    new ApiResponse(200,createduser,"user registered successfully")
)

})

export default  registerUser