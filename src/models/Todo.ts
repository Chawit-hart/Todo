import mongoose, { Schema, Document } from 'mongoose';

interface ITodo extends Document {
  user: mongoose.Schema.Types.ObjectId;
  title: string;
  completed: boolean;
}

const todoSchema = new Schema<ITodo>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

export default Todo;
