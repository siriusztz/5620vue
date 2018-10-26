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
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" @click="handleAddOrEdit(scope.row.id)">delete</el-button>
                    <!-- <el-button size="small" type="primary" icon="search" @click="handleViewOdds(scope.row.id)"></el-button> -->
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
        pageSize: 10,
        currentPage: 1
      }
    };
  },
  methods: {
    getUserList() {
      overallApi
        .getUserlist(this.queryForm)
        .then(res => {
          console.log("getUserList response", res);
          this.userList = res.data.list;
          this.pager.tableListTotal = res.data.total;
        })
        .catch();
    },
    handleCurrentChange(val) {
      this.pager.currentPage = val;
      this.queryForm.page = this.pager.currentPage;
      this.queryForm.pagesize = this.pager.pageSize;
      this.getUserList();
    }
  }
};
</script>