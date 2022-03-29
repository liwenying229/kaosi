<template>
  <div class="login">
    <h3>Login Form</h3>
    <div class="myform">
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"> </el-input>
        </el-form-item>

        <el-form-item prop="pass">
          <el-input placeholder="密码" v-model="formdata.pass"> </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="" class="btn" @click="submitfn"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="text">
      username:admin &nbsp;&nbsp;&nbsp;&nbsp;password:123456
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "LoginView",
  data() {
    let userfn = function (rules, value, callback) {
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) {
        return;
      } else {
        return callback(new Error("用户格式不对"));
      }
    };

    let passfn = function (rules, value, callback) {
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) {
        return;
      } else {
        return callback(new Error("密码格式不对"));
      }
    };
    return {
      formdata: {
        user: "",
        pass: "",
      },
      rules: {
        user: [
          {
            validator: userfn,
            trigger: "blur",
          },
        ],
        pass: [
          {
            validator:passfn,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
      submitfn(){
          this.getLogin()
      },
     async getLogin(){
          let user=this.formdata.user;
          let pass=this.formdata.pass;
          let {data}=await axios.post("/api/login",{user,pass})
          console.log(data);

          if(data.message=="fail"){
              return this.$message.error("登录失败");
          }
          if(data.message=="success"){
            localStorage.setItem("token",data.data.token)
            this.$message({
                type:"success",
                message:"登录成功",
                duration:2000,
                onClose:()=>{
                    this.$router.push({name:"home"})
                }
            })
          }
      }
  },
};
</script>
<style scoped>
.login {
  background: #324057;
  width: 100vw;
  height: 100vh;
  padding-top: 70px;
}
.login h3 {
  color: #fff;
  font-size: 28px;
  text-align: center;
}
.login .title {
  width: 370px;
  position: absolute;
  left: 50%;
  margin-left: -185px;
  top: 60px;
  text-align: center;
}
.login .title h3 {
  color: #fff;
}
.login .myform {
  width: 370px;
  height: 182px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 30px;
}
.login .btn {
  width: 100%;
}
.login .tip {
  font-size: 12px;
  color: red;
  text-align: center;
}
.myform >>> .el-input__inner {
  background: #283443;
  width: 370px;
  height: 50px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
}
.text {
  color: #fff;
  text-align: center;
}
</style>
