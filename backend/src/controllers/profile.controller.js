import { User } from "../models/User.js";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("name email");
  return res.json({ user });
};

export const updateProfile = async (req, res) => {
  const { name } = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { name }, { new: true }).select("name email");
  return res.json({ user });
};
