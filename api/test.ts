import { GoogleApis } from "googleapis"
import { sampleMessageEmailFailures,  sampleMessageEmailApplications, sampleInterviewEmails, sampleIrrelevantEmails, sampleOfferEmails} from "./sampleEmails"
import { GoogleConfigurable } from "googleapis/build/src/apis/abusiveexperiencereport"
import { parseEmail, progressStatus } from "./JobParser"
import base64url from "base64url";

function loop_over(loopArray: Array<any>, expectedResult: progressStatus){
  console.log("\n------------------------------------------------------------\n")
  console.log("Testing: " + expectedResult.toString());

  let result : progressStatus;
  for(let i = 0; i < loopArray.length; i++){
    console.log("\n-----------\n");
    const str = loopArray[i];
    result = parseEmail(str, expectedResult);
    if(result != expectedResult){
      console.log("Test " + (i + 1) + " failure! \n\tExpected: " + expectedResult.toString() + "\n\tActual: " + result.toString());
    } else {
      console.log("Test " + (i + 1) + "/" + loopArray.length  +" passed!");
    }
  }
}

const test = () => {
  loop_over(sampleIrrelevantEmails, progressStatus.IRRELEVANT);
  loop_over(sampleMessageEmailApplications, progressStatus.NEW);
  loop_over(sampleInterviewEmails, progressStatus.INTERVIEW);
  loop_over(sampleMessageEmailFailures, progressStatus.FAIL);
  loop_over(sampleOfferEmails, progressStatus.OFFER);
}

test();