<template>
  <div class="justify-between align-center action-bar">
    <div class="align-center">
      <slot name="search"></slot>
      <a-button type="primary" v-if="showQuery" @click="getData" style="margin-right:10px;">查询</a-button>
    </div>
    <div class="justify-center align-center">
      <slot name="searchBar"></slot>
      <a-popconfirm
          v-if="rowSelection.selectedRowKeys.length"
          title="确定删除此数据吗？"
          ok-text="删除"
          cancel-text="取消"
          okType="danger"
          @confirm="batchDelete"
      >
        <a-button type="primary" danger style="margin-right:10px;">批量删除</a-button>
      </a-popconfirm>
      <a-button type="primary" v-if="showAdd" style="margin-right:10px;" @click="add">添加</a-button>
    </div>
  </div>
  <a-table sticky :columns="tableColumns" :data-source="tableData" :pagination="pagination" @change="tableChange" :row-selection="rowSelection" :loading="tableLoading">
    <template #bodyCell="{ text, record, index, column  }">
      <template v-if="column.key === 'action'">
        <a-tooltip title="复制并新建此数据">
          <span @click="copy(record)" v-if="showCopy(record)" class="QQ811565456 hewei-fuzhi ml-10"></span>
        </a-tooltip>
        <a-popconfirm
            v-if="showDelete(record)"
            title="确定删除此数据吗？"
            ok-text="删除"
            cancel-text="取消"
            okType="danger"
            @confirm="deleteRow(record)"
        >
          <span class="QQ811565456 hewei-shanchu ml-10"></span>
        </a-popconfirm>
        <span @click="edit(record)" v-if="showEdit(record)" class="QQ811565456 hewei-bianji ml-10"></span>
        <slot name="actionBar" :record="record" :column="column"></slot>
      </template>
      <template v-if="record[column.key]&&column.key.endsWith('_time')">
        {{ formatTime(record[column.key]) }}
      </template>
      <template v-if="record[column.key]&&column.key.endsWith('img')">
        <a-image
            :width="30"
            :src="staticURL()+'/'+record[column.key]"
            :fallback="constant.imgLoad"
        />
      </template>
      <template v-if="column.is_edit">
        <template v-if="column.key.startsWith('is_')">
          <YesOrNo :disabled="!column.is_edit" v-model:value="tableData[index][column.key]" @changed="(e)=>saveColumn(index)"/>
        </template>
        <a-input v-else v-model:value="tableData[index][column.key]" @pressEnter="saveColumn(index)"/>
      </template>
      <template v-else>
        <template v-if="column.key.startsWith('is_')">
          {{ record[column.key] === 1 ? '是' : '否' }}
        </template>
      </template>
    </template>
    <template #headerCell="{ column }">
      <template v-if="column.key === 'action'">
        <div class="justify-end align-center">
          <a-tooltip title="导出表格">
            <span class="QQ811565456 hewei-excel-full mr-10" @click="exports"/>
          </a-tooltip>
          <span>{{ column.title }}</span>
        </div>
      </template>
    </template>
  </a-table>
  <a-modal :footer="null" v-model:open="showSaveModal" :width="modelWidth" :title="$parent.saveFormData[`${table_key}`]?editTexT:'新增'" @cancel="hide" :style="$parent.modalStyle||{}">
    <div style="overflow-y: scroll;max-height: 92vh;">
      <slot name="save"></slot>
    </div>
    <div class="justify-end">
      <a-button type="default" @click.prevent="cancel" style="margin-right: 10px">取消</a-button>
      <a-button :loading="saveLoading" type="primary" html-type="submit" @click="submit">提交</a-button>
    </div>
  </a-modal>
</template>
<script lang="jsx">
import * as ExcelJS from "exceljs";
import {saveAs} from 'file-saver';
import {has} from '@/util/type/base.js'
import {paginate} from '@/util/content/page.js'
export default {
  name: "Crud",
  emits: ["hide","show"],
  data: function () {
    return {
      modelWidth: this.$parent.modelWidth?this.$parent.modelWidth:'70%',
      table: this.$parent.table,
      table_key: '',
      oldSaveFormData: '{}',
      join_tables: this.$parent.join_tables?this.$parent.join_tables:[],
      editTexT: this.$parent.editTexT?this.$parent.editTexT:'编辑',
      deleteFunc: this.$parent.deleteFunc?this.$parent.deleteFunc:null,
      listFunc: this.$parent.listFunc?this.$parent.listFunc:null,
      saveFunc: this.$parent.saveFunc?this.$parent.saveFunc:null,
      showQuery: this.$parent.showQuery!==undefined?this.$parent.showQuery:true,
      showAdd: this.$parent.showAdd!==undefined?this.$parent.showAdd:true,
      showDelete: this.$parent.showDelete?this.$parent.showDelete:(e)=>true,
      showEdit: this.$parent.showEdit!==undefined?this.$parent.showEdit:(e)=>true,
      showCopy: this.$parent.showCopy!==undefined?this.$parent.showCopy:(e)=>false,
      pagination:paginate(this.$parent.pageSize),
      showSaveModal: false,
      tableLoading: false,
      saveLoading: false,
      sort: null,
      tableData: [],
      editableData: [],
      rowSelection: {
        selectedRowKeys:[],
        onChange:(e)=>{
          this.rowSelection.selectedRowKeys = e;
          this.$emit('rowSelectionChange',e)
        }
      },
    };
  },
  computed: {
    saveFormData() {
      return this.$parent.saveFormData
    },
    searchObj() {
      return this.$parent.searchObj
    },
    tableColumns() {
      let tableColumns = [{
        title: 'ID',
        key: `${this.table_key}`,
        sorter: true,
      }, ...this.$parent.columns, {
        title: '操作',
        key: 'action',
        align: 'right',
      }].map(i => {
        i.align = i.align ? i.align : 'center'
        i.dataIndex = i.dataIndex ? i.dataIndex : i.key
        i.ellipsis = i.ellipsis ? i.ellipsis : false
        i.is_edit = i.is_edit ? i.is_edit : false
        i.customRender = i.customRender ? i.customRender : null
        i.sorter = i.sorter ? i.sorter : null
        if(i.key=='add_time'||i.key=='update_time'||i.key=='sort_num'||i.key=='user_id'){
          i.sorter = i.sorter ? i.sorter : true
        }
        return i
      })
      return tableColumns
    },
  },
  created() {
    this.getData()
  },
  mounted() {
    this.oldSaveFormData = JSON.stringify(this.$parent.saveFormData)
  },
  methods: {
    saveColumn(index) {
      this.post('/admin/crud/save', {table: this.table, ...this.tableData[index]}).then(({code,msg}) => {
        if (code === 1) {
          this.getData()
          this.success(msg);
        }
      })
    },
    deleteRow(row) {
      if (this.deleteFunc) {
        this.deleteFunc(row);
        this.getData()
        return;
      }
      this.deleteSubmit([row[this.table_key]])
    },
    cancel(){
      this.$parent.saveFormData=JSON.parse(this.oldSaveFormData);
      this.toggleModel()
    },
    batchDelete(){
      this.deleteSubmit(this.rowSelection.selectedRowKeys)
    },
    copy(record){
      let record_copy = JSON.parse(JSON.stringify(record))
      delete record_copy[this.table_key]
      this.$parent.saveFormData=record_copy;
      this.toggleModel()
    },
    deleteSubmit(table_ids){
      this.post('/admin/crud/del  ete', {table: this.table, table_ids: table_ids }).then(({code,msg}) => {
        if (code === 1) {
          this.success(msg);
          this.getData()
        }
      })
    },
    tableChange(pagination, filters, sorter, {currentDataSource}) {
      if(has(sorter)&&sorter.order){
        this.sort = [{
          [sorter.field]:sorter.order=='ascend'?'asc':'desc'
        }]
      }else{
        this.sort = []
      }
      this.pagination = {...this.pagination, ...pagination};
      localStorage.setItem('pageSize',this.pagination.pageSize)
      this.getData()
    },
    async exports() {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = '计算客软件';
      workbook.lastModifiedBy = '计算客软件';
      workbook.created = new Date();
      workbook.modified = new Date();
      workbook.lastPrinted = new Date();
      const sheet = workbook.addWorksheet('My Sheet');
      sheet.columns = this.tableColumns.filter(i => i.key != 'action').map(i => {
        return {
          header: i.title, key: i.key, width: i.title.length * 3
        }
      });
      const data = this.tableData.map(i => {
        return i
      });
      sheet.addRows(data);
      let fileName = window.location.href
      workbook.xlsx.writeBuffer().then(function (buffer) {
        // console.log(666, buffer)
        saveAs(
            new Blob([buffer], {type: "application/octet-stream"}),
            `${fileName}.xlsx`
        );
      });
    },
    edit(record) {
      this.$parent.saveFormData=record;
      this.toggleModel()
    },
    add() {
      this.$parent.saveFormData=JSON.parse(this.oldSaveFormData);
      this.toggleModel();
    },
    hide() {
      this.showSaveModal = false
      this.$emit('hide')
    },
    show() {
      this.showSaveModal = true
      this.$emit('show')
    },
    toggleModel() {
      if(this.showSaveModal){
        this.hide()
      }else{
        this.show()
      }
    },
    submit() {
      if(this.$parent.$refs.save_form){
        this.$parent.$refs.save_form.validate().then((e) => {
          this.submitPost();
        }).catch(err => {
          this.error(err.errorFields[0].errors[0]||err.errorFields[0].name[0]+'数据校验失败！')
        });
      }else{
        this.submitPost();
      }
    },
    submitPost(){
      // console.log('this.$parent.saveFormData',this.$parent.saveFormData);return;
      if (this.saveFunc) {
        this.saveFunc(this.saveFormData);
        this.toggleModel()
        this.$parent.saveFormData=JSON.parse(this.oldSaveFormData)
        return;
      }
      this.saveLoading=true
      this.post('/admin/crud/save', {table: this.table, ...this.saveFormData}).then(({code,msg}) => {
        if (code === 1) {
          this.toggleModel()
          this.getData()
          this.success(msg);
          this.$parent.saveFormData=JSON.parse(this.oldSaveFormData)
        }
      }).finally(e=>{
        this.saveLoading=false
      })
    },
    async getData() {
      this.tableLoading=true
      let param = {
        page: this.pagination.current,
        limit: this.pagination.pageSize,
        table: this.table,
        join_tables: this.join_tables,
        sort: this.sort,
        ...this.searchObj,
      }
      let code = null, paginate = null, table_key = null
      if (this.listFunc) {
        ({code, paginate, table_key} = await this.listFunc(param))
      } else {
        ({code, paginate, table_key} = await this.post('/admin/crud/list', param))
      }
      if (code === 1) {
        this.table_key = table_key
        this.tableData = paginate.data.map(i=>{
          return {
            ...i,
            key:i[this.table_key]
          }
        })
        this.pagination = {...this.pagination,
          current: paginate.current_page,
          total: paginate.total,
          pageSize: paginate.per_page,
        }
      }
      this.tableLoading=false
    },
  }
}
</script>
<style scoped lang="less">
.action-bar{
  padding: 5px 0;
}
</style>
