<template>
  <div>

  </div>
</template>
<script>
import router from "@/route/index";
export default {
  name: "index",
  data() {
    return {
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData() {
      this.get('page/page_index').then(({code, configs,location,user_id}) => {
        if (code === 1) {
          this.util.setStorage('configs',configs)
          this.util.setStorage('location',location)
          this.util.setStorage('user_id',user_id)
          router.push({ path: '/home', })
        }
      })
    },
  }
}
</script>
<style lang="less" scoped>
</style>
