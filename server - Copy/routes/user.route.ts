import express from "express";
import {
  activateUser,
  registrationUser,
  loginUser,
  logoutUser,
  updateAccessToken,
  getUserInfo,
  socialAuth,
  updateUserInfo,
  updatePassword,
  updateProfilePicture,
  getAllUsersAdmin,
  updateUserRole,
  DeleteUser,
} from "../controllers/user.controller";
import { isAutheticated, authorizeRoles } from "../middleware/auth";
import { getUserById } from "../services/user.service";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAutheticated ,logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAutheticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info", isAutheticated, updateUserInfo);
userRouter.put("/update-user-password", isAutheticated, updatePassword);
userRouter.put("/update-user-avatar", isAutheticated, updateProfilePicture);
userRouter.get("/get-all-users", isAutheticated, authorizeRoles("admin"), getAllUsersAdmin);
userRouter.put("/update-users", isAutheticated, authorizeRoles("admin"), updateUserRole);
userRouter.delete("/delete-users/:id", isAutheticated, authorizeRoles("admin"), DeleteUser);

export default userRouter;