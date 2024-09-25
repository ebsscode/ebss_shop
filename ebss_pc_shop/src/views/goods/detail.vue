<template>
  <div>
    <div class="w1200_container">

      <div class="flex-row">
        <div class="flex-col " style="width: 40%;background: #ffffff">
          <magnifying-glass :imageSrc="baseURL+imgs[imgIndex]" style="width: 400px;height: 400px;padding: 10px;margin: 0 auto;"/>
          <div class="" style="display: flex;width: 100%;overflow-x: scroll">
            <img :src="baseURL+item" v-for="(item,index) in imgs" :key="index" alt="" style="height: 120px;width: 120px;margin: 10px;" @click="imgIndex=index" @mouseenter="imgIndex=index">
          </div>
        </div>
        <div class="pay_content" style="width: 60%">
          <div class="pay_title">超诺淋浴套装 太空铝增压花洒水龙头 三档冷热可升降喷头带下出水 拒绝生锈 十年质保 历久弥新</div>
          <div class="summary">
            <div class="summary_price_warp">
              <div class="s_p_w_wrap">
                <div class="summary_item si_shop_price">
                  <div class="si_tit">商 城 价</div>
                  <div class="si_warp">
                    <strong class="shop_price"><em>¥</em>2999.00</strong>
                    <span class="price_notify" data-userid="63" data-goodsid="650" ectype="priceNotify">降价通知</span>
                  </div>
                </div>
                <div class="summary_item si_market_price">
                  <div class="si_tit">市 场 价</div>
                  <div class="si_warp">
                    <div class="m_price"><em>¥</em>3598.79</div>
                  </div>
                </div>
                <div class="si_info">
                  <div class="si_cumulative">累计评价<em>0</em></div>
                  <div class="si_cumulative">累计销量<em>0</em></div>
                </div>
                <div class="clear"></div>
                <div class="summary_basic_info">
                  <div class="summary_item is_stock">
                    <div class="si_tit">配送</div>
                    <div class="si_warp">
                      <span class="initial_area">上海市</span>
                      <span>至</span>
                      <div class="city-choice" id="city-choice" data-ectype="dorpdown">
                        <div class="dsc-choie dsc-cm" ectype="dsc-choie">
                          <input type="text" value="石家庄" class="search" style="margin: 3px 0 0 0;border: none;background: #f7f8f8;width: 40px;" />
                        </div>
                      </div>
                      <div class="store_warehouse">
                        <div class="store_prompt"><strong>有货</strong>，下单后立即发货</div>
                      </div>
                    </div>
                  </div>
                  <div class="clear"></div>
                  <div class="summary_item is_service">
                    <div class="si_tit">服务</div>
                    <div class="si_warp">
                      由
                      <a href="" class="link_red" target="_blank">本网站</a> 发货并提供售后服务
                      <span class="gary">[ 快递：<em>¥</em>4.30 ]</span>
                    </div>
                  </div>
                  <div class="clear"></div>
                  <div class="summary_item is_integral">
                    <div class="si_tit">红包</div>
                    <div class="si_warp">可用 <span class="integral">0</span></div>
                  </div>
                  <div class="summary_item is_number clear">
                    <div class="si_tit">数量</div>
                    <div class="si_warp">
                      <div class="amount_warp">
                        <input class="text buy_num" value="1" name="number">
                        <div class="a_btn">
                          <a href="javascript:void(0);" class="btn_add" ><i class="iconfont icon-up">+</i></a>
                          <a href="javascript:void(0);" class="btn_reduce btn_disabled" ><i class="iconfont icon-down">-</i></a>
                        </div>
                      </div>
                      <span>库存&nbsp;<em id="goods_attr_num" ectype="goods_attr_num">1000</em>&nbsp;个</span>
                    </div>
                  </div>
                  <div class="summary_item regular">
                    <div class="si_tit">规格</div>
                    <div class="si_warp">
                      <ul class="regular_list">
                        <li class="regular_sort">红色</li>
                        <li>蓝色</li>
                      </ul>
                    </div>
                  </div>

                </div>
                <!--class="layui-btn layui-btn-normal"-->
                <div class="choose_btns clear">
                  <a href="#" class="btn_buynow">立即购买</a>
                  <a href="#" class="btn_append layui-btn layui-btn-danger business" data-type="auto" data-method="setTop">
                    <i class="myicon icon-gouwuche"></i>加入购物车
                  </a>
                </div>
                <div class="summary_item is_service">
                  <div class="si_tit">温馨提示</div>
                  <div class="si_warp gray">
                    不支持退换货服务
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pro_con margin-t55" style="overflow:hidden;">
        <div class="pro_tab">
          <ul>
            <li @click="tabIndex=0" :class="tabIndex==0?'cur':''">产品介绍</li>
            <li @click="tabIndex=1" :class="tabIndex==1?'cur':''">规格及包装</li>
            <li @click="tabIndex=2" :class="tabIndex==2?'cur':''">评价</li>
          </ul>
        </div>
        <div class="conlist">
          <div @click="tabIndex=0" class="conbox" :style="tabIndex==0?'display:block;':'display:none;'">1</div>
          <div @click="tabIndex=1" class="conbox" :style="tabIndex==1?'display:block;':'display:none;'">2</div>
          <div @click="tabIndex=2" class="conbox" :style="tabIndex==2?'display:block;':'display:none;'">
            <div class="pro_judge">
              <ul>
                <li class="cur">
                  <input name="RadioGroup1" type="radio" value="" checked="checked" id="RadioGroup1_0" />
                  全部（100）</li>
                <li>
                  <input name="RadioGroup1" type="radio" value="" id="RadioGroup1_1" />
                  好评（80）</li>
                <li>
                  <input name="RadioGroup1" type="radio" value="" id="RadioGroup1_2" />
                  中评（10）</li>
                <li>
                  <input name="RadioGroup1" type="radio" value="" id="RadioGroup1_3" />
                  差评（10）</li>
              </ul>
              <table width="100%" border="0">
                <tr>
                  <td width="80" align="left"><a href="" rel="images/01_mid.jpg" class="preview"><img :src="baseURL+'/static/common/logo.jpg'" width="60" height="60" class="border_gry" /></a></td>
                  <td>茶泡出来颜色很好！味道很清香！非常喜欢！包装也很精致，下次还来买！好评！<br />
                    <br />
                    <span class="pro_judge_time">2014.1.3</span></td>
                  <td>张三</td>
                </tr>
                <tr>
                  <td width="80" align="left"><a href="" rel="images/01_mid.jpg" class="preview"><img :src="baseURL+'/static/common/logo.jpg'" width="60" height="60" class="border_gry" /></a></td>
                  <td>茶泡出来颜色很好！味道很清香！非常喜欢！包装也很精致，下次还来买！好评！<br />
                    <br />
                    <span class="pro_judge_time">2014.1.3</span></td>
                  <td>张三</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>







      <div class="enjoy_title">
        <h3>还没逛够</h3>
      </div>
      <div class="no_enough">
        <ul>
          <li class="opacity_img1">
            <a href="#" target="_blank">
              <div class="p_img">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="no_ename" title="【情侣款】Camel骆驼男靴 时尚潮流英伦风马丁靴高帮皮靴 爆卖1万双！ 情侣马丁靴 好评如潮">
                【情侣款】Camel骆驼男靴 时尚潮流英伦风马丁靴高帮皮靴 爆卖1万双！ 情侣马丁靴 好评如潮
              </div>
              <div class="no_eprice">
                <em>¥</em>555.00
              </div>
            </a>
          </li>
          <li class="opacity_img1">
            <a href="#" target="_blank">
              <div class="p_img">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="no_ename" title="春季马丁靴男真皮男靴黄靴工装军靴韩版短靴沙漠靴高帮男鞋大黄靴 头层牛皮">
                春季马丁靴男真皮男靴黄靴工装军靴韩版短靴沙漠靴高帮男鞋大黄靴 头层牛皮
              </div>
              <div class="no_eprice">
                <em>¥</em>555.00
              </div>
            </a>
          </li>
          <li class="opacity_img1">
            <a href="#" target="_blank">
              <div class="p_img">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="no_ename" title="特步女鞋2017春季新款运动鞋休闲鞋女慢跑步鞋旅游鞋轻便舒适时尚 早春特惠 爆款休闲女鞋 赠运费险">
                特步女鞋2017春季新款运动鞋休闲鞋女慢跑步鞋旅游鞋轻便舒适时尚 早春特惠 爆款休闲女鞋 赠运费险
              </div>
              <div class="no_eprice">
                <em>¥</em>555.00
              </div>
            </a>
          </li>
          <li class="opacity_img1">
            <a href="#" target="_blank">
              <div class="p_img">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="no_ename" title="新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮">
                新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮
              </div>
              <div class="no_eprice">
                <em>¥</em>555.00
              </div>
            </a>
          </li>
          <li class="opacity_img1">
            <a href="#" target="_blank">
              <div class="p_img">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="no_ename" title="igtt铝框行李箱拉杆箱旅行箱万向轮男女20/24/26寸密码箱登机箱子 铝合金框 加强密码锁 万向轮 终身保修">
                igtt铝框行李箱拉杆箱旅行箱万向轮男女20/24/26寸密码箱登机箱子 铝合金框 加强密码锁 万向轮 终身保修
              </div>
              <div class="no_eprice">
                <em>¥</em>555.00
              </div>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MagnifyingGlass from 'my-magnifying-glass';
export default {
  name: "detail",
  components: {
    MagnifyingGlass,
  },
  data() {
    return {
      tabIndex:0,
      imgIndex:0,
      imgs:[
        '/static/common/logo.jpg',
        '/static/common/share_bg.png',
        '/static/common/logo.jpg',
        '/static/common/share_bg.png',
        '/static/common/logo.jpg',
        '/static/common/share_bg.png',
        '/static/common/logo.jpg',
        '/static/common/share_bg.png',
      ]
    }
  },
  mounted() {
  }
}
</script>
<style lang="less" scoped>
.pro_con {
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-color: #E8E8E8;
  border-bottom-color: #E8E8E8;
  border-left-color: #E8E8E8;
  padding-bottom: 30px;
}
.pro_tab {
  overflow: hidden;
  border: 1px solid #E8E8E8;
}
.pro_tab ul {
  display: block;
}
.pro_tab ul li {
  float: left;
  height: 45px;
  width: 140px;
  line-height: 45px;
  text-align: center;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #E8E8E8;
  background-color: #F9F7F8;
  display: block;
  margin-bottom: -3px;
}
.pro_tab ul li a {
  display: block;
}
.pro_tab ul li a:hover {
  display: block;
  border-top-width: 3px;
  border-top-style: solid;
  border-top-color: #90b830;
  background-color: #FFF;
}
.pro_tab .cur {
  border-top-width: 3px;
  border-top-style: solid;
  border-top-color: #90b830;
  background-color: #FFF;
  color: #90b830;
  font-weight: bold;
}
.pro_judge {
  margin-right: 20px;
  margin-left: 20px;
}
.pro_judge ul {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #E8E8E8;
  overflow: hidden;
  padding-bottom: 20px;
  margin-top: 20px;
}
.pro_judge ul li {
  float: left;
  margin-right: 20px;
  font-size: 14px;
}
.pro_judge .cur {
  color: #F00;
}
.pro_judge tr {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #E8E8E8;
  height: 52px;
}
.pro_judge tr td {
  padding-top: 20px;
  padding-bottom: 20px;
}
.pro_judge_time {
  color: #999;
  font-size: 14px;
}
</style>
