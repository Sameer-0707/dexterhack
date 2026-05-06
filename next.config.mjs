/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.qrserver.com',
            },
            {
                protocol: 'https',
                hostname: 'prod-img.thesouledstore.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'styleunion.in',
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
            },
        ],
    },
};

export default nextConfig;
