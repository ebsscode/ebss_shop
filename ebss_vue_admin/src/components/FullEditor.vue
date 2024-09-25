<template>
  <div>
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <Editor
        style="height: 430px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="onChange"
    />
  </div>
</template>
<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {onBeforeUnmount, ref, shallowRef, onMounted, watch} from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {baseURL} from '@/http.js'
export default {
    name: "FullEditor",
    components: { Editor, Toolbar },
    props: {
        value: {
            type: String,
            default: "",
        }
    },
    setup(props,context) {
      // 编辑器实例，必须用 shallowRef
      const editorRef = shallowRef()
      // 内容 HTML
      let valueHtml = ref('')

      // onMounted(() => {
      //   valueHtml.value = props.value
      // })

      const toolbarConfig = {}
      const editorConfig = {
        placeholder: '请输入内容...',
        MENU_CONF: {}
      }
      editorConfig.MENU_CONF['uploadImage'] = {
        server: baseURL() + '/index/index/upload',
        fieldName: 'file',
        customInsert(res, insertFn) {
          insertFn(baseURL() + '/'+ res.savename, res.savename, "")
        }
      }
      watch(
          () => props.value,
          (newV, oldV) => {
            // console.log(3333,newV,oldV)
            valueHtml.value=newV
          },
          {
            immediate:true,
          }
      )
      const onChange =(editor)=>{
        const html = editor.getHtml()
        // console.log('editor content', html)
        context.emit('update:value',html)
      }
      // 组件销毁时，也及时销毁编辑器
      onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
      })
      const handleCreated = (editor) => {
        editorRef.value = editor // 记录 editor 实例，重要！
      }
      return {
        editorRef,
        valueHtml,
        mode: 'default', // 或 'simple'
        toolbarConfig,
        editorConfig,
        onChange,
        handleCreated
      };
    }
}
</script>
<style scoped lang="less">
</style>
