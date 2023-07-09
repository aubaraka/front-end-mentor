"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function Home() {
  const [submitted, setSubmitted] = useState<Boolean>(false);
  const [ratings, setRatings] = useState<Array<number>>([1, 2, 3, 4, 5]);
  const [selectedRating, setSelectedRating] = useState<number>();

  useEffect(() => {}, []);

  const submitRating = (e: any) => {
    e.preventDefault();

    const target = e.target as HTMLButtonElement;
    setSelectedRating(Number(target.value));
    setSubmitted(true);
  };
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="flex items-center justify-center bg-[color:var(--VeryDarkBlue)] mobile:w-[385px] mobile:h-[710px] desktop:ml-3 desktop:mr-3 desktop:w-full desktop:h-full">
        {!submitted ? (
          <div className="card h-[340px] w-[365px] rounded-xl">
            <div className="ml-5 mt-5 w-10 h-10 bg-[color:var(--DarkBlue)] rounded-full flex items-center justify-center">
              <Image
                src="/icon-star.svg"
                alt="rating star"
                width={20}
                height={20}
                priority
              />
            </div>
            <h1 className="font-custom ml-5 mt-4 font-bold text-[color:var(--White)]">
              How did we do?
            </h1>
            <div className="pr-10 mt-4">
              <p className="text-[15px] ml-5 text-[color:var(--LightGrey)] ">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="flex flex-row justify-between pr-10 pl-5 mt-5">
              {ratings.map((i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-center w-10 h-10"
                  >
                    <button
                      onClick={(e) => submitRating(e)}
                      className="focus:bg-[color:var(--Orange)] rounded-full w-full h-full bg-[color:var(--DarkBlue)] hover:bg-[color:var(--LightGrey)]  text-[color:var(--LightGrey)] hover:text-[color:var(--White)] focus:text-[color:var(--White)]"
                      value={i}
                    >
                      {i}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 pl-5 mb-5">
              <button className="bg-[color:var(--Orange)] hover:bg-[color:var(--White)] uppercase text-[color:var(--White)] hover:text-[color:var(--Orange)]  rounded-2xl h-9 w-[308px] ">
                submit
              </button>
            </div>
          </div>
        ) : (
          <div className="card h-[340px] w-[365px] rounded-xl flex flex-col items-center justify-center ">
            <div className="">
              <Image
                src="/illustration-thank-you.svg"
                alt="rating star"
                width={120}
                height={120}
                priority
              />
            </div>
            <div className="bg-[color:var(--DarkBlue)] mt-5 mb-7 w-[190px] h-[35px] rounded-2xl flex items-center justify-center ">
              <p className="text-[color:var(--Orange)] ">
                You selected {selectedRating} out of 5
              </p>
            </div>
            <h1 className="font-custom  font-bold text-[color:var(--White)] mb-4">
              Thank you!
            </h1>
            <div className="text-center pl-5 pr-5 ">
              <p className="text-[15px] text-[color:var(--LightGrey)] ">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
