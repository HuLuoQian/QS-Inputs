<template>
	<view class="width100 refadIn" @touchmove.prevent.stop="voidFc">
		<picker-view class="fontColor666666 width100 bg_white border_radius_10px over_hidden box_shadow padding05px box-sizing-border-box"
		 :indicator-style="indicatorStyle||('height: '+wH*.048+'px;')" :value="value" @change="bindPickerViewChange($event)"
		 :style="classObj.picker">
			<block v-if="linkage">
				<block v-if="linkageNum==2">
					<picker-view-column>
						<view class="flex_row_c_c" v-for="(item,index) in itemArray" :key="index">{{item[steps.steps_1_value]}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="flex_row_c_c" v-for="(item,index) in async?async_1:itemArray[value[0]||0][steps.steps_2_item]" :key="index">{{item[steps.steps_2_value]||item}}</view>
					</picker-view-column>
				</block>
				<block v-else-if="linkageNum==3">
					<picker-view-column>
						<view class="flex_row_c_c" v-for="(item,index) in itemArray" :key="index">{{item[steps.steps_1_value]}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="flex_row_c_c" v-for="(item,index) in async?async_1:itemArray[value[0]||0][steps.steps_2_item]" :key="index">{{item[steps.steps_2_value]}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="flex_row_c_c" v-for="(item,index) in async?async_2:itemArray[value[0]||0][steps.steps_2_item][value[1]||0][steps.steps_3_item]"
						 :key="index">{{item[steps.steps_3_value]||item}}</view>
					</picker-view-column>
				</block>
			</block>
			<block v-else>
				<picker-view-column v-for="(items, indexs) in itemArray" :key="indexs">
					<view class="flex_row_c_c" v-for="(item, index) in items" :key="index">{{steps?steps.steps_1_value?item[steps.steps_1_value]:item:item}}</view>
				</picker-view-column>
			</block>
		</picker-view>
		<button type="primary" :style="classObj.marginTop5 + confirmStyle" @tap="confirmFc">{{confirmName||'确定'}}</button>
	</view>
</template>

<script>
	import _app from './app.js';
	function log(t, f) {
		_app.log(t + ', at picker-custom.vue-' + f);
	}
	export default {
		props: {
			itemArray: {
				type: Array,
				default () {
					return [];
				}
			},
			linkage: {
				type: Boolean,
				default: false
			},
			linkageNum: {
				type: Number,
				default: 2
			},
			steps: Object,
			fontSize: {
				type: Number,
				default: 10
			},
			confirmName: String,
			index: {
				type: [String, Number],
				default: ''
			},
			indicatorStyle: String,
			height: Number,
			wH: Number,
			pickerValueDefault: {
				type: Array,
				default () {
					return [];
				}
			},
			confirmStyle: String,
			async: {
				type: Boolean,
				default: false
			},
			customId: {
				type: [String, Object],
				deault: ''
			}
		},
		data() {
			let value = [];
			if (this.pickerValueDefault instanceof Array && this.pickerValueDefault)
				value = this.pickerValueDefault;
			return {
				value,
				async_1: [],
				async_2: [],
				oldValue: [],
				memoryData_1: [],
				memoryData_2: [],
				waiting: false,
				classObj: {
					picker: 'height:' + (this.height || this.wH * .2) + 'px;font-size:' + this.fontSize + 'px;',
					marginTop5: 'margin-top:' + this.wH * .05 + 'px;'
				}
			}
		},
		created() {
			if (this.async) {
				this.getAsyncData({
					value: this.value,
					launch: true
				});
			}
		},
		methods: {
			bindPickerViewChange({
				detail: {
					value
				}
			}) { //解构 赋值
				const fnName = 'bindPickerViewChange';
				this.value = value;
				const oldValue = [...this.oldValue];
				if (this.async && this.linkage) {
					switch (this.linkageNum) {
						case 2:
							if (oldValue[0] !== value[0]) {
								this.getAsyncData({
									value,
									index: 0
								});
							}
							break;
						case 3:
							if (oldValue[0] !== value[0]) {
								this.getAsyncData({
									value,
									index: 0
								});
							} else if (oldValue[1] !== value[1]) {
								log('value[1]不相同', fnName);
								this.getAsyncData({
									value,
									index: 1
								});
							}
							break;
						default:
							break;
					}
				}
			},
			getAsyncData(obj) {	// 逐级获取
				const fnName = 'getAsyncData';
				let oldValue = [];
				if (this.oldValue.length&&this.oldValue.length > 0) oldValue = [...this.oldValue];
				if (obj.value.length === 0) {
					switch (this.linkageNum) {
						case 2:
							obj.value = [0, 0];
							break;
						case 3:
							obj.value = [0, 0, 0];
							break;
						default:
							log('级数不存在', fnName);
							break;
					}
					this.value = [...obj.value];
				}
				obj = {
					...obj,
					datas: {
						data_0: [...this.itemArray],
						data_1: this.async_1.length&&this.async_1.length>0?[...this.async_1]: []
					},
					linkageNum: this.linkageNum,
					customId: this.customId,
					type: 'picker-custom',
					oldValue
				};
				_app.getPickerAsyncData.call(this, obj);
			},
			confirmFc() {
				const fnName = 'confirmFc';
				let _this = this;
				if(_this.waiting) {
					_app.showToast('正在获取数据, 请稍候');
					return;
				}
				const async = _this.async;
				let datas = _this.itemArray;
				let v = _this.value;
				let data = {
					result: {},
					value: v
				};
				let steps = _this.steps;
				if (_this.linkage) {
					for (let i = 0; i < _this.linkageNum; i++) {
						if (!v[i]) v[i] = 0;
					}
					if (_this.linkageNum == 2) { //二级联动
						data.result.steps1 = datas[v[0]]
						data.result.steps2 = async?_this.async_1[v[1]]:datas[v[0]][steps.steps_2_item][v[1]];
					} else if (_this.linkageNum == 3) { //三级联动
						data.result.steps1 = datas[v[0]];
						if (!data.result.steps1)
							_app.showToast('第一列中不存在第' + v[0] + '项');
						data.result.steps2 = async?_this.async_1[v[1]]:data.result.steps1[steps.steps_2_item][v[1]];
						if (!data.result.steps2)
							_app.showToast('第二列中不存在第' + v[1] + '项');
						data.result.steps3 = async?_this.async_2[v[2]]:data.result.steps2[steps.steps_3_item][v[2]];
						if (!data.result.steps3)
							_app.showToast('第三列中不存在第' + v[2] + '项');
					} else {
						_app.showToast('不在指定范围中');
					}
				} else { //无联动
					data.result = [];
					for (let i = 0; i < datas.length; i++) {
						let d = datas[i];
						data.result.push(d[(v[i] || 0)]);
					}
				}
				_this.$emit('getCustom', {
					newData: data,
					index: _this.index,
					type: _app.pickerChoosedType.pickerChoosedType_custom.name
				});
			},
			voidFc() {}
		},
	}
</script>

<style scoped>
	.width100 {
		width: 100%;
	}

	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.fontColor666666 {
		color: #666666;
	}

	.bg_white {
		background-color: white;
	}

	.border_radius_10px {
		border-radius: 10px;
	}

	.over_hidden {
		overflow: hidden;
	}

	.box_shadow {
		box-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
	}

	/* 新增 */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(.8);
		}

		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes refadeIn {
		from {
			transform: scale(1.2);
		}

		to {
			transform: scale(1);
		}
	}

	.fadIn {
		animation: fadeIn .3s 1;
	}

	.refadIn {
		animation: refadeIn .3s 1;
		animation-fill-mode: forwards;
	}

	.padding05px {
		padding: 0 5px;
	}

	.box-sizing-border-box {
		box-sizing: border-box;
	}
</style>
