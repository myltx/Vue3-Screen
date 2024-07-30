// postcss.config.cjs
module.exports = {
  plugins: {
    '@unocss/postcss': {
      // 可选项
      content: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
    },
  },
};
