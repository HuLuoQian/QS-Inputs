/**
 * 发送验证码方法
 * @param {any} customId
 * @param {String} phone
 */
export default function sendSMS(customId, phone) { // 发送验证码方法, 需返回生成的验证码
	let code = ''; // 生成验证码
	switch (customId) { // 判断自定义标识
		case '1':
			code = '';
			break;
		default: //若无判断需求可直接写在这里
			code = '123456';
			break;
	}
	//发送验证码
	uni.showToast({title: `发送验证码给${phone}成功,请注意查收`, icon: 'none'});
	return code; // 必须return生成的验证码
}