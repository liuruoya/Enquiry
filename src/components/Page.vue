<!--分页插件-->
<template>
  <div id="pagination">
    <div class="block">
      <nav style="text-align: center"><!--居中放置-->
        <el-pagination
          ref="pagination"
          background
          layout="slot,prev"
          :pager-count="pager.pagerCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pager.page"
          :page-size="pager.limit"
          :total="pager.total"
          style="display: inline-block;padding-left: 0;"
        >
          <el-button :disabled="pager.page===1" class="first-pager" @click="jumpFirstPage">首页</el-button>
        </el-pagination>
        <el-pagination
          ref="pagination"
          background
          layout="pager,next,slot,jumper"
          :pager-count="pager.pagerCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pager.page"
          :page-size="pager.limit"
          :total="pager.total"
          style="display: inline-block;padding-left: 0;"
        >
          <el-button :disabled="pager.page===pageSize" class="last-pager" @click="jumpLastPage">末页</el-button>
        </el-pagination>
      </nav>
    </div>
    <!--<div class="block">
      <nav style="text-align: center">
        <el-row :gutter="20">
          <el-col :span="3"></el-col>
          <el-col :span="15">
            <el-button type="button" @click="jumpFirstPage" size="mini">首页</el-button>
            <el-pagination
              ref="pagination"
              background
              layout="prev, pager, next"
              :pager-count="pager.pagerCount"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pager.page"
              :page-sizes="pager.limit"
              :total="pager.total"
              style="display: inline-block;padding-left: 0;"
            >
            </el-pagination>
            <el-button type="button" @click="jumpLastPage" size="mini">末页</el-button>
          </el-col>
          <el-col :span="6">
            <el-col :span="8"><span>跳至</span></el-col>
            <el-col :span="8">
              <el-input class="pageInput" v-model="pager.input" size="mini"
                        @keyup.enter.native="handleCurrentChange(pager.input)"></el-input>
            </el-col>
            <el-col :span="8"><span>页</span></el-col>
          </el-col>
        </el-row>
      </nav>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'Page',
  components: {},
  data () {
    return {
      pager: {
        total: this.total,
        page: this.page,
        limit: this.limit,
        pagerCount: this.pagerCount,
        input: 0
      }
    }
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    pagerCount: {
      type: Number,
      default: 4
    }
  },
  computed: {
    pageSize () {
      var size = Math.ceil(this.pager.total / this.pager.limit)
      console.log(`总页数：` + size)
      return size
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pager.limit = val
      this.$emit('changeLimit', val)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pager.page = val
      this.$emit('changePage', val)
    },
    jumpFirstPage () {
      this.$refs.pagination.handleCurrentChange(1)
    },
    jumpLastPage () {
      let page = this.pageSize
      this.$refs.pagination.handleCurrentChange(page)
    }
  }
}
</script>
<style rel="stylesheet/scss">
  #pagination .el-input__inner{
    /*height: 40px;*/
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 4px;
  }
</style>
<style scoped>

</style>
