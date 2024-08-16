import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mindenit Docs",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Nurekit', link: '/nurekit' },
      { text: 'Nure.NET', link: '/nure-net' },
    ],

    sidebar: {
      '/nurekit/': [
        {
          text: 'Guides',
          collapsed: false,
          items: [
            { text: 'Setting up', link: '/nurekit/guides/setting-up' }
          ]
        },
        {
          text: 'Reference',
          collapsed: false,
          items: [
            { text: 'Auditoriums endpoint', link: '/nurekit/reference/auditoriums-endpoint'},
            { text: 'Groups endpoint', link: '/nurekit/reference/groups-endpoint'},
            { text: 'Teachers endpoint', link: '/nurekit/reference/teachers-endpoint'}
          ]
        }
      ],

      '/nure-net/': [
        {
          text: 'Guides',
          collapsed: false,
          items: [
            { text: 'Setting up', link: '/nure-net/guides/setting-up'}
          ]
        },
        {
          text: 'Classes',
          collapsed: true,
          items: [
            { text: 'Auditorium', link: '/nure-net/classes/auditorium'},
            { text: 'Group ', link: '/nure-net/classes/group'},
          ]
        }
      ]
    },

    footer: {
      copyright: 'Copyright © 2024-present <a href="https://github.com/orgs/mindenit/people">Mindenit team</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mindenit' }
    ],

    search: {
      provider: "local"
    },

    editLink: {
      pattern: 'https://github.com/mindenit/docs/edit/main/docs/:path'
    }
  }
})
