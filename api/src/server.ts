import express from "express";
import cors from "cors";

import { router } from "./routes";
import errorHandling from "./shared/utils/errorHandling";
import "./shared/utils/errors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4003, () => console.log("server is running in 4003"));

app.use(errorHandling);
