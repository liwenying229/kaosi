<template>
  <div>
    <div class="header">
      <div class="button">编辑添加，字段各种规则验证示列</div>
      <div class="button">本地导出表格</div>
    </div>
    <div>
    <el-table :data="arrs">
      <el-table-column prop="name" label="文章标题"> </el-table-column>
      <el-table-column prop="text" label="作品"> </el-table-column>
      <el-table-column prop="browse" label="浏览器"> </el-table-column>
      <el-table-column prop="reply" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    
  </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "HomeWenz",
  data() {
    return {
      arrs: null,
      formLabelWidth: "120px",
    };
  },
  methods: {
    // 数据显示页面
    async getHomeIndex() {
      let { data } = await axios.get("/home");
      console.log(data);
    //   this.arrs = data;
    },
  created() {
    this.getHomeIndex();
  },
}
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 100px;
  display: flex;
}
.header .button {
    background: #0086f1;
    height:30px;
    padding: 0 6px;
    line-height: 30px;
    margin-left: 20px;
}
</style>