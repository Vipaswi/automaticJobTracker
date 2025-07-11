/**
 * @summary This file contains all the functionality 
 * to parse a file and determine the type of email it is,
 * and specific information like the role, location, and 
 * company name.
 * 
 * @author Vipaswi Thapa
 */


import { applicationPhrases, jobProgressPhrases, interviewPhrases, offerPhrases } from '../Phrases/commonPhrases';
import { google, GoogleApis } from 'googleapis';
import base64url from "base64url";

const testing = true;

export enum progressStatus{
  NULL = "NULL",
  IRRELEVANT = "IRRELEVANT",
  NEW = "NEW",
  FAIL = "FAIL",
  INTERVIEW = "INTERVIEW",
  OFFER = "OFFER"
}

function printOnFailure(printString: string, result : progressStatus, expected : progressStatus){
  if(result != expected && testing){
    console.log("Failed on: " + printString);
  }
}

/**
 * The main function that parses an email,
 * determines the job role, location (if available),
 * and application status. Accordingly, it updates
 * the underlying CSV/JSON file.
 * 
 * @param message: the Gmail message in its API format
 */
export function parseEmail(message: any, expectedResult: progressStatus) : progressStatus {

  // Get the title and body from a message object from Gmail
  let title: string = message.payload.messageHeaders[2].value;

  let URLBase64 : string = "";
  let bodyBase64 : string = "";
  let body : string = "";

  if(message.payload.parts != undefined){
    URLBase64 = message.payload.parts[0].body.data; // just get the first: one plain text/html
  } else {
    URLBase64 = message.payload.body.data; // get the data straight from the payload
  }

  URLBase64 = message.payload.body?.data || message.payload.parts[0].body.data;

  body = base64url.decode(URLBase64);

  console.log(title);
  console.log(body);

  let isJobApplication = isApplication(title) || isApplication(body);

  // Parse data and determine whether it's an application
  if(!isJobApplication){
    printOnFailure(body, progressStatus.INTERVIEW, expectedResult);
    return progressStatus.IRRELEVANT;
  }
  
  // Go through options by rarity:
  if (isJobApplication && isOffer(body)){
    printOnFailure(body, progressStatus.OFFER, expectedResult);
    return progressStatus.OFFER;
  }
  else if(isJobApplication && isInterview(body)) {
    printOnFailure(body, progressStatus.INTERVIEW, expectedResult);
    return progressStatus.INTERVIEW;
  }
  else if (isJobApplication && isRejection(body)) {
    printOnFailure(body, progressStatus.FAIL, expectedResult);
    return progressStatus.FAIL;
  } 
  else if (isJobApplication && (isNewApplication(title) || isNewApplication(body))){
     printOnFailure(body, progressStatus.NEW, expectedResult);
    return progressStatus.NEW;
  }

  return progressStatus.NULL;

}

function isInterview(body: string){
  return match(interviewPhrases, body);
}

function isOffer(body: string){
  return match(offerPhrases, body);
}

function match(phraseObject: any, text: string) : boolean {
  //if match, return true
  for(const phrase of phraseObject){
    const regExPhrase = new RegExp(phrase, "i");
    if(text.match(regExPhrase) != null){
      console.log("\tMatched Phrase: " + phrase);
      return true;
    }
  }

  return false;
}

function isApplication(title: string) : boolean {
  return match(applicationPhrases, title);
}

/**
 * Takes an email string and determines if this 
 * is a new application.
 * 
 * @param body: email body
 * @param text the text to determine if it's new
 */
function isNewApplication(body: string) : boolean {
  return match(jobProgressPhrases.justApplied, body);
}

/**
 * Takes an email string and determines if this 
 * is a new application.
 * 
 * @param title: email title
 * @param text the text to determine if it's new
 */
function isRejection(body: string) : boolean {
  return match(jobProgressPhrases.justRejected, body);
}