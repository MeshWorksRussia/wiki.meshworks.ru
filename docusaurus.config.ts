import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MeshWorks Wiki',
  tagline: 'База знаний MeshWorks',
  favicon: 'img/favicon-light.png',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon-light.png',
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        name: ['База знаний', 'Контрибьютинг', 'О нас'],
        url: [
          'https://wiki.meshworks.ru/',
          'https://wiki.meshworks.ru/wiki/how-to-edit',
          'https://wiki.meshworks.ru/about',
        ],
      }),
    },
  ],
  future: {
    v4: true,
  },
  url: 'https://wiki.meshworks.ru',
  baseUrl: '/',
  organizationName: 'meshworks',
  projectName: 'wiki',
  onBrokenLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/MeshWorksRussia/wiki.meshworks.ru/edit/main/',
          admonitions: {
            keywords: ['favorite'],
            extendDefaults: true,
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.7,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/',
        language: ['ru', 'en'],
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-4M85P2LD5J',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1600,
        min: 400,
        steps: 4,
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'extra-pages',
        path: 'static-pages',
        routeBasePath: '/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo-light.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#7eb81b',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo-light.png',
    metadata: [
      {
        name: 'description',
        content:
          'MeshWorks Wiki — русскоязычная база знаний о Meshtastic, LoRa mesh-сетях и устройствах для автономной связи.',
      },
      {
        name: 'keywords',
        content:
          'meshtastic, meshworks, lora mesh, loRa сеть, автономная связь, wiki meshtastic, инструкции lora',
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    breadcrumbs: {
      homePageLabel: 'MeshWorks',
    },
    // Algolia is disabled; using local search plugin
    navbar: {
      title: 'MeshWorks Wiki',
      logo: {
        alt: 'MeshWorks',
        src: 'img/logo-light.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          to: '/',
          position: 'left',
          label: 'База знаний',
          activeBaseRegex: '^(?!/(?:about|wiki)).*$',
        },
        {
          to: '/wiki/how-to-edit',
          position: 'left',
          label: 'Контрибьютинг',
          activeBaseRegex: '^/wiki/how-to-edit/?$',
        },
        {
          to: '/about',
          position: 'left',
          label: 'О нас',
          activeBaseRegex: '^/about/?$',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          html: [
            "<div class='footer__links-row'>",
            "<a href='https://meshworks.ru/' target='_blank' rel='noreferrer noopener'>meshworks.ru</a>",
            "<a href='https://www.youtube.com/@meshwrks' target='_blank' rel='noreferrer noopener'>YouTube</a>",
            "<a href='https://boosty.to/meshworks' target='_blank' rel='noreferrer noopener'>Boosty</a>",
            "<a href='https://t.me/meshwrks' target='_blank' rel='noreferrer noopener'>Telegram</a>",
            "<a href='https://status.meshworks.ru/status/meshworks' target='_blank' rel='noreferrer noopener'>Status Page</a>",
            "<a href='https://malla.meshworks.ru/' target='_blank' rel='noreferrer noopener'>Malla</a>",
            '</div>',
            "<div class='footer__trademark'>Meshtastic® is a registered trademark of Meshtastic LLC.</div>",
          ].join(''),
        },
      ],
      copyright: `© ${new Date().getFullYear()} MeshWorks`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
