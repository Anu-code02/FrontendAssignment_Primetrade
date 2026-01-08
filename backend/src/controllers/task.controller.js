import { Task } from "../models/Task.js";

export const createTask = async (req, res) => {
  const task = await Task.create({ userId: req.user.id, ...req.body });
  return res.status(201).json({ task });
};

export const getTasks = async (req, res) => {
  const { q, status } = req.query;
  const filter = { userId: req.user.id };
  if (status) filter.status = status;
  if (q) filter.title = { $regex: q, $options: "i" };
  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  return res.json({ tasks });
};

export const getTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
  if (!task) return res.status(404).json({ message: "Not found" });
  return res.json({ task });
};

export const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  if (!task) return res.status(404).json({ message: "Not found" });
  return res.json({ task });
};

export const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!task) return res.status(404).json({ message: "Not found" });
  return res.json({ message: "Deleted" });
};
