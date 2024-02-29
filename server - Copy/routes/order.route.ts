import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { createOrder, getAllOrderAdmin } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order",isAutheticated, createOrder);
orderRouter.get("/get-all-orders", isAutheticated, authorizeRoles("admin"), getAllOrderAdmin);

export default orderRouter;