import { google } from 'googleapis';
/**
 * Used for event driven api-calls. 
 * 
 * @param {*} userAccessToken : The access token for the user
 * @returns the data historyId
 */
async function watchGmail(userAccessToken: string) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: userAccessToken });

  const gmail = google.gmail({ version: 'v1', auth });

  const res = await gmail.users.watch({
    userId: 'me',
    requestBody: {
      topicName: 'projects/automatic-job-tracker/topics/emails',
      labelIds: ['INBOX'],
      labelFilterBehavior: "include"
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
