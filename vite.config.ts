import type { UserConfig, ConfigEnv } from 'vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
//https://github.com/element-plus/unplugin-element-plus/blob/HEAD/README.zh-CN.md
// vite.config.ts
import UnoCSS from 'unocss/vite';

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  // const env = loadEnv(mode, process.cwd(), '')
  console.log(command, mode);
  return {
    plugins: [
      vue(),
      AutoImport({
        dts: true, // or a custom path
        // global imports to register
        imports: [
          // presets
          'vue',
          'vue-router',
          // custom
          {
            '@vueuse/core': [
              // named imports
              'useMouse', // import { useMouse } from '@vueuse/core',
              'useDark', // import { useDark } from '@vueuse/core',
              'useToggle',
            ],
            axios: [
              // default imports
              ['default', 'axios'], // import { default as axios } from 'axios',
            ],
          },
          // example type import
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true,
          },
        ],
      }),
      Components({
        extensions: ['vue', 'md'],
        dts: 'src/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      UnoCSS({
        // configFile: "../my-uno.config.ts",
      }),
    ],
    publicDir: 'public',
    base: './',
    server: {
      host: '0.0.0.0',
      port: 8112,
      open: false,
      strictPort: false,
      // proxy: {}
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        components: resolve(__dirname, './src/components'),
        api: resolve(__dirname, './src/api'),
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // charset: false,
          additionalData: `@use "./src/assets/css/variable.scss" as *;`,
        },
      },
    },
    build: {
      outDir: 'dist',
    },
  };
});
