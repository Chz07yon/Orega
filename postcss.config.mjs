/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}, // Autoprefixer is required for Next.js to compile Tailwind properly
    },
};

export default config;
