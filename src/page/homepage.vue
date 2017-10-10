<template>
    <div class='mainContainer'>
        <sidebar></sidebar>
        <router-view></router-view>
    </div>
</template>
<script>
    import sidebar from '../components/sidebar'
    export default{
        components:{sidebar}
    }
</script>
