import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DEF01",
  // description: "A VitePress Site",

  base: '/',
  srcDir: './docs',
  cleanUrls: true,

  themeConfig: {

    logo: '/vitepress-logo-mini.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Читать', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Введение',
        items: [
          { text: 'О проекте', link: '/intro' },
          { text: 'Шпаргалка Markdown', link: '/markdown' },
        ]
      },
      {
        text: 'Английский язык',
        // collapsed: false,
        items: [
          { text: 'Как учить', link: '/english/howtolearn' },
          { text: 'Шпаргалка', link: '/english/cheatsheet' },
        ]
      },
      {
        text: 'PHP',
        // collapsed: false,
        items: [
          { text: 'Шпаргалка PHP', link: '/php/cheatsheet' },
          { text: 'История развития', link: '/php/history' },
          { text: '100 популярных функций', link: '/php/100f' },
          { text: 'IDE PHP Storm', link: '/php/phpstorm' },
        ]
      },
      {
        text: 'JavaScript',
        // collapsed: false,
        items: [
          { text: 'Шпаргалка JS', link: '/js/cheatsheet' },
          { text: 'Шпаргалка DOM', link: '/js/dom-cheatsheet' },
          { text: '100 популярных функций', link: '/js/100f' },
        ]
      },
      {
        text: 'C#',
        // collapsed: false,
        items: [
          { text: 'Шпаргалка C#', link: '/csharp/cheatsheet' },
          { text: '100 популярных функций', link: '/csharp/100f' },
        ]
      },
      {
        text: 'Git',
        // collapsed: false,
        items: [
          { text: 'Шпаргалка Git', link: '/git/cheatsheet' },
        ]
      },
      {
        text: 'Linux (Ubuntu)',
        // collapsed: false,
        items: [
          { text: 'Файловая система', link: '/linux/filesystem' },
          { text: 'Терминал', link: '/linux/terminal' },
        ]
      },
      {
        text: 'SQL',
        // collapsed: false,
        items: [
          { text: 'Шпаргалка SQL', link: '/sql/cheatsheet' },
        ]
      },
    ],

    outline: {
      label: 'На этой странице',
    },

    docFooter: {
      prev: false,
      next: false
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/defx01/docs' }
    ],

  },

})
