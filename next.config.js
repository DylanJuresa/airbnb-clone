/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['assets.stickpng.com',"links.papareact.com","mir-s3-cdn-cf.behance.net"]
  },
  env:{
    mapbox_key:'pk.eyJ1IjoiZHlsYW5qdXJlc2EiLCJhIjoiY2wzYWwxOGZxMDBmbzNmcmxwMmF3eHd4ZCJ9.IKg5QEH__1Z9--8w_htygA'
  }


}

module.exports = nextConfig
