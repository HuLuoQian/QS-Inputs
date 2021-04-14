<template>
	<view class="width100 refadIn" @touchmove.prevent.stop="voidFc">
		<picker-view class="fontColor666666 width100 bg_white border_radius_10px over_hidden box_shadow padding05px box-sizing-border-box"
		 :indicator-style="indicatorStyle||('height: '+wH*.048+'px;width: 100%;')" :value="dateValue" @change="bindPickerViewChange($event)"
		 :style="classObj.picker">
			<block v-if="mode!==picker_date_obj.time">
				<picker-view-column>
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in years" :key="picker_index">{{picker_item}}年</view>
				</picker-view-column>
				<picker-view-column>
					<!-- #ifndef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in 12" :key="picker_index">{{(picker_item+1)<10?('0' + (picker_item+1)):(picker_item+1)}}月</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in 12" :key="picker_index">{{picker_item<10?('0' + picker_item):picker_item}}月</view>
					<!-- #endif -->
				</picker-view-column>
				<picker-view-column>
					<!-- #ifndef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in days" :key="picker_index">{{(picker_item+1)<10?('0' + (picker_item+1)):(picker_item+1)}}日</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in days" :key="picker_index">{{picker_item<10?('0' + picker_item):picker_item}}日</view>
					<!-- #endif -->
				</picker-view-column>
			</block>
			<block v-if="mode!==picker_date_obj.date">
				<picker-view-column>
					<!-- #ifndef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in 24" :key="picker_index">{{picker_item<10?('0' + picker_item):picker_item}}时</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in 24" :key="picker_index">{{(picker_item-1)<10?('0' + (picker_item-1)):(picker_item-1)}}时</view>
					<!-- #endif -->
				</picker-view-column>
				<picker-view-column>
					<!-- #ifndef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in 60" :key="picker_index">{{picker_item<10?('0' + picker_item):picker_item}}分</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in 60" :key="picker_index">{{(picker_item-1)<10?('0' + (picker_item-1)):(picker_item-1)}}分</view>
					<!-- #endif -->
				</picker-view-column>
				<picker-view-column>
					<!-- #ifndef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in 60" :key="picker_index">{{picker_item<10?('0' + picker_item):picker_item}}秒</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<view class="flex_row_c_c" v-for="(picker_item,picker_index) in 60" :key="picker_index">{{(picker_item-1)<10?('0' + (picker_item-1)):(picker_item-1)}}秒</view>
					<!-- #endif -->
				</picker-view-column>
			</block>
		</picker-view>
		<button type="primary" :style="classObj.marginTop5 + confirmStyle" @tap="confirmFc()">{{confirmName||'确定'}}</button>
	</view>
</template>

<script>
	import _app from './app.js';
	export default {
		props: {
			startYear: Number,
			endYear: Number,
			indicatorStyle: String,
			height: Number,
			wH: Number,
			defaultDate: String,
			mode: String,
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
		data() {
			let dateValue = [], years = [], days = [];
			let defaultDate, defaultHour, defaultMinute, defaultSecond;
			if (this.mode !== _app.picker_date_obj.time) {
			if (this.defaultDate) defaultDate = new Date(this.defaultDate);
			else defaultDate = new Date();
			years = _app.countYears(this.startYear || new Date().getFullYear() - 5, this.endYear || new Date().getFullYear() +
				5);
			let endYear = years[years.length - 1];
			let defaultYear = defaultDate.getFullYear(),
				defaultMonth = defaultDate.getMonth(),
				defaultDay = defaultDate.getDate();
			defaultHour = defaultDate.getHours(),
			defaultMinute = defaultDate.getMinutes(),
			defaultSecond = defaultDate.getSeconds();
			let compareY = defaultYear > endYear;
			let year = compareY ? endYear : defaultYear;
			let month = compareY ? 11 : defaultMonth;
			days = _app.countDays(year, month, false, this.mode).days;
				if (compareY)
					dateValue.push(years.length - 1);
				else
					for (let i = 0; i < years.length; i++) {
						if (year == years[i]) {
							dateValue.push(i);
						}
					}
				dateValue.push(compareY ? 11 : month);
				dateValue.push(compareY ? days : defaultDay - 1);
			}else{
				if(this.defaultDate) {
					const arr = this.defaultDate.split(":");
					dateValue.push(parseInt(arr[0]));
					dateValue.push(parseInt(arr[1]));
					dateValue.push(parseInt(arr[2]));
				}else{
					let defaultTime = new Date();
					dateValue.push(defaultTime.getHours());
					dateValue.push(defaultTime.getMinutes());
					dateValue.push(defaultTime.getSeconds());
				}
			}
			if (this.mode !== _app.picker_date_obj.date && this.mode !== _app.picker_date_obj.time) {
				dateValue.push(defaultHour);
				dateValue.push(defaultMinute);
				dateValue.push(defaultSecond);
			}
			return {
				years,
				days,
				dateValue,
				picker_date_obj: _app.picker_date_obj,
				classObj: {
					picker: 'height:' + (this.height || this.wH * .2) + 'px;font-size:' + this.fontSize + 'px;',
					marginTop5: 'margin-top:' + this.wH * .05 + 'px;'
				}
			}
		},
		methods: {
			bindPickerViewChange({detail: { value }}) {
				if(this.mode!==_app.picker_date_obj.time) {
					let data = _app.countDays(this.years[value[0]], value[1], value);
					this.days = data.days;
					this.dateValue = data.val;
				}else{
					this.dateValue = value;
				}
			},
			confirmFc() {
				let _this = this;
				const dateValue = _this.dateValue;
				let Y = _this.years;
				let year, month, day, h, m, s;
				let data;
				switch (_this.mode) {
					case _app.picker_date_obj.date:
						year = Y[dateValue[0]];
						month = _app.formatNum(dateValue[1] + 1);
						day = _app.formatNum(dateValue[2] + 1);
						data = `${year}/${month}/${day}`;
						break;
					case _app.picker_date_obj.time:
						h = _app.formatNum(dateValue[0]);
						m = _app.formatNum(dateValue[1]);
						s = _app.formatNum(dateValue[2]);
						data = `${h}:${m}:${s}`;
						break;
					default:
						year = Y[dateValue[0]];
						month = _app.formatNum(dateValue[1] + 1);
						day = _app.formatNum(dateValue[2] + 1);
						h = _app.formatNum(dateValue[3]);
						m = _app.formatNum(dateValue[4]);
						s = _app.formatNum(dateValue[5]);
						data =
							`${year}/${month}/${day} ${h}:${m}:${s}`;
						break;
				}
				_this.$emit('getDate', {
					newData: data,
					index: _this.index,
					type: _app.pickerChoosedType.pickerChoosedType_date.name
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
