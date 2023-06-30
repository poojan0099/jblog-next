/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
            "images02.nicepage.com",
            "res.cloudinary.com",
        ],
	},
};

module.exports = nextConfig;
