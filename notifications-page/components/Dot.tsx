import React from "react";

interface detail {
  read: boolean;
}
function Dot({ read }: detail) {
  {
    if (read == true)
      return <div className="rounded-full bg-[color:var(--Red)] w-2 h-2"></div>;
    else return <></>;
  }
}

export default Dot;
