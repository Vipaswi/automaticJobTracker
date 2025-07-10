/**
 * @summary This file contains all the functionality 
 * to parse a file and determine the type of email it is,
 * and specific information like the role, location, and 
 * company name.
 * 
 * @author Vipaswi Thapa
 */

import * as fs from 'fs';
import { jobProgressPhrases } from '../Phrases/commonPhrases';
import { google, GoogleApis } from 'googleapis';


/**
 * The main function that parses an email,
 * determines the job role, location (if available),
 * and application status. Accordingly, it updates
 * the underlying CSV/JSON file.
 * 
 * @param title: the email title
 * @param text The email text
 */
function parseEmail(message: any) {

  

  // Get the title and body from a message object from Gmail
  let title: string = message.payload.messageHeaders[2].value;
  let isJobApplication = isApplication(title);
  let body: string = "";

  // Parse data and determine whether it's an application
  if(isJobApplication){
    let bodyBase64 : Base64URLString = message.payload.body.data;
    body = atob(bodyBase64);
  }
  
  if(isNewApplication(body) && isJobApplication){
    // If it's a new application
  }

}

function match(phraseObject: any, text: string) : boolean {
  //if match, return true
  for(const phrases in phraseObject){
    if(text.match(phrases)){
      return true;
    }
  }

  return false;
}

function isApplication(title: string) : boolean {
  return match(null, "");
}

/**
 * Takes an email string and determines if this 
 * is a new application.
 * 
 * @param body: email body
 * @param text the text to determine if it's new
 */
function isNewApplication(body: string) : boolean {
  return match(jobProgressPhrases.justApplied.values, body);
}

/**
 * Takes an email string and determines if this 
 * is a new application.
 * 
 * @param title: email title
 * @param text the text to determine if it's new
 */
function isRejection(title: string, text: string) : boolean {

  //if match, return true
  for(const phrases in jobProgressPhrases.justRejected){
    if(text.match(phrases)){
      return true;
    }
  }

  return false;
}