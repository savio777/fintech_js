import { Router } from "express";
import { CreateUserController } from "./user/controllers/create-user.controller";

export const router = Router();

router.get("/", (_, res) => {
  throw new Error("test");

  res.json({ test: "" });
});

// users
router.post("/users", CreateUserController);
