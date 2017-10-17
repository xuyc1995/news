<template>
    <div class="regeister-container">
        <div class="regeister-box" v-if="!login">
            <input type="email" placeholder="邮箱地址" v-model="regeisterData.email">
            <input type="text" placeholder="请输入用户名" v-model="regeisterData.username">
            <input type="password" placeholder="请输入密码" v-model="regeisterData.password">
            <div>
                <p>已有账号？<a @click="LoginOrSignin">立即登录</a></p>
                <button @click="submitRegister">注册</button>
            </div>
        </div>
        <div class="regeister-box" v-if="login">
            <input type="text" placeholder="请输入用户名或者邮箱地址" v-model="regeisterData.username">
            <input type="password" placeholder="请输入密码" v-model="regeisterData.password">
            <div>
                <p>没有账号？<a @click="LoginOrSignin">立即注册</a></p>
                <button @click="submitLogin">登陆</button>
            </div>
        </div>
    </div>
</template>
<style>
.regeister-container{
    background: url('../assets/banner.jpg');
    background-size: cover
}
</style>
<script>
    import axios from 'axios'   
    // axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    var qs = require("qs");
    export default{
        data(){
            return{
                regeisterData:{
                    email:"",
                    username:"",
                    password:""
                },
                login:true,
            }
        },
        created(){

        },
        mounted(){
            
        },
        methods:{
            submitRegister:function(){
                console.log(Object.assign({},this.regeisterData));
                axios({
                    method: 'post',
                    url: 'http://47.52.63.159:8080/toutiao/register',
                    data: qs.stringify(Object.assign({},this.regeisterData)),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                }).then(function(res){
                    console.log(res);
                });
            },
            LoginOrSignin(){
                this.login = ! this.login
            },
            submitLogin(){
                let url=''
                let data={}
                if(this.regeisterData.username.indexOf('@')!=-1){
                    url='/email'
                    data.email = this.regeisterData.email
                    data.password = this.regeisterData.password
                }else{
                    url='/name'
                    data.username = this.regeisterData.username
                    data.password = this.regeisterData.password
                }
                axios({
                    method: 'post',
                    url: 'http://47.52.63.159:8080/toutiao/login'+url,
                    data: qs.stringify(Object.assign({},data)),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                }).then(function(res){
                    console.log(res);
                });
                
            }
        }
    }
</script>
