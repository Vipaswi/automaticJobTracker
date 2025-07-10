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


export enum progressStatus{
  IRRELEVANT,
  NEW,
  FAIL,
  INTERVIEW,
  OFFER
}

/**
 * The main function that parses an email,
 * determines the job role, location (if available),
 * and application status. Accordingly, it updates
 * the underlying CSV/JSON file.
 * 
 * @param title: the email title
 * @param text The email text
 */
export function parseEmail(message: any) : progressStatus {

  // Get the title and body from a message object from Gmail
  let title: string = message.payload.messageHeaders[2].value;
  let isJobApplication = isApplication(title);
  let body: string = "";

  // Parse data and determine whether it's an application
  if(isJobApplication){
    let bodyBase64 = message.payload.body.data;
    body = atob(bodyBase64);
  } else {
    return progressStatus.IRRELEVANT;
  }
  
  // Determine if it's a new application
  if(isJobApplication && isNewApplication(body)){
    // If it's a new application
    return progressStatus.NEW;
  } 
  // The application already exists:
  else if (isJobApplication && isRejection(body)) {
    return progressStatus.FAIL;
  } else if(isJobApplication && isInterview(body)) {
    return progressStatus.INTERVIEW;
  } else if (isJobApplication && isOffer(body)){
    return progressStatus.OFFER;
  }

  return progressStatus.NEW;

}

function isInterview(body: string){
  return true;
}

function isOffer(body: string){
  return true;
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
function isRejection(body: string) : boolean {
  return match(jobProgressPhrases.justRejected.values(), body);
}