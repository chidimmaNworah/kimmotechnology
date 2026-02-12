import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./AdminNavbar.module.scss";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineTag,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineCollection,
  HiOutlineLogout,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: HiOutlineHome, exact: true },
  { href: "/admin/about/list", label: "About", icon: HiOutlineUser, base: "/admin/about" },
  { href: "/admin/categories/list", label: "Categories", icon: HiOutlineTag, base: "/admin/categories" },
  { href: "/admin/expertise/list", label: "Expertise", icon: HiOutlineLightBulb, base: "/admin/expertise" },
  { href: "/admin/jobs/list", label: "Jobs", icon: HiOutlineBriefcase, base: "/admin/jobs" },
  { href: "/admin/projects/list", label: "Projects", icon: HiOutlineCollection, base: "/admin/projects" },
];

export default function AdminNavbar() {
  const router = useRouter();
  const { pathname } = router;
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (link) => {
    if (link.exact) return pathname === link.href;
    return pathname.startsWith(link.base);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <nav className={styles.adminNav}>
      <div className={styles.adminNav__inner}>
        {/* Left: nav links (desktop) */}
        <ul className={styles.adminNav__list}>
          {adminLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`${styles.adminNav__link} ${
                    isActive(link) ? styles.adminNav__link_active : ""
                  }`}
                >
                  <Icon className={styles.adminNav__icon} />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: site home + logout (desktop) */}
        <div className={styles.adminNav__actions}>
          <Link href="/" className={styles.adminNav__siteLink} title="View site">
            <HiOutlineExternalLink />
            <span>Site</span>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className={styles.adminNav__logout}
            title="Sign out"
          >
            <HiOutlineLogout />
            <span>Logout</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={styles.adminNav__menuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle admin menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className={styles.adminNav__mobile}>
          {adminLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.adminNav__mobileLink} ${
                  isActive(link) ? styles.adminNav__mobileLink_active : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <Icon className={styles.adminNav__icon} />
                {link.label}
              </Link>
            );
          })}
          <div className={styles.adminNav__mobileDivider} />
          <Link
            href="/"
            className={styles.adminNav__mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <HiOutlineExternalLink className={styles.adminNav__icon} />
            View Site
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className={styles.adminNav__mobileLogout}
          >
            <HiOutlineLogout className={styles.adminNav__icon} />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
