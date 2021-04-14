<template>
	<view>
		<textView :content="content" />
		<inputs :inputsArray="inputsArray" ref="inputs" @activeFc="activeFc($event)" activeName="上传图片" />
		
		<button type="primary" @tap="setPicsUpLoadData()" style="margin-top: 100px;">设置自定义上传数据</button>
		<button type="primary" @tap="clearPicsUpLoadData()" style="margin-top: 100px;">清除自定义上传数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '使用ref调用inputs的setPicsUpLoadData方法设置指定键值为相应customId值的pics项的自定义上传数据',
				inputsArray: [
					{
						title: 'pics',
						type: 'pics',
						itemArray: [{
							title: '自定义上传数据'
						}],
						customId: 'setPicsData'
					},
					{
						title: 'pics2',
						type: 'pics',
						itemArray: [{
							title: '自定义上传数据2'
						}],
						customId: 'setPicsData2'
					},
				]
			}
		},
		methods: {
			setPicsUpLoadData() {
				/* //设置多项
				this.$refs.inputs.setPicsUpLoadData(
					[
						{
							customId: 'setPicsData',
							data: {a:1,b:2}
						},
						{
							customId: 'setPicsData2',
							data: {c:3,d:4}
						}
					]
				); */
				
				
				/* //设置一项
				this.$refs.inputs.setPicsUpLoadData(
					{
						customId: 'setPicsData',
						data: {a:1,b:2}
					}
				); */
				
				let _this = this;
				//有回调函数
				_this.$refs.inputs.setPicsUpLoadData({
					setPicsDatas: [
						{
							customId: 'setPicsData',
							data: {a:1,b:2}
						},
						{
							customId: 'setPicsData2',
							data: {c:3,d:4}
						}
					],
					scb(obj) {
						console.log('设置成功: ' + JSON.stringify(obj));
						uni.showToast({title:'设置成功'});
						_this.$refs.inputs.activeFc();
					},
					fcb() {
						console.log('设置失败');
						uni.showToast({title:'设置失败'});
					}
				}); 
				
			},
			clearPicsUpLoadData() {
				/* //清除多项
				this.$refs.inputs.clearPicsUpLoadData(
					[
						{
							customId: 'setPicsData'
						},
						{
							customId: 'setPicsData2'
						}
					]
				); */
				
				
				/* //清除一项
				this.$refs.inputs.clearPicsUpLoadData(
					{
						customId: 'setPicsData'
					}
				); */
				
				/* //清除全部
				this.$refs.inputs.clearPicsUpLoadData(); */
				
				
				//有回调函数
				this.$refs.inputs.clearPicsUpLoadData({
					scb(obj) {
						console.log('清除成功');
						uni.showToast({title:'清除成功'});
					}
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
