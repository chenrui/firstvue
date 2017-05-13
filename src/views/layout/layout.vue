<template>
    <div class="app-container">
        <Navbar class="nav-wraper"/>
        <Siderbar class="sider-wraper"/>
        <div class="main-container">
            dddddddddd
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';
    import Siderbar from './Siderbar.vue'

    export default {
        name: 'layout',

        components: {
            Navbar,
            Siderbar,
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .app-container {
        .nav-wraper {
            height: 50px;
            line-height: 50px;
            width: 100%;
            position: fixed;
        }

        .sider-wraper {
            width: 180px;
            position: fixed;
        }

        .main-container {
            padding: 50px 0 0 180px;
        }
    }
</style>