/**
 * @summary This file contains all the functionality 
 * to parse a file and determine the type of email it is,
 * and specific information like the role, location, and 
 * company name.
 * 
 * @author Vipaswi Thapa
 */

import * as fs from 'fs';
import { applicationPhrases, jobProgressPhrases, interviewPhrases, offerPhrases } from '../Phrases/commonPhrases';
import { google, GoogleApis } from 'googleapis';


export enum progressStatus{
  IRRELEVANT = "IRRELEVANT",
  NEW = "NEW",
  FAIL = "FAIL",
  INTERVIEW = "INTERVIEW",
  OFFER = "OFFER"
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
  console.log(title);
  let isJobApplication = isApplication(title);
  let body: string = "";

  // Parse data and determine whether it's an application
  if(isJobApplication){
    let URLBase64 = message.payload.body.data;
    let bodyBase64 = decodeURIComponent(URLBase64);
    body = atob(bodyBase64);
  } else {
    return progressStatus.IRRELEVANT;
  }
  
  // Go through options by rarity:
  if (isJobApplication && isOffer(body)){
    return progressStatus.OFFER;
  }
  else if(isJobApplication && isInterview(body)) {
    return progressStatus.INTERVIEW;
  }
  else if (isJobApplication && isRejection(body)) {
    return progressStatus.FAIL;
  } 
  else if (isJobApplication && (isNewApplication(body) || isNewApplication(body))){
    return progressStatus.NEW;
  }

  return progressStatus.IRRELEVANT;

}

function isInterview(body: string){
  return match(interviewPhrases, body);
}

function isOffer(body: string){
  return match(offerPhrases, body);
}

function match(phraseObject: any, text: string) : boolean {
  //if match, return true
  for(const phrase in phraseObject){
    if(text.match(phrase)){
      console.log("\tMatched Phrase: " + phrase);
      return true;
    }
  }

  return false;
}

function isApplication(title: string) : boolean {
  return match(applicationPhrases.values(), title);
}

/**
 * Takes an email string and determines if this 
 * is a new application.
 * 
 * @param body: email body
 * @param text the text to determine if it's new
 */
function isNewApplication(body: string) : boolean {
  return match(jobProgressPhrases.justApplied.values(), body);
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