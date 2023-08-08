import React from "react";
import Dot from "./Dot";

interface detail {
  message: string;
  date: string;
  isPrivateMessage: boolean;
  messageText: string;
  read: boolean;
  user: string;
}

function Message({
  message,
  messageText,
  date,
  isPrivateMessage,
  read,
  user,
}: detail) {
  if (isPrivateMessage) {
    return (
      <div className="flex flex-col">
        {user} {message} {read == false && <Dot read />}
        <div>{date}</div>
        <div className="border">{messageText}</div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div>
          {user} {message} {messageText} {read == false && <Dot read />}
        </div>
        <div>{date}</div>
      </div>
    );
  }
}

export default Message;
