<template>
    <div class="admin-content">
        <div class="header justify-between text-ffffff">
            <div class="align-center">
              <div @click="goIndex" class="system-name pointer">{{ configs.name }}</div>
              <div class="justify-center align-center">
                <div @click="collapsed=!collapsed" style="margin-left: 20px">
                  <span class="QQ811565456 hewei-caidanshouqi" v-if="collapsed"></span>
                  <span class="QQ811565456 hewei-caidanzhankai" v-else></span>
                </div>
                <span class="QQ811565456 hewei-shuaxin" style="margin-left: 10px" @click="reload"/>
              </div>
            </div>
            <div class="align-center">
              <a-dropdown :align="{offset: [-20, 11]}" v-if="module_list.length&&configs.env=='dev'" v-model:open="show_module">
                <div class="justify-between align-center" @click.prevent style="margin-right: 20px;margin-left: auto;">
                  <span class="justify-center" style="margin-right: 5px;">{{ selectedModule?module_list.find(i=>i.module_id==selectedModule).name:'请选择模块' }}</span>
                  <span class="QQ811565456 hewei-xiangshang2" v-if="show_module"/>
                  <span class="QQ811565456 hewei-xiangxia2" v-else/>
                </div>
                <template #overlay>
                  <a-menu @click="moduleClick">
                    <a-menu-item :key="item.module_id" v-for="(item,index) in module_list">
                      {{ item.name }}
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
              <a-dropdown :align="{offset: [-60, 11]}" v-if="mch_list.length" v-model:open="show_mch">
                <div class="justify-between align-center" @click.prevent style="margin-right: 20px;margin-left: auto;">
                  <span class="justify-center" style="margin-right: 5px;">{{ selectedMch?mch_list.find(i=>i.mch_id==selectedMch).name:'请选择商户' }}</span>
                  <span class="QQ811565456 hewei-xiangshang2" v-if="show_mch"/>
                  <span class="QQ811565456 hewei-xiangxia2" v-else/>
                </div>
                <template #overlay>
                  <div class="flex-col pointer mch-select-body" style="background: #ffffff;border: 1px solid #ffffff;padding: 12px;border-radius: 10px;box-shadow: 0px 2px 16px 0px rgba(4,0,0,0.45);">
                    <div @click="mchClick(item)" class="align-center mch-item" :key="item.mch_id" v-for="(item,index) in mch_list" style="">
                      <a-image style="border-radius: 100%" :width="20" :src="staticURL()+'/'+item.logo_img"/>
                      <div style="font-size: 18px;margin-left: 8px;">{{ item.name }}</div>
                    </div>
                    <div @click="mchClick()" class="align-center mch-item">
                      <a-button style="width: 100%;" type="primary">重置</a-button>
                    </div>
                  </div>
                </template>
              </a-dropdown>
              <a-dropdown :align="{offset: [-10, 11]}" v-model:open="show_my">
                <div class="justify-between align-center" @click.prevent style="margin-right: 20px;margin-left: auto;">
                  <span class="justify-center" style="margin-right: 5px;">{{ username }}</span>
                  <span class="QQ811565456 hewei-xiangshang2" v-if="show_my"/>
                  <span class="QQ811565456 hewei-xiangxia2" v-else/>
                </div>
                <template #overlay>
                  <a-menu @click="menuClick">
                    <a-menu-item key="edit">
                      修改密码
                    </a-menu-item>
                    <a-menu-item key="out">
                      退出
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
        </div>
        <div class="flex-row block-2">
          <a-layout>
            <a-layout-sider v-model:collapsed="collapsed" :style="{backgroundColor:'#f8f8f8'}">
              <AsideMenu :menus="menus" />
            </a-layout-sider>
            <!-- todo... 按标签页打开和关闭页面-->
            <a-layout-content class="layout-content" :style="{padding: '0 5px 5px 5px'}">
<!--              <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" hide-add>-->
<!--                <a-tab-pane v-for="(pane,i) in panes" :key="i" :tab="pane.title" :closable="pane.closable">-->

<!--                </a-tab-pane>-->
<!--              </a-tabs>-->


              <router-view/>
            </a-layout-content>
          </a-layout>
        </div>
        <EditMy v-model:showEditMy="showEditMy"/>
    </div>
</template>
<script lang="jsx">
import {defineAsyncComponent} from 'vue'
import router from "@/route/index";
import {routes} from '@/route/routes'
import {getPermissions} from '@/util/user/permisson.js'
export default {
    name: 'layoutIndex',
    components: {
        AsideMenu: defineAsyncComponent(() => import('@/components/AsideMenu.vue')),
        EditMy: defineAsyncComponent(() => import('@/components/EditMy.vue')),
        ModuleSelect: defineAsyncComponent(() => import('@/components/ModuleSelect.vue')),
    },
    data() {
        return {
            username: localStorage.getItem('username'),
            showEditMy: false,
            show_my: false,
            show_module: false,
            show_mch: false,
            collapsed: false,
            topActiveMenu: null,
            selectedMch: localStorage.getItem('mch_id'),
            selectedModule: localStorage.getItem('base_module_id'),
            role_id: localStorage.getItem('role_id'),
            user_id: localStorage.getItem('user_id'),
            permissions: [],
            menus: [],
            mch_list: [],
            module_list: [],
            configs: {},
            panes:[
              {
                title: '订单管理',
                content: 'Content of Tab 1',
                key: '1',
              },
              {
                title: '用户管理',
                content: 'Content of Tab 2',
                key: '2',
              },
              {
                title: '商品管理',
                content: 'Content of Tab 3',
                key: '3',
              },
            ],
            activeKey:'1'
        }
    },
    watch: {
        permissions: {
            handler(newV, oldV) {
                // console.log(111, newV)
                this.menus = newV.filter(i => i.is_show==1 && i.is_menu==1)
            },
            immediate: true
        }
    },
    async mounted() {
        this.getConfigs()
        this.getModule()
        this.permissions = await getPermissions();
        this.getMch();
        let selectedKeys = localStorage.getItem('menuSelectedKeys')
        // console.log(111,selectedKeys,this.menus)
        if (this.$route.path=='/home'&&selectedKeys&&selectedKeys.length) {
            this.selectedKeys = JSON.parse(selectedKeys)
            let findMenu = this.menus.find(i => i.permission_id == this.selectedKeys[0])
            // console.log('find', this.menus, find, this.selectedKeys[0])
            if (findMenu) {
              let findRoute = null
              routes.map(i=>{
                if(i.children){
                  i.children.find( t => {
                    if(`${i.path}/${t.path}` == findMenu.path){
                      findRoute=i;
                    }
                  })
                }else{
                  if(i.path === findMenu.path){
                    findRoute=i;
                  }
                }
              })
              if(findRoute){
                router.push({ path: findMenu.path, replace: true })
              }
            }
        }
    },
    methods: {
      onEdit(index) {
          this.panes.splice(index,1)
      },
      goIndex() {
          router.push('/')
        },
        getConfigs() {
            this.post('/admin/config/front').then(({code, configs}) => {
                if (code === 1) {
                    this.configs = configs
                }
            })
        },
        reload() {
            window.location.reload();
        },
        menuClick({key}) {
            if (key === 'edit') this.showEditMy = true
            if (key === 'out') {
                localStorage.clear()
                router.push('/')
            }
        },
        mchClick(item) {
          if(!item){
            localStorage.setItem('mch_id','');
            window.location.reload()
            return;
          }
          this.selectedMch = item.mch_id
          localStorage.setItem('mch_id',item.mch_id)
          window.location.reload()
        },
        moduleClick({key}) {
          this.selectedModule = key
          localStorage.setItem('base_module_id',key)
          window.location.reload()
        },
        getMch() {
          this.post('/admin/user/mch_list',{}).then(({code, list}) => {
            if (code === 1) {
              this.mch_list = list
            }
          })
        },
        getModule() {
          this.post('/admin/module/list').then(({code, list}) => {
            if (code === 1) {
              this.module_list = list
            }
          })
        },
    },
}
</script>
<style lang="less">
.mch-select-body{
  .mch-item{
    padding: 10px;
    //border: 1px solid #ff99ff;
    &:hover{
      background: #e0e4ee;
    }
  }
}
.layout-content {
  overflow-y: scroll;
  height: calc(100vh - @top-bar-height);
  flex-shrink: 0;
}
</style>
<style lang="less" scoped>
.admin-content {
    .header {
        position: sticky;
        top: 0;
        left: 0;

        height: @top-bar-height;
        background: linear-gradient(to left, #7b4397, #2196f3);
        border-radius: 0;
        font-size: 18px;
        .system-name {
            padding-left: 20px;
            color: #ffffff;
            font-weight: 600;
        }
    }

}
</style>
