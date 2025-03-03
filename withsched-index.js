require('dotenv').config();
 
const axios = require('axios');
const { App } = require('@slack/bolt');
const signingSecret = process.env['SLACK_SIGNING_SECRET']
const botToken = process.env['SLACK_BOT_TOKEN']
const app = new App({
    signingSecret: signingSecret,
    token: botToken,
});
 
(async () => {
    await app.start(process.env.PORT || 12000);
 
    app.message('?', async ({ message, say }) => {
        if (new Date().getHours() >= 16) { say(`Clock out and click <https://open.spotify.com/track/45gBYIbizYRUtvVFsRIHAu?si=9d3eab54fc934411|here>, <@${message.user}>, it’s 5pm in Rio de Janeiro!`)} else{say (`Sorry <@${message.user}>, back to work! It's not 5pm in Rio de Janeiro yet.`)}
;
    })
 ;
 const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(16, 0, 0);
;
 try {
  const result = await client.chat.scheduleMessage({
    channel: C05D5B91DRV,
    text: "Clock out and click <https://open.spotify.com/track/45gBYIbizYRUtvVFsRIHAu?si=9d3eab54fc934411|here>, it's 5PM in Rio!",
    post_at: tomorrow.getTime})}

catch (error) {
  console.error(error);
}
  
    console.log(`⚡️ Bolt app is running!`);
})();
