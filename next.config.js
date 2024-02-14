/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "dist",
    // 외부 URL IMAGE 태그에 적용  
    images: {
        domains: ['firebasestorage.googleapis.com']
    }
}

module.exports = nextConfig
