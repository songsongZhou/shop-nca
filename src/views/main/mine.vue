<template>
    <div>

    </div>
</template>

<script>
    import {shareSignature} from "../../axios/api";
    import wx from 'weixin-js-sdk'
    export default {
        data() {
            return {}
        },
        mounted() {
            let url = location.href.split('#')[0] //获取锚点之前的链接
            shareSignature(url).then(res => {
                console.log(res.data.data)
                this.wxInit(res.data.data)
            })

        },
        methods: {
            // 微信分享
            wxInit(res) {
                let url = location.href.split('#')[0] //获取锚点之前的链接
                let links = url + '#/mine/';
                let title = '乐宜家分享';
                let desc = '了解更多知识，请关注“嘌呤查”公众号';
                let imgUrl = 'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg';
                wx.config({
                    debug: false,
                    appId: res.appId,
                    timestamp: res.timestamp,
                    nonceStr: res.nonceStr,
                    signature: res.signature,
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
                });
                wx.ready(function () {
                    wx.onMenuShareTimeline({
                        title: title, // 分享标题
                        desc: desc, // 分享描述
                        link: links, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            alert("分享到朋友圈成功")
                            Toast({
                                message: "成功分享到朋友圈"
                            });
                        },
                        cancel: function () {
                            alert("分享失败,您取消了分享!")
                            Toast({
                                message: "分享失败,您取消了分享!"
                            });
                        }
                    });
                    //微信分享菜单测试
                    wx.onMenuShareAppMessage({
                        title: title, // 分享标题
                        desc: desc, // 分享描述
                        link: links, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            // alert("成功分享给朋友")
                            Toast({
                                message: "成功分享给朋友"
                            });
                        },
                        cancel: function () {
                            alert("分享失败,您取消了分享!")
                            Toast({
                                message: "分享失败,您取消了分享!"
                            });
                        }
                    });
                    wx.onMenuShareQQ({
                        title: title, // 分享标题
                        desc: desc, // 分享描述
                        link: links, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            // alert("成功分享给QQ")
                            Toast({
                                message: "成功分享到QQ"
                            });
                        },
                        cancel: function () {
                            alert("分享失败,您取消了分享!")
                            Toast({
                                message: "分享失败,您取消了分享!"
                            });
                        }
                    });
                    wx.onMenuShareWeibo({
                        title: title, // 分享标题
                        desc: desc, // 分享描述
                        link: links, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            // alert("成功分享给朋友")
                            Toast({
                                message: "成功分享到腾讯微博"
                            });
                        },
                        cancel: function () {
                            alert("分享失败,您取消了分享!")
                            Toast({
                                message: "分享失败,您取消了分享!"
                            });
                        }
                    });
                    wx.onMenuShareQZone({
                        title: title, // 分享标题
                        desc: desc, // 分享描述
                        link: links, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            alert("成功分享给朋友")
                            Toast({
                                message: "成功分享到QQ空间"
                            });
                        },
                        cancel: function () {
                            alert("分享失败,您取消了分享!")
                            Toast({
                                message: "分享失败,您取消了分享!"
                            });
                        }
                    });

                });
                wx.error(function (err) {
                    alert(JSON.stringify(err))
                });
            }
        }
    }
</script>

<style scoped>

</style>