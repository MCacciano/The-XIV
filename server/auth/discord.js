const express = require('express');
const env = require('dotenv');
env.config();

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:5000/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(
    `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=identify&resonse_type=code&redirect_uri=${redirect}`
  );
});

module.exports = router;
