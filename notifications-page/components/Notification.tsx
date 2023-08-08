import React from "react";
import Image from "next/image";
import Message from "./Message";
import Dot from "./Dot";

interface detail {
  image: string;
  user: string;
  messageType: string;
  message: string;
  date: string;
  read: boolean;
}

function Notification({
  image,
  user,
  messageType,
  message,
  date,
  read,
}: detail) {
  return (
    <div className="flex flex-row">
      <div>
        <Image src="" alt="user image" width={20} height={20} priority />
      </div>
      <div className="flex flex-col">
        <div>message</div>
        <div>date</div>
      </div>
    </div>
  );
}

export default Notification;
