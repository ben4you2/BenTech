const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// --- Configuration ---
// Add your Twilio credentials in a .env file
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken  = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;
const client = twilio(accountSid, authToken);

// Predefined contacts and authorities numbers
const CONTACTS = [
  '+1234567890', // Personal contact 1
  '+1234567891', // Personal contact 2
];
const AUTHORITIES = [
  '+112',         // Example: Emergency authority
  '+1987654321'   // Local hospital, police, etc.
];

function buildMessage(latitude, longitude) {
  return `🚨 EMERGENCY ALERT 🚨
Location: https://maps.google.com/?q=${latitude},${longitude}
Immediate help needed!`;
}

app.post('/api/emergency', async (req, res) => {
  const { latitude, longitude } = req.body;
  if (!latitude || !longitude) {
    return res.status(400).send({ error: 'Missing location' });
  }
  const message = buildMessage(latitude, longitude);
  const recipients = [...CONTACTS, ...AUTHORITIES];
  try {
    await Promise.all(
      recipients.map(to =>
        client.messages.create({ body: message, from: fromNumber, to })
      )
    );
    res.send({ success: true });
  } catch (e) {
    console.error("SMS send error:", e);
    res.status(500).send({ error: 'Failed to send SMS' });
  }
});

// Serve frontend
app.use(express.static('frontend'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Emergency app running on port ${PORT}`));