/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    rewrites: async () => [
        {
            source: '/health',
            destination: '/api/health',
        },
    ],
};

module.exports = nextConfig;
