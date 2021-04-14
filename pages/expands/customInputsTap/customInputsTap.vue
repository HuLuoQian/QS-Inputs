<template>
	<view>
		<inputs
		:inputsArray="inputsArray"
		@activeFc="activeFc"
		activeName="获取输入"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputsArray: [
					{
						title: '自定义扫码事件',
						customTap: true,
						customTapIcon: 'scan',
						customId: 'scan',
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
