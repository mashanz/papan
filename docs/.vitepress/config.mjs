import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Papan Berjalan",
  description: "Baku Hantam Teknologi",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Postingan',
        items: [
          { text: 'Ngomongin PHP', link: '/php' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mashanz' },
      { icon: 'twitter', link: 'https://x.com/papanberjalan' }
    ]
  }
})
