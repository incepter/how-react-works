// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'How React Works',
  tagline: 'Deep dive into React internals',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://incepter.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/how-react-works/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'incepter', // Usually your GitHub org/user name.
  projectName: 'how-react-works', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/incepter/how-react-works/edit/main/packages/howreactworks',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        gtag: {
          trackingID: 'G-9TZJWQ2XDV',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/how-react-works.png',
      navbar: {
        title: 'How react works',
        logo: {
          alt: 'React logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'reactSidebar',
            position: 'left',
            label: 'Start reading',
          },
          {
            href: 'https://github.com/incepter/how-react-works',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start reading',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Reach out',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/incepterr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/incepter/how-react-works',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} incepter. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
