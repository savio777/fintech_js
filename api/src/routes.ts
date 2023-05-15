import { Router } from "express";

import { authMiddleware } from "./shared/utils/authMiddleware";

import { CreateUserController } from "./user/controllers/create-user.controller";
import { LoginUserController } from "./user/controllers/login-user.controller";

export const router = Router();

router.get("/", () => {
  throw new Error("err test");
});

// users
router.post("/users", CreateUserController);
router.post("/login", LoginUserController);

router.use(authMiddleware);

router.get("/auth-test", (req, res) => {
  return res.json({ message: "user auth", user: req.user });
});
