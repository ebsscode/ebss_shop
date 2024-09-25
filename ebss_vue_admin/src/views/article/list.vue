<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }" >
                <a-form-item label="标题" name="title" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.title"/>
                </a-form-item>
                <a-form-item label="小标题" name="small_title">
                    <a-input v-model:value="saveFormData.small_title"/>
                </a-form-item>
                <a-form-item label="类型" name="article_category_id" :rules="[{ required: true, message: '' }]">
                    <RemoteSelect table="base_article_category" name_key="name" v-model:value="saveFormData.article_category_id"/>
                </a-form-item>
                <a-form-item label="发布日期" name="push_time">
                    <DatePicker v-model:value="saveFormData.push_time"/>
                </a-form-item>
                <a-form-item label="封面图片" name="cover_img">
                    <Upload :maxCount="1" v-model:value="saveFormData.cover_img"/>
                </a-form-item>
                <a-form-item label="内容" name="content">
                    <FullEditor v-model:value="saveFormData.content"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline">
                <a-form-item>
                    <a-input placeholder="标题" v-model:value="searchObj.title"/>
                </a-form-item>
                <a-form-item label="类型" name="article_category_id" :rules="[{ required: true, message: ' ' }]">
                    <RemoteSelect table="base_article_category" name_key="name" v-model:value="searchObj.article_category_id"/>
                </a-form-item>
            </a-form>
        </template>
    </Crud>
</template>
<script lang="jsx">
export default {
    name: "list",
    data: function () {
        return {
            table: 'base_article',
            modelWidth: '100%',
            modalStyle: {'top':'5px'},
            join_tables:['base_article_category'],
            saveFormData: {
                content: ''
            },
            searchObj: {},
            columns: [
                {
                    title: '标题',
                    key: 'title',
                    is_edit: true,
                }, {
                    title: '小标题',
                    key: 'small_title',
                    is_edit: true,
                }, {
                    title: '类型',
                    key: `article_category_id`,
                    dataIndex: [`article_category`, 'name'], // 获取 article_category.name
                }, {
                    title: '封面图片',
                    key: 'cover_img',
                }, {
                    title: '发布时间',
                    key: 'push_time',
                }
            ],
        };
    },
}
</script>
<style scoped lang="less">
</style>
