// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.conversations.conversations('CCH1c9a39dc49ae476f82244aaf5979d812')
  .participants
  .create({
     'messagingBinding.address': '+13608886199',
     'messagingBinding.proxyAddress': '+13268886199'
   })
  .then(participant => console.log(participant.sid));
