<template>
	<view>
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc" 
		:fontSizeScaleSet="fontSizeScaleSet" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fontSizeScaleSet: { //inputs内的字体大小系数设置(字体大小为屏幕宽高度以此系数)
					allScale: .028,
					titleScale: .035,	//优先于allScale
					contentScale: .035	//优先于allScale
				},
				inputsArray: [{
						segmentationTitle: "展示信息", //分割大标题
						border_top: "1px solid #f2f2f2", //上划线
						type: "text",
						title: "text示例",
						content: "展示text信息展示text信息展示text信息展示text信息展示text信息展示text信息",
						ellipsis: true
					}, {
						title: "被隐藏的input",
						hide: true
					},{
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
						color: "#c0ebd7"
					}, {
						title: "内置正则校验Email",
						verifyType: "Email", // 内置正则校验
						defaultValue: "494843897@qq"
					}, {
						title: "内置过滤函数",
						filterType: "twoDecimalPlaces",
						ignore: true,
						placeholder: "限制输入小数点后一位"
					}, {
						title: "手机号校验",
						verifyFc: function(value) {
							if (/^[1][3,4,5,7,8][0-9]{9}$/.test(value))
								return true;
							return false;
						},
						verifyErr: "手机号校验错误",
						ignore: true
					}, {
						title: "input",
						ignore: true, //是否可忽略该值(判断时此项值可以为空)
						defaultValue: "今天也要加油鸭~",
						tapClear: true, //input一键清除功能
						password: true, //input密码类型
						icon: "search", //input左边图标
						iconColor: "#c0ebd7", //input图标颜色
						filterFc: function(value) { //input值过滤函数
							//自定义过滤函数
							value = "filter过滤后的值";
							return value;
						},
						variableName: "input" //自定义变量名
					}, {
						segmentationTitle: "上传图片",
						type: "pics",
						title: "pics",
						itemArray: [{
							title: "测试1",
							ignore: true
						}, {
							title: "测试2",
							ignore: true
						}, {
							title: "测试3",
							ignore: true
						}],
						variableName: "pic",
						border_top: "1px solid #f2f2f2",
						clearColor: "#c0ebd7",
						customId: "自定义一标识"
					}
				],
				ruleSet: {
					color: "#c0ebd7",
					checkbox_color: "#c0ebd7",
					itemArray: [{
						name: "某规则",
						value: "aa"
					}],
				}
			}
		},
		methods: {
			openWin(value) {
				//打开规则或协议页
				//若有一个以上的rule，则根据value打开规则页面
				console.log(value);
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
