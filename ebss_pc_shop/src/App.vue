<template>
    <router-view/>
</template>
<script>
export default {
    name: 'App',
    components: {},
    created() {
    }
}
</script>
<style lang="less">
@import url("@/assets/base.less");
@import url("@/assets/style.less");
@import url("@/assets/wicon/iconfont.css");
@import url("@/assets/icon/iconfont.css");

body {
    background-color: #fafaff !important;
    min-height: 100vh;
}
* {
    font-size: 14px;
    border: 0;
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
    box-sizing:border-box;
}
ul,ol,li {
  list-style:none;
}
em,i,u {
  font-style:normal;
}
.text-color{
  color: #27c2f3;
}
.bg-color{
  background-color: #27c2f3;
}
.border-color{
  border: 1px solid #27c2f3;
}
.myicon:hover{
  color: #27c2f3;
  cursor: pointer;
}
.text-ffffff {
    color: #ffffff;
}
.flex-col {
    display: flex;
    flex-direction: column;
}
.flex-row {
    display: flex;
    flex-direction: row;
}
.justify-start {
    display: flex;
    justify-content: flex-start;
}
.justify-center {
    display: flex;
    justify-content: center;
}
.justify-end {
    display: flex;
    justify-content: flex-end;
}
.justify-evenly {
    display: flex;
    justify-content: space-evenly;
}
.justify-around {
    display: flex;
    justify-content: space-around;
}
.justify-between {
    display: flex;
    justify-content: space-between;
}
.align-start {
    display: flex;
    align-items: flex-start;
}
.align-center {
    display: flex;
    align-items: center;
}
.align-end {
    display: flex;
    align-items: flex-end;
}
</style>
