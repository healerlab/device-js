import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/device-js/',
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  title: "Device detector module",
  description: "Powerful, lightweight Device detector module for JS, TS, Vue, React and Angular",
  head: [
    ['link', { rel: 'icon', href: '/vite.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/vite.svg' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/usage-examples' },
      {
        text: '0.0.4',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/healerlab/device-js/releases'
          },
        ]
      }
    ],

    siteTitle: 'Device detector js',


    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Get Started', link: '/usage-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/healerlab/device-js.git' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 HealerNguyen'
    }
  }
})
