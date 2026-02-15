import  asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {

    res.status(200).json({
        message: "i am ritesh jha and my registration number is 20244ugcs010"
    })
})

export default  registerUser