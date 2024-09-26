<template>
  <div class="justify-between align-center" style="margin-bottom: 5px;">
    <div class="align-center">
      <slot name="search"></slot>
      <span class="QQ811565456 hewei-sousuoleimufill" v-if="showQuery" @click="getData" style="margin-right:10px;font-size: 25px;padding: 3px 8px;"></span>
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
        <span class="QQ811565456 hewei-shanchu" @click="" style="margin-right:10px;font-size: 20px;"></span>
      </a-popconfirm>
      <span class="QQ811565456 hewei-zengjia" v-if="showAdd" style="margin-right:10px;font-size: 20px;" @click="$parent.saveFormData={};showSaveModal=true;"></span>
    </div>
  </div>
  <a-table :scroll="{x:'min-content'}" :columns="tableColumns" :data-source="tableData" :pagination="pagination" @change="tableChange" :row-selection="rowSelection">
    <template #bodyCell="{ text, record, index, column  }">
      <template v-if="column.key === 'action'">
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
        <span @click="$parent.saveFormData=record;showSaveModal=true" v-if="showEdit(record)" class="QQ811565456 hewei-bianji ml-10"></span>
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
  <a-modal :footer="null" v-model:open="showSaveModal" :width="modelWidth"
           :title="saveFormData&&saveFormData[`${table_key}`]?editTexT:'新增'"
           @cancel="showSaveModal=false" :style="$parent.modalStyle||{}">
    <slot name="save"></slot>
    <div class="justify-end">
      <a-button type="default" @click.prevent="showSaveModal=false;$parent.saveFormData={};"
                style="margin-right: 10px">取消
      </a-button>
      <a-button type="primary" html-type="submit" @click="submit">提交</a-button>
    </div>
  </a-modal>
</template>
<script lang="jsx">
import * as ExcelJS from "exceljs";
import {saveAs} from 'file-saver';
export default {
  name: "crud",
  data: function () {
    return {
      modelWidth: this.$parent.modelWidth?this.$parent.modelWidth:'70%',
      table: this.$parent.table,
      table_key: '',
      join_tables: this.$parent.join_tables?this.$parent.join_tables:[],
      editTexT: this.$parent.editTexT?this.$parent.editTexT:'编辑',
      deleteFunc: this.$parent.deleteFunc?this.$parent.deleteFunc:null,
      listFunc: this.$parent.listFunc?this.$parent.listFunc:null,
      saveFunc: this.$parent.saveFunc?this.$parent.saveFunc:null,
      showQuery: this.$parent.showQuery!==undefined?this.$parent.showQuery:true,
      showAdd: this.$parent.showAdd!==undefined?this.$parent.showAdd:true,
      showDelete: this.$parent.showDelete?this.$parent.showDelete:(e)=>true,
      showEdit: this.$parent.showEdit!==undefined?this.$parent.showEdit:(e)=>true,
      showCopy: this.$parent.showCopy!==undefined?this.$parent.showCopy:(e)=>true,
      pagination:{
        current: 1,
        total: null,
        pageSize: this.$parent.pageSize?this.$parent.pageSize:20,
        showTotal: (total, range) => `当前:${range[0]}-${range[1]}  共:${total} 条`,
        showSizeChanger: true,
        showQuickJumper: true,
      },
      showSaveModal: false,
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
        return i
      })
      return tableColumns
    },
  },
  created() {
    this.getData()
  },
  methods: {
    saveColumn(index) {
      console.log(index)
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
    batchDelete(){
      this.deleteSubmit(this.rowSelection.selectedRowKeys)
    },
    deleteSubmit(table_ids){
      this.post('/admin/crud/delete', {table: this.table, table_ids: table_ids }).then(({code,msg}) => {
        if (code === 1) {
          this.success(msg);
          this.getData()
        }
      })
    },
    tableChange(pagination, filters, sorter, {currentDataSource}) {
      // console.log(2222,pagination)
      this.pagination = {...this.pagination, ...pagination};
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
    submit() {
      // console.log('this.saveFormData',JSON.stringify(this.saveFormData));
      if(this.$parent.$refs.save_form){
        this.$parent.$refs.save_form.validate().then((e) => {
          this.submitPost();
        }).catch(err => {
          // console.log('error', err);
          this.error(err.errorFields[0].errors[0]||err.errorFields[0].name[0]+'数据校验失败！')
        });
      }else{
        this.submitPost();
      }
    },
    submitPost(){
      if (this.saveFunc) {
        this.saveFunc(this.saveFormData);
        this.showSaveModal = false
        this.$parent.saveFormData={}
        return;
      }
      this.post('/admin/crud/save', {table: this.table, ...this.saveFormData}).then(({code,msg}) => {
        if (code === 1) {
          this.getData()
          this.showSaveModal = false
          this.success(msg);
          this.$parent.saveFormData={}
        }
      })
    },
    async getData() {
      let param = {
        page: this.pagination.current,
        limit: this.pagination.pageSize,
        table: this.table,
        join_tables: this.join_tables,
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
    },
  }
}
</script>
<style scoped lang="less">
</style>
