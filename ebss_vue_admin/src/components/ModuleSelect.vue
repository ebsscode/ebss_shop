<template>
    <div v-if="disabled">
      <a-select
          :disabled="disabled"
          v-model:value="selected"
          mode="combobox"
          placeholder="请选择"
          style="width: 100%"
          :options="list"
          :fieldNames="{ label: 'name', value: 'module_id',}"
          @change="change"
      >
      </a-select>
    </div>
</template>

<script>

export default {
    name: 'ModuleSelect',
    components: {},
    props: {
        value: {
            type: [Number, String],
            default: null,
        },
    },
    computed: {
    },
    data: function () {
        return {
            disabled: false,
            selected: null,
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
    },
    created() {
      this.fetchList()
    },
    methods: {
        change(inputValue, option) {
            // console.log(111, inputValue, option)
            this.$emit('update:value', inputValue)
        },
        fetchList() {
          this.get('/admin/module/list').then(({code, paginate}) => {
            if (code === 1) {
              this.list = paginate.data
            }
          })
        },
    }
}
</script>
<style scoped lang="less">
</style>
