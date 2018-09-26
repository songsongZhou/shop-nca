<template>
    <div class="goods">
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb" >
            </van-swipe-item>
        </van-swipe>
        <img :src="goods.goodsImage" width="100%" height="360">
        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{goods.goodsName }}</div>
                <div class="goods-sub-title">{{ goods.goodsSubName }}</div>
                <div class="goods-price">{{goods.price}}</div>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
            <div>
                <van-button size="small" v-for="(item,i) in sku" :key="i" style="margin: 4px">{{item.skuName}}</van-button>
            </div>
        </van-cell-group>

        <van-goods-action>
            <van-goods-action-mini-btn icon="like-o" @click="sorry">
                收藏
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="cart" @click="onClickCart">
                购物车
            </van-goods-action-mini-btn>
            <van-goods-action-big-btn @click="show=true">
                加入购物车
            </van-goods-action-big-btn>
            <van-goods-action-big-btn primary @click="sorry">
                立即购买
            </van-goods-action-big-btn>
        </van-goods-action>
    </div>
</template>

<script>
    import {getGoodsDetail} from "../axios/api";

    export default {
        data() {
            return {
                show:false,
                goods: {},
                sku:[]
            };
        },
        created(){
            getGoodsDetail(this.$route.query.id).then(res=>{
                this.goods=res.data.data.goods
                this.sku=res.data.data.goodsSku
                console.log(res)
            })
        },
        methods: {
            onClickCart(){

            },
            sorry() {
                Toast('暂无后续逻辑~');
            }
        }
    };
</script>

<style lang="less">
    .goods {
        padding-bottom: 50px;
    &-swipe {
    img {
        width: 7.5rem;
        height: 7.5rem;
        display: block;
    }
    }
    &-title {
         font-size: 16px;
     }
    &-price {
         color: #f44;
     }
    &-express {
         color: #999;
         font-size: 12px;
         padding: 5px 15px;
     }
    &-cell-group {
         margin: 15px 0;
    .van-cell__value {
        color: #999;
    }
    }
    &-tag {
         margin-left: 5px;
     }
    }
</style>