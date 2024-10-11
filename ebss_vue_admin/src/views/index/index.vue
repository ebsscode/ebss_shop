<template>
</template>
<script lang="jsx">
import router from "@/route/index";
export default {
    name: "index",
    async  created() {
      localStorage.setItem('addedRoute','')
      let token = localStorage.getItem('token')
      if(!token){
        router.push('/login')
      }else{
        let {code, user_info} = await this.post('/admin/user/user_info')
        if(code == 1){
          localStorage.setItem('username', user_info.username)
          router.push('/home')
        }else{
          localStorage.setItem('token', '')
          localStorage.setItem('username', '')
          router.push('/login')
        }
      }
    }
}
</script>
<style scoped lang="less">
</style>
