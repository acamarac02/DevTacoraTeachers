---
title: "Internationalization (i18n)"
sidebar_position: 3
description: "Configuring Docusaurus to support multiple languages in your course materials."
---

In many Vocational Training centers (FP), there are bilingual programs, or there is a regulatory need to have the syllabus available in a second official language. Docusaurus comes with a built-in internationalization (i18n) system that makes this job much easier, without having to duplicate our entire web project.

In this tutorial, we will see how to set up a second language (we will use **English**, under the `en` code) based on our current main website (which is **Spanish**, with the `es` code).

## Language Configuration

The first step is to tell our website which languages we are going to use. To do this, we must edit the main document `docusaurus.config.js`. Look for the `i18n` block, which is usually right at the top:

```javascript title="docusaurus.config.js"
export default {
  // ...
  i18n: {
    defaultLocale: 'es',       // The main language of your site (your original docs/ folder)
    locales: ['es', 'en'],     // List of all supported languages on the website
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
  // ...
};
```

Next, we need to instruct the top menu to display the language switcher button or dropdown. Scroll down in that same document to the `themeConfig > navbar > items` section and add the `localeDropdown` item:

```javascript title="docusaurus.config.js"
        items: [
          // ... your other menus ...
          {
            type: 'localeDropdown',
            position: 'right', // Places the selector in the top-right corner
          },
        ],
```

With this, students will see a convenient visual dropdown in the website's menu to switch between course materials with a single click.

## Organizing the Translation Folders

Docusaurus does not translate the content automatically. Its philosophy relies on us creating an exact replica of the folders where we keep our `.md` files, and then manually translating them there to keep full control.

For it to recognize the new languages, you must follow this workflow within your codebase:

1. Create a parent folder named `i18n/` at the root of your project (alongside your existing `docs/` and `src/` folders).
2. Inside that new folder, create the required Docusaurus structure for the English language, ending with the documents folder: `i18n/en/docusaurus-plugin-content-docs/current/`.
3. Copy the `.md` files for the topics you want to translate into this folder, maintaining the exact same subfolder hierarchy they originally had.
4. **The golden rule:** Translate **only and exclusively** the text content inside the `.md` file. Never change the physical name of the file or its parent folder, because if the names differ, the links will break when changing languages.

*Visual example with some PMDM module materials:*
```text
project-root/
 ├── docs/ 
 │   └── 01-pmdm/
 │       └── 01-introduccion-android.md   <-- (Original document written in Spanish)
 │
 ├── i18n/ 
 │   └── en/
 │       └── docusaurus-plugin-content-docs/
 │           └── current/
 │               └── 01-pmdm/
 │                   └── 01-introduccion-android.md   <-- (Cloned file where we write in English)
 └── docusaurus.config.js
```

:::info[Where should your Spanish originals go?]
Since we have decided that our base language (by default) is `es`, all your initial Spanish notes should not be moved; they must remain living in the `docs/` folder. Inside the `i18n/` folder you will **only** place the English versions or any other added languages.
:::

:::tip[Translating Screen Buttons]
If you want to translate built-in program details (such as the "Next page", "Next Topic" messages, etc.), you can run the command `npm run write-translations -- --locale en` in your terminal. This will generate files with isolated texts in your English folder ready for you to manually modify.
:::

## Viewing the Result Locally

If you are working on your computer and run your usual `npm run start` command, you will notice an interesting detail: **the language dropdown will give a "Page not found" (404) error if you try to click it**.

Don't worry, this is normal behavior and you haven't broken anything. For performance reasons, the local test server is only capable of rendering and displaying **one language at a time**. Only when you finally publish your notes using the deployment command (`npm run deploy`) will the button work perfectly, weaving both views together.

Therefore, if you want to locally audit how your syllabus written in English turned out, you must stop the console (`Ctrl+C`) and explicitly force it to boot in bilingual mode by running this command in your terminal:

```bash
npm run start -- --locale en
```

With this command, NodeJS assumes it should temporarily ignore your original files in `/docs` and proceed to render the screen reading exclusively the notes from your `/i18n/en` folder.
