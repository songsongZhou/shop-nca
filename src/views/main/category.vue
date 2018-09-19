<template>
    <div id="category">
        <ul class="nav-left van-hairline--right">
            <li class="van-hairline--bottom" v-for="(item,i) in category" :key="i" @click="getGoods(item.id,1)">{{item.name}}</li>
        </ul>

        <van-row style="flex: 1;">
            <div v-if="goods.length==0">没有商品</div>
            <div v-else>
                <van-col span="12" v-for="(item,i) in goods" :key="i" @click="goGoodsDetail(item.id)">
                    <div><img :src="item.goodsImage" width="100%"></div>
                    <div>{{item.goodsName}}</div>
                </van-col>
            </div>
        </van-row>

    </div>
</template>

<script>
    import {getCategorys, getGoodsByCId} from "../../axios/api";

    export default {
        data() {
            return {
                category: [],
                goods: []
            }
        },
        created() {
            this.getCategory()
        },
        methods: {
            getCategory: function () {
                getCategorys().then(res => {
                    this.category = res.data.data
                    this.getGoods(this.category[0].id, 1)
                })
            },
            getGoods: function (cId, current) {
                getGoodsByCId(cId, current).then(res => {
                    this.goods = res.data.records
                })
            },
            goGoodsDetail: function (gId) {
                this.$router.push({path: '/goodsDetail', query: {gId: gId}})
            }
        }
    }
</script>

<style scoped lang="less">
    #category {
        display: flex;
        & .nav-left {
            width: 100px;
            margin-right:4px;
            li{
                background-color: white;
                padding: 10px;
            }
          }

    }

</style>