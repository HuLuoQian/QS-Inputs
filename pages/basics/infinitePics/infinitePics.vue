<template>
	<view>
		<inputs 
		:inputsArray="inputsArray" 
		activeName="获取输入"  
		@activeFc="activeFc"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputsArray: [
					{
						title: 'infinitePics-初始值',
						type: 'infinitePics',
						ignore: true,
						defaultValue: [
							'http://imgsrc.baidu.com/forum/w%3D580/sign=e8b1d9c798cad1c8d0bbfc2f4f3c67c4/ab5e4efbfbedab64dbb08428fa36afc37b311eed.jpg',
							'http://imgsrc.baidu.com/forum/w%3D580/sign=a06847cac5fcc3ceb4c0c93ba244d6b7/85d3bc014a90f60394f557af3412b31bb151ed67.jpg',
							'http://imgsrc.baidu.com/forum/w%3D580/sign=3792b3922da446237ecaa56aa8237246/c4be73094b36acaf746d5f1471d98d1000e99c1e.jpg',
							'http://imgsrc.baidu.com/forum/w%3D580/sign=cbb0c62b3787e9504217f3642039531b/357828f5e0fe9925c181a0b839a85edf8cb1711e.jpg',
							'http://imgsrc.baidu.com/forum/w%3D580/sign=d97763e5f5dcd100cd9cf829428a47be/bc48eec4b74543a96096332413178a82b801141e.jpg',
							'http://imgsrc.baidu.com/forum/w%3D580/sign=0bce5a5ec4177f3e1034fc0540ce3bb9/a435064f78f0f73675c584e90755b319eac413f4.jpg',
							'http://imgsrc.baidu.com/forum/w%3D580/sign=791a660d9c2397ddd679980c6983b216/591f9758d109b3de80a0bb82c1bf6c81810a4c89.jpg'
						],
						check: true,
						showNext: false,
						showClose: false
					},
					{
						title: 'infinitePics2',
						type: 'infinitePics',
						variableName: 'infinitePics2',
						ignore: true
					},
					{
						title: 'infinitePics3-限制3张',
						type: 'infinitePics',
						max: 3,
						ignore: true
					},
					{
						title: 'infinitePics4-排序模式',
						type: 'infinitePics',
						max: 3,
						ignore: true,
						sortSelection: true
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
