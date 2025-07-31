import { useState, useRef } from 'react'

export const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();
  if (contentRef.current) console.log(contentRef.current.scrollHeight);

  return <>
    <button onClick={() => setIsOpen(!isOpen)}>
      toggle
    </button>

    {isOpen && 
    <div ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }} className="contentParent">
      <div className="collapsible-content">{props.children}</div>
    </div>
    }
  </>
}