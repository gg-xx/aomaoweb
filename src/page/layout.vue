<template>
<el-container>
    <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">工作台</el-menu-item>
        </el-menu>
    </el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu
          default-active="this.$route.path"
          router="true" 
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category" >商品类别管理</el-menu-item>
              <el-menu-item index="/product">商品信息管理</el-menu-item>
              <el-menu-item index="/order">商品订单管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/admin">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="el-icon-document"></i>
            <span slot="title">主页</span>
          </el-menu-item>
        </el-menu>

    </el-aside>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
}
</script>

<style>
    .el-container{
      position: absolute;
      width: 100%;
         top: 0px ;
         left: 0 ;
         bottom: 0;
    }
    .el-header{
      padding: 0;
      z-index: 1000;
    }

    /**header菜单需要靠右的添加.fr即可(如：<el-menu-item class="fr" index="3">消息中心</el-menu-item>)*/

    .el-header .fr{
      float: right;
    }
    .el-header .el-menu{
      border-bottom: none;
    }
    .el-aside, .el-main{
      padding-top: 80px;
    }
    .el-aside{
      background: #545c64;
    }
    .el-aside .el-menu{
      border-right: none;
    }
</style>