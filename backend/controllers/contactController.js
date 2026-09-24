import Contact from "../models/Contact.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validates the form data, then saves it to MongoDB through the Contact model.
export async function createContact(req, res) {
  const name = String(req.body?.name ?? "").trim();
  const email = String(req.body?.email ?? "").trim();
  const message = String(req.body?.message ?? "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill in name, email and message." });
  }
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }
  if (name.length > 100 || message.length > 2000) {
    return res.status(400).json({ message: "Name or message is too long." });
  }

  try {
    await Contact.create({ name, email, message });
    return res.status(201).json({ message: "Thanks! Your message has been sent." });
  } catch (error) {
    console.error("Save contact failed:", error.message);
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
}
