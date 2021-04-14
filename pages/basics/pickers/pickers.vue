<template>
	<view>
		<textView :content="content"/>
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc($event)" 
		pickerMode="arrowhead"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '目前picker类型的有 日期-picker-date、省市区-picker-city、省市区街道-picker-provincialStreet、自定义-custom、自定义2-custom2等类型\r\n其中自定义类型支持自定义二级联动、自定义三级联动、自定义无限级无联动',
				inputsArray: [
					{
						"segmentationTitle": "日期 picker-date",
						"border_top": "1px solid #f2f2f2",
						"type": "picker-date",
						"title": "date"
					},
					{
						"segmentationTitle": "省市区 picker-city",
						"border_top": "1px solid #f2f2f2",
						"type": "picker-city",
						"title": "city",
						"defaultValue": [10, 6, 0],
						"onceShowDefaultValue": true,
						"variableName": "city"
					},
					{
						"segmentationTitle": "省市区街道 picker-provincialStreet",
						"border_top": "1px solid #f2f2f2",
						"type": "picker-provincialStreet",
						"title": "provincialStreet",
						"onceShowDefaultValue": true, //初始化时显示初始值
						"variableName": "provincialStreet"
					},
					{ // 无联动示例1
						"segmentationTitle": "自定义 picker-custom",
						"border_top": "1px solid #f2f2f2",
						"type": "picker-custom",
						"title": "custom-无联动示例-单列",
						"itemArray": [
							[0, 1, 2]
						],
						"defaultValue": [0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
					},
					{ // 无联动示例1
						"type": "picker-custom",
						"title": "custom-无联动示例-双列",
						"itemArray": [
							[0, 1, 2],
							[3, 4, 5]
						],
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
					},
					{ // 无联动示例2
						"type": "picker-custom",
						"title": "custom-无联动示例2",
						"itemArray": [
							[{
								"name": "a", //name变量名需与下方steps.steps_1_value相同
								"value": "a" //可添加多项自定义想要的数据
							}, {
								"name": "b",
								"value": "b"
							}, {
								"name": "c",
								"value": "c"
							}],
							[{
								"name": "d",
								"value": "d"
							}, {
								"name": "e",
								"value": "e"
							}, {
								"name": "f",
								"value": "f"
							}]
						],
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"steps": {
							"steps_1_value": "name"
						}
					},
					{ // 二级联动示例1
						"type": "picker-custom",
						"title": "custom-二级联动示例1",
						"defaultValue": [1, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"itemArray": [{
							"value_1": "蔬菜", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							"item_2": ["青菜"] //item_2变量名需与下方steps.steps_2_item相同
						}, {
							"value_1": "荤菜",
							"item_2": ["猪肉"]
						}],
						"steps": {
							"steps_1_value": "value_1",
							"steps_2_item": "item_2"
						},
						"linkageNum": 2, //2 表示为2级联动
						"linkage": true //true 表示开启联动
					},
					{ // 二级联动示例2
						"type": "picker-custom",
						"title": "custom-二级联动示例2",
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"itemArray": [{
							"value_1": "蔬菜", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							"item_2": [{ //item_2变量名需与下方steps_2_item相同
								"name": "青菜", //name变量名需与下方steps.steps_2_value相同
								"value": "青菜" //可添加多项自定义想要的数据
							}]
						}, {
							"value_1": "荤菜",
							"item_2": [{
								"name": "猪肉",
								"value": "猪肉"
							}]
						}],
						"steps": {
							"steps_1_value": "value_1",
							"steps_2_value": "name",
							"steps_2_item": "item_2"
						},
						"linkageNum": 2, //2 表示为2级联动
						"linkage": true //true 表示开启联动
					},
					{ // 三级联动示例1
						"type": "picker-custom",
						"title": "custom-三级联动示例1",
						"itemArray": [{
							"value_1": "浙江", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							"item_2": [{ //item_2变量名需与下方steps.steps_2_item相同
								"value_2": "金华", //value_2变量名需与下方steps.steps_2_value相同
								/*
								可添加多项自定义想要的数据
								*/
								"item_3": ["婺城区"] //item_3变量名需与下方steps.steps_3_item相同
							}, {
								"value_2": "绍兴",
								"item_3": ["越城区"]
							}]
						}, {
							"value_1": "江苏",
							"item_2": [{
								"value_2": "南京",
								"item_3": ["玄武区"],
							}, {
								"value_2": "无锡",
								"item_3": ["锡山区"]
							}]
						}],
						"steps": {
							"steps_1_value": "value_1",
							"steps_2_value": "value_2",
							"steps_2_item": "item_2",
							"steps_3_item": "item_3"
						},
						"defaultValue": [1, 0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"linkageNum": 3, //3 表示为3级联动
						"linkage": true //true 表示开启联动
					},
					{ // 三级联动示例2
						"type": "picker-custom",
						"title": "custom-三级联动示例2",
						"itemArray": [{
							"value_1": "江西", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							"item_2": [{ //item_2变量名需与下方steps.steps_2_item相同
								"value_2": "南昌", //value_2变量名需与下方steps.steps_2_value相同
								/*
								可添加多项自定义想要的数据
								*/
								"item_3": [{ //item_3变量名需与下方steps.steps_3_item相同
									"name": "东湖", //name变量名需与下方steps.steps_3_value相同
									/*
									可添加多项自定义想要的数据
									*/
								}]
							}, {
								"value_2": "九江",
								"item_3": [{
									"name": "德安"
								}]
							}]
						}, {
							"value_1": "山东",
							"item_2": [{
								"value_2": "济南",
								"item_3": [{
									"name": "历下"
								}],
							}, {
								"value_2": "青岛",
								"item_3": [{
									"name": "市南"
								}]
							}]
						}],
						"steps": {
							"steps_1_value": "value_1",
							"steps_2_value": "value_2",
							"steps_2_item": "item_2",
							"steps_3_value": "name",
							"steps_3_item": "item_3"
						},
						"defaultValue": [1, 0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"linkageNum": 3, //3 表示为3级联动
						"linkage": true //true 表示开启联动
					}, {
						"segmentationTitle": "自定义2 picker-custom2",
						"border_top": "1px solid #f2f2f2",
						"type": "picker-custom2",
						"title": "custom2-无联动示例1",
						"itemArray": [
							[0, 1, 2],
							[3, 4, 5]
						],
						"steps": {
							"step_1_value": "", //第一级显示的属性名
							"step_2_value": "", //第二级显示的属性名
							"step_3_value": "" //第三级显示的属性名
						},
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
					}, {
						"type": "picker-custom2",
						"title": "custom2-无联动示例2",
						"itemArray": [
							[{
								"name": "a", //name变量名需与下方steps.steps_1_value相同
								"value": "a" //可添加多项自定义想要的数据
							}, {
								"name": "b",
								"value": "b"
							}, {
								"name": "c",
								"value": "c"
							}],
							[{
								"name": "d",
								"value": "d"
							}, {
								"name": "e",
								"value": "e"
							}, {
								"name": "f",
								"value": "f"
							}]
						],
						"steps": {
							"step_1_value": "name", //第一级显示的属性名
							"step_2_value": "", //第二级显示的属性名
							"step_3_value": "" //第三级显示的属性名
						},
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
					},
					{
						"type": "picker-custom2",
						"title": "custom2-二级联动示例",
						"itemObject": {
							"step_1": [{
								"name": "蔬菜",
								"value": "001"
							}, {
								"name": "荤菜",
								"value": "002"
							}],
							"step_2": [
								["青菜", "白菜"], //对应step_1的蔬菜
								["猪肉", "牛肉"] //对应step_1的荤菜
							]
						},
						"steps": {
							"step_1_value": "name", //第一级显示的属性名
							"step_2_value": "", //第二级显示的属性名
							"step_3_value": "" //第三级显示的属性名
						},
						"defaultValue": [1, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"linkageNum": 2, //3 表示为3级联动
						"linkage": true //true 表示开启联动
					},
					{
						"type": "picker-custom2",
						"title": "custom2-三级联动示例",
						"itemObject": {
							"step_1": [{
								"name": "江西"
							}, {
								"name": "山东"
							}],
							"step_2": [
								["南昌", "九江"], //对应step_1的江西
								["济南", "青岛"] //对应step_1的山东
							],
							"step_3": [
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
						"steps": {
							"step_1_value": "name", //第一级显示的属性名
							"step_2_value": "", //第二级显示的属性名
							"step_3_value": "" //第三级显示的属性名
						},
						"defaultValue": [1, 0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"linkageNum": 3, //3 表示为3级联动
						"linkage": true //true 表示开启联动
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
