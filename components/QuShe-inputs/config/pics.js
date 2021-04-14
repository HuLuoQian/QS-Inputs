import log from './log';
import interfaces from './interfaces';
/**
 * 上传文件方法
 * @param {any} customId
 * @param {String} filePath
 * @param {Object} picsUpLoadData
 */
export function UpLoadFile(customId, filePath, picsUpLoadData) { // 上传文件方法: (自定义上传标识, 文件路径, 自定义上传数据)
	log('自定义上传图片携带数据:' + JSON.stringify(picsUpLoadData));
	if (interfaces.baseUrl && filePath.indexOf(interfaces.baseUrl) != -1) { //域名替换机制: 判断是否是从后端获取的图片路径, 若是 替换域名字符串为空后resolve. 也可以根据customId动态控制, 不需要则删除此代码
		const replacePath = filePath.replace(interfaces.baseUrl, '');
		return Promise.resolve({
			data: replacePath
		});
	}
	let _this = this;
	let url = '';
	let formData = {};
	let name = '';
	switch (customId) { //判断该项pics类型自带的UpLoadFileType, 根据此值来确定不同的url、formData、name
		case 'UpLoadImage_1': //自定义的标识
			url = '';
			formData = {};
			name = '';
			break;
		default: //若无判断需求可直接写在这里
			url = interfaces.upLoadImg;
			formData = {};
			name = '';
			break;
	}
	if (!url) {
		uni.showToast({title:'上传文件的url不能为空'});
		return new Promise((rs, rj) => {
			rj('上传文件的url不能为空');
		});
	}
	if (!filePath) {
		uni.showToast({title:'上传文件的filePath不能为空'});
		return new Promise((rs, rj) => {
			rj('上传文件的filePath不能为空');
		});
	}
	return new Promise((reslove, reject) => {
		uni.showLoading({
			title: '上传文件中'
		})
		const obj = {
			url,
			name,
			filePath,
			success(res) {
				log('进入UpLoadFile方法的success回调: ' + JSON.stringify(res));
				uni.hideLoading();
				reslove(res)
			},
			fail(err) {
				log('进入UpLoadFile方法的fail回调')
				log(JSON.stringify(err))
				uni.hideLoading();
				reject();
			}
		}
		
		// #ifdef APP-PLUS
		if (plus.os.name.toLowerCase() === 'ios') {
			if(Object.keys(formData).length > 0) obj.url = renderUrlData(obj.url, formData);
		}else{
			obj.formData = formData;
		}
		// #endif
		// #ifndef APP-PLUS
		obj.formData = formData;
		// #endif
		uni.uploadFile(obj);
	})
}

/**
 * 拼接上传返回数据方法
 * @param {String} vals
 * @param {String} val
 */
export function pics_splice(vals, val) { // 拼接图片上传返回后的数据, vals是拼接后的数据， val是新添项
	if (typeof(vals) !== 'string') { // 第一次传进来是一个数组
		vals = val || '|'; // 可更改分隔符
		return vals;
	}
	vals += val ? '|' + val : '|';
	return vals; // 必须return vals
}

function renderUrlData(u, d) {
	let c = '';
	let n = 0;
	if (d)
		for (let i in d) {
			if (n > 0)
				c += '&' + i + '=' + d[i];
			else
				c += '?' + i + '=' + d[i];
			++n;
		}
	return u + c;
}