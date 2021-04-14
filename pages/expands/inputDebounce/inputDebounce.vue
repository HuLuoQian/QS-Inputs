<template>
	<view>
		<textView :content="content" />
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc" 
		animationType="rotate3d-fade"
		:animationDuration=".2"  
		:inputDebounceSet="inputDebounceSet"/>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '注： inputs默认开启输入防抖功能， 而且建议开启，不然输入卡顿，可以传入inputDebounceSet对象控制',
				inputDebounceSet: { //input、textarea防抖设置
					openInputDebounce: true,
					delay: 500
				},
				inputsArray: [
					{
						title: '默认开启的input防抖'
					}
				]
			}
		},
		methods: {
			activeFc(res) {
				uni.showToast({
					title: "获取输入成功"
				})
				console.log(JSON.stringify(res));
			}
		}
	}
</script>

<style>
</style>
