<template>
	<view>
		<inputs 
		id="inputs"
		ref="inputs"
		inputsId="inputs"
		:inputsArray="inputsArray" 
		activeName="获取输入"  
		@activeFc="activeFc" 
		usingComponents/>
		
		<button type="primary" @tap="setEditorContent">设置editor内容</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputsArray: [
					{
						title: 'editor',
						type: 'editor'
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
			},
			setEditorContent() {
				this.$refs.inputs.setEditorContent('<span style="color: #f5105c;">今天也要加油鸭</span>', 'html');
			}
		}
	}
</script>

<style>

</style>
