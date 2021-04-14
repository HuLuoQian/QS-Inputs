<template>
	<view>
		<textView :content="content"/>
		<inputs :inputsArray="inputsArray" activeName="获取输入" @activeFc="activeFc($event)"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '展示信息类型目前只有text类型-显示文字',
				inputsArray: [
					{
						type: "text",
						title: "ellipsis",
						content: "展示text信息展示text信息展示text信息展示text信息展示text信息展示text信息",
						ellipsis: true
					},
					{
						type: "text",
						title: "非ellipsis",
						content: "展示text信息展示text信息展示text信息展示text信息展示text信息展示text信息",
					}
				]
			}
		},
		methods: {
			activeFc(res) {
				console.log(JSON.stringify(res));
				uni.showToast({
					title: '获取输入成功'
				})
			}
		}
	}
</script>

<style>

</style>
