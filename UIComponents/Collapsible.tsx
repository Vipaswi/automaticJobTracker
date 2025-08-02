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
      <div className="flex flex-row justify-between object-fit items-center bg-gradient-to-b from-purple-300 to-blue-200 rounded-t-lg w-[90%] z-10">
        <p className="text-start overflow-ellipsis">{props.emailTitle}</p>
        <button className="border-1 rounded-e-sm border-amber-50 mr-2 mt-2 mb-2" onClick={() => setIsOpen(!isOpen)}>
          <img width={20} height={20} src="/dropdown.png" alt="toggle" />
        </button>
      </div>

      <div style={{ height }} className="contentParent w-[90%] max-h-50"  >
        <div ref={contentRef} className="border-0 collapsibleContent bg-gradient-to-b from-blue-200 via-blue-300 to-cyan-500 overflow-y-scroll h-full rounded-b-sm">
          {props.children}
        </div>
      </div>
    </>
  );
};
