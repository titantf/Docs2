// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Universe',
  tagline: 'Learn anything and everything Titan.TF',
  url: 'https://whitepaper.titan.tf',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'titantf', // Usually your GitHub org/user name.
  projectName: 'universe', // Usually your repo name.

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
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TitanTF/Docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mod',
        path: 'mod',
        routeBasePath: 'mod',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          'If you\'d like to contribute, create a fork on our <a target="_blank" rel="noopener noreferrer" href="https://github.com/TitanTF/Docs/fork">GitHub</a> 🎉',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        // title: '',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.png',
        },
        // style: 'dark',
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/api/home',    // ./docs/Intro.md
            label: 'API',
            position: 'left',
            activeBaseRegex: `/api/`,
          },
          {
            to: '/mod/home',    // ./docs-api/Intro.md
            label: 'Moderating',
            position: 'left',
            activeBaseRegex: `/mod/`,
          },
          {
            href: 'https://github.com/TitanTF/Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: `© Titan.TF ${new Date().getFullYear()}. `,
          },
          {
            title: `Community`,
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'Edit on GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        // copyright: `Built with 🦖.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
