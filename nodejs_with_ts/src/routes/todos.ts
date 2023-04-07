import {Router} from "express";

import {createTodo, deleteTodo, getTodos, updateTodo} from "../controller/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;