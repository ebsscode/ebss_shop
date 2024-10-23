<template>
    <router-view/>
</template>
<script>
export default {
    name: 'App',
    components: {},
}
</script>
<style lang="less">
body {
    background: #fafaff;
    min-height: 100vh;
}
.mr-10 {
    margin-right: 10px;
}
.ml-10 {
    margin-left: 10px;
}
* {
    border-radius: 4px;
    font-size: 14px;
    border: 0;
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
    box-sizing: border-box;
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
.QQ811565456:hover{
  color: #27c2f3;
  cursor: pointer;
}
.text-ffffff {
    color: #ffffff;
}

.flex {
  display: flex;
}
.flex-grow {
  flex-grow: 1;
}
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
.flex-column-reverse {
  flex-direction: column-reverse !important;
}
.flex-wrap {
    display: flex;
    flex-wrap: wrap;
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
.pointer{
  cursor: pointer;
}
.clamp {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
</style>
