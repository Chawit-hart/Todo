import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../lib/mongodb';
import Todo from '../../models/Todo';
import jwt, { JwtPayload } from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDb();

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    if (req.method === 'GET') {
      const todos = await Todo.find({ user: decoded.userId });
      return res.status(200).json(todos);
    } else if (req.method === 'POST') {
      const { title } = req.body;
      const newTodo = new Todo({
        user: decoded.userId,
        title,
      });
      await newTodo.save();
      return res.status(201).json(newTodo);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return res.status(401).json({ message: 'Invalid token', error: error.message });
    } else {
      console.error(error);
      return res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
}
