<template>
	<view class="defaultFontSize">
		<textView :content="content"/>
		<itemList :itemList="items"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '本组件目前支持\r\ninput textarea radio checkbox switch slider 上传图片 日期选择 城市选择 省市区乡镇街道 picker可联动自定义\r\n等类型的快速开发，自动判断、自动取值，只要你填写好每项的类型数据，就可以很方便的开发啦！\r\n甚至，表单的类型、布局、取值可以由后端接口动态决定！',
				items: [
					{
						name: '基础完整示例',
						path: '/pages/basics/simpleFullDemo/simpleFullDemo'
					},
					{
						style: 'margin-top: 8vw;',
						name: '基础表单类型',
						path: '/pages/basics/baseForm/baseForm'
					},
					{
						name: '上传图片类型',
						path: '/pages/basics/loadPics/loadPics'
					},
					{
						name: '无限上传图片类型 (6.9新增)',
						path: '/pages/basics/infinitePics/infinitePics'
					},
					{
						name: 'picker类型',
						path: '/pages/basics/pickers/pickers'
					},
					{
						name: '展示信息类型',
						path: '/pages/basics/showInformation/showInformation'
					},
					{
						name: 'editor类型 (6.9新增)',
						path: '/pages/basics/editor/editor'
					},
					{
						style: 'margin-top: 8vw;',
						name: 'inputs启用验证码功能',
						path: '/pages/basics/useCode/useCode'
					},
					{
						name: 'inputs启用规则或协议功能',
						path: '/pages/basics/useRule/useRule'
					}
				]
			}
		}
	}
</script>

<style>
	
</style>
