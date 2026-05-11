// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import { createRequire } from 'module';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const require = createRequire(import.meta.url);

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevTacora Teachers',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://acamarac02.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/DevTacoraTeachers/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'acamarac02', // Usually your GitHub org/user name.
  projectName: 'DevTacoraTeachers', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Rama oculta donde se alojará el binario de la web
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: {
        label: 'Castellano',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },

  plugins: [require('./plugins/tailwind-plugin.cjs'), 'docusaurus-lunr-search'],

  markdown: {
    mermaid: true,
  },
  // inyectar la librería visual renderizadora
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Descomentar si se quiere usar el versionado automático
          lastVersion: 'current', // Convierte el curso actual en la versión por defecto
          /*versions: {
            current: {
              banner: 'none', // Apaga el molesto aviso de la parte superior
            },
            '25-26': {
              banner: 'unmaintained', // Enciende el aviso de "No mantenido"
            },
          },*/
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          admonitions: {
            keywords: ['actividad'],
            extendDefaults: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'DevTacora Teachers',
        logo: {
          alt: 'My Site Logo',
          src: 'img/devtacora_teachers_logo_violet.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docusaurus_2526_sidebar',
            position: 'left',
            label: 'Docusaurus',
          },
          // Descomentar si se quiere usar el versionado automático
          /*
          {
            type: 'docsVersionDropdown',
            position: 'right',
            versions: {
              current: { label: 'Curso 26-27' },
              '25-26': { label: 'Curso 25-26' },
            },
          },
          */
          // Descomentar si se quiere usar el desplegable de idiomas
          /*{
            type: 'localeDropdown',
            position: 'right',
          },*/
          /*{
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        copyright: `
        <section className="bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Construyendo conocimiento, línea por línea
        </h3>
        <p className="text-gray-600 leading-relaxed">
          © ${new Date().getFullYear()} Alicia Cámara Casares - Contenido bajo licencia${' '}
              <a 
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                CC BY-NC-SA 4.0
              </a>.
        </p>
      </div>
    </section>
      `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'java', 'bash'],
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
