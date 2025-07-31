import { USStateAbbreviations } from '../Phrases/locations';
import { progressStatus } from '.';
import React, { useState, useEffect} from 'react';
import { LocationDropDown } from './LocationDropDown.tsx';

export const ConfirmationForm = () => {
  const [companyName, setCompanyName] = useState("type something");
  const [jobTitle, setJobTitle] = useState("this is. atitle");
  const [location, setLocation] = useState(USStateAbbreviations[0]);
  const [progressStatus, setProgressStatus] = useState(null);

  const handleLocationSelect = (text) => {
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
  }, [])

  return (
    <div className="ConfirmationForm">
      <button onClick={goBackwards}/>
      <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
      <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
      <LocationDropDown location={location} handleSelect={handleLocationSelect}/>
      <button onClick={goForwards}/>
    </div>
  )
}
