# OSU Sustainability Wiki

## Site URL (Try it Yourself!)

**https://osu-sustainability-office.github.io/**

## About

Documentation Wiki for Oregon State University Sustainability Office.

The site was built with [Docusaurus](https://docusaurus.io/docs), so reference their documentation for the basics of how this site functions.

More specifically, this site was built on a template from [easyops-cn](https://github.com/easyops-cn), so go read [the original repository's README](https://github.com/easyops-cn/docusaurus-search-local/blob/master/README.md) if you want more information on the technical details of the site / want to make refactoring changes.

The site is deployed on Github Pages, although it can also be deployed on any static website host.

### Site Features:

OSU Sustainability Wiki has the advantage of a search bar feature (frontend only, no database costs). This means that compared to just hosting multiple Markdown files on Github directly, the search UI is much improved on this wiki. Also, combining several projects' worth of documentation into one wiki is more efficient / better UX.

## Site Setup

### Dependencies

You will need either node version `16.15.1` or older, OR yarn version of `3.2.2` or newer. I recommend updating yarn so you can use newer node versions.

How to update yarn:

- `npm install --global yarn`
- `yarn set version 3.22`

How to change Node version:

- See https://github.com/coreybutler/nvm-windows or https://github.com/nvm-sh/nvm
- `nvm install 16.15.1` (or whichever version you want)
- `nvm use 16.15.1`

### Installation

- `yarn install` to install required node modules.
- `yarn start` to open the dev environment to preview the website.
- `yarn build` to build the website locally (needed if you want to test the search function before deployment).
- Deployment is handled by the files in `github/workflows`

## Contribution Guidelines

1. Review [Basic Markdown Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
2. Make a Github Account if you don't already have one.
3. [Make a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
4. Go to [Docs folder](https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io/tree/main/website/docs) (`osu-sustainability-office.github.io/website/docs`) and make your edits. Edit `osu-sustainability-office.github.io/website/sidebars.js` as well if you added a new guide.
5. [Make a Pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for your changes.
