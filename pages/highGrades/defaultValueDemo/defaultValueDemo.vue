<template>
	<view>
		<textView :content="content" />
		<inputs :inputsArray="inputsArray" activeName="获取输入" @activeFc="activeFc" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '其实整个inputsArray都是可以从后端获取， 这样就可以整体交由后端动态控制',
				inputsArray: [],
			}
		},
		created() {
			this.getData();
		},
		methods: {
			async getData() {
				try {
					uni.showLoading({
						title: '准备获取数据'
					})
					this.inputsArray = await this.getInputsArray();
					uni.showLoading({
						title: '拼接完成'
					})
					uni.hideLoading();
				} catch (e) {
					//TODO handle the exception
					uni.hideLoading();
				}
			},
			getInputsArray() {
				return new Promise((rs, rj) => {
					uni.showLoading({
						title: '正在获取数据'
					})
					setTimeout(() => { //访问成功获取数据
						uni.showLoading({
							title: '获取数据成功'
						})
						let inputsArray = [{
							title: '初始值示例',
							defaultValue: ''
						}, {
							title: 'radio',
							type: 'radio',
							itemArray: [{
									name: '值-1',
									value: '1'
								},
								{
									name: '值-2',
									value: '2'
								}
							]
						}];
						//获取数据
						let defaultValue1 = '从接口获取的初始值';
						let defaultValue2 = '2';
						inputsArray[0].defaultValue = defaultValue1;

						inputsArray[1].itemArray.find((item) => {
							return defaultValue2 === item.value
						}).defaultValue = true;

						rs(inputsArray);
					}, 2000)
				})
			},
			activeFc(res) {
				uni.showToast({
					title: "获取输入成功"
				})
				console.log(JSON.stringify(res));
			}
		}
	}
</script>

<style>
</style>
