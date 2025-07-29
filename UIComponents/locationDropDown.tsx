import {USStateAbbreviations} from "../Phrases/locations.ts"

export const locationDropDown = ({defaultText: String, handleSelect: async (params: String) => {
  any
}}) => {
  
  return <div className="locationDropDown">
    {USStateAbbreviations.map((text : String) => {
      <button onSubmit={() => handleSelect(text)}>{text}</button>
    })}
  </div>
}