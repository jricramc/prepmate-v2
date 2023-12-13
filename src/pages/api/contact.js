export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body; // Access form data here and process it
      // Example: Send an email, store data in a database, etc.
      // You might want to use a library like nodemailer for sending emails.
      // Handle form submission logic here
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).end(); // Method not allowed for other HTTP methods
    }
  }
  