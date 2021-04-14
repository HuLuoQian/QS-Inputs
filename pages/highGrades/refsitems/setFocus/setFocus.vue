<template>
	<view>
		<textView :content="content" />
		<inputs :inputsArray="inputsArray" ref="inputs" activeName="获取输入" @activeFc="activeFc($event)" />

		<button type="primary" @tap="setfocus1()" style="margin-top: 50px;">设置textarea focus</button>
		<button type="primary" @tap="setfocus2()" style="margin-top: 5px;">设置input focus</button>
		<button type="primary" @tap="setfocus3()" style="margin-top: 5px;">设置第三项 focus</button>
		<button type="primary" @tap="setfocus4()" style="margin-top: 5px;">设置自定义变量名为input4 focus</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '可以使用ref调用inputs内部的setFocus方法, 此方法可以从外部设置内部inputs的focus值, 所传入的值可以是一个对象参数，也可以是多个顺序参数\r\n参数: \r\nparam<String|Number|Function>: 必填， 需匹配的title或者variableName属性或者能返回下标的函数，若为variableName属性则需传入isVariableName属性为true\r\n\r\nvalue<Boolean>:必填， 需设置的值\r\n\r\nfail<Function>:选填，失败回调，携带错误信息字符串\r\n\r\nisVariableName<Boolena>:选填， 是否匹配variableName',
				inputsArray: [{
						title: 'textarea',
						type: 'textarea'
					},
					{
						title: 'input'
					},
					{
						title: 'index-2'
					},
					{
						title: '匹配自定义变量名',
						variableName: 'input4'
					}
				]
			}
		},
		onReady() {
				this.setfocus1();
		},
		methods: {
			setfocus1() { //设置focus示例1
				this.$refs.inputs.setFocus({
					param: 'textarea',
					value: true
				});
			},
			setfocus2() { //设置focus示例2
				this.$refs.inputs.setFocus(inputsArray => { //findIndex方法 返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1
					return inputsArray.findIndex(item => item.title === 'input'); //可以不使用findIndex方法，但是必须return一个Number
				}, true);
			},
			setfocus3() { //设置focus示例3
				this.$refs.inputs.setFocus(2, true);
			},
			setfocus4() {
				this.$refs.inputs.setFocus({
					param: 'input4',
					value: true,
					fail: (err)=>{
						uni.showToast({
							title: err,
							icon: 'none'
						})
					},
					isVariableName: true	//若匹配的param为variableName属性，则填true
				});
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

<style>

</style>
