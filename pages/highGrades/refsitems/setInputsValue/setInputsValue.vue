<template>
	<view>
		<textView :content="content" />
		<inputs :inputsArray="inputsArray" ref="inputs" activeName="获取输入" @activeFc="activeFc($event)" />
		
		<uni-drawer :visible="drawerVisible" mode="right" @close="changeDrawerVisible()">
			<!-- 不建议使用setInputsValue， 请使用setValue -->
			<!-- <button type="primary" @tap="setInputsValue1()" style="margin-top: 50px;">匹配title设置值</button>
			<button type="primary" @tap="setInputsValue2()" style="margin-top: 5px;">传入function返回index设置值</button>
			<button type="primary" @tap="setInputsValue3()" style="margin-top: 5px;">匹配index下标设置值</button>
			<button type="primary" @tap="setInputsValue4()" style="margin-top: 5px;">匹配自定义变量名设置值</button> -->
			<button type="primary" @tap="setValue()" style="margin-top: 5px;">setValue 匹配variableName赋值</button>
		</uni-drawer>
		
		<view class="fixdBtn" @tap="changeDrawerVisible()"  v-if="!drawerVisible">
			打开操作
		</view>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	export default {
		components: {
			uniDrawer
		},
		data() {
			return {
				content: '可以使用ref调用inputs内部的setValue发法（推荐）：可以传入一个对象或数组 或setInputsValue方法（不推荐使用了）, 此方法可以从外部更改内部inputs的值, 所传入的值可以是一个对象参数，也可以是多个顺序参数\r\n参数: \r\nparam<String|Number|Function>: 必填， 需匹配的title或者variableName属性或者能返回下标的函数，若为variableName属性则需传入isVariableName属性为true\r\n\r\nvalue<Any>:必填， 需设置的值\r\n\r\nfail<Function>:选填，失败回调，携带错误信息字符串\r\n\r\nisVariableName<Boolena>:选填， 是否匹配variableName',
				inputsArray: [
					{
						title: 'input',
						variableName: 'input',
					},
					{
						title: 'pics',
						type: 'pics',
						variableName: 'pics',
						itemArray: [
							{
								title: 'test1'
							},
							{
								title: 'test2'
							}
						]
					},
					{
						title: 'switch',
						type: 'switch',
						variableName: 'switch',
					},
					{
						title: 'date',
						type: 'picker-date',
						variableName: 'date',
						mode: 'picker-date'
					}
				],
				drawerVisible: false
			}
		},
		methods: {
			changeDrawerVisible() {
				this.drawerVisible = !this.drawerVisible;
			},
			// 不建议使用setInputsValue， 请使用setValue
			/* setInputsValue1() { //设置focus示例1
				this.$refs.inputs.setInputsValue({
					param: 'textarea',
					value: 'setInputsValue1所设置的值'
				});
			},
			setInputsValue2() { //设置focus示例2
				this.$refs.inputs.setInputsValue(inputsArray => { //findIndex方法 返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1
					return inputsArray.findIndex(item => item.title === 'input'); //可以不使用findIndex方法，但是必须return一个Number
				}, 'setInputsValue2所设置的值');
			},
			setInputsValue3() { //设置focus示例3
				this.$refs.inputs.setInputsValue(2, 'setInputsValue3所设置的值');
			},
			setInputsValue4() {
				this.$refs.inputs.setInputsValue({
					param: 'input4',
					value: 'setInputsValue4所设置的值',
					fail: (err) => {
						uni.showToast({
							title: err,
							icon: 'none'
						})
					},
					isVariableName: true //若匹配的param为variableName属性，则填true
				});
			}, */
			setValue() {
				let inputsArray = [...this.inputsArray];
				inputsArray.forEach((item, index) => {
					switch (item.type){
						case 'pics':
							inputsArray[index].picsIndex = 0;
							inputsArray[index].value = '/static/logo.png';
							break;
						case 'switch':
							inputsArray[index].value = true;
							break;
						case 'picker-date':
							inputsArray[index].value = '2019/8/18';
							break;
						default:
							inputsArray[index].value = 'setValue所设置的值_' +index; 
							break;
					}
				})
				this.$refs.inputs.setValue(inputsArray);
			},
			activeFc(res) {
				console.log(JSON.stringify(res));
				uni.showToast({
					title: '获取输入成功'
				})
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
