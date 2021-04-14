<template>
	<view>
		<textView :content="content" />
		<inputs :inputsArray="inputsArray" activeName="获取输入" @activeFc="activeFc" />
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: 'picker-custom与picker-custom2支持逐级从后端获取数据, 需要在app.js中配置getSendData与getAsyncDataFc两个方法, 并且需要传入初始的第一列的数据, 其实这个也可以改为从后端获取, 如果有需要可以评论里和我说',
				inputsArray: [{
						type: 'picker-custom2',
						title: 'picker-custom2-逐级获取-1',
						itemObject: {
							step_1: [{
								name: 'a',
								value: 'a'
							}, {
								name: 'b',
								value: 'b'
							}, {
								name: 'c',
								value: 'c'
							}]
						},
						linkage: true,
						linkageNum: 2,
						steps: {
							step_1_value: 'name',
							step_2_value: 'name'
						},
						customId: {
							id: '001'
						},
						async: true
					},{
						type: 'picker-custom2',
						title: 'picker-custom2-逐级获取-2',
						itemObject: {
							step_1: [{
								name: 'a',
								value: 'a'
							}, {
								name: 'b',
								value: 'b'
							}, {
								name: 'c',
								value: 'c'
							}]
						},
						linkage: true,
						linkageNum: 3,
						steps: {
							step_1_value: 'name',
							step_2_value: 'name',
							step_3_value: 'name'
						},
						customId: {
							id: '001'
						},
						async: true
					},
					{
						type: 'picker-custom',
						title: 'picker-custom-逐级获取-1',
						itemArray: [{
							name: 'a',
							value: 'a'
						}, {
							name: 'b',
							value: 'b'
						}, {
							name: 'c',
							value: 'c'
						}],
						linkage: true,
						linkageNum: 2,
						steps: {
							steps_1_value: 'name',
							steps_2_value: 'name'
						},
						customId: {
							id: '001'
						},
						async: true
					},
					{
						type: 'picker-custom',
						title: 'picker-custom-逐级获取-2',
						itemArray: [{
							name: 'a',
							value: 'a'
						}, {
							name: 'b',
							value: 'b'
						}, {
							name: 'c',
							value: 'c'
						}],
						linkage: true,
						linkageNum: 3,
						steps: {
							steps_1_value: 'name',
							steps_2_value: 'name',
							steps_3_value: 'name'
						},
						customId: {
							id: '002'
						},
						async: true
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
