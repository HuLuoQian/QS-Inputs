<template>
	<view>
		<textView :content="content" />
		<inputs id="inputs" ref="inputs" :inputsArray="inputsArray" activeName="提交申请" @activeFc="activeFc($event)"
		 @picsTap="picsTap($event)" />

		<!-- 签名画布 -->
		<view class="contents flex_column backgroundColor-white height100" :class="{'show': canvasShow}"
		 @tap.prevent.stop="voidFc" @touchmove.prevent.stop="voidFc">
			<view class="flex_row_c_c fontColor666666 Flex1">
				请签名
			</view>
			<view class="Flex8">
				<canvas :style="{'pointer-events': readySign?'auto':'none'}" class='height100' canvas-id="firstCanvas" @touchmove='move' @touchstart='start($event)' @touchend='end'
				 @touchcancel='cancel' @longtap='tap' disable-scroll='true' @error='error'>
				</canvas>
			</view>
			<view class="flex_row Flex1Point5">
				<view class="flex_row_c_c Flex1">
					<button type="primary" size="mini" @tap="hideSginCanvas">取消</button>
				</view>
				<view class="flex_row_c_c Flex1">
					<button type="primary" size="mini" @tap="clearClick">重签</button>
				</view>
				<view class="flex_row_c_c Flex1">
					<button type="primary" size="mini" @tap="overSign">完成</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const SystemInfo = uni.getSystemInfoSync();
	var content = null;
	var touchs = [];
	var showT;
	var picSignObj = null;
	export default {
		data() {
			return {
				content: `该功能参考了 https://ext.dcloud.net.cn/plugin?id=331 的插件, 感谢!\n 该页面只是一个示例,并非inputs内的功能`,
				SystemInfo,
				inputsArray: [{
					title: '签名',
					type: 'pics',
					itemArray: [{
						title: '签名图片',
						customTapId: 'getSign'
					}],
					variableName: 'signPath',
					customId: 'credit'
				}],
				isEnd: false, // 是否签名
				canvasShow: false,
				readySign: false
			}
		},
		onLoad: function(options) {
			//获得Canvas的上下文
			content = uni.createCanvasContext('firstCanvas');
		},
		methods: {
			activeFc(res) {
				console.log(JSON.stringify(res));
				uni.showToast({
					title: '获取输入成功'
				})
			},
			picsTap(obj) {
				picSignObj = obj;
				this.showSginCanvas();
			},
			overSign: function() {
				uni.showLoading({
					title: '请稍候'
				});
				if (this.isEnd) {
					uni.canvasToTempFilePath({
						canvasId: 'firstCanvas',
						success: (res) => {
							if (res.tempFilePath) {
								//打印图片路径
								uni.hideLoading();
								if (picSignObj) {
									this.$refs.inputs.setValue({ ...picSignObj,
										value: res.tempFilePath
									});
								} else {
									uni.showToast({
										title: '错误：找不到设置对象,请重试'
									});
								}
								//设置图片
								this.hideSginCanvas();
							} else {
								uni.hideLoading();
								uni.showToast({
									title: '生成签名图片为空'
								});
							}
						},
						fail(err) {
							uni.showToast({
								title: '生成签名失败'
							});
							uni.hideLoading();
						}
					})
				} else {
					uni.hideLoading();
					uni.showToast({
						title: '请先完成签名'
					});
				}
			},

			// 画布的触摸移动开始手势响应
			start: function(event) {
				// _app.log(JSON.stringify(event));
				// _app.log("触摸开始" + JSON.stringify(event.mp.changedTouches[0].x));
				// _app.log("触摸开始" + JSON.stringify(event.mp.changedTouches[0].y));
				//获取触摸开始的 x,y
				let point = {
					x: event.mp.changedTouches[0].x,
					y: event.mp.changedTouches[0].y
				}
				// _app.log(point)
				touchs.push(point);
			},
			// 画布的触摸移动手势响应
			move: function(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y
				}
				// _app.log(point)
				touchs.push(point)
				if (touchs.length >= 2) {
					this.draw(touchs)
				}
			},

			// 画布的触摸移动结束手势响应
			end: function(e) {
				// _app.log("触摸结束" + e)
				// 设置为已经签名
				this.isEnd = true
				// 清空轨迹数组
				for (let i = 0; i < touchs.length; i++) {
					touchs.pop()
				}

			},
			//绘制
			draw: function(touchs) {
				// _app.log(touchs[0], touchs[1])
				let point1 = touchs[0]
				let point2 = touchs[1]
				touchs.shift()
				content.moveTo(point1.x, point1.y)
				content.lineTo(point2.x, point2.y)
				content.stroke()
				content.draw(true)
			},
			//清除操作
			clearClick: function() {
				// 设置为未签名
				this.isEnd = false
				//清除画布
				content.clearRect(0, 0, SystemInfo.windowWidth, SystemInfo.windowHeight);
				content.setFillStyle('#f8f8f8');
				content.fillRect(0, 0, SystemInfo.windowWidth, SystemInfo.windowHeight);
				//设置线的颜色
				content.setStrokeStyle("#000")
				//设置线的宽度
				content.setLineWidth(5)
				//设置线两端端点样式更加圆润
				content.setLineCap('round')
				//设置两条线连接处更加圆润
				content.setLineJoin('round')
				content.draw(true);
			},
			showSginCanvas() {
				this.clearClick();
				this.canvasShow = true;
				showT = setTimeout(()=>{
					this.readySign = true;
				}, 600);
			},
			hideSginCanvas() {
				this.canvasShow = false;
				this.clearClick();
				if(showT) {
					clearTimeout(showT);
				}
				this.readySign = false;
			},
			voidFc() {}
		}
	}
</script>

<style scoped>
	canvas {
		background-color: #DDDDDD;
		width: 700rpx;
		margin: 0 25rpx;
	}

	.contents {
		position: fixed;
		top: 0;
		left: 0;
		opacity: 0;
		pointer-events: none;
		padding-top: 20rpx;
		box-sizing: border-box;
		z-index: 999;
		transition: all .6s;
		transform: translateY(100%);
		font-size: 28.5rpx;
	}

	.contents.show {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}
	
	
	
	.width100 {
		width: 100%;
	}
	
	.height100 {
		height: 100%;
	}
	
	.Flex1 {
		flex: 1;
	}
	
	.Flex1Point5 {
		flex: 1.5;
	}
	
	.Flex8 {
		flex: 8;
	}
	
	.flex_column {
		display: flex;
		flex-direction: column;
	}
	
	.flex_row {
		display: flex;
		flex-direction: row;
	}
	
	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.backgroundColor-white {
		background-color: white;
	}
	
	.fontColor666666 {
		color: #666666;
	}
</style>
