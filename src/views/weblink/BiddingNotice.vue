<!--中标公告-->
<template>
  <PageModel :icon-src="icon_bidding" title-name="中标通知" footer="true">
    <FilterInput slot="head-right" @filter="doFilter"></FilterInput>
    <el-container id="el-container">
      <el-main id="el-main">
        <el-row id="item-normal" v-for="item in biddingList" :key="item.id">
          <el-row class="item-name">
            <el-link href="#" target="_blank" class="link">
              {{ item.name }}
            </el-link>
          </el-row>
          <el-row class="item-date">
            <p>发布日期：<span class="date">{{ item.date }}</span></p>
          </el-row>
        </el-row>
      </el-main>
    </el-container>
    <el-row slot="footer">
      <Page :total="pager.total" :limit="pager.limit" @changePage="getPage"></Page>
    </el-row>
  </PageModel>
</template>

<script>
import PageModel from '@/components/PagesModel'
import FilterInput from '@/components/FilterInput'
import Page from '@/components/Page'
// 测试用数据
import biddingList from '@/../static/data/biddingList'

export default {
  name: 'BiddingNotice',
  components: { PageModel, FilterInput, Page },
  data () {
    return {
      icon_bidding: '@/../static/img/icon_bidding.png',
      inputFilter: '',
      biddingList: [],
      pager: {
        total: 0,
        page: 1,
        limit: 10
      }
    }
  },
  methods: {
    doFilter (input) {
      this.pager.page = 1
      this.inputFilter = input
      this.getData(this.inputFilter, 1, this.pager.limit)
      alert(input)
    },
    getPage (page) {
      this.pager.page = page
      this.getData(this.inputFilter, page, this.pager.limit)
    },
    getData (filter, page, limit) {
      this.biddingList = biddingList.data
      this.pager.total = biddingList.count
      console.log(this.tableData)
    }
  },
  created () {
    this.getData(this.inputFilter, this.pager.page, this.pager.limit)
  }
}
</script>

<style scoped>
  #item-normal {
    border: 1px;
    border-bottom: 1px dashed #dedede;
    overflow: hidden;
    height: 100px;
  }

  #item-normal .item-name {
    margin-top: 30px;
    height: 21px;
    font-size: 16px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 24px;
  }

  #item-normal .item-date {
    height: 16px;
    font-size: 12px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #999999;
    line-height: 24px;
  }

  #item-normal .item-date p{
    margin: 8px 0;
  }

  #item-normal .item-date .date{
    color: #0096c3;
  }

  #el-container .el-main {
    padding: 0;
  }
</style>
