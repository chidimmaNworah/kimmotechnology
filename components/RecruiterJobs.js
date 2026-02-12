import Link from "next/link";
import React from "react";

export default function RecruiterJobs() {
  return (
    <div className="mt-8">
      <h3 className="font-display text-xs font-bold text-txt-muted uppercase tracking-wide mb-2">For Recruiters</h3>
      <ul className="space-y-0.5">
        <li className="px-3 py-2 rounded-lg text-sm text-cyan-accent hover:bg-cyan-accent/10 transition-colors">
          <Link href="https://t.me/kimmotechnology?start=What does it take to run a career ad on Kimmotech">
            Recruiter Dashboard
          </Link>
        </li>
        <li className="px-3 py-2 rounded-lg text-sm text-cyan-accent hover:bg-cyan-accent/10 transition-colors">
          <Link href="https://t.me/kimmotechnology?start=What does it take to run a career ad on Kimmotech">
            Paid Plans
          </Link>
        </li>
        <li className="px-3 py-2 rounded-lg text-sm text-txt-muted">
          Paid Posts
        </li>
        <li className="px-3 py-2 rounded-lg text-sm text-txt-muted">
          Free Posts
        </li>
      </ul>
    </div>
  );
}
