<template>
    <a-modal :footer="null" v-model:open="open" width="'70%'" title="选择规格" @cancel="cancel">
      <a-table :dataSource="list" :columns="columns" :pagination="false" :row-selection="rowSelection">
        <template #bodyCell="{ text, record, index, column  }">
          <template v-if="column.key === 'set_price'">
            <a-input v-model:value="list[index][column.key]" @blur="check(index)"/>
          </template>
          <template v-if="column.key === 'set_quantity'">
            <a-input v-model:value="list[index][column.key]" @blur="check(index)"/>
          </template>
        </template>
      </a-table>

      <div class="justify-end">
        <a-button type="default" @click.prevent="cancel" style="margin-right: 10px">取消</a-button>
        <a-button type="primary" html-type="submit" @click="submit">提交</a-button>
      </div>
    </a-modal>
</template>
<script lang="jsx">
import {has} from '@/util/type/base.js'
export default {
  name: "SpecSelect",
  props: {
    goods_id: {
      type: Number,
      require: true,
    },
    value: {
      type: [Array],
      require: true,
    },
    set_price: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    set_quantity: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    goods_id: {
      handler(newV, oldV) {
        if (newV) {
          this.getGoodsSpecQuantityPrice();
          this.open = true
        }
      },
      immediate: true
    }
  },
  data: function () {
    return {
      list: [],
      open: false,
      rowSelection: {
        selectedRowKeys:[],
        onChange:(e)=>{
          this.rowSelection.selectedRowKeys = e;
        }
      },
      columns: [
        {
          key: 'spec',
          title: '规格',
          dataIndex: 'spec',
          customRender: (data) => {
            return <span>{data.text.map(i => i.name).join('、')}</span>
          },
        },
        {
          key: 'quantity',
          title: '规格库存',
          dataIndex: 'quantity',
        },
        {
          key: 'price',
          title: '规格价格',
          dataIndex: 'price',
        },
      ],
      selected_goods: [],
    };
  },
  created() {
    if(this.set_price){
      this.columns.push({
        key: 'set_price',
        title: this.type+'价格',
        dataIndex: 'set_price',
      })
    }
    if(this.set_quantity){
      this.columns.push({
        key: 'set_quantity',
        title: this.type+'库存',
        dataIndex: 'set_quantity',
      })
    }
  },
  methods: {
    check(e) {

    },
    submit(e) {
      this.open = false;
      this.emitValue();
    },
    cancel() {
      this.open = false;
      this.$emit('specSelect', [])
    },
    emitValue() {
      this.$emit('specSelect', this.list.filter(i=>this.rowSelection.selectedRowKeys.includes(i.spec_quantity_price_id)))
    },
    getGoodsSpecQuantityPrice() {
      this.post('/admin/crud/list', {table: 'shop_goods_spec_quantity_price', 'goods_id': this.goods_id}).then(({ code, paginate,table_key }) => {
        if (code === 1) {
          this.list = paginate.data.map(i=>{
            return {...i,key:i[table_key],set_price: this.set_price? i.price:0,set_quantity: this.set_quantity? i.quantity:0,}
          })
        }
      })
    },
  }
}
</script>
<style scoped lang="less">
</style>
