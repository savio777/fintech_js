import { Router } from "express";

import { authMiddleware } from "./shared/utils/authMiddleware";

import { CreateUserController } from "./user/controllers/create-user.controller";
import { LoginUserController } from "./user/controllers/login-user.controller";
import { CreateBankController } from "./bank/controllers/create-bank.controller";
import { CreateAccountController } from "./account/controllers/create-account.controller";
import { GetAccountController } from "./account/controllers/get-account.controller";
import { CreateTransferController } from "./transfer/controllers/create-transfer.controller";
import { GetTransferByIdUserController } from "./transfer/controllers/get-transfer-by-id-user.controller";

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

// bank
router.post("/banks", CreateBankController);

// account
router.post("/accounts", CreateAccountController);
router.get("/accounts", GetAccountController);

// transfer
router.post("/transfers", CreateTransferController);
router.get("/transfers", GetTransferByIdUserController);
