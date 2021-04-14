import log from './config/log';
import { getSendData, getAsyncDataFc } from './config/picker';
import interfaces from './config/interfaces';
import { inputCustomTapFc, inputCustomTapCatchFc, filterTypeObj, verifyTypeObj } from './config/input';
import { UpLoadFile, pics_splice } from './config/pics';
import sendSMS from './config/sms';

const getPickerAsyncData = async function(obj) { // picker-custom与picker-custom2的逐级获取数据函数
	let _this = this;
	_this.waiting = true; // 在获取数据时不许用户点确定
	const {
		value, // picker的value值
		index, // picker改变的列的下标
		launch, // 是否是初始化
		datas, // 所有picker数据
		oldValue, // 旧的picker的value值
		customId, // 自定义标识
		linkageNum // 联动级数
	} = obj; // picker的value值， 需改变数据的变量名， 是否初始化时使用该函数，页面当前数据: {data_0: 第一列数据, data_1: 第二列数据, data_2: 第三列数据}, 旧的picker的value值, 逐级获取数据时决定携带数据的变量名
	const {
		data_0, // 第一列数据
		data_1 // 第二列数据
	} = datas; // 页面当前数据: {data_0: 第一列数据, data_1: 第二列数据, data_2: 第三列数据}

	// 使用sendData访问接口获取数据, 最终需要给async_1、async_2赋值
	let sendData = {};
	try {
		switch (linkageNum) {
			case 2: // 二级联动
				if (!!_this.memoryData_1[value[0]]) { // 查询记忆数据
					_this.async_1 = [..._this.memoryData_1[value[0]]]; // 直接赋值记忆数据
				} else {
					sendData = getSendData(obj); // 访问接口携带参数
					const newData_1 = await getAsyncDataFc(sendData); // 从接口获取第二列的数据
					_this.async_1 = [...newData_1]; // 赋值
					_this.memoryData_1[value[0]] = [...newData_1]; // 记忆数据
				}
				if (launch) { // 首次初始化 value为传进来的defaultValue
					_this.value[1] = value[1]; // 初始化可以赋值初始化的值
				} else {
					_this.value[1] = 0; // 第二列value重置为0
				}
				break;
			case 3: // 三级联动
				if (launch) { // 首次初始化 value为传进来的defaultValue
					// 获取第二列数据
					sendData = getSendData({ ...obj,
						column: 0
					}); // 访问接口携带参数
					const newData_1 = await getAsyncDataFc(sendData); // 从接口获取第二列的数据
					_this.async_1 = [...newData_1]; // 给第二列赋值
					_this.memoryData_1[value[0]] = [...newData_1]; // 记忆数据
					_this.value[1] = value[1]; // 初始化可以赋值初始化的值
					// 获取第三列数据
					sendData = getSendData({ ...obj,
						datas: { ...datas,
							data_1: [...newData_1]
						},
						column: 1
					}); // 访问接口携带参数
					const newData_2 = await getAsyncDataFc(sendData);
					_this.async_2 = [...newData_2]; // 给第三列赋值
					if (!_this.memoryData_2[value[0]])
						_this.memoryData_2[value[0]] = [];
					_this.memoryData_2[value[0]][value[1]] = [...newData_2]; // 记忆数据
					_this.value[2] = value[2]; // 初始化可以赋值初始化的值
				} else { // picker滑动
					let newData_1;
					let newData_2;
					switch (index) {
						case 0: // 第一列更改
							// 获取第二列数据
							if (!!_this.memoryData_1[value[0]]) { // 查询记忆数据
								newData_1 = [..._this.memoryData_1[value[0]]]; // 直接赋值记忆数据
							} else {
								sendData = getSendData({ ...obj,
									column: 0
								}); // 访问接口携带参数
								newData_1 = await getAsyncDataFc(sendData);
								_this.memoryData_1[value[0]] = [...newData_1]; // 记忆数据
							}
							_this.async_1 = [...newData_1]; // 给第二列赋值
							_this.value[1] = 0; // 初始化可以赋值初始化的值

							// 获取第三列数据
							if (!_this.memoryData_2[value[0]])
								_this.memoryData_2[value[0]] = [];
							if (!!_this.memoryData_2[value[0]][value[1]]) { // 查询记忆数据
								newData_2 = [..._this.memoryData_2[value[0]][value[1]]]; // 直接赋值记忆数据
							} else {
								sendData = getSendData({ ...obj,
									datas: { ...datas,
										data_1: [...newData_1]
									},
									column: 1
								}); // 访问接口携带参数
								newData_2 = await getAsyncDataFc(sendData);
								_this.memoryData_2[value[0]][value[1]] = [...newData_2]; // 记忆数据
							}
							_this.async_2 = [...newData_2] // 给第三列赋值
							_this.value[2] = 0; // 初始化可以赋值初始化的值
							break;
						case 1: // 第二列更改
							log('第二列更改')
							if (!_this.memoryData_2[value[0]])
								_this.memoryData_2[value[0]] = [];
							if (!!_this.memoryData_2[value[0]][value[1]]) { // 查询记忆数据
								log('有记忆数据');
								newData_2 = [..._this.memoryData_2[value[0]][value[1]]]; // 直接赋值记忆数据
							} else {
								log('没有记忆数据');
								sendData = getSendData(obj); // 访问接口携带参数
								newData_2 = await getAsyncDataFc(sendData);
								_this.memoryData_2[value[0]][value[1]] = [...newData_2]; // 记忆数据
							}
							_this.async_2 = [...newData_2]; // 给第三列赋值
							_this.value[2] = 0; // 初始化可以赋值初始化的值
							break;
						default:
							break;
					}
				}
				break;
		}
		_this.oldValue = [...this.value];
		_this.waiting = false;
	} catch (e) {
		//TODO handle the exception
		_this.oldValue = [...this.value];
		_this.waiting = false;

	}
}

const dateTime = 'picker-dateTime';
const date = 'picker-date';
const time = 'picker-time';
const pickerChoosedType = {
	pickerChoosedType_date: {
		name: 'date',
		value: 'p_date_choosed_'
	},
	pickerChoosedType_city: {
		name: 'city',
		value: 'p_city_choosed_'
	},
	pickerChoosedType_custom: {
		name: 'custom',
		value: 'p_custom_choosed_'
	},
	pickerChoosedType_custom2: {
		name: 'custom2',
		value: 'p_custom2_choosed_'
	},
	pickerChoosedType_provincialStreet: {
		name: 'provincialStreet',
		value: 'p_custom_provincialStreet_'
	}
};



const eventNames = {
	inputsChange: 'inputsChange',
	inputTap: 'inputTap'
};

const setValueType = {
	inputsObj: {
		name: 'inputsObj',
		itemName: ''
	},
	focusObj: {
		name: 'focusObj',
		itemName: ''
	}
};
const filterParamsArrayType = {
	setInputsValueFc: 'setInputsValueFc',
	setValue: 'setValue',
	picsUpLoadData: 'picsUpLoadData'
};

const _app = {
	log, //打印管理
	eventNames, // inputs内所有类型变更时的emit事件名称
	UpLoadFile,
	pics_splice,
	sendSMS,
	pickerChoosedType,
	setValueType,
	filterParamsArrayType,
	verifyTypeObj, // 内置正则验证
	filterTypeObj, // 内置过滤函数
	inputCustomTapFc,
	inputCustomTapCatchFc,
	getPickerAsyncData, // picker-custom与picker-custom2的逐级获取数据函数
	showToast(msg) {
		uni.showToast({
			title: msg,
			icon: 'none'
		})
	},
	regTest(name, val) {
		return verifyTypeObj[name].reg.test(val);
	},
	isNumber(param) {
		return typeof(param) === 'number';
	},
	countDays(Y, M, val, mode) {
		let days = [];
		if (mode !== time) {
			days = new Date(Y, M + 1, 0).getDate();
			if (val) {
				val[2] = val[2] < days - 1 ? val[2] : days - 1;
			}
		}
		return {
			days,
			val
		};
	},
	countYears(sy, ey) {
		let _this = this;
		let y = [];
		let c = ey - sy;
		for (let i = 0; i <= c; i++) {
			y.push(sy + i);
		}
		return y;
	},
	hideLoading() {
		uni.hideLoading();
	},
	showLoading(msg, ifmask) {
		uni.showLoading({
			title: msg,
			mask: ifmask || false
		})
	},
	picker_date_obj: {
		dateTime,
		date,
		time
	},
	previewImage(imgPath, currentIndex) {
		if (!(imgPath instanceof Array))
			imgPath = [imgPath];
		uni.previewImage({
			urls: imgPath,
			current: currentIndex || 0
		})
	},
	checkbox_status(data) {	// 暂时无用了
		for (let i = 0; i < data.length; i++) {
			if (data[i] !== '') data[i] = true;
			else data[i] = false;
		}
		return data;
	},
	filterParams(params, type, checkOneVariableName) {
		if (params.length === 0)
			return {};
		const arr = getParamsArray(type);
		if (params.length > 1) {
			const o = {};
			Object.keys(params).forEach((item, index) => {
				o[arr[index]] = params[index];
			})
			return o;
		} else {
			if(params[0] instanceof Object){
				
				if(checkOneVariableName) {
					const ps = Object.keys(params[0]);
					for(let i = 0; i < ps.length; i++) {
						if(arr.includes(ps[i])) {
							return params[0];
						}
					}
					return { [arr[0]]: params[0] };
				}else{
					return params[0];
				}
			}else{
				return { [arr[0]]: params[0] };
			}
		}
	},
	formatNum(num) {
		return num<10?('0' + num):num;
	}
}
export default _app;

function getParamsArray(type) {
	let arr;
	switch (type) {
		case filterParamsArrayType.setInputsValueFc:
			arr = ['param', 'value', 'fail', 'isVariableName'];
			break;
		case filterParamsArrayType.setValue:
			arr = ['setDatas'];
			break;
		case filterParamsArrayType.picsUpLoadData:
			arr = ['setPicsDatas', 'scb', 'fcb'];
			break;
		default:
			arr = [];
			break;
	}
	return arr;
}


