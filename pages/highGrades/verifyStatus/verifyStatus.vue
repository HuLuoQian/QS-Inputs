<template>
	<view>
		<textView :content="content" />
		<inputs 
		id="inputs" 
		inputsId="inputs"
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc"  
		:focusStyle="focusStyle"
		:verifyStatusSet="verifyStatusSet" 
		:usingComponents="usingComponents" 
		/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: 'inputs可以开启校验状态管理, 若启用则需在inputs组件上设置id并传inputsId属性为id值, 传入verifyStatusSet控制校验状态管理, 传入focusStyle控制状态颜色, 若为自定义组件模式建议传入usingComponents属性为true\r\n请尝试点击获取输入按钮',
				usingComponents: true,
				verifyStatusSet: {
					openVerifyStatus: true,
					openScroll: true,
					openChangeBorderColor: true,
					errNullColor: 'rgba(255,255,0,.7)',
					verifyErrorColor: 'rgba(245,16,92,.7)'
				},
				focusStyle: { //控制input或textarea类型focus或blur时的边框颜色
					focusBorderStyle: '#999999',
					blurBorderStyle: '#f8f8f8'
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
						verifyType: "Tel",
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
					},
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
					},
					{ // 无联动示例1
						segmentationTitle: "picker-custom示例",
						border_top: "1px solid #f2f2f2",
						type: "picker-custom",
						title: "custom-无联动示例1",
						itemArray: [
							[0, 1, 2],
							[3, 4, 5]
						],
						defaultValue: [0, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
					},
					{ // 无联动示例2
						type: "picker-custom",
						title: "custom-无联动示例2",
						itemArray: [
							[{
								name: "a", //name变量名需与下方steps.steps_1_value相同
							value: "a" //可添加多项自定义想要的数据
							}, {
								name: "b",
								value: "b"
							}, {
								name: "c",
								value: "c"
							}],
							[{
								name: "d",
								value: "d"
							}, {
								name: "e",
								value: "e"
							}, {
								name: "f",
								value: "f"
							}]
						],
						defaultValue: [0, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
						steps: {
							steps_1_value: "name"
						}
					},
					{ // 二级联动示例1
						type: "picker-custom",
						title: "custom-二级联动示例1",
						defaultValue: [1, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
						itemArray: [{
							value_1: "蔬菜", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							item_2: ["青菜"] //item_2变量名需与下方steps.steps_2_item相同
						}, {
							value_1: "荤菜",
							item_2: ["猪肉"]
						}],
						steps: {
							steps_1_value: "value_1",
							steps_2_item: "item_2"
						},
						linkageNum: 2, //2 表示为2级联动
						linkage: true //true 表示开启联动
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
