/**
 * inputTap custom类型点击触发函数
 * @param {any} customId
 */
export function inputCustomTapFc(customId) { // 必须return一个Promise对象, 可以resolve数据给相应的input赋值
	return new Promise((resolve, reject) => {
		switch (customId) {
			case '自定义id':
				break;
			default:
				uni.scanCode({ //示例, 扫码后赋值
					success: function(res) {
						log('条码类型：' + res.scanType);
						log('条码内容：' + res.result);
						resolve(res.result);
					}
				});
				break;
		}
	})
}
/**
 * inputTap custom类型点击触发函数异常时触发的函数
 * @param {any} customId
 * @param {Object} e
 */
export function inputCustomTapCatchFc(customId, e) { // inputTap custom类型触发的函数异常时触发的函数, 必须return一个Promise对象, 可以resolve数据给相应的input赋值
	return new Promise((resolve, reject) => {
		switch (customId) {
			case '自定义id':
				break;
			default:

				break;
		}
	})
}
/**
 * 内置过滤函数
 */
export const filterTypeObj = { // 可根据需求自行添加拓展
	twoDecimalPlaces(value) { // 必须接受一个参数
		value = value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
		value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
		value = value.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3'); //只能输入1个小数 
		return value; // 必须return value
	}
};


// 注意只可增加不可删除
// 注意只可增加不可删除
// 注意只可增加不可删除
/**
 * 内置正则校验
 */
export const verifyTypeObj = {
	Tel: {
		reg: /^[1][0-9]{10}$/,
		name: '手机号'
	},
	Email: {
		reg: /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/,
		name: '电子邮箱'
	},
	idCart: {
		reg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
		name: '身份证号'
	},
	NationalNumber: {
		reg: /\d{3}-\d{8}|\d{4}-\d{7}/,
		name: '国内号码'
	},
	QQ: {
		reg: /[1-9][0-9]{4,}/,
		name: 'QQ号'
	},
	PostalCode: {
		reg: /[1-9]\d{5}(?!\d)/,
		name: '邮政编码'
	},
	IpAddress: {
		reg: /\d+\.\d+\.\d+\.\d+/,
		name: 'IP地址'
	},
	Chinese: {
		reg: /[\u4e00-\u9fa5]/,
		name: '中文字符'
	},
	Char: {
		reg: /^[A-Za-z]+$/,
		name: '英文字母'
	},
	Int: {
		reg: /^\d+$/,
		name: '整数'
	},
	Number: {
		reg: /^([1-9]\d*(\.\d+)?)|(\d+(\.\d+))$/,
		name: '数字'
	}
};