<template>
    <el-row>
        <el-table border :data="userList" style="width: 80%" stripe>
            <el-table-column prop="firstname" label="firstname">
            </el-table-column>
            <el-table-column prop="lastname" label="lastname">
            </el-table-column>
            <el-table-column prop="username" label="username">
            </el-table-column>
            <el-table-column prop="email" label="email">
            </el-table-column>
            <el-table-column label="操作" width="220px">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" @click="handleEdit(scope.row._id)">Update</el-button>
                    <el-button size="small" type="primary" icon="search" @click="handleDelete(scope.row._id)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-col :span="24" class="toolbar" style="width: 80%">
            <el-pagination layout="total, prev, pager, next" @current-change="handleCurrentChange" :page-size="this.pager.pageSize" :total="this.pager.tableListTotal" style="float:right;">
            </el-pagination>
        </el-col>
    </el-row>
</template>


<script>
import overallApi from "../api/overall";

export default {
  mounted() {
    this.getUserList();
  },
  data() {
    return {
      userList: [],
      queryForm: {
        page: null,
        pageSize: null
      },
      pager: {
        tableListTotal: 0,
        pageSize: 2,
        currentPage: 1
      }
    };
  },
  methods: {
    getUserList() {
      console.log(this.queryForm);
      overallApi
        .getUserlist(this.queryForm)
        .then(res => {
          console.log("getUserList response", res);
          this.userList = res.data.list;
          this.pager.tableListTotal = res.data.total;
        })
        .catch();
    },
    handleEdit(id) {
      this.$router.push({
        path: "/analysis/edit/" + id
      });
    },
    handleDelete(userId) {
      overallApi
        .deleteOne({ id: userId })
        .then(res => {
          this.$message.success("Delete successfully");
          this.$router.push({ path: "/analysis/manage" });
        })
        .catch(err => {
          this.$message.error("Delete error");
          this.$router.push({ path: "/analysis/manage" });
          console.log("Delete Game", err);
        });
    },
    handleCurrentChange(val) {
      this.pager.currentPage = val;
      this.queryForm.page = this.pager.currentPage;
      this.queryForm.pageSize = this.pager.pageSize;
      this.getUserList();
    }
  }
};
</script>