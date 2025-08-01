import { USStateAbbreviations } from '../Phrases/locations';
import { progressStatus } from '../progressStatus';
import React, { useState, useEffect } from 'react';
import { LocationDropDown } from './LocationDropDown';
import { Collapsible } from './Collapsible';

export const ConfirmationForm = () => {
  // The following state should be saved in cache and retrieved from 
  // the server. The caching will ensure user changes will be retained for 
  // the most recently retrieved server data.
  const [companyName, setCompanyName] = useState("type something");
  const [jobTitle, setJobTitle] = useState("this is. atitle");
  const [location, setLocation] = useState(USStateAbbreviations[0]);
  const [progressStatus, setProgressStatus] = useState(null);

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
          <Collapsible emailTitle={"this is the email title"}> 
            <p>This is the long aah email, minus any pictures :p</p>
          </Collapsible>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          <LocationDropDown location={location} handleSelect={handleLocationSelect} />
        </div>
        <button onClick={goForwards}> {">"} </button>
      </div>
    </div>
  )
}
