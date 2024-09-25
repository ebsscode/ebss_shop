<template>
    <a-select
        :disabled="disabled"
        v-model:value="selected"
        :mode="mode"
        allowClear
        placeholder="请选择..."
        style="width: 100%;min-width: 120px"
        :filter-option="filterOption"
        :show-search="true"
        :options="list"
        :fieldNames="{ label: name_key, value: table_key,}"
        @change="change"
    >
    </a-select>
</template>
<script>
export default {
    name: 'RemoteSelect',
    components: {},
    props: {
        value: {
            type: [Number, String],
            default: null,
        },
        table: {
            type: String,
            required: true,
        },
        where: {
            type: Array,
            default: [],
        },
        mode: {
            type: String,
            default: 'combobox',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name_key: {
            type: String,
            required: true,
        }
    },
    computed: {
    },
    data: function () {
        return {
            selected: null,
            table_key: '',
            list: [],
        };
    },
    watch: {
      value: {
        handler(newV, oldV) {
          this.selected = newV
        },
        immediate: true
      },
      where: {
        handler(newV, oldV) {
          if(JSON.stringify(newV)!=JSON.stringify(oldV)){
            this.fetchList()
          }
        },
        immediate: false
      },
      table: {
        handler(newV, oldV) {
          this.fetchList()
        },
        immediate: false
      },
    },
    created() {
      this.fetchList()
    },
    methods: {
        change(inputValue, option) {
            // console.log(111, inputValue, option)
            this.$emit('update:value', inputValue)
        },
        filterOption(inputValue, option) {
            // console.log(111, inputValue, option)
            return option[this.name_key].toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        },
        fetchList() {
            this.post('/admin/crud/list', {table: this.table,where: this.where,limit:9999 }).then(({code, paginate, table_key}) => {
                if (code === 1) {
                    this.table_key = table_key
                    this.list = paginate.data
                }
            })
        },
    }
}
</script>
<style scoped lang="scss">
</style>
