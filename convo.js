const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.conversations.conversations('CCH1c9a39dc49ae476f82244aaf5979d812')
      .fetch()
      .then(conversation => console.log(conversation.chatServiceSid));