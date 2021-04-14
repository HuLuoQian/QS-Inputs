<template>
	<view class="width100 refadIn" @touchmove.prevent.stop="voidFc">
		<picker-view class="fontColor666666 width100 bg_white border_radius_10px over_hidden box_shadow padding05px box-sizing-border-box" 
		:indicator-style="indicatorStyle||('height: '+wH*.048+'px;')" :style="classObj.picker" 
		:value="pickerValue.length>0?pickerValue:pickerValueDefault" @change="pickerChange">
				<picker-view-column>
					<view class="flex_row_c_c" v-for="(item,index) in provinceDataList" :key="index">{{item.label}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="flex_row_c_c" v-for="(item,index) in cityDataList" :key="index">{{item.label}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="flex_row_c_c" v-for="(item,index) in areaDataList" :key="index">{{item.label}}</view>
				</picker-view-column>
		</picker-view>
		<button type="primary" :style="classObj.marginTop5 + confirmStyle" @tap="_$emit">{{confirmName||'确定'}}</button>
	</view>
</template>

<script>
	import provinceData from './city-data/province.js';
	import cityData from './city-data/city.js';
	import areaData from './city-data/area.js';
	import _app from '../app.js';
	export default {
		data() {
			let pickerValue = [0,0,0];
			if(this.pickerValueDefault instanceof Array && this.pickerValueDefault.length === 3)
				pickerValue = this.pickerValueDefault;
			let provinceDataList = provinceData;
			let cityDataList = cityData[pickerValue[0]];
			let areaDataList =
				areaData[pickerValue[0]][pickerValue[1]];
			return {
				provinceDataList,
				cityDataList,
				areaDataList,
				pickerValue,
				classObj: {
					picker: 'height:' + (this.height||this.wH*.2) + 'px;font-size:' + this.fontSize+'px;',
					marginTop5: 'margin-top:' + this.wH*.05 + 'px;'
				}
			};
		},
		props: {
			indicatorStyle: String,
			height: Number,
			wH: Number,
			/* 默认值 */
			pickerValueDefault: {
				type: Array,
				default() {
					return [];
				}
			},
			/* 主题色 */
			themeColor: String,
			fontSize: {
				type: Number,
				default: 10
			},
			confirmName: String,
			index: {
				type: [String, Number],
				default: ''
			},
			confirmStyle: String
		},
		methods: {
			pickerChange(e) {
				let changePickerValue = e.detail.value;
				if (this.pickerValue[0] !== changePickerValue[0]) {
					// 第一级发生滚动
					this.cityDataList = cityData[changePickerValue[0]];
					this.areaDataList = areaData[changePickerValue[0]][0];
					changePickerValue[1] = 0;
					changePickerValue[2] = 0;
				} else if (this.pickerValue[1] !== changePickerValue[1]) {
					// 第二级滚动
					this.areaDataList =
						areaData[changePickerValue[0]][changePickerValue[1]];
					changePickerValue[2] = 0;
				}
				this.pickerValue = changePickerValue;
			},
			_$emit() {
				let _this = this;
				let data = {
					label: this._getLabel(),
					value: this.pickerValue,
					cityCode: this._getCityCode()
				};
				this.$emit('getCity', {newData: data, index: _this.index, type: _app.pickerChoosedType.pickerChoosedType_city.name});
			},
			_getLabel() {
				let pcikerLabel =
					this.provinceDataList[this.pickerValue[0]].label +
					'-' +
					this.cityDataList[this.pickerValue[1]].label +
					'-' +
					this.areaDataList[this.pickerValue[2]].label;
				return pcikerLabel;
			},
			_getCityCode() {
				return this.areaDataList[this.pickerValue[2]].value;
			},
			voidFc() {}
		}
	};
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
