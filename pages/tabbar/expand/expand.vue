<template>
	<view>
		<textView :content="content"/>
		<itemList :itemList="items"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '本页面列出了动画、ref调用合集等示例',
				items: [
					{
						name: '拓展部分示例',
						path: '/pages/expands/fullDemo/fullDemo'
					},
					{
						style: 'margin-top: 8vw;',
						name: '动画',
						path: '/pages/expands/animation/animation'
					}, 
					{
						name: '设置按钮样式',
						path: '/pages/expands/setBtnStyle/setBtnStyle'
					}, 
					{
						name: '设置inputs内字体大小',
						path: '/pages/expands/fontSizeScaleSet/fontSizeScaleSet'
					},
					{
						name: '设置input输入防抖',
						path: '/pages/expands/inputDebounce/inputDebounce'
					}, 
					{
						name: '设置input自定义点击事件(6.9新增)',
						path: '/pages/expands/customInputsTap/customInputsTap'
					}, 
					{
						name: 'otherSet参数',
						path: '/pages/expands/otherSet/otherSet'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
