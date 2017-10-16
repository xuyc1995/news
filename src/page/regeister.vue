<template>
    <div class="regeister-container">
        <div class="regeister-box">
            <input type="email" placeholder="邮箱地址" v-model="regeisterData.email">
            <input type="text" placeholder="请输入用户名" v-model="regeisterData.username">
            <input type="password" placeholder="请输入密码" v-model="regeisterData.password">
            <div>
                <p>已有账号？<a>立即登录</a></p>
                <button @click="submitRegister">注册</button>
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
    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    var qs = require("qs");
    export default{
        data(){
            return{
                regeisterData:{
                    email:"",
                    username:"",
                    password:""
                }
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
                    data: qs.stringify(Object.assign({},this.regeisterData))
                }).then(function(res){
                    console.log(res);
                });
            }
        }
    }
</script>
