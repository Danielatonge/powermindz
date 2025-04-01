// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { 'http-equiv': 'x-ua-compatible', 'content': 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ],
      script: [
        {
          // src: 'https://d35ul1o6ah7bnm.cloudfront.net/sdk/justslide.min.js',
          type: 'text/javascript'
        },
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WVSTBXSS');`,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          children: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVSTBXSS" height="0" width="0" style="display:none;visibility:hidden" > </iframe>',
          tagPosition: 'bodyOpen'
        }
      ]
    },
    keepalive: true
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/scss/styles.scss'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts'
  ],
})