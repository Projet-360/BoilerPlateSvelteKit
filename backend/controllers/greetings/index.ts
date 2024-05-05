// authController.js
import { Request, Response, NextFunction } from 'express';
import Greeting from '../../models/GreetingModel.js';

export const saveGreeting = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, message } = req.body;
  console.log('name', name);
  console.log('message', message);

  const greeting = new Greeting({ name, message });
  await greeting.save();

  res.json({ status: 'saved' });
};

export const getGreetings = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const greetings = await Greeting.find({});
  res.json(greetings);
};

export const updateGreeting = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const updatedGreeting = await Greeting.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(updatedGreeting);
};

export const deleteGreeting = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await Greeting.findByIdAndDelete(req.params.id);
  res.json({ status: 'deleted' });
};
