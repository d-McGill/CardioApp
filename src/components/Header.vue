<template>
<el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect">
        <el-menu-item index="1"><router-link to="/">CardioApp</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/login">Login</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/register">Register</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/dashboard">Dashboard</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/help">Help</router-link></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>
<style>
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none !important;
    margin: 0px !important;
    font-size: 12pt;
    font-weight: 800;
}
</style>
