---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Papan Berjalan"
  text: "Baku Hantam Tech"
  tagline: Tulisan mengandung keributan
  actions:
    - theme: brand
      text: Mulai Baca
      link: /mulai
  image:
    src: /papan.jpg
    alt: PapanBerjalan

features:
  - icon: 🏗️
    title: Infrastructure
    details: Ngomongin ndakik ndakik infrastructure
  - icon: 🛠
    title: Configuration
    details: Idealisme tools yang tak pake di sinilah tempatnya
  - icon: 📦
    title: Packaging
    details: Ya kadang kadang jualan, kadang kadang juga beli.
  - icon: 🌳
    title: Environment
    details: Bertani dan berkebun adalah work life ballance yang paling pas
---

<style>
  .VPImage.image-src {
    border-radius: 999px;
  }

  :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #c20000);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #c20000 50%);
  --vp-home-hero-image-filter: blur(44px);
}

  @media (min-width: 640px) {
    :root {
      --vp-home-hero-image-filter: blur(56px);
    }
  }

  @media (min-width: 960px) {
    :root {
      --vp-home-hero-image-filter: blur(68px);
    }
  }
</style>