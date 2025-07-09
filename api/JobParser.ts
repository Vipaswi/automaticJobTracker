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

/**
 * The main function that parses an email,
 * determines the job role, location (if available),
 * and application status. Accordingly, it updates
 * the underlying CSV/JSON file.
 * 
 * @param title: the email title
 * @param text The email text
 */
function parseEmail(text: string) {

  // Get the title

  let title: string = "Temp.";

  let isNew: boolean;
  isNew = isNewApplication(title, text); 
  
  if(isNew){
    // If it's a new application
  }

}

/**
 * Takes an email string and determines if this 
 * is a new application.
 * 
 * @param title: email title
 * @param text the text to determine if it's new
 */
function isNewApplication(title: string, text: string) : boolean {

  //if match, return true
  for(const phrases in jobProgressPhrases.justApplied){
    if(text.match(phrases)){
      return true;
    }
  }

  return false;
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