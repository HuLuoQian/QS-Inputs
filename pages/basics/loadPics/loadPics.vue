<template>
	<view>
		<textView :content="content"/>
		<inputs :inputsArray="inputsArray" activeName="获取输入" @activeFc="activeFc($event)"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '若使用上传图片类型，需在app.js中配置interfaces下的upLoadImg属性，此为服务器地址\r\n并且完善UpLoadFile方法-上传文件, 与pics_splice方法-拼接返回地址方法',
				inputsArray: [
					{
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
