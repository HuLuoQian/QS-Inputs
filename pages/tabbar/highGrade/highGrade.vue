<template>
	<view>
		<itemList :itemList="items"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						name: '校验状态管理',
						path: '/pages/highGrades/verifyStatus/verifyStatus'
					},
					{
						name: 'ref调用',
						path: '/pages/highGrades/refs/refs'
					},
					{
						style: 'margin-top: 8vw;',
						name: '从后端获取初始值赋值',
						path: '/pages/highGrades/defaultValueDemo/defaultValueDemo'
					},
					{
						name: '动态增删inputsArray示例',
						path: '/pages/highGrades/dynamicallyAddOrDeleteInputsArray/dynamicallyAddOrDeleteInputsArray'
					},
					{
						name: 'picker-custom与picker-custom2逐级获取示例',
						path: '/pages/highGrades/pickerAsync/pickerAsync'
					},
					{
						name: '手写签名示例',
						path: '/pages/highGrades/canvasSignature/canvasSignature'
					}
				]
			}
		}
	}
</script>

<style>

</style>
