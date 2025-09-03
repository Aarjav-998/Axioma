/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // ⚠️ This will allow production builds to succeed
        ignoreDuringBuilds: true,
    },
    typescript: {
        // ⚠️ This will allow builds even with TS errors
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    }, // <-- this closing brace was missing
};

module.exports = nextConfig;

