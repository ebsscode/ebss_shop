<template>
  <div>
    <Search />
    <div class="clear"></div>
    <div class="nav">
      <div class="w w1200">
        <div class="categorys">
          <div class="categorys-type">
            <a href="categoryall.php" target="_blank">全部商品分类</a>
          </div>
          <div class="categorys-tab-content">
            <div class="categorys-items">
              <div class="categorys-item">
                <div class="item item-content">
                  <i class="iconfont icon-ele"><img :src="baseURL+'/static/common/logo.jpg'"></i>
                  <div class="categorys-title">
                    <strong>
                      <a href="#" target="_blank">家用电器</a>
                    </strong>
                    <span>
                          <a href="#" target="_blank">大家电</a>
                          <a href="#" target="_blank">生活电器</a>
                    </span>
                  </div>
                </div>
                <div class="categorys-items-layer">
                  <div class="cate-layer-con clearfix">
                    <div class="cate-layer-left">
                      <div class="cate_channel">
                        <a href="#" target="_blank">品牌日</a>
                        <a href="#" target="_blank">家电城</a>
                        <a href="#" target="_blank">智能生活馆</a>
                        <a href="#" target="_blank">京东净化馆</a>
                        <a href="#" target="_blank">京东帮服务店</a>
                        <a href="#" target="_blank">值得买精选</a>
                      </div>
                      <div class="cate_detail">
                        <dl class="dl_fore1">
                          <dt><a href="#" target="_blank">大家电</a></dt>
                          <dd>
                            <a href="#" target="_blank">平板电视</a>
                            <a href="#" target="_blank">空调</a>
                            <a href="#" target="_blank">冰箱</a>
                            <a href="#" target="_blank">洗衣机</a>
                            <a href="#" target="_blank">家庭影院</a>
                            <a href="#" target="_blank">DVD</a>
                            <a href="#" target="_blank">迷你音响</a>
                            <a href="#" target="_blank">热水器</a>
                            <a href="#" target="_blank">冷吧/冰柜</a>
                          </dd>
                        </dl>
                        <dl class="dl_fore2">
                          <dt><a href="#" target="_blank">生活电器</a></dt>
                          <dd>
                            <a href="#" target="_blank">电风扇</a>
                            <a href="#" target="_blank">冷风扇</a>
                            <a href="#" target="_blank">净化器</a>
                            <a href="#" target="_blank">加湿器</a>
                            <a href="#" target="_blank">扫地机器人</a>
                            <a href="#" target="_blank">吸尘器</a>
                            <a href="#" target="_blank">插座</a>
                            <a href="#" target="_blank">电话机</a>
                            <a href="#" target="_blank">饮水机</a>
                            <a href="#" target="_blank">取暖电器</a>
                            <a href="#" target="_blank">净水设备</a>
                            <a href="#" target="_blank">干衣机</a>
                            <a href="#" target="_blank">收音机/录音机</a>
                            <a href="#" target="_blank">电器开关</a>
                          </dd>
                        </dl>
                        <dl class="dl_fore3">
                          <dt><a href="#" target="_blank">厨房电器</a></dt>
                          <dd>
                            <a href="#" target="_blank">电饭煲</a>
                            <a href="#" target="_blank">电压力锅</a>
                            <a href="#" target="_blank">豆浆机</a>
                            <a href="#" target="_blank">面包机</a>
                            <a href="#" target="_blank">咖啡机</a>
                            <a href="#" target="_blank">微波炉</a>
                            <a href="#" target="_blank">料理/榨汁机</a>
                            <a href="#" target="_blank">电烤箱</a>
                            <a href="#" target="_blank">电磁炉</a>
                            <a href="#" target="_blank">电饼铛/烧火盘</a>
                            <a href="#" target="_blank">煮蛋器</a>
                            <a href="#" target="_blank">酸奶机</a>
                            <a href="#" target="_blank">电水壶/热水瓶</a>
                            <a href="#" target="_blank">电饭盒</a>
                            <a href="#" target="_blank">其他厨房电器</a>
                          </dd>
                        </dl>
                        <dl class="dl_fore4">
                          <dt><a href="#" target="_blank">个护健康</a></dt>
                          <dd>
                            <a href="#" target="_blank">按摩椅</a>
                            <a href="#" target="_blank">剃须刀</a>
                            <a href="#" target="_blank">脱毛器</a>
                            <a href="#" target="_blank">口腔护理</a>
                            <a href="#" target="_blank">电吹风</a>
                            <a href="#" target="_blank">美容器</a>
                            <a href="#" target="_blank">理发器</a>
                            <a href="#" target="_blank">按摩器</a>
                            <a href="#" target="_blank">足浴盆</a>
                            <a href="#" target="_blank">血压计</a>
                            <a href="#" target="_blank">健康秤/厨房秤</a>
                            <a href="#" target="_blank">血糖计</a>
                            <a href="#" target="_blank">计步器</a>
                            <a href="#" target="_blank">其他健康电器</a>
                          </dd>
                        </dl>
                        <dl class="dl_fore5">
                          <dt><a href="#" target="_blank">五金家装</a></dt>
                          <dd>
                            <a href="#" target="_blank">电动工具</a>
                            <a href="#" target="_blank">手动工具</a>
                            <a href="#" target="_blank">仪器</a>
                            <a href="#" target="_blank">仪表</a>
                            <a href="#" target="_blank">浴霸/排气扇</a>
                            <a href="#" target="_blank">灯具</a>
                            <a href="#" target="_blank">LED灯</a>
                            <a href="#" target="_blank">洁身器</a>
                            <a href="#" target="_blank">水槽</a>
                            <a href="#" target="_blank">龙头</a>
                            <a href="#" target="_blank">沐浴花洒</a>
                            <a href="#" target="_blank">厨卫五金</a>
                            <a href="#" target="_blank">家具五金</a>
                            <a href="#" target="_blank">门铃</a>
                            <a href="#" target="_blank">监控安防</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="cate-layer-rihgt">
                      <h3>猜你喜欢</h3>
                      <div class="cate-layer-right-slide">
                        <img :src="baseURL+'/static/common/logo.jpg'" />
                      </div>
                      <div class="cate-layer-right-slide">
                        <img :src="baseURL+'/static/common/logo.jpg'" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-main">
          <ul class="navitems">
            <li>
              <a href="#" class="curr">首页</a>
            </li>
            <li>
              <a href="#">食品特产</a>
            </li>
            <li>
              <a href="#">服装城</a>
            </li>
            <li>
              <a href="#">大家电</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide">
      <a-carousel class="carouse" autoplay>
        <div class="slideItem">
          <img class="banner-img" :src="baseURL+'/static/pc/banner4.jpg'" style="height: 500px;width: 100%">
        </div>
        <div class="slideItem">
          <img class="banner-img" :src="baseURL+'/static/pc/banner5.jpg'" style="height: 500px;width: 100%">
        </div>
        <div class="slideItem">
          <img class="banner-img" :src="baseURL+'/static/pc/banner6.jpg'" style="height: 500px;width: 100%">
        </div>
      </a-carousel>
    </div>
    <div class="shop_new">
      <div class="sy_c">
        <div class="sy_gg">
          <div class="shop_new_logo">
            购物头条
          </div>
          <div class="ranklist">
            <ul>
              <li>
                <a href="#">小米：58秒售罄！魅族：抱歉，我30秒</a>
                <a href="#"><span>点我查看详情</span></a>
              </li>
              <li>
                <a href="#">穿这样的裙子会显高，你穿过几种？</a>
                <a href="#"><span>点我查看详情</span></a>
              </li>
            </ul>
          </div>
          <div class="new_more align-center justify-center">
            更多
            <i class="myicon icon-xiangyou1"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="seckill-channel">
      <div class="box-hd clearfix">
        <i class="box_hd_arrow"></i>
        <i class="box_hd_dec"></i>
        <i class="box-hd-icon"></i>
        <div class="sk-time-cd">
          <div class="sk-cd-tit">距结束</div>
          <div class="cd-time fl" ectype="time">
            <div class="days hide">00</div>
            <span class="split hide">天</span>
            <div class="hours">00</div>
            <span class="split">时</span>
            <div class="minutes">00</div>
            <span class="split">分</span>
            <div class="seconds">00</div>
            <span class="split">秒</span>
          </div>
        </div>
        <div class="sk-more">
          <a href="seckill.php" target="_blank">更多秒杀</a> <i class="arrow"></i></div>
      </div>
      <div class="box-bd clearfix slideTxtBox">
        <div class="tempWrap hd">
          <ul>
            <li class="opacity_img clone">
              <div class="p-img">
                <a href="#" target="_blank"><img :src="baseURL+'/static/common/logo.jpg'"></a>
              </div>
              <div class="p-name">
                <a href="#" target="_blank" title="HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软">HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软</a>
              </div>
              <div class="p-over">
                <div class="p-info">
                  <div class="p-price">
                    <span class="shop-price"><em>¥</em>356.00</span>
                    <span class="original-price"><em>¥</em>117.60</span>
                  </div>
                </div>
                <div class="p-btn">
                  <a href="#" target="_blank">立即抢购</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="need-channel clearfix">
      <div class="channel-column" :style="`background:url(${baseURL}/static/pc/channel_bg1.jpg) no-repeat;`">
        <div class="column-title">
          <h3>优质新品</h3>
          <p>专注生活美学</p>
        </div>
        <div class="column-img"><img :src="baseURL+'/static/common/logo.jpg'"></div>
        <a href="#" target="_blank" class="column-btn">去看看</a>
      </div>
      <div class="channel-column" :style="`background:url(${baseURL}/static/pc/channel_bg2.jpg) no-repeat;`">
        <div class="column-title">
          <h3>品牌精选</h3>
          <p>潮牌尖货 初春换新</p>
        </div>
        <div class="column-img"><img :src="baseURL+'/static/common/logo.jpg'"></div>
        <a href="#" target="_blank" class="column-btn">去看看</a>
      </div>
      <div class="channel-column" :style="`background:url(${baseURL}/static/pc/channel_bg3.jpg) no-repeat;`">
        <div class="column-title">
          <h3>潮流女装</h3>
          <p>春装流行款抢购</p>
        </div>
        <div class="column-img"><img :src="baseURL+'/static/common/logo.jpg'"></div>
        <a href="#" target="_blank" class="column-btn">去看看</a>
      </div>
      <div class="channel-column" :style="`background:url(${baseURL}/static/pc/channel_bg4.jpg) no-repeat;`">
        <div class="column-title">
          <h3>人气美鞋</h3>
          <p>新外貌“鞋”会</p>
        </div>
        <div class="column-img"><img :src="baseURL+'/static/common/logo.jpg'"></div>
        <a href="#" target="_blank" class="column-btn">去看看</a>
      </div>
      <div class="channel-column" :style="`background:url(${baseURL}/static/pc/channel_bg5.jpg) no-repeat;`">
        <div class="column-title">
          <h3>护肤彩妆</h3>
          <p>春妆必买清单 低至3折</p>
        </div>
        <div class="column-img"><img :src="baseURL+'/static/common/logo.jpg'"></div>
        <a href="#" target="_blank" class="column-btn">去看看</a>
      </div>
    </div>

    <div class="w1200_container">
      <div class="enjoy_title">
        <h3>享品质 享生活</h3>
      </div>
      <div  class="enjoy_content">
        <div class="enjoy_con">
          <a href="#">
            <div class="enjoy_bg">
              <div class="enjoy_info">
                <div class="enjoy1_title">
                  <h4>新品首发</h4>
                  <p>荣耀系列 今日特惠</p>
                </div>
              </div>
              <img :src="baseURL+'/static/pc/enjoy1.png'" class="enter1_enjoy" />
            </div>
          </a>
        </div>
        <div class="enjoy_con">
          <a href="#">
            <div class="enjoy_bg">
              <div class="enjoy_info" style="background: #DBCF6E;">
                <div class="enjoy1_title">
                  <h4>会逛</h4>
                  <p>厨具超级品牌日</p>
                </div>
              </div>
              <img :src="baseURL+'/static/pc/enjoy0.jpg'" class="enter1_enjoy" />
            </div>
          </a>
        </div>
        <div class="enjoy_con">
          <a href="#">
            <div class="enjoy_bg">
              <div class="enjoy_info" style="background: #534b5d;">
                <div class="enjoy1_title">
                  <h4>奢侈大牌</h4>
                  <p>尽享品质生活</p>
                </div>
              </div>
              <img :src="baseURL+'/static/pc/enjoy2.jpg'" class="enter1_enjoy" />
            </div>
          </a>
        </div>
        <div class="enjoy_con">
          <a href="#">
            <div class="enjoy_bg">
              <div class="enjoy_info" style="background: #3b838c;">
                <div class="enjoy1_title">
                  <h4>智能生活</h4>
                  <p>智能潮货，嗨购不停</p>
                </div>
              </div>
              <img :src="baseURL+'/static/pc/enjoy3.jpg'" class="enter1_enjoy" />
            </div>
          </a>
        </div>
        <div class="enjoy_con">
          <a href="#">
            <div class="enjoy_bg">
              <div class="enjoy_info" style="background:#d58717;">
                <div class="enjoy1_title">
                  <h4>京东超市</h4>
                  <p>精选超值好货 天天特价</p>
                </div>
              </div>
              <img :src="baseURL+'/static/pc/enjoy0.jpg'" class="enter1_enjoy" />
            </div>
          </a>
        </div>
        <div class="enjoy_con">
          <a href="#">
            <div class="enjoy_bg">
              <div class="enjoy_info" style="background: #7e5944">
                <div class="enjoy1_title">
                  <h4>白条商城</h4>
                  <p>最高12期免息</p>
                </div>
              </div>
              <img :src="baseURL+'/static/pc/enjoy1.png'" class="enter1_enjoy" />
            </div>
          </a>
        </div>
      </div>
      <div class="clear"></div>
      <!--达人专区-->
      <div class="enjoy_title">
        <h3>达人专区</h3>
      </div>
      <div class="mastor_con">
        <div class="mastor_part" :style="`background:url(${baseURL}/static/pc/vip1.jpg); center center no-repeat;`">
          <div class="master_main">
            <div class="mastor_title">
              <h3>纯棉质品</h3>
              <span>把好货带回家</span>
            </div>
            <a href="#" class="master_btn" target="_blank" style="color:#7bd1f6;;">去见识</a>
            <div class="master_img">
              <a href="#" target="_blank">
                <img :src="baseURL+'/static/common/logo.jpg'">
              </a>
            </div>
          </div>
        </div>
        <div class="mastor_part" :style="`background:url(${baseURL}/static/pc/vip2.jpg); center center no-repeat;`">
          <div class="master_main">
            <div class="mastor_title">
              <h3>团购热卖</h3>
              <span>都是好货</span>
            </div>
            <a href="#" class="master_btn" target="_blank" style="color:#f75674;">去见识</a>
            <div class="master_img">
              <a href="#" target="_blank">
                <img :src="baseURL+'/static/common/logo.jpg'">
              </a>
            </div>
          </div>
        </div>
        <div class="mastor_part" :style="`background:url(${baseURL}/static/pc/vip3.jpg); center center no-repeat;`">
          <div class="master_main">
            <div class="mastor_title">
              <h3>团购热卖</h3>
              <span>每一款都是好货</span>
            </div>
            <a href="#" class="master_btn" target="_blank" style="color:#ff889e;">去见识</a>
            <div class="master_img">
              <a href="#" target="_blank">
                <img :src="baseURL+'/static/common/logo.jpg'">
              </a>
            </div>
          </div>
        </div>
        <div class="mastor_part" :style="`background:url(${baseURL}/static/pc/vip4.jpg); center center no-repeat;`">
          <div class="master_main">
            <div class="mastor_title">
              <h3>舒适童鞋</h3>
              <span>帮宝宝走路</span>
            </div>
            <a href="#" class="master_btn" target="_blank" style="color:#cd51eb;">去见识</a>
            <div class="master_img">
              <a href="#" target="_blank">
                <img :src="baseURL+'/static/common/logo.jpg'">
              </a>
            </div>
          </div>
        </div>
        <div class="mastor_part" :style="`background:url(${baseURL}/static/pc/vip5.jpg); center center no-repeat;`">
          <div class="master_main">
            <div class="mastor_title">
              <h3>舒适运动鞋</h3>
              <span>品牌直降</span>
            </div>
            <a href="#" class="master_btn" target="_blank" style="color:#43dd72;">去见识</a>
            <div class="master_img">
              <a href="#" target="_blank">
                <img :src="baseURL+'/static/common/logo.jpg'">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="enjoy_title">
        <h3>店铺推荐</h3>
      </div>
      <div class="good_shop_con">
        <div class="good_shop">
          <a href="#" target="_blank">
            <div class="shop_img">
              <img :src="baseURL+'/static/common/logo.jpg'" style="width: 100%"/>
            </div>
            <div class="shop_logo">
              <div class="s_logo">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="s_title">
                <p>美宝莲</p>
                <p>纽约高街潮妆</p>
              </div>
            </div>
          </a>
        </div>
        <div class="good_shop">
          <a href="#" target="_blank">
            <div class="shop_img">
              <img :src="baseURL+'/static/common/logo.jpg'" style="width: 100%"/>
            </div>
            <div class="shop_logo">
              <div class="s_logo">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="s_title">
                <p>三只松鼠</p>
                <p>就是这个味</p>
              </div>
            </div>
          </a>
        </div>
        <div class="good_shop">
          <a href="#" target="_blank">
            <div class="shop_img">
              <img :src="baseURL+'/static/common/logo.jpg'" style="width: 100%" />
            </div>
            <div class="shop_logo">
              <div class="s_logo">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="s_title">
                <p>绿联旗舰店</p>
                <p>给生活多点精彩</p>
              </div>
            </div>
          </a>
        </div>
        <div class="good_shop">
          <a href="#" target="_blank">
            <div class="shop_img">
              <img :src="baseURL+'/static/common/logo.jpg'" style="width: 100%" />
            </div>
            <div class="shop_logo">
              <div class="s_logo">
                <img :src="baseURL+'/static/common/logo.jpg'" />
              </div>
              <div class="s_title">
                <p>韩都衣舍</p>
                <p>满249减50</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="clear"></div>
      <div class="enjoy_title">
        <h3>品牌推荐</h3>
      </div>
      <div class="brand_con">
        <div class="brand_left">
          <a href="#" target="_blank">
            <img :src="baseURL+'/static/common/logo.jpg'" />
          </a>
        </div>
        <div class="brand_right" id="recommend_brands">
          <ul>
            <li>
              <div class="brand_img">
                <a href="#" target="_blank">
                  <img :src="baseURL+'/static/common/logo.jpg'" />
                </a>
              </div>
              <div class="brand_mash">
                <div class="coupon">
                  <a href="#" target="_blank">
                    关注人数<br>
                    <div id="count2">0</div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
      <div class="enjoy_title">
        <h3>还没逛够</h3>
      </div>
      <div class="no_enough">
        <ul>
          <li class="opacity_img1">
            <a href="#" target="_blank">
              <div class="p_img">
                <img :src="baseURL+'/static/common/logo.jpg'"/>
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
        </ul>
      </div>
      <div class="clear"></div>
    </div>
    <div class="bk_foot_redbag">
      <a >
        <img :src="baseURL+'/static/pc/red_package.png'" style="width: 100%" >
      </a>
      <span class="myicon icon-round_delete"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      configs:this.util.getStorage('configs')
    }
  },
}
</script>
<style lang="less" scoped>
</style>
