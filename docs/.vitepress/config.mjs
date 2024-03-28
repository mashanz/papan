import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Papan Berjalan",
  description: "Baku Hantam Teknologi",
  lastUpdated: true,
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Services', link: '/services' }
    ],

    sidebar: [
      {
        text: 'Postingan',
        collapsed: false,
        items: [
          { text: 'Ngomongin PHP', link: '/posts/php' },
          { text: 'Benchmark Bahasa Pemrograman dan Framework', link: '/posts/benchmark' },
          { text: 'Perjalanan Menggunakan Rust Actix', link: '/posts/perjalanan-menggunakan-rust-actix' },
        ]
      },
      {
        text: 'Projects',
        collapsed: false,
        items: [
          { text: 'Bikin Platform-as-a-Services (PaaS) / Infrastucture-as-a-Services (IaaS)', link: '/projects/paas-iaas' },
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mashanz' },
      { icon: 'twitter', link: 'https://x.com/papanberjalan' }
    ]
  }
})
