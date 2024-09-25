<template>
	<div>
		<div style="display: flex;flex-direction :column;align-items: center;justify-content: center;margin-top: 20%;">
			<span class="QQ811565456 hewei-meiyoushuju" style="font-size: 90px;color: #999999;"></span>
			<div style="font-size: 16px;color: #999999;margin-top: 5px;">{{tips_text}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Empty",
		props:{
			tips_text:{
				type:String,
				default:'暂无数据'
			},
		},
		data() {
			return {

			};
		}
	}
</script>
<style lang="scss" scoped>
</style>
