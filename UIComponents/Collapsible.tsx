import { useState, useRef, useEffect } from 'react'

export const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        toggle
      </button>

      <div style={{height: height}} className="contentParent">
        <div ref={contentRef} className="collapsible-content">
          {props.children}
        </div>
      </div>
    </>
  );
};
