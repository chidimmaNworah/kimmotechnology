import React from "react";
import styles from "./JobsNavbar/JobNavbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoArrowDown } from "react-icons/io5";
<Link />;

export default function FilterByNav() {
  const router = useRouter();

  const { query } = router;
  const currentFilter = query?.filter || "all";

  // const currentPath = router.pathname;
  // const isActive = (path) => (currentPath === path ? styles.active : "");

  // const isActive = (filter) =>
  //   currentFilter === filter ? styles.navbarActive : "";

  const isActive = (filter, path) =>
    currentFilter === filter || router.pathname === path
      ? styles.navbarActive
      : "";

  const clearFilter = () => {
    router.push({ pathname: "/careers" }, undefined, { shallow: true });
  };
  return (
    <div>
      <div className={styles.head_rem2}>
        <ul className={styles.head_navtype}>
          {/* <li className={isActive("/careers/jobs")}>
            <Link href="" legacyBehavior>
              <a href="/careers/jobs/featured-jobs" target="_blank">
                FEATURED JOBS
              </a>
            </Link>
          </li> */}
          {query.filter && (
            <li
              onClick={clearFilter}
              style={{ color: "red" }}
              className="cursor-pointer !bg-white"
            >
              ❌
            </li>
          )}
          <li>
            <Link className={isActive(null, "/careers")} href="" legacyBehavior>
              ALL
            </Link>
          </li>
          <li>
            <Link
              className={isActive("today")}
              href={{ pathname: "/careers", query: { filter: "today" } }}
            >
              POSTED TODAY
            </Link>
          </li>
          <li className={isActive("/careers/jobs?posted-yesterday")}>
            <Link
              className={isActive("yesterday")}
              href={{ pathname: "/careers", query: { filter: "yesterday" } }}
            >
              POSTED YESTERDAY
            </Link>
          </li>
          <li>
            <Link
              className={isActive("this-week")}
              href={{ pathname: "/careers", query: { filter: "this-week" } }}
            >
              POSTED THIS WEEK
            </Link>
          </li>
          <li>
            <Link
              className={isActive("last-week")}
              href={{ pathname: "/careers", query: { filter: "last-week" } }}
            >
              POSTED LAST WEEK
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
              JOBS BY INDUSTRY <IoArrowDown />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
