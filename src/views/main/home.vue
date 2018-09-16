<template>
    <div id="home">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item,i) in banner" :key="i">
                <img :src="item.image" width="100%" height="260px">
            </van-swipe-item>
        </van-swipe>
        <div v-for="(item,i) in actData" :key="i">
            <div style="background-color: #8a8a8a;text-align: center;padding: 12px;margin:4px 0">{{item.module.name}}</div>
            <van-row gutter="20">
                <van-col span="12" v-for="(g,k) in item.goods" :key="k" @click="goDetail(g.id)">
                    <img :src="g.goodsImage" height="220" width="100%"/>
                    <div>{{g.goodsName}}</div>
                    <van-button type="primary" size="small" @click="goDetail(2)">查看</van-button>
                </van-col>
            </van-row>
        </div>

    </div>
</template>

<script>
    import {getModuleGoods,getBanner} from "../../axios/api";

    export default {
        data() {
            return {
                banner: [],
                actData: []
            }
        },
        created(){
            getBanner().then(res=>{
                this.banner=res.data.data
            })
            getModuleGoods().then(res=>{
                this.actData=res.data.data
            })
        },
        methods:{
            goDetail:function (id) {
                this.$router.push({path:'/goodsDetail',query:{id:id}})
            }
        }
    }
</script>

<style scoped lang="less">
    .van-col {
        height: 300px;
    }
</style>