<template>
    <a-modal :footer="null" :open="showEditMy"
             title="编辑个人信息"
             @cancel="$emit('update:showEditMy',false)">
        <a-form
            :model="form"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 20 }"
            @finish="onFinish"
        >
            <a-form-item
                labelAlign="left"
                :colon="false"
                label="新密码"
                name="password"
                :rules="[{ required: true, message: ' ' }]"
            >
                <a-input-password v-model:value="form.password"/>
            </a-form-item>

            <div class="justify-center">
                <a-button type="primary" html-type="submit">确定</a-button>
            </div>
        </a-form>
    </a-modal>
</template>

<script>
import router from "@/route/index";

export default {
    name: "EditMy",
    props: {
        showEditMy: {
            type: Boolean,
            default: false,
        }
    },
    data: function () {
        return {
            form: {},
        };
    },
    methods: {
        onFinish() {
            this.post('/admin/user/edit_password', this.form).then(({code}) => {
                if (code === 1) {
                    this.success('修改密码成功！请重新登录！正在跳转...')
                    localStorage.setItem('token', '')
                    setTimeout(() => {
                        router.push('/')
                    }, 1500)
                }
            })
        }
    }
}
</script>

<style scoped>
</style>
