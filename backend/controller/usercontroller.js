const userModel = require('../models/Usermodel');

const adduser = async (req, res) => {
    try {
        const { name, social } = req.body;

        // Check if files exist before accessing them
        const image1 = req.files.image1 ? req.files.image1[0] : undefined;
        const image2 = req.files.image2 ? req.files.image2[0] : undefined;
        const image3 = req.files.image3 ? req.files.image3[0] : undefined;
        const image4 = req.files.image4 ? req.files.image4[0] : undefined;

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        // console.log("image"+images);

        // Check for missing required fields
        if (!name || !social) {
            return res.status(400).json({
                success: false,
                message: 'Name and Social media fields are required'
            });
        }

        // Save user to the database
        const user = new userModel({
            name,
            social,
            image: images
        });

        await user.save();

        res.status(200).json({
            success: true,
            message: "User information successfully added",
            data: user
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = { adduser };
