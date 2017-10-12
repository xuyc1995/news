<template>
    <div class="login-container" >
        <div class="login-mask" @click="quiteLogin"></div>
        <div class="login-box">
            <div class="title">用户登录</div>
            <input type="email" placeholder="请输入邮箱地址" v-model="loginData.email">
            <input type="password" placeholder="请输入密码" v-model="loginData.password">
            <button>登录</button>
        </div> 
    </div>
</template>
<script>
    export default{
        data(){
            return{
                loginData:{
                    email:"",
                    password:""
                }
            }
        },
        methods:{
            quiteLogin:function(){
                this.$emit('quiteLoginmodal')
                // console.log("quitelogin"+'======'+this.loginData.password+'========'+this.loginData.email)
            }
        }
    }
</script>
