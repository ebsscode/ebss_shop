<template>
<div>
  <div class="user_address_style">
    <div class="title_style"><em></em>地址管理</div>
    <div class="add_address">
      <span class="name">添加送货地址</span>
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr><td class="label_name">收&nbsp;货&nbsp;&nbsp;人：</td><td><input name="" type="text"  class="add_text" style=" width:100px"/><i>*</i></td></tr>
        <tr><td class="label_name">所在地区：</td><td><select size="1">
          <option value="1">请选择国家</option>
        </select>
          <select size="1">
            <option value="1">省</option>
          </select>
          <select size="1">
            <option value="2">市</option>
          </select>
          <select size="1">
            <option value="3">县/区</option>
          </select><i>*</i></td></tr>
        <tr><td class="label_name">街道地址：</td><td><textarea name="" cols="" rows="" style=" width:500px; height:100px; margin:5px 0px"></textarea><i>*</i></td></tr>
        <tr><td class="label_name">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：</td><td><input name="" type="text" class="add_text" style=" width:100px"/><i>*</i></td></tr>
        <tr><td class="label_name">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</td><td><input name="" type="text" class="add_text" style=" width:200px"/>&nbsp;&nbsp;(选填)</td></tr>
        <tr><td class="label_name">固定电话：</td>
          <td><input name="" type="text" class="add_text" style="width:60px" placeholder="区号"/>-<input name="" type="text" class="add_text" style="width:100px" placeholder="电话号码"/>-<input name="" type="text" class="add_text" style="width:60px" placeholder="分机号"/>&nbsp;&nbsp;(选填)</td></tr>
        <tr class="moren_dz" style="color: #999"><td class="label_name"></td><td><label><input name="" type="checkbox" value="" />设置为默认地址</label></td></tr>
        <tr><td colspan="2" class="center"><input name="" type="submit" value="保存"  class="add_dzbtn"/><input name="" type="reset" value="清空"  class="reset_btn"/></td></tr>
      </table>
    </div>
    <!--用户地址-->
    <div class="address_content">
      <div class="address_prompt">以添加了5条地址，最多保存添加15条地址</div>
      <table cellpadding="0" cellspacing="0" class="user_address" width="100%">
        <thead>
        <tr class="label"><td width="80px;">收货人</td><td width="180px;">所在地</td><td width="220px;">详细地址</td><td width="80px;">邮编</td><td width="120px;">电话手机</td><td width="180px;">发票抬头</td><td width="80px;">操作</td></tr>
        </thead>
        <tbody>
        <tr><td>张小泉</td><td>江苏南京雨花台区</td><td>大件路4号软件大厦B栋102室</td><td>210000</td><td>12343323221</td><td>个人</td><td><a href="#">修改</a> | <a href="#">删除</a></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "addr"
}
</script>

<style scoped lang="less">
.user_address_style{
  width: 1200px;
  margin: 0 auto;
}
.user_address_style .add_address {
  border:1px solid #ddd;
  position:relative;
  padding:20px;
  margin:20px 0px;
  font-size:14px;
}
.user_address_style .add_address .name {
  position:absolute;
  background-color:#ffffff;
  padding:5px 20px;
  top:-15px;
}
.user_address_style .add_address table {
  line-height:40px;
  color:#666
}
.user_address_style .add_address table .add_dzbtn {
  border:1px solid #90b830;
  margin:5px;
  height:32px;
  width:60px;
  color:#FFF;
  cursor:pointer;
  FILTER:progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#A4CA4A,endColorStr=#90b830);
  /*IE*/
  background:-ms-linear-gradient(top,#A4CA4A,#90b830);
  /* IE10+ */
  background:-moz-linear-gradient(top,#A4CA4A,#90b830);
  /*火狐*/
  background:-webkit-gradient(linear,0% 0%,0% 100%,from(#A4CA4A),to(#90b830));
  /*谷歌*/
}
.user_address_style .add_address table .reset_btn {
  border:1px solid #ddd;
  margin:5px;
  height:32px;
  width:60px;
  color:#999;
  cursor:pointer
}
.user_address_style .add_address table .reset_btn:hover {
  FILTER:progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#ededed,endColorStr=#ededed);
  /*IE*/
  background:-ms-linear-gradient(top,#ededed,#ededed);
  /* IE10+ */
  background:-moz-linear-gradient(top,#ededed,#ededed);
  /*火狐*/
  background:-webkit-gradient(linear,0% 0%,0% 100%,from(#ededed),to(#ededed));
  /*谷歌*/
}
.user_address_style .add_address table .add_dzbtn:hover {
  FILTER:progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#90b830,endColorStr=#90b830);
  /*IE*/
  background:-ms-linear-gradient(top,#90b830,#90b830);
  /* IE10+ */
  background:-moz-linear-gradient(top,#90b830,#90b830);
  /*火狐*/
  background:-webkit-gradient(linear,0% 0%,0% 100%,from(#90b830),to(#90b830));
  /*谷歌*/
}
.user_address_style .add_address table .label_name {
  width:90px;
  text-align:right;
  vertical-align:top;
}
.user_address_style .add_address table i {
  color:#F30;
  vertical-align:top;
  padding:0px 5px;
}
.user_address_style .add_address table .add_text,.user_address_style .add_address table textarea,.user_address_style .add_address table select {
  height:30px;
  border:1px solid #ddd;
  padding:0px 5px;
  color:#666
}
/***地址列表样式属性***/
.user_address_style .address_prompt {
  color:#F90;
  height:30px;
  border:1px solid #F93;
  margin-bottom:10px;
  line-height:30px;
  padding:0px 10px;
}
.user_address_style .address_content .user_address .label {
  background-color:#ededed;
  border:1px solid #ddd;
  text-align:center
}
.user_address_style .address_content .user_address tr {
  border-bottom:1px solid #ddd;
  height:30px;
  text-align:center;
  border-left:1px solid #ddd;
  border-right:1px solid #ddd;
}
.user_address_style .address_content {
  margin:20px 0px;
  position:relative;
}

</style>
