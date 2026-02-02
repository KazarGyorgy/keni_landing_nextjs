const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Teljesítmény optimalizálás
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },

    // Kompresszió
    compress: true,

    // React Strict Mode a jobb debug-hoz
    reactStrictMode: true,

    // Optimalizált bundle
    experimental: {
        // optimizeCss: true, // Kikapcsolva, mert blokkolja a fontok előtöltését (dependency chain issue)
        optimizePackageImports: ['react-icons', 'framer-motion'],
    },
};

module.exports = withNextIntl(nextConfig);
