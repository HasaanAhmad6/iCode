import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  redirects: async () => {
    return [
      // Redirect old blog detail URL to first blog post
      {
        source: "/blog-details",
        destination: "/blog/5-ways-to-improve-operational-efficiency-in-2025",
        permanent: true,
      },
      // Redirect old service detail URL to UI/UX Design service
      {
        source: "/service-details",
        destination: "/services/ui-ux-design",
        permanent: true,
      },
      // Redirect typo URL to UI/UX Design service
      {
        source: "/services-details",
        destination: "/services/ui-ux-design",
        permanent: true,
      },
      // Redirect old job detail URL to UI/UX Designer job
      {
        source: "/job-details",
        destination: "/jobs/ui-ux-designer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
