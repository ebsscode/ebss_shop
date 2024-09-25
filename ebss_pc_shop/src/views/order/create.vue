<template>
  <div id="Orders">

    <div class="Orders_style clearfix">
      <div class="address clearfix">
        <div class="title">收货人信息</div>
        <div class="adderss_list clearfix">
          <div class="title_name">选择收货地址 <a href="#">+添加地址</a></div>
          <div class="list">
            <ul class="confirm active">
              <div class="default">默认地址</div>
              <div class="adderss_operating">
                <div class="Operate">
                  <span class="myicon icon-shanchu" style="font-size: 40px;color: #ffffff;"></span>
                  <span class="myicon icon-bianji" style="font-size: 40px;color: #ffffff;margin-left: 10px;"></span>
                </div>
              </div>
              <div class="user_address">
                <li>小张</li>
                <li>四川成都高新区创业路10号3栋1单元1102式</li>
                <li class="Postcode">610043</li>
                <li>18908269130</li>
              </div>
            </ul>
            <ul>
              <div class="adderss_operating">
                <div class="Operate">
                  <span class="myicon icon-shanchu" style="font-size: 40px;color: #ffffff;"></span>
                  <span class="myicon icon-bianji" style="font-size: 40px;color: #ffffff;margin-left: 10px;"></span>
                </div>
              </div>
              <div class="user_address">
                <li>小张</li>
                <li>四川成都高新区创业路10号3栋1单元1102式</li>
                <li class="Postcode">610043</li>
                <li>18908269130</li>
              </div>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <form class="form" method="post">
        <fieldset>
          <!--产品列表-->
          <div class="Product_List">
            <table>
              <thead><tr class="title"><td class="name">商品名称</td><td class="price">商品价格</td><td class="Preferential">优惠价</td><td class="Quantity">购买数量</td><td class="Money">金额</td></tr></thead>
              <tbody>
              <tr>
                <td class="Product_info">
                  <a href="#"><img :src="baseURL+'/static/common/logo.jpg'" style="width: 100px;height: 100px;"/></a>
                  <a href="#" class="product_name">麻阳冰糖橙子甜橙冰糖柑8斤新鲜水果甜过永兴冰糖橙赣南脐橙包邮</a>
                </td>
                <td><i>￥</i>123.00</td>
                <td><i>￥</i>112.00</td>
                <td>2</td>
                <td class="Moneys"><i>￥</i>224.00</td>
              </tr>
              <tr>
                <td class="Product_info">
                  <a href="#"><img :src="baseURL+'/static/common/logo.jpg'"  style="width: 100px;height: 100px;"/></a>
                  <a href="#" class="product_name">麻阳冰糖橙子甜橙冰糖柑8斤新鲜水果甜过永兴冰糖橙赣南脐橙包邮</a>
                </td>
                <td><i>￥</i>123.00</td>
                <td><i>￥</i>112.00</td>
                <td>2</td>
                <td class="Moneys"><i>￥</i>224.00</td>
              </tr>
              </tbody>
            </table>
            <div class="Pay_info">
              <label>订单留言</label><input name="" type="text"  onkeyup="checkLength(this);" class="text_name " />  <span class="wordage">剩余字数：<span id="sy" style="color:Red;">50</span></span>
            </div>
            <!--价格-->
            <div class="price_style">
              <div class="right_direction">
                <ul>
                  <li><label>商品总价</label><i>￥</i><span>448.00</span></li>
                  <li><label>优惠金额</label><i>￥</i><span>-23.00</span></li>
                  <li><label>配&nbsp;&nbsp;送&nbsp;&nbsp;费</label><i>￥</i><span>0</span></li>
                  <li class="shiji_price"><label>实&nbsp;&nbsp;付&nbsp;&nbsp;款</label><i>￥</i><span>425.00</span></li>
                </ul>
                <div class="btn">
                  <div class="btn-buy" style="background: #df3f3a">提交订单</div>
                  <div class="btn-buy" style="background: #e9a537">返回购物车</div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "create"
}
</script>

<style scoped lang="less">
/***********************订单样式属性***********************/
input.labelauty + label
{
  display: table;
  font-size: 14px;
  border:1px solid #ddd;
  padding: 10px;
  background-color:#FFF;
  cursor: pointer;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  -webkit-transition: background-color 0.25s;
  -o-transition: background-color 0.25s;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

#Orders .Process {
  background:url(../images/Process.png) no-repeat left -180px;
  height:180px;
  width:1200px;
}
#Orders .Orders_style {
  padding:20px;
  width:1200px;
  margin:0 auto;
  position:relative;
}
#Orders .Orders_style .address {
}#Orders .Orders_style .address .title {
   height:40px;
   line-height:40px;
   border-bottom:dashed 1px #ddd;
   font-size:16px
 }
#Orders .Orders_style .address .adderss_list .title_name {
  font-size:14px;
  line-height:40px;
  text-align:center;
  height:40px;
  background:#EEE
}
#Orders .Orders_style .address .adderss_list .title_name a {
  float:right;
  padding-right:10px;
  color:#C00
}
.address .adderss_list .list {
  margin:0 auto;
  width:1200px;
}
.address .adderss_list .list  ul {
  float:left;
  width:360px;
  margin:13px;
  position:relative;
  &:hover{
    .adderss_operating {
      display:block;
    }
  }
}
.address .user_address {
  position:relative;
  cursor:pointer;
  width:360px;
  padding:20px;
  background:url("@{baseURL}/static/pc/xf_bg.png") no-repeat;
  height:220px;
  z-index:-1;
}
.address .adderss_list .list ul.active {
   height:220px;
   width:360px;
   background:url("@{baseURL}/static/pc/confirm.png") no-repeat;
}
.address .adderss_list .list .user_address li {
  font-size:14px;
  line-height:30px;
}
.address .adderss_list .list ul .adderss_operating {
  display:none
}
.address .adderss_list .list ul .default {
  position:absolute;
  background:url("@{baseURL}/static/pc/bg-gray.png") repeat;
  height:30px;
  width:100px;
  top:0px;
  left:0px;
  color:#FFF;
  text-align:center;
  line-height:30px;
  font-size:16px}
.address .adderss_list .adderss_operating {
   background: rgba(137, 138, 138,0.5);
   width:360px;
   height:220px;
   position:absolute;
   top:0px;
   left:0px;
 }
.address .adderss_list .adderss_operating .Operate {
  margin:0 auto;
  width:130px;
  height:50px;
  margin-top:80px;
}
.address .adderss_list .list .user_address li.Postcode {
  position:absolute;
  bottom:15px;
  letter-spacing:22px;
  text-align:center;
  left:25px;
}


.Product_List {
  padding:10px 0px;
  border-top:1px solid #ddd
}
.Product_List table {
  width:100%;
  border:1px solid #ddd
}
.Product_List table thead .title {
  background:#ededed;
  height:40px;
  line-height:40px;
  text-align:center;
  font-size:16px
}
.Product_List table thead .title .name {
  width:600px
}
.Product_List table tbody tr {
  border-bottom:1px dotted #ddd
}
.Product_List table tbody td {
  padding:10px;
  text-align:center;
  font-size:16px
}
.Product_List table tbody td  img {
  border:1px solid #ddd;
  padding:1px
}
.Product_List table tbody td i {
  font-size:12px
}
.Product_List table tbody td.Moneys {
  color:#C00
}
.Product_List table tbody td.Product_info {
  text-align:left
}
.Product_List table tbody td.Product_info a.product_name {
  width:300px
}
.Product_List table tbody td.Product_info a {
  float:left;
  display:block;
  margin-right:10px;
  color:#333;
  font-size:14px
}
.Product_List .Pay_info {
  margin:10px 0px
}
.Product_List .Pay_info .text_name {
  border:1px solid #ddd;
  width:500px;
  margin:0px 5px;
  padding:5px;
  min-height:18px;
  border-radius:3px 3px 3px 3px;
  -moz-border-radius:3px 3px 3px 3px;
  -webkit-border-radius:3px 3px 3px 3px
}
.Product_List  .price_style .right_direction {
  float:right;
  width:400px
}
.Product_List  .price_style ul {
  width:200px;
  float:right;
  line-height:30px;
  font-size:14px
}
.Product_List  .price_style ul span {
  color:#F00;
  font-size:16px
}
.Product_List  .price_style ul i {
  font-size:12px;
  color:#F00
}
.Product_List  .price_style ul label {
  margin-right:10px
}
.Product_List  .price_style ul .shiji_price span {
  font-size:18px;
  font-weight:bold
}
.Product_List  .price_style  .btn {
  float:right;
  margin:10px 0px;
  font-size:18px
}
.Product_List  .price_style  .btn .btn-buy {
  width:152px;
  height:36px;
  border:0px;
  float:left;
  color:#FFF;
  margin-left:20px;
  cursor:pointer;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}






</style>
