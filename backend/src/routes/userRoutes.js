import express from "express";
import { getProfile, loginUser, logoutUser, registerUser } from "../controllers/userController.js";
import { validateLogin, validateRegister } from "../validators/userValidators.js";
import { protect } from "../middleware/userMiddleware.js";

const userRoutes = express.Router();

userRoutes.post('/register', validateRegister, registerUser);
userRoutes.post('/login', validateLogin, loginUser); 
userRoutes.post('/logout', logoutUser)
userRoutes.get("/profile", protect, getProfile);

export default userRoutes;
