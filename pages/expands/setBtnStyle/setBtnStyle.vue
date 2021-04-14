<template>
	<view>
		<textView :content="content" />
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc" 
		ifCode
		:buttonStyle="buttonStyle" />

	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '可以再外部设置inputs内的按钮样式，支持主按钮，picker类型按钮，picker弹出框按钮，验证码按钮等样式',
				buttonStyle: { //按钮样式
					activeButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //主按钮样式
					changeButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型更改按钮样式
					selectButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型选择按钮样式
					confirmButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型弹出框中确定按钮样式
					getcodeButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;",//获取验证码按钮样式
					changeButtonSizeScale: .025 //设置更改按钮的字体大小系数
				},
				inputsArray: [
					{
						segmentationTitle: "picker类型",
						border_top: "1px solid #f2f2f2",
						type: "picker-provincialStreet",
						title: "provincialStreet",
						onceShowDefaultValue: true, //初始化时显示初始值
						variableName: "provincialStreet"
					},
					{
						type: "picker-date",
						title: "date"
					},
					{
						type: "picker-city",
						title: "city",
						defaultValue: [10, 6, 0],
						onceShowDefaultValue: true,
						variableName: "city"
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
