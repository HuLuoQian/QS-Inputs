<template>
	<view>
		<inputs 
		id="inputs" 
		inputsId="inputs"
		ref="inputs" 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		:ruleSet="ruleSet" 
		ifRule 
		ifCode
		@chaildOpenEvent="openWin" 
		@activeFc="activeFc" 
		:onLoadData="onLoadData" 
		animationType="rotate3d-fade"
		:animationDuration=".2" 
		submitReSet 
		:buttonStyle="buttonStyle" 
		:inputDebounceSet="inputDebounceSet" 
		:focusStyle="focusStyle"
		:fontSizeScaleSet="fontSizeScaleSet" 
		:verifyStatusSet="verifyStatusSet" 
		:usingComponents="usingComponents" 
		@inputsChange="inputsChange($event)" 
		:otherSet="otherSet"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				usingComponents: true,
				verifyStatusSet: {
					openVerifyStatus: true,
					openScroll: true,
					openChangeBorderColor: true,
					errNullColor: 'rgba(255,255,0,.7)',
					verifyErrorColor: 'rgba(245,16,92,.7)'
				},
				fontSizeScaleSet: { //inputs内的字体大小系数设置(字体大小为屏幕宽高度以此系数)
					allScale: .028,
					titleScale: .028,
					contentScale: .028
				},
				focusStyle: { //控制input或textarea类型focus或blur时的边框颜色
					focusBorderStyle: '#999999',
					blurBorderStyle: '#f8f8f8'
				},
				inputDebounceSet: { //input、textarea防抖设置
					openInputDebounce: true,
					delay: 500
				},
				buttonStyle: { //按钮样式
					activeButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //主按钮样式
					changeButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型更改按钮样式
					selectButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型选择按钮样式
					confirmButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型弹出框中确定按钮样式
					getcodeButton: "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;" //获取验证码按钮样式
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
					},
					{ // 二级联动示例2
						type: "picker-custom",
						title: "custom-二级联动示例2",
						defaultValue: [0, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
						itemArray: [{
							value_1: "蔬菜", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							item_2: [{ //item_2变量名需与下方steps_2_item相同
								name: "青菜", //name变量名需与下方steps.steps_2_value相同
								value: "青菜" //可添加多项自定义想要的数据
							}]
						}, {
							value_1: "荤菜",
							item_2: [{
								name: "猪肉",
								value: "猪肉"
							}]
						}],
						steps: {
							steps_1_value: "value_1",
							steps_2_value: "name",
							steps_2_item: "item_2"
						},
						linkageNum: 2, //2 表示为2级联动
						linkage: true //true 表示开启联动
					},
					{ // 三级联动示例1
						type: "picker-custom",
						title: "custom-三级联动示例1",
						itemArray: [{
							value_1: "浙江", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							item_2: [{ //item_2变量名需与下方steps.steps_2_item相同
								value_2: "金华", //value_2变量名需与下方steps.steps_2_value相同
								/*
								可添加多项自定义想要的数据
								*/
								item_3: ["婺城区"] //item_3变量名需与下方steps.steps_3_item相同
							}, {
								value_2: "绍兴",
								item_3: ["越城区"]
							}]
						}, {
							value_1: "江苏",
							item_2: [{
								value_2: "南京",
								item_3: ["玄武区"],
							}, {
								value_2: "无锡",
								item_3: ["锡山区"]
							}]
						}],
						steps: {
							steps_1_value: "value_1",
							steps_2_value: "value_2",
							steps_2_item: "item_2",
							steps_3_item: "item_3"
						},
						defaultValue: [1, 0, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
						linkageNum: 3, //3 表示为3级联动
						linkage: true //true 表示开启联动
					},
					{ // 三级联动示例2
						type: "picker-custom",
						title: "custom-三级联动示例2",
						itemArray: [{
							value_1: "江西", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							item_2: [{ //item_2变量名需与下方steps.steps_2_item相同
								value_2: "南昌", //value_2变量名需与下方steps.steps_2_value相同
								/*
								可添加多项自定义想要的数据
								*/
								item_3: [{ //item_3变量名需与下方steps.steps_3_item相同
									name: "东湖", //name变量名需与下方steps.steps_3_value相同
									/*
									可添加多项自定义想要的数据
									*/
								}]
							}, {
								value_2: "九江",
								item_3: [{
									name: "德安"
								}]
							}]
						}, {
							value_1: "山东",
							item_2: [{
								value_2: "济南",
								item_3: [{
									name: "历下"
								}],
							}, {
								value_2: "青岛",
								item_3: [{
									name: "市南"
								}]
							}]
						}],
						steps: {
							steps_1_value: "value_1",
							steps_2_value: "value_2",
							steps_2_item: "item_2",
							steps_3_value: "name",
							steps_3_item: "item_3"
						},
						defaultValue: [1, 0, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
						linkageNum: 3, //3 表示为3级联动
						linkage: true //true 表示开启联动
					}, {
						type: "picker-custom2",
						title: "custom2-无联动示例1",
						itemArray: [
							[0, 1, 2],
							[3, 4, 5]
						],
						steps: {
							step_1_value: "", //第一级显示的属性名
							step_2_value: "", //第二级显示的属性名
							step_3_value: "" //第三级显示的属性名
						},
						defaultValue: [0, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
					}, {
						type: "picker-custom2",
						title: "custom2-无联动示例2",
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
						steps: {
							step_1_value: "name", //第一级显示的属性名
							step_2_value: "", //第二级显示的属性名
							step_3_value: "" //第三级显示的属性名
						},
						defaultValue: [0, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
					},
					{
						type: "picker-custom2",
						title: "custom2-二级联动示例",
						itemObject: {
							step_1: [{
								name: "蔬菜",
								value: "001"
							}, {
								name: "荤菜",
								value: "002"
							}],
							step_2: [
								["青菜", "白菜"], //对应step_1的蔬菜
								["猪肉", "牛肉"] //对应step_1的荤菜
							]
						},
						steps: {
							step_1_value: "name", //第一级显示的属性名
							step_2_value: "", //第二级显示的属性名
							step_3_value: "" //第三级显示的属性名
						},
						defaultValue: [1, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
						linkageNum: 2, //3 表示为3级联动
						linkage: true //true 表示开启联动
					},
					{
						type: "picker-custom2",
						title: "custom2-三级联动示例",
						itemObject: {
							step_1: [{
								name: "江西"
							}, {
								name: "山东"
							}],
							step_2: [
								["南昌", "九江"], //对应step_1的江西
								["济南", "青岛"] //对应step_1的山东
							],
							step_3: [
								[
									[ //对应step_2的南昌
										"东湖"
									],
									[ //对应step_2的九江
										"德安"
									]
								],
								[
									[ //对应step_2的济南
										"历下",
									],
									[ //对应step_2的青岛
										"市南",
									]
								]
							]
						},
						steps: {
							step_1_value: "name", //第一级显示的属性名
							step_2_value: "", //第二级显示的属性名
							step_3_value: "" //第三级显示的属性名
						},
						defaultValue: [1, 0, 0], //初始数据
						onceShowDefaultValue: true, //是否显示初始数据
						linkageNum: 3, //3 表示为3级联动
						linkage: true //true 表示开启联动
					}, {
						title: "手机号",
						phone: true,
						defaultValue: "18657965941",
						customId: "验证码自定义标识"
					}
				],
				ruleSet: {
					color: "#c0ebd7",
					checkbox_color: "#c0ebd7",
					itemArray: [{
						name: "某规则",
						value: "aa"
					}],
				},
				onLoadData: "data_",
				otherSet: {
					getCodeSet:{
						phoneNum: '18657965941',
						customId: '123'
					}
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
			},
			inputsChange(res) {
				console.log('pickerChange绑定事件回调:' + JSON.stringify(res));
			}
		}
	}
</script>

<style>
</style>
