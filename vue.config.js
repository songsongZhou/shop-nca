module.exports={
    outputDir:'docs',
    baseUrl: process.env.NODE_ENV==='production'?'shop-nca/docs':'/',
    devServer:{
        port:8080,
        host:'192.168.1.100',
        open:false,
        https:false,
        proxy: {
            '/api': {
                // target: 'http://shuobakeji.com/', // Rls环境
                target: 'http://192.168.1.100/', // 正式环境
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/api/': '/'
                }
            }
        }
    }
}