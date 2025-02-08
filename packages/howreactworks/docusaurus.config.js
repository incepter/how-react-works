// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "How React Works (日本語訳)",
  tagline: "Deep dive into React internals",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://calloc134.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/how-react-works/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "calloc134", // Usually your GitHub org/user name.
  projectName: "how-react-works", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/calloc134/how-react-works/edit/main/packages/howreactworks",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        gtag: {
          trackingID: "G-9TZJWQ2XDV",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_palestine",
        content:
          '<div>Free Palestine <img src="https://flagcdn.com/ps.svg" width="30" alt="Palestine"></div><p>We stand with the People of Palestine! We stand for Justice, Human Rights and Freedom!</p>',

        backgroundColor: "#242526",
        textColor: "#fff",
        isCloseable: false,
      },
      // Replace with your project's social card
      image: "img/how-react-works.png",
      navbar: {
        title: "How react works",
        logo: {
          alt: "React logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "reactSidebar",
            position: "left",
            label: "Start reading",
          },
          {
            href: "https://github.com/calloc134/how-react-works",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Start reading",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Reach out",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/calloc134",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/calloc134/how-react-works",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} calloc134. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
