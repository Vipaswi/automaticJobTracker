import { GoogleApis } from "googleapis"
import { sampleMessageEmailFailures,  sampleMessageEmailApplications, sampleInterviewEmails, sampleIrrelevantEmails, sampleOfferEmails} from "./sampleEmails"
import { GoogleConfigurable } from "googleapis/build/src/apis/abusiveexperiencereport"
import { parseEmail, progressStatus } from "./JobParser"

function loop_over(loopArray: Array<any>, expectedResult: progressStatus){
  console.log("Testing: " + expectedResult.toString());

  let result : progressStatus;
  for(let i = 0; i < loopArray.length; i++){
    const str = loopArray[i];
    result = parseEmail(str);
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