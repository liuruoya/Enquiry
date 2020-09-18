<!--  -->
<template>
  <div id="purchaserAgentWeb">
    <el-container>
      <el-header class="purchaserAgentWeb-header">
        <WebsitHeaderFirst></WebsitHeaderFirst>
      </el-header>
      <el-main class="purchaserAgentWeb-main">
        <el-container>
          <el-aside id="purchaserAgentWeb-container-aside-left"></el-aside>
          <el-main class="purchaserAgentWeb-container-main">
            <el-row :gutter="20">
              <el-col :span="1" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple" id="purchaserAgentWeb-grid-content-image">
                  <div class="block">
                    <el-image :src="icon_search" id="purchaserAgentWeb-grid-image"></el-image>
                  </div>
                </div>
              </el-col>
              <el-col :span="21" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple" id="purchaserAgentWeb-grid-search">询价公告</div>
              </el-col>
              <el-col :span="2" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple" id="purchaserAgentWeb-grid-more">查看更多>></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple" id="purchaserAgentWeb-grid-divider-first">
                  <!-- <el-divider ></el-divider> -->
                </div>
              </el-col>
              <el-col :span="22" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider id="purchaserAgentWeb-grid-divider-two"></el-divider>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="purchaserAgentWeb-main-row-placeholder">
              <el-col :span="20">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <div>
            <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog0">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[0].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[0].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[0].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog0">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[0].description}}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-main-div-vertical">
                    <el-divider direction="vertical" class="purchaserAgentWeb-main-div-divider-vertical"></el-divider>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog1">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[1].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[1].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[1].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog1">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[1].description}}</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row v-show="showDivider1">
              <el-col :span="11" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="purchaserAgentWeb-main-div-divider"></el-divider>
                </div>
              </el-col>
              <el-col :span="11" :offset="2" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="purchaserAgentWeb-main-div-divider"></el-divider>
                </div>
              </el-col>
            </el-row>
            <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog2">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[2].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[2].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[2].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog2">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[2].description}}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-main-div-vertical">
                    <el-divider direction="vertical" class="purchaserAgentWeb-main-div-divider-vertical"></el-divider>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog3">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[3].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[3].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[3].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog3">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[3].description}}</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row v-show="showDivider2">
              <el-col :span="11" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="purchaserAgentWeb-main-div-divider"></el-divider>
                </div>
              </el-col>
              <el-col :span="11" :offset="2" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="purchaserAgentWeb-main-div-divider"></el-divider>
                </div>
              </el-col>
            </el-row>
            <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog4">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[4].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[4].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[4].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog4">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[4].description}}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-main-div-vertical">
                    <el-divider direction="vertical" class="purchaserAgentWeb-main-div-divider-vertical"></el-divider>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog5">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[5].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[5].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[5].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog5">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[5].description}}</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row v-show="showDivider3">
              <el-col :span="11" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="purchaserAgentWeb-main-div-divider"></el-divider>
                </div>
              </el-col>
              <el-col :span="11" :offset="2" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="purchaserAgentWeb-main-div-divider"></el-divider>
                </div>
              </el-col>
            </el-row>
            <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog6">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[6].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[6].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[6].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog6">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[6].description}}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-main-div-vertical">
                    <el-divider direction="vertical" class="purchaserAgentWeb-main-div-divider-vertical"></el-divider>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog7">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[7].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[7].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[7].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog7">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[7].description}}</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row v-show="showDivider4">
              <el-col :span="11" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="purchaserAgentWeb-main-div-divider"></el-divider>
                </div>
              </el-col>
              <el-col :span="11" :offset="2" class="purchaserAgentWeb-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="purchaserAgentWeb-main-div-divider"></el-divider>
                </div>
              </el-col>
            </el-row>
            <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog8">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[8].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[8].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[8].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog8">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[8].description}}</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-main-div-vertical">
                    <el-divider direction="vertical" class="purchaserAgentWeb-main-div-divider-vertical"></el-divider>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" class="purchaserAgentWeb-el-col" v-show="showBlog9">
                <div class="grid-content bg-purple">
                  <div class="purchaserAgentWeb-container-main-div">
                    <div class="purchaserAgentWeb-container-main-div-info">{{blogs[9].content}}</div>
                    <div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfo">发布时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[9].created}}</div>
                      <div class="purchaserAgentWeb-container-main-div-timeinfotwo">截止时间:</div>
                      <div class="purchaserAgentWeb-container-main-div-time">{{blogs[9].created}}</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :offset="1" v-show="showBlog9">
                <div class="grid-content bg-purple">
                  <div class="offerAgent">
                    <div class="offerAgentName">报价商</div>
                    <div class="offerAgentCount">{{blogs[9].description}}</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            </div>
          </el-main>
          <el-aside id="purchaserAgentWeb-container-aside-right"></el-aside>
        </el-container>
      </el-main>
      <el-footer class="purchaserAgentWeb-footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import WebsitHeaderFirst from '../components/WebsitHeaderFirst'
import Footer from '../components/Footer'
export default {
  name: 'purchaserAgentWeb',
  components: { WebsitHeaderFirst, Footer },
  data () {
    return {
      icon_search: '../../static/img/icon_search.png',
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5,
      showBlog9: true,
      showBlog8: true,
      showBlog7: true,
      showBlog6: true,
      showBlog5: true,
      showBlog4: true,
      showBlog3: true,
      showBlog2: true,
      showBlog1: true,
      showBlog0: true,
      showDivider1: true,
      showDivider2: true,
      showDivider3: true,
      showDivider4: true
    }
  },
  methods: {
    page (currentPage) {
      const _this = this
      _this.$axios.get('http://localhost:8081/blogs?currentPage=' + currentPage).then(res => {
        console.log(res)
        _this.blogs = res.data.data.records
        _this.currentPage = res.data.data.current
        _this.total = res.data.data.total
        _this.pageSize = res.data.data.size

        this.showBlog9 = this.returnShowBlog(_this.blogs[9].content)
        this.showBlog8 = this.returnShowBlog(_this.blogs[8].content)
        this.showBlog7 = this.returnShowBlog(_this.blogs[7].content)
        this.showBlog6 = this.returnShowBlog(_this.blogs[6].content)
        this.showBlog5 = this.returnShowBlog(_this.blogs[5].content)
        this.showBlog4 = this.returnShowBlog(_this.blogs[4].content)
        this.showBlog3 = this.returnShowBlog(_this.blogs[3].content)
        this.showBlog2 = this.returnShowBlog(_this.blogs[2].content)
        this.showBlog1 = this.returnShowBlog(_this.blogs[1].content)
        this.showBlog0 = this.returnShowBlog(_this.blogs[0].content)
        this.showDivider4 = this.returnShowDivider(_this.blogs[9].content, _this.blogs[8].content)
        this.showDivider3 = this.returnShowDivider(_this.blogs[7].content, _this.blogs[6].content)
        this.showDivider2 = this.returnShowDivider(_this.blogs[5].content, _this.blogs[4].content)
        this.showDivider1 = this.returnShowDivider(_this.blogs[3].content, _this.blogs[2].content)
      })
    },
    returnShowBlog (param) {
      if (param == null) {
        return false
      } else {
        return true
      }
    },
    returnShowDivider (param1, param2) {
      if (param1 == null || param2 == null) {
        return false
      } else {
        return true
      }
    }
  },
  created () {
    console.log(222)
    this.page(1)
  }
}

</script>
<style scoped>
.purchaserAgentWeb-header {
  background-image: url("../../static/img/headtop.png");
  background-repeat: no-repeat;
  color: #ffffff;
  height: 480px !important;
}

.purchaserAgentWeb-footer {
  background-color: #384248;
  text-align: center;
  height: 190px !important;
}
.purchaserAgentWeb-main {
  background-color: #f7f9fc;
  color: #333;
  text-align: center;
  height: 630px;
}
#purchaserAgentWeb-container-aside-left {
  width: 350px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
#purchaserAgentWeb-container-aside-right {
  width: 320px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
.purchaserAgentWeb-container-main {
  background-color: #ffffff;
  height: 560px !important;
  padding-top: 30px;
  padding-left: 50px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 17, 59, 0.05);
}
.purchaserAgentWeb-el-col {
  text-align: left;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
#purchaserAgentWeb-grid-image {
  width: 22px !important;
  height: 21px;
}
#purchaserAgentWeb-grid-content-image {
  padding-left: 6px;
}
#purchaserAgentWeb-grid-search {
  margin-left: -10px;
  color: #0096c3;
  font-size: 18px;
  font-weight: bold;
}
#purchaserAgentWeb-grid-more {
  font-size: 14px;
  color: #999999;
}
#purchaserAgentWeb-grid-divider-first {
  width: 100px;
  min-height: 2px;
  background-color: #0096c3;
  overflow: hidden;
}
#purchaserAgentWeb-grid-divider-two {
  height: 2px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.purchaserAgentWeb-container-main-div {
  height: 60px;
}
.purchaserAgentWeb-container-main-div-info {
  font-size: 16px;
  font-weight: 400px;
  margin-top: 15px;
}
.purchaserAgentWeb-container-main-div-time {
  display: inline-block;
  color: #83cce2;
  font-size: 12px;
  margin-top: 5px;
}
.purchaserAgentWeb-container-main-div-timeinfo {
  display: inline-block;
  font-size: 12px;
  color: #b8b8b8;
}
.purchaserAgentWeb-container-main-div-timeinfotwo {
  margin-left: 15px;
  display: inline-block;
  color: #b8b8b8;
  font-size: 12px;
}
.purchaserAgentWeb-main-div-divider {
  margin: 8px 0;
  background: 0 0;
  border-top: 1px dashed #e8eaec;
}
.purchaserAgentWeb-main-div-divider-vertical {
  height: 60px;
  background: 0 0;
  border-left: 1px dashed #e8eaec;
}
.purchaserAgentWeb-main-div-vertical {
  text-align: center;
}
.purchaserAgentWeb-main-row-placeholder {
  height: 20px;
}
#purchaserAgentWeb .offerAgent{
  width: 92px;
  height: 66px;
  background-color: #f7f9fc;
  border-radius: 4px;
  color: #0096C3;
}
#purchaserAgentWeb .offerAgentName{
  padding-top: 12px;
  font-size: 14px;
}
#purchaserAgentWeb .offerAgentCount{
  padding-top: 5px;
  font-size: 16px;
}
</style>
