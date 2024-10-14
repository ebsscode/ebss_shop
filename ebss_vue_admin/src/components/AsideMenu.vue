<template>
    <div class="AsideMenu">
        <div class="flex-col">
            <a-menu
                v-model:openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
                mode="inline"
                :inlineIndent="10"
                @click="menuClick"
                :multiple="false"
            >
                <template v-for="(item1,index1) in asideMenu" :key="`${index1}`">
                    <a-sub-menu :key='`${item1.permission_id}`' v-if="item1.children&&item1.children.length>0">
                        <template #icon>
                            <span :class="['QQ811565456',item1.icon]"/>
                        </template>
                        <template #title>{{ item1.name }}</template>
                        <a-menu-item class="menu-item" v-for="(item2,index2) in item1.children" :key='`${item2.permission_id}`' :data="item2">
                          <template #icon>
                            <span :class="['QQ811565456',item2.icon]"/>
                          </template>
                            {{ item2.name }}
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item class="menu-item" :key='`${item1.permission_id}`' v-else :data="item1">
                        <template #icon>
                          <span :class="['QQ811565456',item1.icon]"/>
                        </template>
                        {{ item1.name }}
                    </a-menu-item>
                </template>
            </a-menu>

        </div>
    </div>
</template>
<script>
import router from "@/route/index";
import {arrayToTree} from '@/util/format/array.js'
export default {
    name: 'AsideMenu',
    props: {
        menus: {
            type: Array,
            required: true,
        }
    },
    data: function () {
        return {
            selectedKeys: [],
            openKeys: [],
            asideMenu: [],
        };
    },
    watch: {
        openKeys(newV, oldV) {
            // console.log('openKeys', newV)
            localStorage.setItem('menuOpenKeys', JSON.stringify(newV))
        },
        selectedKeys(newV, oldV) {
            // console.log('selectedKeys', newV)
            localStorage.setItem('menuSelectedKeys', JSON.stringify(newV))
        },
        menus: {
            handler(newV, oldV) {
                // console.log('menus', newV)
                this.asideMenu = arrayToTree(newV, 'permission_id', 0, 'pid')
            },
            immediate: true
        },
    },
    created() {
        let openKeys = localStorage.getItem('menuOpenKeys')
        if (openKeys) this.openKeys = JSON.parse(openKeys)
        let selectedKeys = localStorage.getItem('menuSelectedKeys')
        if (selectedKeys) this.selectedKeys = JSON.parse(selectedKeys)
        // console.log(222, this.menus)
    },
    methods: {
        menuClick({item, key, keyPath}) {
            // console.log(item, key, keyPath)
            router.push(item.data.path)
        },

    }
}
</script>
<style scoped lang="less">
.AsideMenu {
    overflow-y: scroll;
    height: calc(100vh - @top-bar-height);
    flex-shrink: 0;
  .QQ811565456{
    font-size: 16px;
  }
}
</style>
<style lang="less">
.menu-item:hover{
  background: #528de4 !important;
  color: #ffffff !important;
}
.ant-menu-item-selected{
  background: #528de4 !important;
  color: #ffffff !important;

}
</style>
