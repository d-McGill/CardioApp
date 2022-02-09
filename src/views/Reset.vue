<template>
  <el-row class="marginTB">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <h1>Reset Password</h1>
      <el-form ref="resetPass" class="marginTB">
        <el-form-item>
          <label>Enter email address</label>
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(resetPass)"
            >Reset Password</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",

  setup() {
    const form = reactive({
      email: ""
    });
    return { form };
  },
};
</script>
