<template>
    <el-row>
        <el-col :span="12">
            <el-form :model="form" ref="form" label-position="left" label-width="80px">
                <el-form-item prop="firstname" label="firstname">
                    <el-input type="text" v-model="form.firstname" auto-complete="off" placeholder="First Name"></el-input>
                </el-form-item>
                <el-form-item prop="lastname" label="lastname">
                    <el-input type="text" v-model="form.lastname" auto-complete="off" placeholder="Last Name"></el-input>
                </el-form-item>
                <el-form-item prop="username" label="username">
                    <el-input type="text" v-model="form.username" auto-complete="off" placeholder="Username"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="password">
                    <el-input type="text" v-model="form.password" auto-complete="off" placeholder="Password"></el-input>
                </el-form-item>
                <el-form-item prop="email" label="email">
                    <el-input type="email" v-model="form.email" auto-complete="off" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item width="220px">
                    <el-button type="primary" @click.native.prevent="updateForm">Update</el-button>
                    <el-button type="primary" @click="goBack">Go back</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import overallApi from "../api/overall";
export default {
  mounted() {
    this.userId = this.$route.params.id;
    if (this.userId != null) {
      //更新时需要加载的数据
      this.getUserById();
    }
  },
  data() {
    return {
      userId: null,
      form: {
        id: null,
        firstname: null,
        lastname: null,
        username: null,
        password: null,
        email: null
      }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    updateForm() {
      overallApi
        .updateUser(this.form)
        .then(res => {
          console.log("update User result", res);
          this.$message.success("Update successfully");
          this.$router.push({ path: "/analysis/manage" });
        })
        .catch(err => {
          this.$message.error("Update error");
          this.$router.push({ path: "/analysis/manage" });
          console.log("put Game", err);
        });
    },
    getUserById() {
      overallApi
        .getUserById({ id: this.userId })
        .then(res => {
          console.log("getUserById", res);
          this.form = res.data.form;
        })
        .catch(err => {
          console.log("getUserById error", error);
        });
    }
  }
};
</script>