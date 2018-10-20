<template>
  <el-row>
    <el-row>
      <div class="title">
        <h3>Welcome WikiLatic</h3>
      </div>
    </el-row>
    <el-row>
      <el-col :span="16" style="margin-left:30px; margin-right:30px">
        <el-collapse accordion>
          <el-collapse-item title="Overall Analytics" name="1">
            <div>•Titles of the three articles with highest number of revisions. This is the default behavior.
              <br> •Titles of the three articles with lowest number of revisions. This is the default behavior.
              <br> •The article edited by largest group of registered users.
              <br> •The article edited by smallest group of registered users.
              <br> •The top 3 articles with the longest history
              <br> •Articlewiththeshortesthistory
            </div>
          </el-collapse-item>
          <el-collapse-item title=" Individual Article Analytics" name="2">
            <div>
              • Thetitle
              <br> • Thetotalnumberofrevisions
              <br> • The top 5 regular users ranked by total revision numbers on this article, and the respective revision numbers.
              <br>• A bar chart of revision number distributed by year and by user type for this article. • A pie chart of revision number distribution based on user type for this article.
              <br>• Abarchartofrevisionnumberdistributedbyyearmadebyoneorafewofthetop
            </div>
          </el-collapse-item>
        </el-collapse>
        <br>
      </el-col>
      <el-col :span="6">
        <el-form :model="form" ref="form" :rules="rules" label-position="left" label-width="6em">
          <el-form-item prop="username" label="username">
            <el-input type="text" v-model="form.username" auto-complete="off" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="password">
            <el-input type="password" v-model="form.password" auto-complete="off" placeholder="Password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.native.prevent="loginSubmit">Sign in</el-button>
            <el-button type="primary" @click.native.prevent="gotoSignup">Sign up</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import overallApi from "../api/overall";

export default {
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      rules: {
        username: [
          { required: true, message: "please input username", trigger: "blur" }
        ],
        password: [
          { required: true, message: "please input password", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            tyep: "email",
            message: "please input email",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    loginSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          overallApi
            .loginUser(this.form)
            .then(res => {
              console.log(res.data.session);
              //登陆成功后设置sessionStorage
              sessionStorage.setItem("userinfo", res.data.session);
              this.$router.push({ path: "/" });
            })
            .catch(err => {
              this.$message.error("username or password not correct");
              console.log(err);
            });
        } else {
          return;
        }
      });
    },
    gotoSignup() {
      this.$router.push({ path: "/signup" });
    }
  }
};
</script>

<style>
/* * {
  font-size: 13px;
} */

.title {
  background-color: darkcyan;
  height: 50px;
  font-size: 15px;
  color: aliceblue;
  text-align: center;
  line-height: 50px;
}

.example {
  height: 250px;
  width: 600px;
}
</style>