/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => [
        {
            source: '/health',
            destination: '/api/health',
        },
    ],
};

module.exports = nextConfig;
