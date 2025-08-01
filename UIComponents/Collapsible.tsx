import { useState, useRef, useEffect } from 'react';
import React from 'react';

interface Props {
  children: React.ReactNode;
  emailTitle: string;
}

export const Collapsible = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex justify-between items-center">
        {props.emailTitle}
        <button className="border-1 rounded-e-sm border-amber-50 mr-2 mt-2 mb-2" onClick={() => setIsOpen(!isOpen)}>
          <img src="/assets/downarrow.png" alt="toggle" />
        </button>
      </div>

      <div style={{ height }} className="contentParent">
        <div ref={contentRef} className="collapsibleContent">
          {props.children}
        </div>
      </div>
    </>
  );
};
