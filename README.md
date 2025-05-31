# BenTech

# Emergency Panic Web App

## Features

- Panic button to trigger an emergency alert
- Sends SMS (via Twilio) to:
  - Predefined personal contacts
  - Authorities/emergency institutions
- Shares current geolocation in the SMS
- Web-based, easy to deploy

## Setup

### 1. Clone & Install
```bash
npm install
```

### 2. Configure Twilio

- [Create a Twilio account](https://www.twilio.com/try-twilio)
- Buy a Twilio phone number (SMS enabled)
- Get your Account SID and Auth Token from the Twilio console

Set up your `.env` file:
```
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_FROM_NUMBER=your_twilio_twilio_phone_number
PORT=3000
```

Edit contacts/authorities in `backend/app.js` if needed.

### 3. Run the App

```bash
node backend/app.js
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Security & Deployment

- Protect access to the panic button page (authentication, rate limiting, etc.)
- Use HTTPS in production (for geolocation and privacy)
- Only store trusted phone numbers

---

**Customize as needed!**