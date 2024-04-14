import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  _id: {
    type: String,
    required: true,
    default: Date.now,
  },
  title: String,
  description: String,
  items: [String],
});

const Todo = model("todo", todoSchema);

export default Todo;
