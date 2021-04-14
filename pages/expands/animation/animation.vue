<template>
	<view>
		<textView :content="content" />
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc($event)" 
		animationType="rotate3d-fade"
		:animationDuration=".2"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '动画可以从inputs传入属性animationType-动画类型为公共动画，也可以在inputsArray项内传入animationType属性为该项特有动画\r\n还可以从inputs传入animationDuration-动画时长系数为公共动画时长系数，也可以在inputsArray中传入animationDuration属性为该项特有动画时长系数\r\n注： 动画时长为 动画时长系数*inputsArray下标',
				inputsArray: [
					{
						type: "text",
						title: "跟随公共动画属性",
						content: "rotate3d-fade",
						ellipsis: true
					},
					{
						type: "text",
						title: "动画-1",
						content: "fadIn",
						animationType: "fadIn",
						ellipsis: true
					},
					{
						type: "text",
						title: "动画-2",
						content: "refadIn",
						animationType: "refadIn",
						ellipsis: true
					},
					{
						type: "text",
						title: "动画-3",
						content: "slide-left",
						animationType: "slide-left",
						ellipsis: true
					},
					{
						type: "text",
						title: "动画-4",
						content: "slide-fade-left",
						animationType: "slide-fade-left",
						ellipsis: true
					},
					{
						type: "text",
						title: "动画-5",
						content: "slide-right",
						animationType: "slide-right",
						ellipsis: true
					},
					{
						type: "text",
						title: "动画-6",
						content: "slide-fade-right",
						animationType: "slide-fade-right",
						ellipsis: true
					},
					{
						type: "text",
						title: "动画-7",
						content: "slide-fade-bottom",
						animationType: "slide-fade-bottom",
						ellipsis: true
					},
					{
						type: "text",
						title: "动画-8",
						content: "slide-fade-right",
						animationType: "slide-fade-right",
						ellipsis: true
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
