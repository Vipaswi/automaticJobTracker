/**
 * This is a collection of all the firestore api functions.
 * 
 * Note that for all userid, we are using Google's sub identifier.
 * 
 * @author Vipaswi Jung Thapa
 */


/** The constant link to the document that stores all failures */
const failureLink = "failures";

import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  getDoc,
  query,
  where,
  getDocs,
  arrayUnion
} from "firebase/firestore";
import {signInWithCredential, UserCredential} from 'firebase/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { UserObject } from './storageStructure';

// TODO: Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = getFirestore(app);

/**
 * Verifies authToken received from client
 * 
 * @param authToken - The authentication token to verify
 * @returns the userCredential used as the uid for all firestore operations
 */
export const verifyAuthToken = async (chromeAuthToken: string): Promise<UserCredential> => {
  try {
    const auth = getAuth();
    const credential = GoogleAuthProvider.credential(chromeAuthToken);
    const userCredential = await signInWithCredential(auth, credential);
    
    // If user, then the token is valid
    if (userCredential.user) {
      return userCredential;
    }
    return userCredential;
  } catch (error) {
    throw new Error(`Error verifying auth token: ${error}`);
  }
}
 

/** Store a new user
 * 
 * @userId - The unique identifier for the user - firestore uid
 * @userObject - The user object containing user details
 * 
 * This function stores a new user in the Firestore database.
 * It merges the user object with existing data if the user already exists.
*/
export const storeNewUser = async(userToken: string, userObject: UserObject) => {
  try {
    //Verification
    const userCredential = await verifyAuthToken(userToken);

    // Store new user:
    const userRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userRef, {
      id: userObject.id,
      name: userObject.name,
      email: userObject.email,
      access_token: userObject.access_token,
      refresh_token: userObject.refresh_token,
      token_expiry: userObject.token_expiry,
      received_applications: userObject.received_applications,
      createdAt: serverTimestamp(), // ignore values from the userObject for date
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    throw new Error(`Error storing new user: ${error}`);
  }
}

/** get existing user information 
 * @param userId - The unique identifier for the user (firestore uid)
*/
export const getUser = async(chromeUserToken: string) => {
  try {
    // Verification
    const userCredential = await verifyAuthToken(chromeUserToken);

    // Get document
    const userRef = doc(db, 'users', userCredential.user.uid);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data();

    // Return user
    if (userData) {
      return {
        id: userDoc.id,
        ...userData
      } as UserObject;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error(`Error fetching user: ${error}`);
  }
}

/**
 * Update existing user information
 * 
 * @param userId - firestoreUID
 * */
export const updateUser = async(chromeUserToken: string, updatedUserObject : UserObject) => {
  try {
    // Verification
    const userCredential = await verifyAuthToken(chromeUserToken);
    
    // Update document
    const userRef = doc(db, 'users', userCredential.user.uid);
    await updateDoc(userRef, {
      ...updatedUserObject,
    });
  } catch (error) {
    throw new Error(`Error updating user: ${error}`);
  }
}

/** 
 * Delete a user
 * 
 * @param chromeUserToken - Access token of the user to delete
 */
export const deleteUser = async(chromeUserToken: string) => {
  try {
    // Verification
    const userCredential = await verifyAuthToken(chromeUserToken);

    // Deletion
    const userRef = doc(db, 'users', userCredential.user.uid);
    await deleteDoc(userRef);
  } catch (error) {
    throw new Error(`Error deleting user: ${error}`);
  }
}

export const updateFailure = async(chromeUserToken: string, newFailureForm: text) = {
  
  try {
    const userCredential = await verifyAuthToken(chromeUserToken);
    // fill form
    const failureFormRef = await doc(db, 'failedForms', failureLink);
    const failureFormDoc = await getDoc(failureFormRef);
    const failureFormData = failureFormDoc.data();
    
    if (failureFormData) {
      updateDoc(failureFormRef, {
        failures: arrayUnion(newFailureForm);
      })
    }
  }
  catch (error){
    console.error(`Error updating failure form: ${error}`);
  }
  
}