<template>
  <div class="header">
    <div class="header_container">
      <div class="logo fl">
        <img :src="baseURL+'/static/common/logo.jpg'" style="width: 85px;height: 60px;"/>
        <a href="#"><img :src="baseURL+'/static/pc/ecsc-join.gif'" style="width: 85px;height: 60px;" /></a>
      </div>
      <div class="dsc-search">
        <div class="form">
          <form class="search-form">
            <input name="keywords" type="text" value="" class="search-text" style="color: rgb(153, 153, 153);">
            <button type="submit" class="button button-goods">搜商品</button>
            <button type="submit" class="button button-store">搜店铺</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

</style>
