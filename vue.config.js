const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/BDBI/' : '/',
  transpileDependencies: true,
  chainWebpack(config) {
    config.module
      .rule('xlsx')
      .test(/\.xlsx$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/data/[name].[ext]', // Puedes modificar el path de salida si lo necesitas
      });
  },
})
