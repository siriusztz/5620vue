<template>
    <el-row>
        <el-button type="primary" @click="getFacialRecognition()">Facial Recognition</el-button>
        <el-tag type="success">{{word}}</el-tag>
    </el-row>
</template>


<script>
import overallApi from "../api/overall";

export default {
  data() {
    return {
      word: null
    };
  },
  methods: {
    getFacialRecognition() {
      overallApi
        .getFacialRecognition()
        .then(res => {
          name = res.data.userName;
          if (name != "\'unknown\'") {
            this.word = "welcome home " + name;
          } else {
            this.word = "unknown user";
          }
        })
        .catch();
    }
  }
};
</script>