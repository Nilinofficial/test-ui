/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
      },
      images: {
        domains: ['i.ibb.co'],
      },
      basePath:"",
      env : {
        stripe_public_key : process.env.STRIPE_PUBLISHABLE_API
      }
}

module.exports = nextConfig



