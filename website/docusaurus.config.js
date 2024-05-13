const buildType = process.env.BUILD_TYPE;

module.exports = {
  title: 'OSU Sustainability Office Wiki',
  tagline: 'OSU Sustainability Office Wiki',
  url: 'https://osu-sustainability-office.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'osu-sustainability-office', // Usually your GitHub org/user name.
  projectName: 'OSU-SO-Documentation', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', ...(buildType === 'i18n' ? ['zh-CN', 'zh-TW'] : [])],
  },
  themeConfig: {
    image: 'img/osu_so.png',
    navbar: {
      title: 'OSU SO Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'docs/getting_started',
          activeBasePath: 'docs',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'docs/faq',
          activeBasePath: 'docs',
          label: 'FAQ / HELP ME',
          position: 'left',
        },
        {
          to: 'docs/specific',
          activeBasePath: 'docs',
          label: 'More Specific Documentation',
          position: 'left',
        },
        {
          to: 'docs/tasks',
          activeBasePath: 'docs',
          label: 'Recurring Tasks',
          position: 'left',
        },
        {
          href: 'https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io#contribution-guidelines',
          label: 'Contribution Guidelines',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting_started',
            },
            {
              label: 'FAQ / HELP ME',
              to: 'docs/faq',
            },
            {
              label: 'More Specific Documentation',
              to: 'docs/specific',
            },
            {
              label: 'Recurring Tasks',
              to: 'docs/tasks',
            },
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'Contribution Guidelines',
              href: 'https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io#contribution-guidelines',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OSU Sustainability Office. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};
