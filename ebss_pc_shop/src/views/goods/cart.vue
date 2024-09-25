<template>
  <div>
    <div class="w1200_container">
      <div class="no_goods hide">
        <div class="cart_empt">
          <div class="cart_message">
            <div class="txt">购物车快饿瘪了，主人快给我挑点宝贝吧</div>
            <div class="info">
              <a href="#" class="btn sc_redBg_btn">马上去逛逛</a>
              <a href="javascript:void(0);" id="go_pay" class="login">去登录</a>
            </div>
          </div>
        </div>
      </div>
      <section class="cartMain">
        <div class="cartMain_hd">
          <ul class="order_lists cartTop">
            <li class="list_chk">
              <!--所有商品全选-->
              <input type="checkbox" id="all" class="whole_check">
              <label for="all"></label> 全选
            </li>
            <li class="list_con">商品信息</li>
            <li class="list_info">商品参数</li>
            <li class="list_price">单价</li>
            <li class="list_amount">数量</li>
            <li class="list_sum">金额</li>
            <li class="list_op">操作</li>
          </ul>
        </div>

        <div class="cartBox">
          <div class="shop_info">
            <div class="all_check">
              <!--店铺全选-->
              <input type="checkbox" id="shop_a" class="shopChoice">
              <label for="shop_a" class="shop"></label>
            </div>
            <div class="shop_name">
              店铺：
              <a href="javascript:;">搜猎人艺术生活</a>
            </div>
          </div>
          <div class="order_content">
            <ul class="order_lists">
              <li class="list_chk">
                <input type="checkbox" id="checkbox_2" class="son_check">
                <label for="checkbox_2"></label>
              </li>
              <li class="list_con">
                <div class="list_img">
                  <a href="javascript:;"><img :src="baseURL+'/static/common/logo.jpg'" alt=""></a>
                </div>
                <div class="list_text">
                  <a href="javascript:;">夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男</a>
                </div>
              </li>
              <li class="list_info">
                <p>规格：默认</p>
                <p>尺寸：16*16*3(cm)</p>
              </li>
              <li class="list_price">
                <p class="price">￥980</p>
              </li>
              <li class="list_amount">
                <div class="amount_box">
                  <a href="javascript:;" class="reduce reSty">-</a>
                  <input type="text" value="1" class="sum">
                  <a href="javascript:;" class="plus">+</a>
                </div>
              </li>
              <li class="list_sum">
                <p class="sum_price">￥980</p>
              </li>
              <li class="list_op">
                <p class="del">
                  <a href="javascript:;" class="delBtn">移除商品</a>
                </p>
              </li>
            </ul>
            <ul class="order_lists">
              <li class="list_chk">
                <input type="checkbox" id="checkbox_3" class="son_check">
                <label for="checkbox_3"></label>
              </li>
              <li class="list_con">
                <div class="list_img">
                  <a href="javascript:;"><img :src="baseURL+'/static/common/logo.jpg'" alt=""></a>
                </div>
                <div class="list_text">
                  <a href="javascript:;">夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男</a>
                </div>
              </li>
              <li class="list_info">
                <p>规格：默认</p>
                <p>尺寸：16*16*3(cm)</p>
              </li>
              <li class="list_price">
                <p class="price">￥780</p>
              </li>
              <li class="list_amount">
                <div class="amount_box">
                  <a href="javascript:;" class="reduce reSty">-</a>
                  <input type="text" value="1" class="sum">
                  <a href="javascript:;" class="plus">+</a>
                </div>
              </li>
              <li class="list_sum">
                <p class="sum_price">￥780</p>
              </li>
              <li class="list_op">
                <p class="del">
                  <a href="javascript:;" class="delBtn">移除商品</a>
                </p>
              </li>
            </ul>
            <ul class="order_lists">
              <li class="list_chk">
                <input type="checkbox" id="checkbox_6" class="son_check">
                <label for="checkbox_6"></label>
              </li>
              <li class="list_con">
                <div class="list_img">
                  <a href="javascript:;"><img :src="baseURL+'/static/common/logo.jpg'" alt=""></a>
                </div>
                <div class="list_text">
                  <a href="javascript:;">夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男</a>
                </div>
              </li>
              <li class="list_info">
                <p>规格：默认</p>
                <p>尺寸：16*16*3(cm)</p>
              </li>
              <li class="list_price">
                <p class="price">￥180</p>
              </li>
              <li class="list_amount">
                <div class="amount_box">
                  <a href="javascript:;" class="reduce reSty">-</a>
                  <input type="text" value="1" class="sum">
                  <a href="javascript:;" class="plus">+</a>
                </div>
              </li>
              <li class="list_sum">
                <p class="sum_price">￥180</p>
              </li>
              <li class="list_op">
                <p class="del">
                  <a href="javascript:;" class="delBtn">移除商品</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="cartBox">
          <div class="shop_info">
            <div class="all_check">
              <!--店铺全选-->
              <input type="checkbox" id="shop_b" class="shopChoice">
              <label for="shop_b" class="shop"></label>
            </div>
            <div class="shop_name">
              店铺：
              <a href="javascript:;">卷卷旗舰店</a>
            </div>
          </div>
          <div class="order_content">
            <ul class="order_lists">
              <li class="list_chk">
                <input type="checkbox" id="checkbox_4" class="son_check">
                <label for="checkbox_4"></label>
              </li>
              <li class="list_con">
                <div class="list_img">
                  <a href="javascript:;"><img :src="baseURL+'/static/common/logo.jpg'" alt=""></a>
                </div>
                <div class="list_text">
                  <a href="javascript:;">夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男</a>
                </div>
              </li>
              <li class="list_info">
                <p>规格：默认</p>
                <p>尺寸：16*16*3(cm)</p>
              </li>
              <li class="list_price">
                <p class="price">￥1980</p>
              </li>
              <li class="list_amount">
                <div class="amount_box">
                  <a href="javascript:;" class="reduce reSty">-</a>
                  <input type="text" value="1" class="sum">
                  <a href="javascript:;" class="plus">+</a>
                </div>
              </li>
              <li class="list_sum">
                <p class="sum_price">￥1980</p>
              </li>
              <li class="list_op">
                <p class="del">
                  <a href="javascript:;" class="delBtn">移除商品</a>
                </p>
              </li>
            </ul>
            <ul class="order_lists">
              <li class="list_chk">
                <input type="checkbox" id="checkbox_5" class="son_check">
                <label for="checkbox_5"></label>
              </li>
              <li class="list_con">
                <div class="list_img">
                  <a href="javascript:;"><img :src="baseURL+'/static/common/logo.jpg'" alt=""></a>
                </div>
                <div class="list_text">
                  <a href="javascript:;">夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男</a>
                </div>
              </li>
              <li class="list_info">
                <p>规格：默认</p>
                <p>尺寸：16*16*3(cm)</p>
              </li>
              <li class="list_price">
                <p class="price">￥480</p>
              </li>
              <li class="list_amount">
                <div class="amount_box">
                  <a href="javascript:;" class="reduce reSty">-</a>
                  <input type="text" value="1" class="sum">
                  <a href="javascript:;" class="plus">+</a>
                </div>
              </li>
              <li class="list_sum">
                <p class="sum_price">￥480</p>
              </li>
              <li class="list_op">
                <p class="del">
                  <a href="javascript:;" class="delBtn">移除商品</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="cartBox">
          <div class="shop_info">
            <div class="all_check">
              <!--店铺全选-->
              <input type="checkbox" id="shop_c" class="shopChoice">
              <label for="shop_c" class="shop"></label>
            </div>
            <div class="shop_name">
              店铺：
              <a href="javascript:;">卷卷旗舰店</a>
            </div>
          </div>
          <div class="order_content">
            <ul class="order_lists">
              <li class="list_chk">
                <input type="checkbox" id="checkbox_8" class="son_check">
                <label for="checkbox_8"></label>
              </li>
              <li class="list_con">
                <div class="list_img">
                  <a href="javascript:;"><img :src="baseURL+'/static/common/logo.jpg'" alt=""></a>
                </div>
                <div class="list_text">
                  <a href="javascript:;">夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男</a>
                </div>
              </li>
              <li class="list_info">
                <p>规格：默认</p>
                <p>尺寸：16*16*3(cm)</p>
              </li>
              <li class="list_price">
                <p class="price">￥1980</p>
              </li>
              <li class="list_amount">
                <div class="amount_box">
                  <a href="javascript:;" class="reduce reSty">-</a>
                  <input type="text" value="1" class="sum">
                  <a href="javascript:;" class="plus">+</a>
                </div>
              </li>
              <li class="list_sum">
                <p class="sum_price">￥1980</p>
              </li>
              <li class="list_op">
                <p class="del">
                  <a href="javascript:;" class="delBtn">移除商品</a>
                </p>
              </li>
            </ul>
            <ul class="order_lists">
              <li class="list_chk">
                <input type="checkbox" id="checkbox_9" class="son_check">
                <label for="checkbox_9"></label>
              </li>
              <li class="list_con">
                <div class="list_img">
                  <a href="javascript:;"><img :src="baseURL+'/static/common/logo.jpg'" alt=""></a>
                </div>
                <div class="list_text">
                  <a href="javascript:;">夏季男士迷彩无袖T恤圆领潮流韩版修身男装背心青年时尚打底衫男</a>
                </div>
              </li>
              <li class="list_info">
                <p>规格：默认</p>
                <p>尺寸：16*16*3(cm)</p>
              </li>
              <li class="list_price">
                <p class="price">￥480</p>
              </li>
              <li class="list_amount">
                <div class="amount_box">
                  <a href="javascript:;" class="reduce reSty">-</a>
                  <input type="text" value="1" class="sum">
                  <a href="javascript:;" class="plus">+</a>
                </div>
              </li>
              <li class="list_sum">
                <p class="sum_price">￥480</p>
              </li>
              <li class="list_op">
                <p class="del">
                  <a href="javascript:;" class="delBtn">移除商品</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <!--底部-->
        <div class="bar-wrapper">
          <div class="bar-right">
            <div class="piece">已选商品<strong class="piece_num">0</strong>件</div>
            <div class="totalMoney">共计: <strong class="total_text">0.00</strong></div>
            <div class="calBtn">
              <a href="javascript:;">结算</a>
            </div>
          </div>
        </div>
      </section>
      <section class="model_bg"></section>
      <section class="my_model">
        <p class="title">删除宝贝<span class="closeModel">X</span></p>
        <p>您确认要删除该宝贝吗？</p>
        <div class="opBtn">
          <a href="javascript:;" class="dialog-sure">确定</a>
          <a href="javascript:;" class="dialog-close">关闭</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart"
}
</script>

<style scoped lang="less">
html,body{
  position: relative;
  width: 100%;
  min-height: 950px;
}
input[type="checkbox"]{
  display: none;
}
label{
  position: relative;
  display: inline-block;
  z-index: 1;
  border: 1px solid #b8b8b8;
  margin-left: 10px;
  border-radius: 1px;
  width: 12px;
  height: 12px;
  cursor: pointer;
}
label.mark{
  background: url("../images/mark1.png") no-repeat -1px -1px;
}

a:hover{
  color: #ff873e;
  text-decoration: underline;
}



.cartMain{
  position: relative;
  width: 1200px;
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 0px 100px;
  min-height: 210px;
}

.cartMain_hd{
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #3c3c3c;
}
.cartMain_hd .cartTop{
  height: 50px;
}
.cartMain_hd .cartTop .list_chk{
  width: 80px;
  text-indent: 30px;
}
.cartMain_hd .cartTop .list_con{
  width: 312px;
}
.cartMain_hd .cartTop .list_chk label{
  position: absolute;
  left: 10px;
  top:19px;
  margin: 0;
}
.cartMain_hd .cartTop .list_info{
  padding: 0;
  text-indent: 15px;
}
.cartMain_hd .cartTop .list_con{
  text-indent: 140px;
}


.cartBox{
  width: 100%;
  margin-bottom: 15px;
}
.cartBox .shop_info{
  position: relative;
  width: 100%;
  height: 38px;
  background-color: #fff;
  line-height: 38px;
  vertical-align: baseline;
}
.cartBox .shop_info .all_check{
  position: relative;
  float: left;
  width: 30px;
  height: 38px;
}

.cartBox .shop_info .all_check input[type="checkbox"]{
  position: absolute;
  z-index: 0;
  left: -20px;
  top: -20px;
}
.cartBox .shop_info .all_check .shop{
  position: absolute;
  top:13px;
}
.cartBox .shop_info .shop_name{
  float: left;
}




.cartBox .order_content{
  border: 1px solid #ccc;
}
.cartBox .order_content a{
  display: block;
}
.order_lists{
  width: 100%;
  height: 130px;
  border-bottom: 1px solid #e7e7e7;
}
.order_lists:last-child{
  border-bottom: none;
}
.order_lists li{
  float: left;
  height: 100%;
}

.order_lists .list_chk{
  position: relative;
  width: 50px;
}
.order_lists .list_chk input[type="checkbox"]{
  position: absolute;
  z-index: 0;
  left: -20px;
  top: -20px;
}
.order_lists .list_chk label{
  margin: 20px 0 0 24px;
}

.order_lists .list_con{
  width: 342px;
}
.order_lists .list_con .list_img{
  width: 90px;
  height: 90px;
  margin-top: 20px;
  float: left;
}
.order_lists .list_con .list_img img{
  width: 100%;
  vertical-align: top;
}
.order_lists .list_con .list_text{
  margin: 20px 0 0 10px;
  line-height: 18px;
  width: 200px;
  float: left;
}
.order_lists .list_con .list_text a{
  color: #3c3c3c;
}
.order_lists .list_con .list_text a:hover{
  color: #ff873e;
  text-decoration: underline;
}

.order_lists .list_info{
  width: 252px;
  box-sizing: border-box;
  padding: 20px 0;
}
.order_lists .list_info p{
  color: #9c9c9c;
  line-height: 18px;
  margin-left: 15px;
}
.order_lists .list_price{
  width: 130px;
}
.order_lists .list_price .price{
  margin-top: 20px;
  line-height: 18px;
  font-family: Verdana,Tahoma,arial;
  color: #3c3c3c;
  font-weight: bold;
}
.order_lists .list_amount{
  width: 120px;
}
.order_lists .list_amount .amount_box{
  margin-top: 20px;
  width: 77px;
  height: 25px;
  position: relative;
}
.order_lists .list_amount .amount_box input{
  width: 39px;
  height: 15px;
  line-height: 15px;
  border: 1px solid #aaa;
  color: #343434;
  text-align: center;
  padding: 4px 0;
  background-color: #fff;
  z-index: 2;
  position: absolute;
  left: 18px;
  float: left;
}
.order_lists .list_amount .amount_box a{
  float: left;
  height: 23px;
  width: 17px;
  border: 1px solid #e5e5e5;
  background: #f0f0f0;
  text-align: center;
  line-height: 23px;
  color: #444;
  position: absolute;
  top:0;
}
.order_lists .list_amount .amount_box a:hover{
  border-color: #ff873e;
  text-decoration: none;
  color: #ff873e;
  z-index: 3;
}

.order_lists .list_amount .amount_box .reduce{
  left: 0;
}

.order_lists .list_amount .amount_box .reSty{
  color: #cbcbcb;
}
.order_lists .list_amount .amount_box .reSty:hover{
  border-right: none;
  border-color: #e5e5e5;
  text-decoration: none;
  color: #cbcbcb;
}

.order_lists .list_amount .amount_box .plus{
  border-left-color: transparent;
  right: 0;
}


.order_lists .list_sum{
  width: 140px;
}
.order_lists .list_sum .sum_price{
  line-height: 18px;
  margin-top: 20px;
  font-family: Verdana,Tahoma,arial;
  color: #ff0000;
  font-weight: bold;
}
.order_lists .list_op{
  width: 164px;
}
.order_lists .list_op .del{
  margin-top: 20px;
  line-height: 18px;
}
/*底部*/
.bar-wrapper{
  width: 1200px;
  height: 50px;
  bottom: -1px;
  z-index: 99;
  background: #e5e5e5;
}
.bar-wrapper .bar-right{
  float: right;
  color: #3c3c3c;
}
.bar-wrapper .bar-right strong{
  color: #f40;
}

.bar-wrapper .bar-right .piece{
  float: left;
  min-width: 110px;
  margin-right: 20px;
  height: 50px;
  line-height: 50px;
}
.bar-wrapper .bar-right .piece .piece_num{
  display: inline-block;
  padding: 0 10px;
  font-weight: 700;
  font-size: 18px;
  font-family: tohoma,arial;
}
.bar-wrapper .bar-right .totalMoney{
  float: left;
  min-width: 100px;
  height: 50px;
  line-height: 50px;
}
.bar-wrapper .bar-right .totalMoney .total_text{
  float: right;
  font-weight: 400;
  font-size: 20px;
  font-family: Arial;
  vertical-align: middle;
  margin-right: 10px;
  margin-left: 15px;
}
.bar-wrapper .bar-right .calBtn{
  float: left;
}
.bar-wrapper .bar-right .calBtn a{
  display: block;
  width: 120px;
  height: 50px;
  color: #fff;
  background: #B0B0B0;
  cursor: not-allowed;
  font-size: 22px;
  letter-spacing: 5px;
  text-decoration: none;
  line-height: 50px;
  text-align: center;
  border-radius: 2px;
}
.bar-wrapper .bar-right .calBtn a.btn_sty{
  background: #f40;
  cursor: pointer;
}


.model_bg{
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,.6);
  z-index: 999;
  display: none;
}
.my_model{
  position: fixed;
  display: none;
  top:50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -200px;
  z-index: 9999;
  width: 360px;
  height: 120px;
  border: 1px solid #aeaeae;
  border-radius: 3px;
  padding: 20px;
  background: #fff;
}
.my_model .title{
  font-size: 14px;
  color: #3c3c3c;
  font-weight: 700;
  margin-bottom: 20px;
}
.my_model .title .closeModel{
  float: right;
  cursor: pointer;
}
.my_model p{
  line-height:16px;
}
.my_model .opBtn{
  margin-top: 20px;
}
.my_model .opBtn a{
  width: 58px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  -ms-border-radius: 1px;
  border-radius: 1px;
  display: inline-block;
  margin-right: 10px;
  font-weight: 700;
}
.my_model .dialog-sure{
  background: #52a0e5;
  color: #fff;
  border: 1px solid #52a0e5;
}

.my_model .dialog-close{
  background: #fff;
  border: 1px solid #d9d9d9;
  color: #3c3c3c;
}
</style>
