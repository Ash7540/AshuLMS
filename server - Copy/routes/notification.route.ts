import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controllers/notification.controller";
const notificationRouter = express.Router();

notificationRouter.get("/get-all-notifications",isAutheticated, authorizeRoles("admin"), getNotifications);
notificationRouter.get("/update-notifications/:id",isAutheticated, authorizeRoles("admin"), updateNotification);

export default notificationRouter;