import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [new URL('https://nrs.harvard.edu/**'), new URL('https://harvardartmuseums.org/**')],
    }
};

export default nextConfig;
