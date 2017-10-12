<template>
    <div class='container'>
        <div class='main-header'>
            <router-link to='/regeister'>注册</router-link>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <a href="javascript:;" @click="showLogin">登录</a>
        </div>
        <div class='main-container'>
            <div class='sidebar-container'>
                <sidebar></sidebar>
            </div>
            <div class='homepage-right-container' ref="right">
                <newslist></newslist>
            </div>
        </div>
        <loginmodal v-if="showLoginmodal"  v-on:quiteLoginmodal='quite'></loginmodal>
    </div>
</template>
<script>
    import loginmodal from '../components/loginmodal'
    import sidebar from '../components/sidebar'
    import newslist from '../components/newslist'
    export default{
        components:{sidebar,newslist,loginmodal},
        data(){
            return {
                showLoginmodal:false,
                scroll:""
            }
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll)
        },
        methods:{
            quite:function(){
                this.showLoginmodal=false
            },
            //显示登录窗口
            showLogin:function(){
                this.showLoginmodal=true
            },
            handleScroll:function(){
                // this.scroll=document.body.scrollTop
                // console.log(this.scroll)
                console.log(this.$refs.right.scrollTop)
            }
        }
    }
</script>
