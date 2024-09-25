<template>
    <div>
      <Empty :tips_text="tips_text"/>
    </div>
</template>
<script lang="jsx">
import Empty from '@/components/Empty.vue'
export default {
    name: "list",
    components:{
      Empty
    },
    data: function () {
        return {
          tips_text:''
        };
    },
    computed: {},
    mounted() {
      console.log('msg',this.$route.query)
      if(this.$route.query.error){
        this.tips_text = this.$route.query.error
      }
    },
    methods: {}
}
</script>
<style scoped lang="scss">
</style>
