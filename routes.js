import { Router } from "express";
import Todo from "./models/todo.schema.js";

const router = Router();

router.post("/todos", async (req, res) => {
  const { title, description, items } = req.body;
  try {
    const todo = new Todo({ title, description, items });
    await todo.save();
    res.status(200).send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).send(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
