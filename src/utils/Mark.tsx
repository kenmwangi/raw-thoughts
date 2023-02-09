import React from "react";
interface MarkProps {
  children: React.ReactNode;
}
function Mark({ children }: MarkProps) {
  return (
    <React.Fragment>
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-4 mx-3 ring-indigo-100">
        {children}
      </mark>
    </React.Fragment>
  );
}

export default Mark;
