const express = require("express");
const Greeting = require("./../models/GreetingModel");
const router = express.Router();

// Read All
router.get("/getGreetings", async (req, res) => {
  const greetings = await Greeting.find({});
  res.json(greetings);
});

router.post("/saveGreeting", async (req, res) => {
  const { name, message } = req.body;
  const greeting = new Greeting({ name, message });
  await greeting.save();
  res.json({ status: "saved" });
});

// Read One
router.get("/getGreeting/:id", async (req, res) => {
  const greeting = await Greeting.findById(req.params.id);
  res.json(greeting);
});

// Update
router.put("/updateGreeting/:id", async (req, res) => {
  const updatedGreeting = await Greeting.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(updatedGreeting);
});

// Delete
router.delete("/deleteGreeting/:id", async (req, res) => {
  await Greeting.findByIdAndDelete(req.params.id);
  res.json({ status: "deleted" });
});

module.exports = router;
