const User = require("../models/userModel")
const sendEmail = require("../utils/sendEmail")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


const forgetPassword = async (req, res) => {
    const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ message: "User not found" });


  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
  user.resetToken = token;
  user.resetTokenExpire = Date.now() + 15 * 60 * 1000;
  await user.save();

    const resetLink = `http://localhost:${process.env.PORT}/resetpassword?token=${token}`;
    await sendEmail(user.email, "Reset Password", `Click here to reset your password: ${resetLink}`).then(
        (result) => {
            res.status(200).json({ message: "Email sent successfully" });
        },
        (error) => {
            res.status(500).json({ message: "Error sending email" });
        }
        
  );
        
    
    // res.json({ message: "Password reset link sent",Link:resetLink });
    
}

const verifyToken = async (req, res) => {
    const { token } = req.query;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id, resetToken: token, resetTokenExpire: { $gt: Date.now() } });
  
        if (!user) return res.status(400).json({ message: "Invalid or expired token" });
  
        res.json({ valid: true });
    } catch (error) {
        res.status(400).json({ message: "Invalid or expired token" });
    }
};
  

const resetPassword = async (req, res) => {
    const { token } = req.query;
    const { newPassword } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id, resetToken: token, resetTokenExpire: { $gt: Date.now() } });
  
        if (!user) return res.status(400).json({ message: "Invalid or expired token" });
  
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        user.resetToken = undefined;
        user.resetTokenExpire = undefined;
        await user.save();
  
        res.json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(400).json({ message: "Invalid or expired token" });
    }
};



module.exports = { forgetPassword ,verifyToken,resetPassword}