/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx,md,mdx}',
        './docs/**/*.{md,mdx}',
        './blog/**/*.{md,mdx}',
    ],
    corePlugins: {
        // Disable preflight so it doesn't conflict with Infima (Docusaurus default CSS)
        preflight: false,
    },
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {},
    },
    plugins: [],
};
