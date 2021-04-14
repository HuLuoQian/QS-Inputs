<template>
	<view>
		<textView :content="content" />
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc" 
		ifCode 
		@chaildOpenEvent="chaildOpenEvent($event)"
		:otherSet="otherSet" />

	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: 'otherSet用于设置一些inputs的其他设置, 目前可以设置: 必填标识设置、验证码设置、大标题设置, 详见文档1.1.3',
				otherSet: {
					requiredFieldsSet: {
						requiredFieldsFlag: '**', //自定义必填标识
						hideRequiredFields: false //是否隐藏必填标识
					},
					getCodeSet: {
						securityCodePlaceholder: 'otherSet设置的默认文字',
						phoneNum: '18657965941',
						customId: 'test' //自定义标识
					},
					segmentationTitleSet: {	//segmentationTitle设置
						segmentationTitleFontSizeScale: .032,
						segmentationTitleStyle: 'color: #f5105c;'
					},
				},
				inputsArray: [{
					segmentationTitle: '自定义大小系数与样式',
					type: "slider", //类型
					title: "slider", //标题
					defaultValue: 18, //默认值
					min: 0,
					max: 100,
					show_value: true,
					disabled: false,
					activeColor: "#c0ebd7",
					step: 1,
					variableName: "slider" //自定义变量名
				}, ]
			}
		},
		methods: {
			chaildOpenEvent(value) {
				console.log(JSON.stringify(value));
				uni.showToast({
					title: value
				})
			},
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
