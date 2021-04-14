<template>
	<view>
		<textView :content="content"/>
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入" 
		ifRule 
		:ruleSet="ruleSet" 
		@chaildOpenEvent="chaildOpenEvent($event)" 
		@activeFc="activeFc($event)"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '在inputs中传入ifRule属性为true，则启用规则或协议功能\r\n若启用规则或协议功能，则需传入ruleSet<Object>属性，并可以绑定@chaildOpenEvent事件-用于返回点击协议value，ruleSet有如下属性: \r\ncolor<Color>-规则或协议的文字颜色\r\ncheckbox_color<Color>-checkbox选择框的颜色\r\nitemArray<Array>-需循环的规则或协议数组, 其中有name<String>-规则或协议名称、value<Any>-规则或协议的标识、color<Color>-规则或协议的文字颜色（优先于ruleSet的color）等属性',
				inputsArray: [
					{
						title: '提示',
						content: '启用了规则或协议功能',
						type: 'text'
					}
				],
				ruleSet: {
					color: '#ADADAD',
					checkbox_color: '#999999',
					rulePreText: '自定义规则前缀',
					ruleErr: '自定义提示',
					itemArray: [
						{
							name: '协议-1',
							value: '协议-1'
						}
					]
				}
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
