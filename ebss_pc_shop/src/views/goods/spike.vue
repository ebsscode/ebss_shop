<template>
  <div>
    <div class="seckill"></div>
    <div class="w1200_container">
      <div class="sec_kill_goods">
        <div class="skill_tab">
          <ul class="skill_tab_time">
            <li class="curr">
              <strong>8:00</strong>
              <!--<div class="time" ectype="time" data-time="2018-01-04 10:00:00">
                <span>距结束</span>
                <span class="hours">00</span>
                <em>:</em>
                <span class="minutes">00</span>
                <em>:</em>
                <span class="seconds">00</span>
              </div>-->
              <i>即将开始</i>
            </li>
            <li>
              <strong>10:00</strong>
              <!--<div class="time hide" ectype="time" data-time="2018-01-04 10:00:00">
                <span>距结束</span>
                <span class="hours">00</span>
                <em>:</em>
                <span class="minutes">00</span>
                <em>:</em>
                <span class="seconds">00</span>
              </div>-->
              <i>即将开始</i>
            </li>
            <li>
              <strong>12:00</strong>
              <!--<div class="time hide" ectype="time" data-time="2018-01-04 10:00:00">
                <span>距结束</span>
                <span class="hours">00</span>
                <em>:</em>
                <span class="minutes">00</span>
                <em>:</em>
                <span class="seconds">00</span>
              </div>-->
              <i>即将开始</i>
            </li>
            <li>
              <strong>14:00</strong>
              <!--<div class="time hide" ectype="time" data-time="2018-01-04 10:00:00">
                <span>距结束</span>
                <span class="hours">00</span>
                <em>:</em>
                <span class="minutes">00</span>
                <em>:</em>
                <span class="seconds">00</span>
              </div>-->
              <i>即将开始</i>
            </li>
            <li>
              <strong>16:00</strong>
              <!--<div class="time hide" ectype="time" data-time="2018-01-04 10:00:00">
                <span>距结束</span>
                <span class="hours">00</span>
                <em>:</em>
                <span class="minutes">00</span>
                <em>:</em>
                <span class="seconds">00</span>
              </div>-->
              <i>即将开始</i>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="tab_content">
          <div class="skill_warp sel">
            <ul class="skill_goods_list">
              <li class="mod_shodow">
                <div class="p_img">
                  <a href="#" target="_blank">
                    <img :src="baseURL+'/static/common/logo.jpg'" />
                  </a>
                </div>
                <div class="p_name">
                  <a href="#" title="HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软" target="_blank">
                    HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软
                  </a>
                </div>
                <div class="p_lie clear">
                  <div class="p_price">
                    <em>￥</em>888
                  </div>
                  <div class="p_del">
                    <del>
                      <em>￥</em>1111
                    </del>
                  </div>
                </div>
                <a class="sc_kill_btn btn" href="#" target="_blank">立即购买</a>
              </li>
              <li class="mod_shodow">
                <div class="p_img">
                  <a href="#" target="_blank">
                    <img :src="baseURL+'/static/common/logo.jpg'" />
                  </a>
                </div>
                <div class="p_name">
                  <a href="#" title="HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软" target="_blank">
                    HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软
                  </a>
                </div>
                <div class="p_lie clear">
                  <div class="p_price">
                    <em>￥</em>888
                  </div>
                  <div class="p_del">
                    <del>
                      <em>￥</em>1111
                    </del>
                  </div>
                </div>
                <a class="sc_kill_btn btn" href="#" target="_blank">立即购买</a>
              </li>
              <li class="mod_shodow">
                <div class="p_img">
                  <a href="#" target="_blank">
                    <img :src="baseURL+'/static/common/logo.jpg'" />
                  </a>
                </div>
                <div class="p_name">
                  <a href="#" title="HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软" target="_blank">
                    HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软
                  </a>
                </div>
                <div class="p_lie clear">
                  <div class="p_price">
                    <em>￥</em>888
                  </div>
                  <div class="p_del">
                    <del>
                      <em>￥</em>1111
                    </del>
                  </div>
                </div>
                <a class="sc_kill_btn btn" href="#" target="_blank">立即购买</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: "spike"
}
</script>
<style scoped lang="less">
.seckill {
  width: 100%;
  height: 190px;
  min-width: 1200px;
  background: url('@{baseURL}/static/pc/spike_bg.png') center;
  background-size: 100% 100%;
}

.skill_warp {
  margin-top: 20px;
}

.skill_tab {
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: #eee;
}

.skill_tab_time li {
  width: 20%;
  float: left;
  text-align: center;
  cursor: pointer;
}

.skill_warp li {
  float: left;
  width: 210px;
  margin: 0 10px 10px 0;
  margin-bottom: 10px;
  position: relative;
  padding: 10px;
}

.curr {
  background-color: #f42424;
  color: #fff;
}

li.curr strong {
  font-size: 24px;
  color: #fff;
}

li strong {
  display: inline-block;
  color: #555;
  font-size: 18px;
  line-height: 50px;
}

.time {
  display: inline-block;
}

li .time {
  line-height: 50px;
  vertical-align: middle;
  margin: -14px 0 0 10px;
}

.skill_tab_time li i {
  width: 78px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #8c8c8c;
  border-radius: 22px;
  display: inline-block;
  vertical-align: middle;
  margin: -10px 0 0 12px;
  font-size: 12px;
  text-align: center;
}

.hide {
  display: none;
}

.active2 {
  display: inline-block;
}

.mod_shodow {
  transition: all .5s;
}

.mod_shodow:hover {
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  -webkit-transform: translate3d(0, -3px, 0);
  -moz-transform: translate3d(0, -3px, 0);
  transform: translate3d(0, -3px, 0);
}

.p_img {
  margin-bottom: 10px;
}

.p_img img {
  width: 100%;
  height: 100%;
}

.p_name {
  margin-bottom: 6px;
  font-size: 12px;
}

.p_name a {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #555;
}

.p_price {
  float: left;
  font-size: 18px;
  color: #f42424;
}

.p_del {
  float: left;
  color: #999;
  line-height: 27px;
  margin-left: 10px;
}

.btn {
  width: 190px;
  margin: 10px 0 0 0;
  text-align: center;
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  height: 23px;
  line-height: 23px;
  border: 1px solid #f42424;
  border-top-color: rgb(244, 36, 36);
  border-right-color: rgb(244, 36, 36);
  border-bottom-color: rgb(244, 36, 36);
  border-left-color: rgb(244, 36, 36);
  display: inline-block;
  color: #f42424;
  background-color: #fff;
  margin-right: 5px;
  font-size: 12px;
  cursor: pointer;
}

.sc_kill_btn {
  background: #f42424;
  border-color: #f42424;
  color: #fff;
}

.sc_kill_btn:hover {
  background: #ec5051;
  color: #fff;
}

.seckill1 {
  width: 100%;
  height: 130px;
  min-width: 1200px;
  background: url(../images/seckill_banner.jpg) center;
  background-size: 100% 100%;
  text-align: center;
}

.seckill1 span {
  font-size: 30px;
  color: #b31919;
  font-weight: bold;
  display: block;
  padding-top: 70px;
}
.sel{
  display: inline-block;
}

</style>
