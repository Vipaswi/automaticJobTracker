const express = require("express");
const { google } = require('googleapis');

const server = express();
server.use(express.json())

const PORT = 8080; //Dev purposes

/**
 * Used for event driven api-calls. 
 * 
 * @param {*} userAccessToken : The access token for the user
 * @returns the data historyId
 */
async function watchGmail(userAccessToken) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: userAccessToken });

  const gmail = google.gmail({ version: 'v1', auth });

  const res = await gmail.users.watch({
    userId: 'me',
    requestBody: {
      topicName: 'projects/automatic-job-tracker/topics/emails',
      labelIds: ['INBOX'],
      labelFilterBehavior: include
    }
  });

  console.log('Watch response:', res.data);
  return res.data.historyId;
}

const fetchMessageList = async () => {
  try {
    const res = await fetch("https://gmail.googleapis.com/gmail/v1/users/{userId}/messages");
  } catch (error) {
    
  }

}

// Define Methods:

// The first method is responsible for pinging the server every X minutes, where X changes based on if the user is active or not.
// It determines if new emails have arrived from the gmail messages.list api, and comparing it to the most recent id received/processed.
// If there were new emails, it pulls in all the emails and runs them through the parseEmail function.
server.get("/token", (req,res) => {
  res.status(200).json({
    name: "joe"
  });
});

server.post("/email", (req,res) => {
  const {email} = req.body;
  
})


// Start listening for calls to the server
server.listen(PORT, () => {console.log("Server is up and listening!")});




