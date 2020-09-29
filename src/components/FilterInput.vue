<template>
  <div id="filter-input">
    <el-input v-model="inputFilter" placeholder="请输入关键字" clearable
              @keyup.enter.native="doFilter" id="el-input-filter">
      <el-button slot="append" type="primary" @click="doFilter" size="mini">搜索</el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'FilterInput',
  components: {},
  data () {
    return {
      inputFilter: ''
    }
  },
  methods: {
    doFilter () {
      this.$emit('filter', this.inputFilter)
    }
  }
}
</script>

<style rel="stylesheet/scss">
  #filter-input .el-input__inner {
    width: 208px;
    height: 35px;
    background: #ffffff;
    border: 1px solid #dfe1e6;
    border-radius: 8px 0 0 8px;
  }

  #filter-input .el-input-group__append {
    width: 62px;
    margin: 0;
    height: 33px;
    background: #0096c3;
    border-radius: 0px 8px 8px 0px;
  }
</style>

<style scoped>
  #filter-input .el-input-group__append .el-button {
    font-size: 16px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    letter-spacing: 3px;
  }

  #filter-input {
    width: 274px;
    height: 35px;
  }
</style>
