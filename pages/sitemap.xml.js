import axios from "axios";

export const revalidate = 30;

// Function to generate XML sitemap
const generateSitemap = (urls) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url.url}</loc>
      <lastmod>${url.lastModified}</lastmod>
      <changefreq>${url.changeFrequency}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;
};

export async function getServerSideProps({ res }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/jobs/jobs/`
    );
    const jobsData = response.data;

    // Map dynamic job listings
    const jobs = jobsData.map((item) => ({
      url: `${process.env.NEXT_PUBLIC_NEXTJS_FRONTEND_URL}/careers/jobs/job/${item.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    }));

    // Static pages
    const staticPages = [
      { path: "/", changeFrequency: "monthly", priority: 1 },
      { path: "/career/jobs", changeFrequency: "monthly", priority: 1 },
      { path: "/unsubscribe", changeFrequency: "yearly", priority: 0.5 },
      {
        path: "/unsubscribed-success",
        changeFrequency: "yearly",
        priority: 0.5,
      },
      { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.5 },
      { path: "/terms-of-use", changeFrequency: "yearly", priority: 0.5 },
      { path: "/cookies-policy", changeFrequency: "yearly", priority: 0.5 },
    ].map((page) => ({
      url: `${process.env.NEXT_PUBLIC_NEXTJS_FRONTEND_URL}${page.path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }));

    const sitemap = generateSitemap([...staticPages, ...jobs]);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.statusCode = 500;
    res.end("Error generating sitemap");
  }

  return { props: {} }; // Required by getServerSideProps
}

export default function Sitemap() {
  return null;
}
