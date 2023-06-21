require('dotenv').config();
 
const { App } = require('@slack/bolt');
const signingSecret = process.env['SLACK_SIGNING_SECRET']
const botToken = process.env['SLACK_BOT_TOKEN']
const app = new App({
    signingSecret: signingSecret,
    token: botToken,
});
 
(async () => {
    await app.start(process.env.PORT || 12000);
 if (new Date().getHours() > 16) {say(`Hello <@${message.user}>, it is 5pm in Rio de Janeiro. Click <https://open.spotify.com/track/45gBYIbizYRUtvVFsRIHAu?si=9d3eab54fc934411|here.>`)}
 else {say(`Sorry <@${message.user}>, back to work! It's not 5pm in Rio de Janeiro yet.`)}
;
    });
 
 
    console.log(`⚡️ Bolt app is running!`);
