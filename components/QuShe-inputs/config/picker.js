import log from './log';
/**
 * picker逐级获取-获取访问接口时的自定义携带参数
 * @param {Object} obj
 */
export function getSendData(obj) {
	const {
		// 以下参数供以判断
		value, //picker的value值
		launch, // 是否是初始化
		customId, // 自定义标识
		index, // 改变的列的下标（第几列改变）
		linkageNum, // 联动级数
		type, // picker的type
		datas, // 页面当前数据: {data_0: 第一列数据, data_1: 第二列数据, data_2: 第三列数据}
		column // 三级联动中 是第几列获取sendData
	} = obj
	const {
		data_0, // 第一列数据
		data_1 // 第二列数据
	} = datas; // 页面当前数据: {data_0: 第一列数据, data_1: 第二列数据, data_2: 第三列数据}
	let vbName_0; // 第一列数据获取value值的变量名
	let vbName_1; // 第二列数据获取value值的变量名
	switch (customId) { // 根据customId决定vbName的赋值走向
		case '自定义标识':
			vbName_0 = '';
			vbName_1 = '';
			break;
		default:
			vbName_0 = 'value';
			vbName_1 = 'value';
			break;
	}

	let sendData = {}; // 访问接口携带的数据
	switch (linkageNum) {
		case 2: // 二级联动
			sendData.id = data_0[value[0]][vbName_0];
			break;
		case 3: // 三级联动
			if (launch || index === 0) { // 首次初始化 或 第一列更改
				switch (column) {
					case 0: // 获取第一列中用以获取sendData的数据
						sendData.id = data_0[value[0]][vbName_0];
						break;
					case 1: // 获取第二列中用以获取sendData的数据
						sendData.id = data_1[0][vbName_1];
						break;
					default:
						log('column 超限');
						break;
				}
			} else { // 第二列更改
				sendData.id = data_1[value[1]][vbName_1];
			}
			break;
		default:
			log('级数不存在');
			break;
	}
	return sendData; // 最终return sendData

}

/**
 * picker逐级获取-获取逐级数据
 * @param {Object} obj
 */
export function getAsyncDataFc(obj) { // 访问接口获取picker自定义逐级数据
	return new Promise((rs, rj) => {
		uni.showLoading({ //不需要可以删除, 别忘了下面的hideLoading
			title: '获取数据中……'
		})
		setTimeout(() => { // 访问接口获取数据 (需自己修改)
			let data;
			switch (obj.id) {
				case 'a':
					data = [{
						name: 'a_a',
						value: 'a_a'
					}, {
						name: 'a_b',
						value: 'a_b'
					}];
					break;
				case 'b':
					data = [{
						name: 'b_a',
						value: 'b_a'
					}, {
						name: 'b_b',
						value: 'b_b'
					}];
					break;
				case 'c':
					data = [{
						name: 'c_a',
						value: 'c_a'
					}, {
						name: 'c_b',
						value: 'c_b'
					}];
					break;
				case 'a_a':
					data = [{
						name: 'a_a_a',
						value: 'a_a_a'
					}, {
						name: 'a_a_b',
						value: 'a_a_b'
					}]
					break;
				case 'a_b':
					data = [{
						name: 'a_b_a',
						value: 'a_b_a'
					}, {
						name: 'a_b_b',
						value: 'a_b_b'
					}]
					break;
				case 'b_a':
					data = [{
						name: 'b_a_a',
						value: 'b_a_a'
					}, {
						name: 'b_a_b',
						value: 'b_a_b'
					}]
					break;
				case 'b_b':
					data = [{
						name: 'b_b_a',
						value: 'b_b_a'
					}, {
						name: 'b_b_b',
						value: 'b_b_b'
					}]
					break;
				case 'c_a':
					data = [{
						name: 'c_a_a',
						value: 'c_a_a'
					}, {
						name: 'c_a_b',
						value: 'c_a_b'
					}]
					break;
				case 'c_b':
					data = [{
						name: 'c_b_a',
						value: 'c_b_a'
					}, {
						name: 'c_b_b',
						value: 'c_b_b'
					}]
					break;
				default:
					break;
			}
			rs(data);
			uni.hideLoading(); //不需要可以删除
		}, 1000);
	})
}