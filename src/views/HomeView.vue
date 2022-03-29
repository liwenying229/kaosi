<template>
  <div class="home">
    <el-container>
      <el-aside style="background: rgb(50, 64, 87);width:244px;" class="aside">
        <div class="title">ElementUi管理后台</div>
        <el-menu
          background-color="rgb(50,64,87)"
          text-color="#fff"
          :router="true"
        >
          <!-- 1级菜单 -->
          <el-menu-item class="item1" index="/">
            <i class="el-icon-help"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 2级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">  <i class="el-icon-paperclip"></i> 文章列表 </el-menu-item>
              <el-menu-item index="2-2"> <i class="el-icon-paperclip"></i> 多层级路由示例 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          </el-menu>
      </el-aside>

      <el-container>
        <el-header class="header">
          <!-- 面包屑 -->
          <div>
            <i class="el-icon-menu"></i>
          </div>
          <!-- 图像下拉 -->
          <div>
            <i class="el-icon-s-grid"></i>
            <i class="el-icon-setting"></i>
            <i class="el-icon-place"></i>
            <el-dropdown>
              <p>Admin<i class="el-icon-arrow-down"></i> </p>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item> <i class="el-icon-user-solid"></i> 个人中心</el-dropdown-item>
                <el-dropdown-item> <i class="el-icon-s-release"></i> 退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <div class="nav">
            <el-breadcrumb>
              <el-breadcrumb-item
                v-for="(item, index) in this.$route.meta"
                :key="index"
                >{{ item }}</el-breadcrumb-item
              >
            </el-breadcrumb>
            </div>
          <!-- 二级路由的出口组件 -->
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.home .el-aside {
  width: 300px;
}
.aside .item1 {
  background:#000;
  height: 60px;
  color: #fff;
}

.aside .item {
  background:#000;
}
.aside>>>.item:hover {
  background:#000;
}
.el-menu-item:focus, .el-menu-item:hover{
    background: #000;
}
element {
  background: none;
}
.aside .item span {
  color: #fff;
}
img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0079d9;
  color: #fff;
}
.header i {
  color: #fff;
  font-size: 22px;
}
.header p {
  font-size:18px;
  color: #fff;
}
.title {
  width: 100%;
  height:60px;
  background:#0079d9;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-weight: 600;
}
.el-icon-s-grid,.el-icon-setting,.el-icon-place {
    padding:18px;
}
.nav {
  width:100%;
  height:40px;
  background: #fff;
  color: #343;
  line-height: 40px;
  padding-left: 12px;
}
.el-breadcrumb {
  font-size:18px;
  line-height: 40px;
}
.el-main {
  width:100%;
  height:40px;
  color: #343;
  color: #fff;
  padding: 0;
  background:#ecf0f5;
}
</style>
