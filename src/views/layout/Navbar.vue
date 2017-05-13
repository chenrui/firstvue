<template>
    <el-menu theme="light" class="navbar" mode="horizontal">
        <el-dropdown class="avatar-container" trigger="click">
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<style rel="stylesheet/scss" lang="scss">
    .navbar {
        height: 100%;
        width:100%;
        .avatar-container {
            height: 100%;
            float: right;
            right: 20px;
        }
    }
</style>