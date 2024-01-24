const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')

module.exports = defineConfig({
  publicPath: '/viacep-test/',
  transpileDependencies: true,
  devServer: {
    host: 'dev.local',
    port: 8080,
    https: {
      key: fs.readFileSync('/home/codespace/.ssh/id_ed25519'),
      cert: fs.readFileSync('/home/codespace/.ssh/id_ed25519'),
      //ca: fs.readFileSync('./certs/my-ca.crt')
    },
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:1337',
        changeOrigin: true
      },
    }
  }
})



