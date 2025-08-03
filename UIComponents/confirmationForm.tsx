import { USStateAbbreviations } from '../Phrases/locations';
import { progressStatus } from '../progressStatus';
import React, { useState, useEffect } from 'react';
import { LocationDropDown } from './LocationDropDown';
import { Collapsible } from './Collapsible';
import { LabeledForm } from './LabeledForm';

export const ConfirmationForm = () => {
  // The following state should be saved in cache and retrieved from 
  // the server. The caching will ensure user changes will be retained for 
  // the most recently retrieved server data.
  const [companyName, setCompanyName] = useState("type something");
  const [jobTitle, setJobTitle] = useState("this is. atitle");
  const [location, setLocation] = useState(USStateAbbreviations[0]);
  const [progressStatus, setProgressStatus] = useState(null);
  const [confirmationForms, setConfirmationForms] = useState([]);
  const [confirmationFormNumber, setConfirmationFormNumber] = useState(0);

  const [emailIndex, setEmailIndex] = useState(0);

  const handleLocationSelect = (text: string) => {
    setLocation(text)
  }

  //increase index (with bounds)
  const goForwards = () => {

  }

  //decrease index (with bounds)
  const goBackwards = () => {

  }

  // Fetch Data from API on the user's checked mail
  // Fetches information that includes:
  //    The parsed company name, job title, location, progress, and encrypted email
  useEffect(() => {
    console.log(USStateAbbreviations);
    //TODO: Fetch data from backend api on the user, and set state variables
  }, [])

  return (
    <div className="singleForm">
      <div className="formArray">
        <button onClick={goBackwards} >{"<"}</button>
        <div className="mainForm">
          <Collapsible emailTitle={"this is the really long email title about your job position that is great!!!!!!"}>
            <p className="text-wrap break-words whitespace-normal">


              Total US$5.57
              30 July 2025




              Thanks for riding, Vipaswi
              We hope you enjoyed your ride this afternoon.



              Total	US$5.57

              Trip fare	US$5.28

              Subtotal	US$5.28
              Booking fee 	US$1.60
              Texas Regulatory Recovery Fee	US$0.07
              Promotion	-US$1.38
              Download PDF
              This is not a payment receipt. It is a trip summary to acknowledge the completion of the trip. You will receive a trip receipt when the payment is processed with payment information.

              You rode with CAROL
              5.00		Rating
              Has passed a multi-step safety screening
              Rate or tip
              When you ride with Uber, your trips are insured in case of a covered accident.
              Learn more. ❯

              UberX
              1.95 miles | 6 min(s)

              13:12
              803 E Nasa Pkwy Ste 140, Webster, TX 77598, US

              13:18
              20915 Gulf Fwy, Webster, TX 77598, US

              Report lost item ❯

              Contact support❯

              My trips ❯




              Forgotten password
              Privacy
              Terms
              Uber Technologies
              1725 3rd Street,
              San Francisco,
              California
              94158



              Uber Receipts noreply@uber.com
              Wed, Jul 30, 1:29 PM (2 days ago)
              to me




              Total US$8.57
              30 July 2025




              Thanks for tipping, Vipaswi
              Here's your updated Wednesday afternoon trip receipt.



              Total	US$8.57

              Trip fare	US$5.28

              Subtotal	US$5.28
              Booking fee 	US$1.60
              Texas Regulatory Recovery Fee	US$0.07
              Tip	US$3.00
              Promotion	-US$1.38

              Payments

              American Express ••••2036
              30/07/2025 13:29
              US$8.57
              Switch payment method
              Download PDF

              You rode with CAROL
              5.00		Rating
              Has passed a multi-step safety screening
              When you ride with Uber, your trips are insured in case of a covered accident.
              Learn more. ❯

              UberX
              1.95 miles | 6 min(s)

              13:12
              803 E Nasa Pkwy Ste 140, Webster, TX 77598, US

              13:18
              20915 Gulf Fwy, Webster, TX 77598, US

              Report lost item ❯

              Contact support❯

              My trips ❯




              Forgotten password
              Privacy
              Terms
              Uber Technologies
              1725 3rd Street,
              San Francisco,
              California
              94158


            </p>
          </Collapsible>
          <LabeledForm label="Company Name">
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </LabeledForm>
          <LabeledForm label="Job Title">
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </LabeledForm>
          <LabeledForm label="Location">
            <LocationDropDown location={location} handleSelect={handleLocationSelect} />
          </LabeledForm>
          <button className="confirmationButton">Confirm</button>
        </div>
        <button onClick={goForwards}> {">"} </button>
      </div>
      <p className="text-sm w-full text-center text-gray-400">{emailIndex + 1}/{confirmationFormNumber}</p>
    </div>
  )
}
