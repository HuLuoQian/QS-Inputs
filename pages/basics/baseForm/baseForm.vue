<template>
	<view>
		<textView :content="content"/>
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc" 
		:fontSizeScaleSet="fontSizeScaleSet"
		/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '基础表单组件类型有input、slider、textarea、switch、radiocheckbox等',
				fontSizeScaleSet: { //inputs内的字体大小系数设置(字体大小为屏幕宽高度以此系数)
					allScale: .028,
					titleScale: .035,	//优先于allScale
					contentScale: .035	//优先于allScale
				},
				inputsArray: [
					{
						title: 'input'
					},
					{
						segmentationTitle: "表单组件", //分割大标题
						type: "slider", //类型
						title: "slider", //标题
						defaultValue: 18, //默认值
						min: 0,
						max: 100,
						show_value: true,
						disabled: false,
						activeColor: "#c0ebd7",
						step: 1,
						border_top: "1px solid #f2f2f2", //上划线
						variableName: "slider"//自定义变量名
					},
					{
						type: "textarea",
						title: "textarea",
						defaultValue: "今天也要加油鸭~" //默认值
					},
					{
						type: "switch",
						title: "switch",
						color: "#c0ebd7",
						defaultValue: true,
						scale: '.8', //比例大小
						variableName: "switch" //自定义变量名
					},
					{
						title: "radio",
						type: "radio",
						itemArray: [{ //子循环数组
							name: "aa",
							value: "aa",
							defaultValue: true
						}, {
							name: "bb",
							value: "bb"
						}],
						color: "#c0ebd7",
						scale: '.8', //比例大小
					},
					{
						title: "checkbox",
						type: "checkbox",
						itemArray: [{ //子循环数组
							name: "a",
							value: "a",
							defaultValue: true
						}, {
							name: "b",
							value: "b",
							// defaultValue: true,
							disabled: true
						}, {
							name: "c",
							value: "c",
							defaultValue: true
						}],
						variableName: "checkbox",
						scale: '.8', //比例大小
						color: "#c0ebd7",
						ignore: true
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
