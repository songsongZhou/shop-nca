<template>
    <div>
        <van-cell-group>
            <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    icon="question"
                    placeholder="请输入用户名"
                    @click-icon="$toast('question')"
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
            <van-button size="large" type="danger">注册并绑定此账号</van-button>
        </div>

        <div class="to-login"><router-link to="/login">我已有账号，去登录</router-link></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:'',
                password:'',
                rePassword:''
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
