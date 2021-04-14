<template>
	<view>
		<textView :content="content" />
		<inputs 
		id="inputs" 
		inputsId="inputs"
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		@activeFc="activeFc" 
		animationType="slide-right"
		:animationDuration=".2" 
		:verifyStatusSet="verifyStatusSet"/>


		<uni-drawer :visible="drawerVisible" mode="right" @close="changeDrawerVisible()">
			<button type="primary" @tap="add('input')" class="btn">加一个input</button>
			<button type="primary" @tap="add('switch')" class="btn">加一个switch</button>
			<button type="primary" @tap="add('slider')" class="btn">加一个slider</button>
			<button type="primary" @tap="add('radio')" class="btn">加一个radio</button>
			<button type="primary" @tap="add('pics')" class="btn">加一个pics</button>
			<button type="primary" @tap="add('checkbox')" class="btn">加一个checkbox</button>
			<button type="primary" @tap="add('textarea')" class="btn">加一个textarea</button>
			<button type="primary" @tap="add('picker-date')" class="btn">加一个picker-date</button>
			<button type="primary" @tap="add('picker-city')" class="btn">加一个picker-city</button>
			<button type="primary" @tap="add('picker-custom')" class="btn">加一个picker-custom</button>
			<button type="primary" @tap="add('picker-custom2')" class="btn">加一个picker-custom2</button>
			<button type="primary" @tap="add('picker-provincialStreet')" class="btn">加一个picker-provincialStreet</button>
			<button type="primary" @tap="add('infinitePics')" class="btn">加一个infinitePics</button>
			<button type="warn" @tap="del()" class="btn">删除一个</button>
			<button type="primary" @tap="change()" class="btn">改成一个</button>
		</uni-drawer>
		
		<view class="fixdBtn" @tap="changeDrawerVisible()"  v-if="!drawerVisible">
			打开操作
		</view>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	let count = 0;
	export default {
		components: {
			uniDrawer
		},
		data() {
			return {
				content: '在固定变量名模式下，inputs动态改变长度时，不会对已有值的项进行初始化\r\n所谓固定变量名模式就是inputsArray中的所有项都填写唯一的自定义变量名属性--variableName\r\n经测试，在自定义组件模式下，inputsArray使用unshift、splice等会改变长度的方法时，switch能够监听到inputsArray的长度改变，而(模板模式与H5)不能监听到长度的改变，只有对inputsArray重新赋值才能监听到长度的改变\r\n而若switch能监听到inputsArray长度改变时，可以去除一些无用的数据,故若使用模板模式编译则对inputsArray长度变化时，建议对inputsArray重新赋值',
				drawerVisible: false,
				verifyStatusSet: {
					openVerifyStatus: true,
					openChangeBorderColor: true,
					openScroll: true,
				},
				inputsArray: [{
					"segmentationTitle": "上传图片",
					"type": "pics",
					"title": "pics",
					"itemArray": [{
						"title": "测试1",
						"ignore": true
					}, {
						"title": "测试2",
						"ignore": true
					}, {
						"title": "测试3",
						"ignore": true
					}, ],
					"variableName": "pic",
					"border_top": "1px solid #f2f2f2",
					"clearColor": "#c0ebd7",
					"customId": "自定义一标识"
				}]
			}
		},
		methods: {
			changeDrawerVisible() {
				this.drawerVisible = !this.drawerVisible;
			},
			activeFc(res) {
				uni.showToast({
					title: "获取输入成功"
				})
				console.log(JSON.stringify(res));
			},
			add(type) { //经测试，在自定义组件模式下，inputsArray使用unshift、splice等会改变长度的方法时，switch能够监听到inputsArray的长度改变，而(模板模式与H5)不能监听到长度的改变，只有对inputsArray重新赋值才能监听到长度的改变
				let o = {
					title: type + count,
					type,
					variableName: type + count,
					ignore: false
				};
				let n = {};
				switch (type) {
					case 'slider':
						n = {
							show_value: true
						}
						break;
					case 'radio':
						n = {
							itemArray: [{ //子循环数组
								name: "aa",
								value: "aa",
								defaultValue: true
							}, {
								name: "bb",
								value: "bb"
							}]
						}
						break;
					case 'pics':
						n = {
							itemArray: [{
								title: "测试1",
								ignore: true
							}, {
								title: "测试2",
								ignore: true
							}, {
								title: "测试3",
								ignore: true
							}, ],
							clearColor: "#c0ebd7",
							customId: "自定义一标识"
						}
						break;
					case 'checkbox':
						n = {
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
							}]
						}
						break;
					case 'picker-custom':
						n = {
							itemArray: [
								[0, 1, 2],
								[3, 4, 5]
							]
						}
						break;
					case 'picker-custom2':
						n = {
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
							linkageNum: 2, //3 表示为3级联动
							linkage: true //true 表示开启联动
						}
						break;
				}
				let obj = { ...o,
					...n
				};
				this.inputsArray.unshift(obj);
				count++;
			},
			del() {
				this.inputsArray.splice(0, 1);
			},
			change() {
				this.inputsArray = [{
					"segmentationTitle": "上传图片",
					"type": "pics",
					"title": "pics",
					"itemArray": [{
						"title": "测试1",
						"ignore": true
					}, {
						"title": "测试2",
						"ignore": true
					}, {
						"title": "测试3",
						"ignore": true
					}, ],
					"variableName": "pic",
					"border_top": "1px solid #f2f2f2",
					"clearColor": "#c0ebd7",
					"customId": "自定义一标识"
				}]
			}
		}
	}
</script>

<style scoped>
	.btn {
		margin: 2vw 1vw;
		font-size: 2.7vw;
	}
	.fixdBtn{
		position: fixed;
		right: 3vw;
		/* #ifndef H5 */
		top: 6vw;
		/* #endif */
		/* #ifdef H5 */
		top: calc(6vw + 50px);
		/* #endif */
		height: 16vw;
		width: 16vw;
		background-color: rgba(0,0,0,.6);
		color: white;
		border-radius: 50%;
		font-size: 2.8vw;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
