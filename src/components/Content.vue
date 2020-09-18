<!--  -->
<template>
  <div class="content" id="c-content">
    <el-container>
  <el-aside id="content-container-aside-left"></el-aside>
  <el-main class="content-container-main">
    <el-row :gutter="20" >
      <el-col :span="1" class="content-el-col">
        <div class="grid-content bg-purple" id="content-grid-content-image">
          <div class="block">
            <el-image :src="icon_search" id="content-grid-image" ></el-image>
          </div>
        </div>
      </el-col>
      <el-col :span="21" class="content-el-col">
        <div class="grid-content bg-purple" id="content-grid-search">询价公告</div>
      </el-col>
      <el-col :span="2" class="content-el-col">
        <div class="grid-content bg-purple" id="content-grid-more">查看更多>></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" class="content-el-col">
        <div class="grid-content bg-purple-dark" id="content-grid-divider-first">
          <!-- <el-divider ></el-divider> -->
        </div>
      </el-col>
      <el-col :span="22" class="content-el-col">
        <div class="grid-content bg-purple-dark">
          <el-divider id="content-grid-divider-two"></el-divider>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="content-main-row-placeholder">
  <el-col :span="20"><div class="grid-content bg-purple"></div></el-col>
</el-row>
    <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
      <el-col :span="11" class="content-el-col" v-show="showBlog0">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[0].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[0].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[0].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <div class="content-main-div-vertical">
          <el-divider direction="vertical" class="content-main-div-divider-vertical"></el-divider>
        </div>
        </div>
      </el-col>
      <el-col :span="11" class="content-el-col" v-show="showBlog1">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[1].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[1].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[1].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row v-show="showDivider1">
              <el-col :span="11" class="content-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="content-main-div-divider"></el-divider>
                </div>
              </el-col>
              <el-col :span="11" :offset="2" class="content-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="content-main-div-divider"></el-divider>
                </div>
              </el-col>
            </el-row>
    <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
      <el-col :span="11" class="content-el-col" v-show="showBlog2">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[2].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[2].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[2].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <div class="content-main-div-vertical">
          <el-divider direction="vertical" class="content-main-div-divider-vertical"></el-divider>
        </div>
        </div>
      </el-col>
      <el-col :span="11" class="content-el-col" v-show="showBlog3">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[3].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[3].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[3].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row v-show="showDivider2">
              <el-col :span="11" class="content-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="content-main-div-divider"></el-divider>
                </div>
              </el-col>
              <el-col :span="11" :offset="2" class="content-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="content-main-div-divider"></el-divider>
                </div>
              </el-col>
            </el-row>
    <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
      <el-col :span="11" class="content-el-col" v-show="showBlog4">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[4].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[4].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[4].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <div class="content-main-div-vertical">
          <el-divider direction="vertical" class="content-main-div-divider-vertical"></el-divider>
        </div>
        </div>
      </el-col>
      <el-col :span="11" class="content-el-col" v-show="showBlog5">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[5].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[5].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[5].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row v-show="showDivider3">
              <el-col :span="11" class="content-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="content-main-div-divider"></el-divider>
                </div>
              </el-col>
              <el-col :span="11" :offset="2" class="content-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="content-main-div-divider"></el-divider>
                </div>
              </el-col>
            </el-row>
    <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
      <el-col :span="11" class="content-el-col" v-show="showBlog6">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[6].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[6].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[6].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <div class="content-main-div-vertical">
          <el-divider direction="vertical" class="content-main-div-divider-vertical"></el-divider>
        </div>
        </div>
      </el-col>
      <el-col :span="11" class="content-el-col" v-show="showBlog7">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[7].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[7].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[7].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row v-show="showDivider4">
              <el-col :span="11" class="content-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="content-main-div-divider"></el-divider>
                </div>
              </el-col>
              <el-col :span="11" :offset="2" class="content-el-col">
                <div class="grid-content bg-purple">
                  <el-divider class="content-main-div-divider"></el-divider>
                </div>
              </el-col>
            </el-row>
    <el-row v-for="(blog,index) in blogs" v-if="index<1" :key="blog.name">
      <el-col :span="11" class="content-el-col" v-show="showBlog8">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[8].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[8].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[8].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <div class="content-main-div-vertical">
          <el-divider direction="vertical" class="content-main-div-divider-vertical"></el-divider>
        </div>
        </div>
      </el-col>
      <el-col :span="11" class="content-el-col" v-show="showBlog9">
        <div class="grid-content bg-purple-dark">
          <div class="content-container-main-div">
            <div class="content-container-main-div-info">{{blogs[9].content}}</div>
            <div>
              <div class="content-container-main-div-timeinfo">发布时间:</div>
              <div class="content-container-main-div-time">{{blogs[9].created}}</div>
              <div class="content-container-main-div-timeinfotwo">截止时间:</div>
              <div class="content-container-main-div-time">{{blogs[9].created}}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-main>
   <el-aside id="content-container-aside-right"></el-aside>
</el-container>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
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
#c-content{
  /* height: 600px !important; */

}
#content-container-aside-left{
  width: 350px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
#content-container-aside-right{
  width: 320px !important;
  /* height: 600px !important; */
  background-color: #f7f9fc;
}
.content-container-main{
  background-color: #ffffff;
  height: 560px !important;
  padding-top: 30px;
  padding-left: 50px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0,17,59,0.05);
}
.content-el-col{
  text-align: left;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
#content-grid-image{
  width: 22px !important;
  height: 21px;
}
#content-grid-content-image{
  padding-left: 6px;
}
#content-grid-search {
  margin-left: -10px;
  color: #0096C3;
  font-size: 18px;
  font-weight: bold;
}
#content-grid-more{
  font-size: 14px;
  color: #999999;
}
#content-grid-divider-first {
  width: 100px;
  min-height:2px;
  background-color: #0096C3;
  overflow: hidden;
}
#content-grid-divider-two {
  height: 2px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.content-container-main-div{
  height: 60px;
}
.content-container-main-div-info{
  font-size: 16px;
  font-weight: 400px;
  margin-top: 12px;
}
.content-container-main-div-time{
  display: inline-block;
  color: #83cce2;
  font-size: 12px;
  margin-top: 5px;
}
.content-container-main-div-timeinfo{
  display: inline-block;
  font-size: 12px;
  color: #b8b8b8;
}
.content-container-main-div-timeinfotwo{
  margin-left: 15px;
  display: inline-block;
  color: #b8b8b8;
  font-size: 12px;
}
.content-main-div-divider{
     margin: 8px 0;
     background: 0 0;
     border-top: 1px dashed #e8eaec;
 }
 .content-main-div-divider-vertical{
      height: 60px;
      background:   0 0;
      border-left: 1px dashed #e8eaec;
 }
 .content-main-div-vertical{
  text-align: center ;
 }
 .content-main-row-placeholder{
   height: 20px;
 }
</style>
