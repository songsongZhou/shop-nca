<template>
    <div class="login">
        <van-cell-group>
            <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    icon="question"
                    placeholder="请输入用户名"
                    @click-icon="$toast('question')"/>

            <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    clearable
                    placeholder="请输入密码"
                    required/>
        </van-cell-group>
        <div class="content-padded">
            <van-button size="large" type="danger" @click="doLogin()">登录</van-button>
        </div>
        <div class="content-padded">
            <van-button size="large" type="primary">微信信任登录</van-button>
        </div>
        <div class="content-padded">
            <!-- 两端对齐 -->
            <van-row type="flex" justify="space-between">
                <van-col span="6"><router-link to="/register">免费注册</router-link></van-col>
                <van-col span="6">忘记密码</van-col>
            </van-row>
        </div>

    </div>
</template>

<script>
    import {login} from "../../axios/api";

    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods:{
            doLogin(){
                login(this.username,this.password).then(res=>{
                    console.log(res)
                    if(res.data.code==1){
                        this.$route.push("/index")
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login{
        padding-top: 30px;
    }
    .content-padded{
        padding: 12px;
    }
    .van-col{
        text-align: center;
        font-size: 12px;
    }
</style>