<template>
	<view>
		<inputs 
		id="inputs"
		inputsId="inputs"
		:inputsArray="inputsArray" 
		activeName="获取输入"  
		@activeFc="activeFc" 
		usingComponents/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputsArray: [
					{
						title: 'editor',
						type: 'editor',
						defaultValue: '<span style="color: #f5105c;">今天也要加油鸭</span>',
						defaultValueType: 'html'
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
