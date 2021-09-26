const accountSid = 'AC8357800349e129aeba047b761e806bde';
const prompt = require('prompt-sync')();
const authToken = '94bc59c08e6eccb521161efa4eb19364';
const client = require('twilio')(accountSid,authToken);
const from = 'MGa5127cc15263470202d64425c2e34482';
const smsTo = prompt('To: ');
const smsBod = prompt('Enter text: ');
client.messages
    .create({
	body: smsBod,
	messagingServiceSid: from,
	to: smsTo
    })
    .then(message => console.log(message.sid))
    .done();
