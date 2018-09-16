<template>
    <div id="index">
        <router-view/>
        <van-tabbar v-model="active" fixed>
            <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="like-o" to="category">分类</van-tabbar-item>
            <van-tabbar-item icon="cart" dot to="cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" to="mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style scoped>

</style>