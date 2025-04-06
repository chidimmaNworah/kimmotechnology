"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient, targetDate]);

  if (!isClient || !timeLeft) return null;

  return (
    <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Animated image background */}
      <div className="absolute inset-0 z-0">
        <div className="flex animate-slide bg-repeat-x h-full w-[300%] opacity-10">
          {[1, 2, 3].map((row) => (
            <div key={row} className="flex">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src={`/images/bg${(i % 6) + 1}.jpg`} // Replace with your image names
                  alt="bg"
                  className="w-64 h-full object-cover"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Countdown content */}
      <div className="relative z-10 text-white text-center w-full flex flex-col gap-6 items-center">
        <p className="uppercase tracking-wider">REGISTER TO ATTEND</p>
        <p className="font-bold text-[2rem]">TECH FEMME CONNECT</p>
        <div className="w-full flex justify-center items-center gap-4 mb-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit}>
              <p className="text-[3rem] font-bold">{value}</p>
              <p className="text-sm uppercase">{unit}</p>
            </div>
          ))}
        </div>
        <Link href="https://forms.gle/g7SF6XkeRe1chaf56" target="_blank">
          <button className="border border-1 py-4 px-8 rounded-xl shadow-xl transition ease-in duration-500 hover:border-none hover:bg-[#39459C]">
            REGISTER
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}
