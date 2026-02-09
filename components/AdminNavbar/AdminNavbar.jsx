import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./AdminNavbar.module.scss";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/about/list", label: "Abouts" },
  { href: "/admin/about/create", label: "Add About" },
  { href: "/admin/categories/list", label: "Categories" },
  { href: "/admin/categories/create", label: "Add Category" },
  { href: "/admin/expertise/list", label: "Expertise" },
  { href: "/admin/expertise/create", label: "Add Expertise" },
  { href: "/admin/jobs/list", label: "Jobs" },
  { href: "/admin/jobs/create", label: "Add Job" },
  { href: "/admin/projects/list", label: "Projects" },
  { href: "/admin/projects/create", label: "Add Project" },
];

export default function AdminNavbar() {
  const router = useRouter();
  const { pathname } = router;

  const isLinkActive = (href) => {
    // Highlight section when on that exact page or any of its dynamic child routes
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(
      href.replace("/list", "").replace("/create", "")
    );
  };

  return (
    <nav className={styles.adminNav}>
      <ul className={styles.adminNav__list}>
        {adminLinks.map((link) => (
          <li
            key={link.href}
            className={`${styles.adminNav__item} ${
              isLinkActive(link.href) ? styles.adminNav__item_active : ""
            }`}
          >
            <Link href={link.href} legacyBehavior>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
