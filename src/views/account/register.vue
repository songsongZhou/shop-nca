<template>
    <div>
        <van-cell-group>
            <van-field
                    v-model="username"
                    required
                    clearable
                    type="tel"
                    label="用户名"
                    icon="question"
                    maxlength="11"
                    placeholder="请输入手机号"
                    @click-icon="$toast('将常用手机号作为登录名')"
            />

            <van-field
                    v-model="nickname"
                    required
                    clearable
                    type="tel"
                    label="昵称"
                    icon="question"
                    placeholder="昵称"
            />
            <van-field
                    v-model="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
            />
            <van-field
                    v-model="rePassword"
                    label="确认密码"
                    placeholder="请输入密码"
                    required
            />

        </van-cell-group>

        <div class="content-padded">
            <van-button size="large" type="danger" @click="doRegister()">注册并绑定此账号</van-button>
        </div>

        <div class="to-login"><router-link to="/login">我已有账号，去登录</router-link></div>
    </div>
</template>

<script>
    import {register} from "../../axios/api";

    export default {
        data(){
            return{
                username:'',
                password:'',
                rePassword:'',
                nickname:''
            }
        },
        methods:{
            doRegister:function () {
                if(this.password!=this.rePassword){
                    Toast("两次密码输入不一致")
                    return false
                }
                register(this.username,this.password,this.nickname).then(res=>{
                    console.log(res)

                })
            }
        }
    }
</script>

<style scoped>
    .content-padded{
        padding: 12px;
    }

    .to-login{
        text-align: center;
        margin-top: 30px;
    }
    a{
        font-size: 12px;
        color: #8a8a8a;
    }
</style>
