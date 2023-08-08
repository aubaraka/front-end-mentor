"use client";
import Notification from "@/components/Notification";
import notifications from "../public/data.json";

export default function Home() {
  return (
    <div className="font-custom h-screen flex items-center justify-center">
      <div className="w-[640px] p-5 bg-[color:var(--White)] rounded-xl">
        <div id="content">
          {/* <!--Heading--> */}
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-[color:var(--VeryDarkBlue)]">
              Notifcations{" "}
              <span className="bg-[color:var(--Blue)] text-[color:var(--White)] rounded-xl w-10 items-center justify-center">
                3
              </span>
            </h1>
            <h3 className="cursor-pointer">Mark all as read</h3>
          </div>
          {/* <!--Notifications--> */}
          <div>
            {notifications &&
              notifications.map((d) => {
                return (
                  <div key={d.id}>
                    <Notification
                      image=""
                      message={d.message}
                      messageType={d.messageType}
                      read={d.read}
                      user={d.user}
                      date={d.date}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
