const buildType = process.env.BUILD_TYPE;

module.exports = {
  title: 'OSU Sustainability Office Wiki',
  tagline: 'OSU Sustainability Office Wiki',
  url: 'https://osu-sustainability-office.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon3.ico',
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
        src: 'img/favicon3.ico',
      },
      items: [
        {
          to: 'docs/getting_started',
          activeBasePath: 'docs',
          label: 'Documentation',
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
              label: 'Documentation',
              to: 'docs/index',
            },
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'Contribution Guidelines',
              href: 'https://github.com/solderq35/hitruns-wiki#contribution-guidelines',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/solderq35/hitruns-wiki',
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
          editUrl: 'https://github.com/solderq35/hitruns-wiki/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/solderq35/hitruns-wiki/edit/master/website/',
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
