// web/routes/users.js

import express from 'express';
import User from '../../../models/User.js';

const userSessionsRouter = express.Router();

// GET: Fetch all users
userSessionsRouter.get('/', async (req, res) => {
  try {
    const users = await User.query();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// POST: Create a new user
userSessionsRouter.post('/', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await User.query().insert({ name, email });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// PUT: Update an existing user
userSessionsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedUser = await User.query().patchAndFetchById(id, { name, email });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// DELETE: Remove a user
userSessionsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await User.query().deleteById(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

export default userSessionsRouter;
