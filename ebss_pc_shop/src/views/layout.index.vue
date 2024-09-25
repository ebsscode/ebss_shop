<template>
    <div class="shop-content">
      <Header />
      <router-view/>
      <Footer />
    </div>
</template>
<script lang="jsx">
export default {
    name: 'layoutIndex',
    components: {
    },
    data() {
        return {
        }
    },
    async mounted() {
        this.getData()
    },
    methods: {
      getData() {
            this.get('page/page_index').then(({code, configs,location,user_id}) => {
                if (code === 1) {
                    this.util.setStorage('configs',configs)
                    this.util.setStorage('location',location)
                    this.util.setStorage('user_id',user_id)
                }
            })
      },
    },
}
</script>
<style lang="less" scoped>
.shop-content {
  min-height: 100vh;
}
</style>
