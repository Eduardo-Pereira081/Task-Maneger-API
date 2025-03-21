import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";

export const router = Router();
 
router.use(authRoutes);
router.use(userRoutes);