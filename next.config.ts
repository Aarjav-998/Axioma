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
};

module.exports = nextConfig;
