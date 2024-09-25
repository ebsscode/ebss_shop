<template>
  <div>
    <div class="top_banner" v-if="show_header_img">
      <div class="module">
          <img :src="baseURL+'/'+configs.header_img" />
          <i class="myicon icon-shanchu1 icon-close" @click="show_header_img=false"></i>
      </div>
    </div>
    <div class="site-nav">
      <div class="w">
        <div class="fl">
          <div class="city-choice">
            <div class="dsc-choie dsc-cm">
              <i class="myicon icon-shouhuodizhi"></i>
              <span>{{ location.district||location.city||location.province }}</span>
            </div>
          </div>
          <div class="txt-info" v-if="!user_info" @click="nav('/login')">
            <span href="" class="link-login red">请登录</span>
            <span href="" class="link-regist">免费注册</span>
          </div>
          <div v-else class="txt-info">
            {{user_info.nickname||user_info.username||user_info.tel}}
          </div>
        </div>
        <ul class="quick-menu fr">
          <li @click="nav('/order/list')">
            <div class="dt">
              <a href="javascript:void(0);">我的订单</a>
            </div>
          </li>
          <li class="spacer"></li>
          <li class="li_dorpdown">
            <div class="dt dsc-cm">网站导航</div>
            <div class="dd dorpdown-layer" style="z-index: 10;">
              <dl class="fore1">
                <dt>特色主题</dt>
                <dd>
                  <div class="item">
                    <a href="#" target="_blank">家用电器</a>
                  </div>
                  <div class="item">
                    <a href="#" target="_blank">手机数码</a>
                  </div>
                  <div class="item">
                    <a href="#" target="_blank">电脑办公</a>
                  </div>
                </dd>
              </dl>
              <dl class="fore2">
                <dt>促销活动</dt>
                <dd>
                  <div class="item">
                    <a href="#">拍卖活动</a>
                  </div>
                  <div class="item">
                    <a href="#">共创商品</a>
                  </div>
                  <div class="item">
                    <a href="#">优惠活动</a>
                  </div>
                  <div class="item">
                    <a href="#">批发市场</a>
                  </div>
                  <div class="item">
                    <a href="#">超值礼包</a>
                  </div>
                  <div class="item">
                    <a href="#">优惠券</a>
                  </div>
                </dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      user_info:null,
      show_header_img:true,
      configs:this.util.getStorage('configs'),
      location:this.util.getStorage('location'),
      token:this.util.getStorage('token')
    }
  },
  created() {
    if(this.token){
      this.getData()
    }
  },
  methods:{
    getData(){
      this.get('user/user_info').then(({code,user_info})=>{
        if(code==1){
          this.user_info=user_info
        }
      })
    },
  }
}
</script>
<style lang="less" scoped>
.top_banner {
  min-width: 1200px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  overflow: hidden;
  background: #ff287d;
  .module {
    width: 1200px;
    position: relative;
    margin: 0 auto;
    float: none;
  }
}
.site-nav {
  background: #eee;
  margin-bottom: 1px;
  width: 100%;
  min-width: 1200px;
  .w {
    height:30px;
    line-height:30px;
    color:#8c8c8c;
  }
}
.txt-info {
  float:left;
  margin-left:15px;
}
.txt-info .link-login {
  padding-right:12px;
  float:left;
}
.txt-info .link-regist {
  color:#8c8c8c;
  float:left;
}
.txt-info .link-regist:hover {
  color:#e23435;
}
</style>
