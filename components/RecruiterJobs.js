import Link from "next/link";
import React from "react";

export default function RecruiterJobs() {
  return (
    <div>
      <ul className="mt-10 text-[#313BAC] text-sm">
        <li className="py-1 border-b border-[#cccccc40] last:border-none">
          <Link href="https://t.me/kimmotechnology?start=What does it take to run a career ad on Kimmotech">
            RECRUITER - DASHBOARD
          </Link>
        </li>
        <li className="py-1 border-b border-[#cccccc40] last:border-none">
          <Link href="https://t.me/kimmotechnology?start=What does it take to run a career ad on Kimmotech">
            PAID PLANS
          </Link>
        </li>
        <li className="py-1 border-b border-[#cccccc40] last:border-none">
          PAID POSTS
        </li>
        <li className="py-1 border-b border-[#cccccc40] last:border-none">
          FREE POSTS
        </li>
      </ul>
    </div>
  );
}
