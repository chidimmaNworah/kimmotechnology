import React from "react";
import styles from "./JobsNavbar/JobNavbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoArrowDown } from "react-icons/io5";
<Link />;

export default function FilterByNav() {
  const router = useRouter();
  const currentPath = router.pathname;
  const isActive = (path) => (currentPath === path ? styles.active : "");
  return (
    <div>
      <div className={styles.head_rem2}>
        <ul className={styles.head_navtype}>
          <li className={isActive("/careers/jobs")}>
            <Link href="" legacyBehavior>
              <a href="/careers/jobs/featured-jobs" target="_blank">
                FEATURED JOBS
              </a>
            </Link>
          </li>
          <li className={isActive("/careers/jobs?posted-today")}>
            <Link href="/all-products">POSTED TODAY</Link>
          </li>
          <li className={isActive("/careers/jobs?posted-yesterday")}>
            <Link href="" legacyBehavior>
              <a href="/careers/jobs?posted-yesterday" target="_blank">
                POSTED YESTERDAY
              </a>
            </Link>
          </li>
          <li className={isActive("/careers/jobs?posted-last-week")}>
            <Link href="/careers/jobs?posted-last-week">POSTED LAST WEEK</Link>
          </li>
          <li className={isActive("/careers/jobs?posted-this-week")}>
            <Link href="/careers/jobs?posted-this-week">POSTED THIS WEEK</Link>
          </li>
          <li className={isActive("/careers/jobs?actively-hiring")}>
            <Link href="/careers/jobs?actively-hiring">ACTIVELY HIRING</Link>
          </li>
          <li className={isActive("/filter/*")}>
            <Link
              href="/careers/jobs?filter-by-industry"
              className="flex items-center justify-center gap-2"
            >
              EMPLOYMENT TYPE
            </Link>
          </li>
          <li className={isActive("/careers/jobs")}>
            <Link href="" legacyBehavior>
              <a href="/careers/jobs" target="_blank">
                ALL JOBS
              </a>
            </Link>
          </li>
          <li className={isActive("/filter/*")}>
            <Link
              href="/careers/jobs?filter-by-industry"
              className="flex items-center justify-center gap-2"
            >
              JOBS BY REGION <IoArrowDown />
            </Link>
          </li>
          <li className={isActive("/filter/*")}>
            <Link
              href="/careers/jobs?filter-by-industry"
              className="flex items-center justify-center gap-2"
            >
              JOBS BY STATE <IoArrowDown />
            </Link>
          </li>
          <li className={isActive("/filter/*")}>
            <Link
              href="/careers/jobs?filter-by-industry"
              className="flex items-center justify-center gap-2"
            >
              JOBS BY FIELD <IoArrowDown />
            </Link>
          </li>
          <li className={isActive("/filter/*")}>
            <Link
              href="/careers/jobs?filter-by-industry"
              className="flex items-center justify-center gap-2"
            >
              JOBS BY ROLE <IoArrowDown />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
