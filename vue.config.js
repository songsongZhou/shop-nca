module.exports={
    outputDir:'dist',
    devServer:{
        port:8080,
        host:'localhost',
        open:false,
        https:false,
        proxy: {
            '/api': {
                // target: 'http://shuobakeji.com/', // Rls环境
                target: 'http://192.168.2.167/', // 正式环境
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