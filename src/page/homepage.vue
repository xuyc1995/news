<template>
    <div class='main-container'>
        <div class='sidebar-container'>
            <sidebar></sidebar>
        </div>
        <div class='homepage-right-container'>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import sidebar from '../components/sidebar'
    export default{
        components:{sidebar}
    }
</script>
