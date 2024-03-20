// next.config.js

export default {
    // async headers() {
    //   return [
    //     {
    //       source: "/api/:path*",
    //       headers: [
    //         { key: "Access-Control-Allow-Credentials", value: "true" },
    //         { key: "Access-Control-Allow-Origin", value: process.env.NEXT_PUBLIC_WEBSITE_URL },
    //         { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
    //         {
    //           key: "Access-Control-Allow-Headers",
    //           value:
    //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    //         },
    //       ],
    //     },
    //   ]
    // },
   
    webpack: (config) => {
       const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))
   
       config.module.rules.push(
         {
           ...fileLoaderRule,
           test: /\.svg$/i,
           resourceQuery: /url/, // *.svg?url
         },
         {
           test: /\.svg$/i,
           issuer: /\.tsx?$/,
           resourceQuery: {not: /url/},
           use: ['@svgr/webpack'],
         },
       )
   
       config.module.rules.push({
         test: /\.(glsl|vs|fs|vert|frag)$/,
         use: ['raw-loader', 'glslify-loader'],
       })
   
       return config
    },
    images: {
       domains: ['localhost', 'img5a.flixcart.com', 'lh3.googleusercontent.com', 'imi-front.imgix.net', 'avatars.yandex.net'],
       formats: ['image/avif', 'image/webp'],
    },
    poweredByHeader: false,
    reactStrictMode: false,
   }
   