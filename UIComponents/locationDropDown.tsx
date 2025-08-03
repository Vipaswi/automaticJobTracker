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
        <button className="w-[90%] locationButtonFirst" onClick={() => (setDropDownOpen(!dropDownOpen))}>{props.location}</button> {/**Changed by handleSelect method*/}
      {dropDownOpen && (
        <div className="py-1 overflow-y-scroll grid grid-cols-1 grid-flow-row-dense w-[90%] max-h-15 border-y-2 border-2">
          {USStateAbbreviations.map((text) => (
            <button className="locationButton" key={text} onClick={() => {
              props.handleSelect(text);
              setDropDownOpen(false); //close it
            }}>
              {text}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
