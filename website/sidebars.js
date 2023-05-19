/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Docusaurus: [
    {
      type: 'doc',
      id: 'getting_started',
    },
    {
      type: 'doc',
      id: 'frontend_prereqs',
    },
    {
      type: 'doc',
      id: 'backend_prereqs',
    },
    {
      type: 'category',
      label: 'Specific Documentation',
      link: {
        type: 'generated-index',
        slug: 'index',
      },
      items: ['webscraper_tutorial'],
    }
  ],
};

module.exports = sidebars;
