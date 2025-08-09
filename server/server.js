/**
 * @todo Track applications which were wrong (changed by the user) and flag them in temporary storage to be added in the future
 */
const express = require("express");
const cors = require('cors');
const { google } = require('googleapis');
const { storeNewUser, getUser, deleteUser } = require("./firestoreAPI");

// Configure CORS for a specific origin
const corsOptions = {
  origin: CHROME_EXTENSION_ID
};

const server = express();
server.use(express.json());
server.use(cors(corsOptions));

const PORT = 8080; //Dev purposes

// Define Methods:

server.get("", (req, res) => {
  res.status(200).json({
    name: "joe"
  });
});

server.post("/pubsub-handler", async (req, res) => {
  const { message } = req.body;

  // Convert from Base 64 to a string, and then parse through it with JSON
  const decodedData = Buffer.from(message.data, 'base64').toString();
  const jsonData = JSON.parse(decodedData);

  // Access History:
  const listResponse = await fetch(`GET https://gmail.googleapis.com/gmail/v1/users/${jsonData.emailAddress}/messages`,
    {
      method: 'Get',
      headers: {
        'Authorization': `Bearer $(accessToken)`,
        'Accept': 'application/json'
      }
    }
  );

  const list = await listResponse.json();

  // Tell pub sub that it was successful
  res.status(200).send();

})


/** #region firestore API Calls */

/**
 * Gets a user object from the firestore databse
 */

server.get("/getUser", async (req, rest) => {
  try {
    const { chromeUserToken } = req.body;
    if (!chromeUserToken) {
      return res.status(400).json({
        message: "Chrome user token is required"
      });
    }

    const user = await getUser(chromeUserToken);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return user;
  } catch (error) {
    throw new Error(`Error getting user: ${error.message}`);
  }
})

/** 
 * Stores a new user into the firestore database
*/
server.post("/newUser", async (req, res) => {
  const { chromeUserToken, userObject } = req.body;
  try {
    const user = await getUser(chromeUserToken);
    if (user) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Store new user if they don't already exist
    await storeNewUser(chromeUserToken, userObject);

    res.status(200).json({
      message: "User stored successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error storing user",
      error: error.message
    });
  }
})

server.patch("/updateUser", async (req, res) => {
  try {
    const { chromeUserToken } = req.body;
    if (!chromeUserToken) {
      return res.status(400).json({
        message: "Chrome user token is required"
      });
    }

    const user = await getUser(chromeUserToken);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Update user:
    const { userObject } = req.body;
    if (!userObject) {
      return res.status(400).json({
        message: "User object is required"
      });
    }
    await updateUser(chromeUserToken, userObject);

    res.status(200).json({
      message: "User updated successfully"
    });

  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
})

server.delete("/deleteUser", async (req, res) => {
  try {
    const { chromeUserToken } = req.body;
    if (!chromeUserToken) {
      return res.status(400).json({
        message: "Chrome user token is required"
      });
    }

    await deleteUser(chromeUserToken);
    res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting user"
    });
    throw new Error(`Error deleting user: ${error.message}`);
  }
})

server.post("/updateAppliedJobs", async (req, res) => {
  try {
    const { chromeUserToken, newJob } = req.body;
    if (!chromeUserToken || !newJob) {
      return res.status(400).json({
        message: "Chrome user token and new job are required"
      });
    }

    // Update applied jobs in the database
    await updateAppliedJobs(chromeUserToken, newJob);
    res.status(200).json({
      message: "Applied jobs updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating applied jobs",
      error: error.message
    });
    throw new Error(`Error updating applied jobs: ${error.message}`);
  }
})

server.post("updateFailures", async (req, res) => {
  try {
    const { chromeUserToken, newFailure } = req.body;
    if (!chromeUserToken || !newFailure) {
      return res.status(400).json({
        message: "Chrome user token and new failure are required"
      });
    }

    // Update failures in the database
    await updateFailures(chromeUserToken, newFailure);
    res.status(200).json({
      message: "Failures updated successfully"
    });

  } catch (error) {
    rest.status(500).json({
      message: "Error updating failures",
      error: error.message
    });
    throw new Error(`Error updating applied jobs: ${error.message}`);
  };
})

// #endregion

// Start listening for calls to the server
server.listen(PORT, () => { console.log("Server is up and listening!") });




