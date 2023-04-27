// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Episodes',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Support',
      href: getPermalink('/support'),
    },
    {
      text: 'Trends',
      href: getPermalink('/trends'),
    },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Sass',
    //       href: getPermalink('/landing/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/landing/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/landing/mobile-app'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features',
    //       href: '#',
    //     },
    //     {
    //       text: 'Pricing',
    //       href: '#',
    //     },
    //     {
    //       text: 'About us',
    //       href: '#',
    //     },
    //     {
    //       text: 'Contact',
    //       href: '#',
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Books',
    //   href: getPermalink('/books'),
    // },
    // {
    //   text: 'Resources',
    //   href: getPermalink('/resources'),
    // },
  ],
  actions: [{ type: 'button', text: 'Subscribe', href: 'https://podnews.net/podcast/i30o' }],
};

export const footerData = {
  links: [
    {
      title: 'Podwrecked',
      links: [
        { text: 'Episodes', href: getBlogPermalink() },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Trends', href: getPermalink('/trends') },
        // { text: 'Books', href: getPermalink('/books') },
        // { text: 'Resources', href: getPermalink('/resources') },
        { text: 'RSS Feed', href: 'https://storage.googleapis.com/feeds.oncetold.net/80000029.rss' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    {
      title: 'Support the Show',
      links: [
        { text: 'Try Oncetold', href: 'https://oncetold.us' },
        { text: 'Reach Out', href: getPermalink('/support') },
        { text: 'Podwrecked Salvage Team', href: 'https://www.patreon.com/gagglepod' },
        // { text: 'Buy A Book', href: './books' },
        // { text: 'American Battlefield Trust', href: 'https://battlefields.org' },
        { text: 'Review the Show', href: 'https://podcasts.apple.com/us/podcast/podwrecked/id1441480507' },
        { text: 'Find a Player', href: 'https://podnews.net/podcast/i30o' },
      ],
    },
    {
      title: 'Subscribe',
      links: [
        { text: 'Podcast Index', href: 'https://podcastindex.org/podcast/6337385' },
        { text: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/podwrecked/id1441480507' },
        { text: 'Spotify', href: 'https://open.spotify.com/show/6VeboWkLgVdNiHaBvTcK0e' },
        {
          text: 'Amazon Podcasts',
          href: 'https://a.co/d/2htIH88',
        },
        {
          text: 'Google Podcasts',
          href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9wb2R3cmVja2VkLmxpYnN5bi5jb20vcnNz',
        },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://podwrecked.com' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: 'https://storage.googleapis.com/feeds.oncetold.net/80000029.rss' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    &copy; Copyright 2023. <a class="text-darkest hover:underline dark:text-gray-200" href="https://podwrecked.com/"> Podwrecked</a> and <a class="text-darkest hover:underline dark:text-gray-200" href="https://oncetold.us/"> Oncetold</a>. All rights reserved.
  `,
};
