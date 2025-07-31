import React, { useState } from 'react';
import { USStateAbbreviations } from '../Phrases/locations';

interface Props {
  location: string;
  handleSelect: (state: string) => void;
}

export const LocationDropDown: React.FC<Props> = (props: Props) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <>
      <div className="locationSelect" >
        <button onClick={() => (setDropDownOpen(!dropDownOpen))}>{props.location}</button> {/**Changed by handleSelect method*/}
      </div>
      {dropDownOpen ? (
        <div className="locationDropDown">
          {USStateAbbreviations.map((text) => (
            <button key={text} onClick={() => {
              props.handleSelect(text);
              setDropDownOpen(false); //close it
            }}>
              {text}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
};
