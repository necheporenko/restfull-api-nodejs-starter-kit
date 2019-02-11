import { Router } from "express";
import noteRoutes from "./note.route";
import userRoutes from "./user.route";

const router = Router();

/** Mount note routes at /notes */
router.use("/notes", noteRoutes);
router.use("/user", userRoutes);

export default router;
