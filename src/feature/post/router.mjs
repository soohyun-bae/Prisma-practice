// 서버로 요청을 보내면 서버는 요청을 받은 URI를 기반으로 요청을 어떻게 분류할지 router를 통해서 결정한다. 

import express from "express";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./controller.mjs";

const router = express.Router();
// 1. /에 get요청이 들어오면 getAll 실행(controller에 만들어둠)
router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", createOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

export const postRouter = router;