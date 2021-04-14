<template>
	<view>
		<textView :content="content" />
		<inputs :inputsArray="inputsArray" ref="inputs" @activeFc="activeFc($event)" />
		
		<button type="primary" @tap="refActiveFc()" style="margin-top: 50px;">从外部触发activeFc方法</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '若activeName属性不填，则主按钮不显示，可以使用ref触发inputs内部的activeFc方法',
				inputsArray: [{
						title: 'textarea',
						type: 'textarea',
						defaultValue: '今天也要加油鸭！~'
					}
				]
			}
		},
		methods: {
			refActiveFc() {
				this.$refs.inputs.activeFc();
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
