const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express app
const app = express();
app.use(express.json());  // To parse incoming JSON requests
app.use(cors());  // Enable CORS

// MongoDB URI and port (hardcoded)
const MONGODB_URI = "mongodb://localhost:27017/contact_form";  // MongoDB URI
const PORT = 5000;  // Port for the server

// Connect to MongoDB (remove deprecated options)
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Create a Mongoose schema and model for the "Contact" form
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Contact = mongoose.model("Contact", contactSchema);

// POST route for submitting the "Contact Me" form
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Check if the request body contains the necessary fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a new contact submission in MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error saving message to the database." });
  }
});

// Get all contact messages (optional)
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Error fetching contacts from the database." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app if needed (for testing or other purposes)
module.exports = app;
