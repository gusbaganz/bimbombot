require('dotenv').config();
const axios = require('axios');

async function testToken() {
    try {
        const response = await axios.get('https://slack.com/api/auth.test', {
            headers: {
                'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`
            }
        });
        console.log('Auth test response:', response.data);
    } catch (error) {
        console.error('Error testing token:', error.response?.data || error.message);
    }
}

testToken(); 