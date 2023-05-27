import { resolve } from 'path';
import Components from 'unplugin-vue-components/webpack';
import NutUIResolver from '@nutui/nutui-taro/dist/resolver';

const config = {
  projectName: 'ruoyi-taro',
  date: '2023-5-25',
  designWidth(input) {
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) return 375;
    return 750;
  },
  deviceRatio: { 640: 2.34 / 2, 750: 1, 828: 1.81 / 2, 375: 2 / 1 },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html', '@tarojs/plugin-http'],
  defineConstants: {},
  alias: {
    '@': resolve(__dirname, '..', 'src')
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  compiler: { type: 'webpack5', prebundle: { enable: false } },
  cache: { enable: true },
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(Components({ resolvers: [NutUIResolver({ taro: true })] }));
    },
    postcss: {
      pxtransform: { enable: true, config: {} },
      url: {
        enable: true,
        config: { limit: 1024 }
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]__[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(Components({ resolvers: [NutUIResolver({ taro: true })] }));
    },
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: { enable: true, config: {} },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]__[hash:base64:5]'
        }
      }
    }
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') return merge({}, config, require('./dev'));
  return merge({}, config, require('./prod'));
};
