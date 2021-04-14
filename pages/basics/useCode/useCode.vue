<template>
	<view>
		<textView :content="content"/>
		<inputs :inputsArray="inputsArray" activeName="获取输入" ifCode @activeFc="activeFc($event)"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '在inputs中传入ifCode属性为true，则启用验证码功能\r\n若启用验证码功能则需完善app.js中的sendSMS方法-生成验证码并发送方法',
				inputsArray: [
					{
						title: '手机号输入框',
						phone: true
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
