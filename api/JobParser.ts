/**
 * @summary This file contains all the functionality 
 * to parse a file and determine the type of email it is,
 * and specific information like the role, location, and 
 * company name.
 * 
 * @author Vipaswi Thapa
 */

import { applicationPhrases, jobProgressPhrases, interviewPhrases, offerPhrases } from '../Phrases/commonPhrases';
import {jobTitles} from '../Phrases/jobTitles'
import {jobTitlePrefixes, jobTitlePostfixes, jobTimeOfYear} from '../Phrases/jobTitleVariations'
import {USStateAbbreviations} from '../Phrases/locations'
import { google, GoogleApis } from 'googleapis';
import base64url from "base64url";
import ahocorasick from "ahocorasick"

const testing = true;

// Ahocorasick global variables (since they're constants)
// -> Reduces Ahocorasick FSM creations drastically and cuts costs
const fsm_jobTitles = new ahocorasick(jobTitles);
const fsm_USStateAbbreviations = new ahocorasick(USStateAbbreviations);

const prefix = jobTitlePrefixes.join("|");
const postfix = jobTitlePostfixes.join("|");
const timeOfYear = jobTimeOfYear.join("|");

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
    console.log("Failed on: " + printString + " Expected: " + expected + " Got: " + result); 
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
  let emailTitle: string = message.payload.messageHeaders[2].value;

  let URLBase64 : string = "";
  let body : string = "";

  if(message.payload.parts != undefined){
    URLBase64 = message.payload.parts[0].body.data; // just get the first: one plain text/html
  } else {
    URLBase64 = message.payload.body.data; // get the data straight from the payload
  }

  URLBase64 = message.payload.body?.data || message.payload.parts[0].body.data;

  body = base64url.decode(URLBase64);

  // DEBUGGING:
  console.log(emailTitle);
  console.log(body);
  
  // Determine Job Title and Location
  let jobTitle : string | null = getJobTitle(emailTitle);
  let jobLocation : string | null= getLocation(body);
  
  if(!jobTitle != null){
    jobTitle = getJobTitle(body);
  }
  
  if(!jobLocation != null){
    jobLocation = getLocation(body);
  }
  
  if(jobTitle != null){
    jobTitle = extractFullJobTitle(body, jobTitle)
  }

  // Irrelevant application checks:
  if(testing && jobTitle == null){
    console.log("Job title not found\n");

  }
  
  // Parse data and determine whether it's an application
  let isJobApplication = (isApplication(emailTitle) || isApplication(body)) && jobTitle != null;

  if(!isJobApplication){
    printOnFailure(body, progressStatus.IRRELEVANT, expectedResult);
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
  else if (isJobApplication && (isNewApplication(emailTitle) || isNewApplication(body))){
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

function isApplication(text: string) : boolean {
  return match(applicationPhrases, text);
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

function getFirstMatch(fsm: ahocorasick, text: string) : string | null{
  // Create the finite state machine:
  const matches = fsm.search(text)
  
  // return the first match
  if(matches[0] != undefined){
    return matches[0][1][0];
  }


  return null;
}

/**
 * @param body The body to get a title from
 * @return the job title
 */
function getJobTitle(body: string) : string | null {
  return getFirstMatch(fsm_jobTitles, body);
}

/**
 * @param body The body to get a title from
 * @return the job title
 */
function getLocation(body: string) : string | null{
  return getFirstMatch(fsm_USStateAbbreviations, body);
}

/**
 * @param body The email body
 * @param matchedTitle The title found in the email body
 * @returns The matched title with any prefixes or postfixes, along with the time of year if applicable
 */
function extractFullJobTitle(body: string, matchedTitle: string) {
  const pattern = new RegExp(
    `(?:(${prefix})\\s+)?(${matchedTitle})(?:\\s+(${postfix})(?:\\s+(${timeOfYear}))?)?`,
    "i"
  );  

  const match = body.match(pattern);

  if(match?.[1] != null){
    matchedTitle = match[1] + " " + matchedTitle;
  }

  if(match?.[3] != null){
    matchedTitle = matchedTitle + " " + match[3]; 
  }

  if(match?.[4] != null){
    matchedTitle = matchedTitle + " " + match[4];
  }

  return matchedTitle;
}