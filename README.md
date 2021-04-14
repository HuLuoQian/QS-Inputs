## 下载示例项目 可直接拖进项目运行

## QQ交流群: 750104037 [点我加入](https://jq.qq.com/?_wv=1027&k=5OyZoXa)

## 作者想说
```
感谢各位小伙伴的不断建议，inputs组件的进步都是因为你们哦~！

如果该组件有什么问题还请大家说出来哦，还有如果有什么建议的话也可以提下呐 ~
如果觉得好用，可以回来给个五星好评么~~(❁´◡`❁)*✲ﾟ*  蟹蟹~拜托啦~
```

## 组件简介
```
本组件目前支持 
3.0.1 input
3.0.2 textarea
3.0.4 radio
3.0.5 checkbox
3.0.6 switch
3.0.7 slider
3.0.3 上传图片
3.0.8 日期选择
3.0.9 城市选择
3.1.2 省市区乡镇街道
3.1.0、3.1.1 picker可联动自定义
3.1.4 editor(官方示例)(v6.9新增)
3.1.5 infinitePics 无限上传图片(v6.9新增)
等类型的快速开发，自动判断、自动取值，只要你填写好每项的类型数据，就可以很方便的开发啦！
甚至，表单的类型、布局、取值可以由后端接口动态决定！有需要的小伙伴快点下载吧
```

# 提示
## 有该插件的拆分版: [QS-inputs-split](https://ext.dcloud.net.cn/plugin?id=652)<br />
```
相较于QS-inputs-split
优点: 能根据后台生成对应的类型
缺点: 可拓展性差、兼容性差(只要支持H5、App、微信小程序)

```

---

# 更新说明

| 版本号 | 更新说明 |
|--------|:----------|
| v7.9 | 1、修复app v3 不显示问题<br />2、修复checkbox 值判断问题<br />3、修复icons问题 |
|    ……    |    详细历次更新说明请移步至文档底部       |


# inputs组件使用说明
注：有引入官方的uni-Icons组件（删除图片的叉叉、input一键清除叉叉、input左边自定义图标、密码显隐图标），可自行修改

## `详细代码示例见页面底部或见示例项目`

---

# `1. 传给inputs组件的属性`
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| inputsArray| 是| Array\<Object\>| | 需循环渲染的inputs虚拟dom, 详见3.|
| @activeFc| 是| Function| | 主功能方法，携带一个用户所输入的数据对象|
| activeName| | String| | 主功能按钮的文字说明，不传该值，则主按钮不显示，可以用ref调用inputs的activeFc方法获取输入|
| ifCode| | Boolean| `false`| 是否启用验证码功能, 若启用则需完善app.js中`sendSMS`发送验证码方法, 并需设置一项input的phone属性为true|
| ifRule| | Boolean| `false`| 是否需要用户同意某规则或协议|
| ~~ruleArray(废弃,请使用ruleSet)~~| | Array\<Object\>| | 需要用户同意某规则或协议的数组|
| @chaildOpenEvent| | Function| | 打开某规则或协议的方法|
| onLoadData| | String| `data_`| activeFc返回的对象中的数据变量名前缀，后面跟index，未定义自定义变量名时生效|
| ~~cssMode（废弃，统一wrap布局）~~| | String| wrap| 可控制拥有子项数组的类型的项内布局方式|
| ~~changeReSet(废弃)~~| | Boolean| `false`| 在inputsArray改变时可重置所有数据为空，但不重置视图，若需重置视图看下方说明|
| submitReSet| | Boolean| `false`| 提交数据后是否重置数据为初始化|
| animationType| | String| | 入场动画类型, 详见1.0.1|
| animationDuration| | Number| | 入场动画时长系数(index+1 ， 乘以此系数为动画时长)|
| ruleSet| | Object<String\|Array> |  | 规则或协议设置, 详见1.0.4 |
| buttonStyle| | Object<String>| | button自定义样式, 详见1.0.5|
| titleSet| | Object<String>|  | title(左边)设置, 详见1.0.6|
| contentSet| | Object<String>| | content(右边)设置, 详见1.0.7|
| titleHide| | Boolean| `false`| 隐藏title|
| inputDebounceSet| | Object| | input类型输入防抖设置, 详见1.0.8|
| focusStyle| | Object| | 控制input或textarea类型focus或blur时的边框颜色, 详见1.0.9|
| fontSizeScaleSet| | Object| | 控制title和content的字体大小系数, 详见1.1.0|
| verifyStatusSet| | Object| | 控制校验状态, 详见1.1.1|
| usingComponents(v6.1新增)| | Boolean| `false`| 编译模式为自定义组件模式，则建议填此项为true |
| @inputsChange(v6.4新增)| | Function| | inputs内某类型的值更改时的回调, 详见1.1.2 |
| otherSet(v6.5新增)| | Object| | 其他设置, 详见1.1.3 |
| inputsId(v6.8新增)| | String| | inputs的id属性值 |
| pickerMode(v7.4新增)| | String| | picker显示模式，若为arrowhead则为箭头模式，否则为button模式 |
| pickerPlaceholder(v7.4新增)| | String| | picker显示模式若为arrowhead时的空占位字符, 也可由picker项内属性placeholder控制 |
| @picsTap(v7.4新增)| | Function| | pics类型设置customTapId后点击进入此回调, 携带title,index,picsIndex,infinite,customTapId等参数|
注：titleFontSize、titleFontColor、contentFontSize、changeReSet、ruleArray等属性已废弃

### 1.0.1 animationType属性说明

可作为父级属性统一传入，也可项内属性单独传入，目前支持的类型有：fadIn、refadIn、slide-left、slide-fade-left、slide-right、slide-fade-right、slide-fade-bottom、rotate3d-fade等。动画也可自定义，只要定义动画后定义好class属性就可以了。

### 1.0.2 ~~changeReSet属性说明(废弃，3.7版本后自动初始化数据)~~
在父级传入的inputsArray改变时，可以选择重置数据，但是视图的重置需要先inputsArray=[ ]后setTimeout 300或者多少后重新赋值，过程中可以设置主按钮文字为‘加载中’等，可增强用户体验


### 1.0.3 ~~cssMode属性说明(废弃，统一wrap布局)~~
| 值| 说明|
|---|---|
| wrap| 布局方式: 全显+换行  |
| scrollX| 布局方式: 非全显+滑动 |
注：cssMode属性可在父级中传入， 默认为wrap，也可在项内属性中传入,优先级: 项内属性>父级属性.

### 1.0.4 ruleSet属性说明
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| color| Color| `#007aff`| 规则或协议文字颜色 |
| checkbox_color| Color| `#007aff`| 规则或协议选中框颜色 |
| ruleErr(v6.5新增)| String| 请先阅读并勾选某某规则或协议 | 未勾选规则或协议的错误提示 |
| rulePreText(v6.5新增)| String| 我已阅读并同意 | 规则或协议之前的前缀文字 |
| itemArray| Array| | 需循环的规则或协议 |

#### 1.0.4.0.1 ruleSet的itemArray属性说明
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| name| String| | 规则或协议名称  |
| value| all| | 规则或协议的标识 |
| color| Color| | 规则或协议的文字颜色（优先于ruleSet的color） |

### 1.0.5 buttonStyle属性说明
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| activeButton| CssStyle| |  主按钮样式  |
| changeButton| CssStyle|  |  picker类型更改按钮样式 |
| selectButton| CssStyle|  |  picker类型选择按钮样式 |
| confirmButton| CssStyle|  |  picker类型弹出框中确定按钮样式 |
| getcodeButton| CssStyle|  |  获取验证码按钮样式 |
| changeButtonSizeScale(v7.0新增)| Number| .03 |  picker类型的更改按钮文字大小系数 |
| selectButtonSizeScale(v7.0新增)| Number| .03 |  picker类型的选择按钮文字大小系数 |
| getcodeButtonSizeScale(v7.0新增)| Number| .03 |  验证码按钮的字体大小系数 |

### 1.0.6 titleSet属性说明
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| size| Number| 屏幕~~高度~~宽度*`.021`| title字体大小(单位：px)， 优先级大于fontSizeScaleSet所设置的字体大小 |
| color| Color| `#666666`| title文字颜色|
| layout| String| `right`| title对齐方式(设置 left 则为左对齐，center为居中， 否则右对齐) |

### 1.0.7 contentSet属性说明
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| size| Number| 屏幕~~高度~~宽度*`.018`| content字体大小(单位：px)， 优先级大于fontSizeScaleSet所设置的字体大小  |
| width| Color| `100`| content的宽度，在titleHide设置为true时生效，单位 `%`  |
| layout| String| `right`| content对齐方式(设置 left 则为左对齐，center为居中， 否则右对齐) |

### 1.0.8 inputDebounceSet属性说明(5.0新增)
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| openInputDebounce| Boolean |`true`|是否开启input输入防抖 |
| delay| Number |`500`|输出延迟时间 |

注：  input与textarea类型有效

### 1.0.9 focusStyle属性说明(5.5新增)
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| focusBorderStyle| Color| `#999999`|  input或textarea类型focus时的边框颜色 |
| blurBorderStyle| Color| `#f8f8f8`|  input或textarea类型blur时的边框颜色 |

### 1.1.0 fontSizeScaleSet属性说明(5.7新增)(6.5修改)
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| allScale| Number| |  title与content的`字体大小系数`(屏幕~~高度~~宽度乘以此系数) |
| titleScale| Number|  `.029`|  title的`字体大小系数`(屏幕~~高度~~宽度乘以此系数),优先级大于allScale |
| contentScale| Number|  `.029`|  content的`字体大小系数`(屏幕~~高度~~宽度乘以此系数),优先级大于allScale |

注：fontSizeScaleSet设置的字体大小优先级小于titleSet与contentSet中设置的字体大小

### 1.1.1 verifyStatusSet属性说明(5.9新增)
| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| openVerifyStatus| Boolean| |  是否开启校验管理 |
| ~~inputsId~~直接从inputs传入| String| |  引入的inputs组件的id属性值 (自定义组件模式下，若需开启滚动则APP、小程序必填) |
| openScroll| Boolean| |  校验失败时是否滚动至校验失败位置，`APP、wx小程序在自定义组件模式下，建议设置1.中的usingComponents为true, 否则会多一次执行` |
| openChangeBorderColor| Boolean| |  校验失败时是否改变边框颜色 |
| verifyErrorColor| Color| `rgba(255,255,0,.7)`|  当该项校验函数失败时，将边框设置为此颜色 |
| errNullColor| Color| `rgba(245,16,92,.7)`| 当该项判断为空时，将边框设置为此颜色 |

### 1.1.2 @inputsChange回调说明(6.4新增)
```
inputs内任何类型的值变更时都会触发此回调, 该方法接收一个所变更类型的对象，该对象有如下参数:
```

| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| type| String| |  类型 |
| title| String| |  标题名称 |
| customId| Any| |  自定义标识 |
| newData| | |  变更后的值 |
| oldData| | |  变更前的值 |
| index| Number | | inputsArray中的下标 |
| picsIndex| Number | | 若为pic类型，则返回所在项的二维数组下标(第几张图片) |

### 1.1.3 otherSet属性说明(6.5新增)

| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| requiredFieldsSet| Object |  | 必填标识设置, 详见1.1.3.0.1  |
| getCodeSet| Object|   | 验证码设置, 详见1.1.3.0.2 |
| segmentationTitleSet(v7.0新增)| Object|   | 大标题设置, 详见1.1.3.0.3 |

#### 1.1.3.0.1 requiredFieldsSet属性说明

| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| requiredFieldsFlag| String| * | 自定义必填标识 |
| hideRequiredFields| Boolean| false | 是否隐藏必填标识 |


#### 1.1.3.0.2 getCodeSet属性说明

| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| securityCodePlaceholder| String| 请输入验证码 | 验证码input的placeholder的文字 |
| phoneNum| String|  | 需获取验证码的手机号, 优先于input所设置的手机号 |
| customId| Any|  | 自定义标识，用于app.js文件中获取验证码方法中的判断 |

#### 1.1.3.0.3 segmentationTitleSet属性说明(v7.0新增)

| 值| 值类型| 默认值| 说明|
|---|---|---|---|
| segmentationTitleFontSizeScale(v7.0新增)| Number|  .038 | 设置segmentationTitle的字体大小系数 |
| segmentationTitleStyle(v7.0新增)| CssStyle|   | 设置segmentationTitle的样式 |

---

# 2. ref调用方法说明(列出的是可能用到的)

| 方法名| 功能| 参数|
|------|----|----|
| activeFc| 主功能方法， 触发绑定的activeFc获取用户输入方法| |
| setFocus| 设置指定input、textarea类型的focus值| 见下方示例|
| picker_hideFc| 关闭所有弹出的picker| |
| inputs_reSet| 重置inputs为初始化| |
| setInputsValue(6.4新增)`不推荐使用，建议使用setValue`| 设置inputs内部的值, 暂不支持pics类型赋值| |
| setEditorContent(6.8新增)| 设置editor的值| 顺序传参: (值, 值类型), 值类型若不为delta，则按html处理|
| setValue(7.4新增)| 设置inputs内的值| 可传一个对象属性或一个数组, 用于一项或多项设置, 详见 2.0.3 |
| setPicsUpLoadData(7.6新增)| 设置上传图片的自定义携带数据| 可传一个对象属性或一个数组, 用于一项或多项设置, 详见 2.0.4 |
| clearPicsUpLoadData(7.6新增)| 删除上传图片的自定义携带数据| 可不传或传一个对象属性或一个数组, 用于一项或多项设置, 详见 2.0.5 |

## 2.0.1 setFocus示例
#### 传入参数:（Number | String | Function）, focus值(Boolean), 错误回调(Function)
```javascript
//setFocus示例1
this.$refs.inputs.setFocus(2, true);
```

```javascript
//setFocus示例2
this.$refs.inputs.setFocus((inputsArray)=>{ //可以接收一个参数也可以在下面自己获取当前inputsArray数组
	let i = inputsArray.findIndex((item)=>{	//findIndex方法 返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1
		return item.title === '手机号校验';
	})
	return i;
	//可以不使用findIndex方法，但是必须return一个Number
}, true);
```

## 2.0.2 setInputsValue示例(暂不支持pic类型赋值)
#### 传入参数:（Number | String | Function）, 值(Any), 错误回调(Function)
```javascript
//setInputsValue示例1
this.$refs.inputs.setInputsValue(3, false);
```

```javascript
//setInputsValue示例2
this.$refs.inputs.setInputsValue('textarea', 'setInputsValue示例2所设置的值');
```

```javascript
//setInputsValue示例3
this.$refs.inputs.setInputsValue((inputsArray) => {
	let i = inputsArray.findIndex(item => item.title === 'textarea') //findIndex方法 返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1
	return i;
	//可以不使用findIndex方法，但是必须return一个Number
}, 'setInputsValue示例3所设置的值');
```


```javascript
//setInputsValue示例4
this.$refs.inputs.setInputsValue('notFind', 'setInputsValue示例4所设置的值', ()=>{
	uni.showToast({
	  title: '错误回调：找不到相应的index哦',
	  icon: 'none'
	})
});
```

## 2.0.3 setValue示例

#### 传入参数:（Object | Array ）
```javascript
//setFocus示例1
this.$refs.inputs.setValue([
  {
    title,  //匹配title属性, 优先级：2
    variableName,  //匹配variableName属性, 优先级：1
    index,  //匹配index属性, 优先级：3
    picsIndex,  //若为pics类型则需传是第几张图片
    valueType,  //若为editor类型，则需传数据类型
    value  //需设置的值, 值类型根据各类型而定, 一般与默认值相似
  }
]);
```

## 2.0.4 setPicsUpLoadData示例

#### 传入参数:（Object | Array ）
```javascript
//设置多项
this.$refs.inputs.setPicsUpLoadData(
	[
		{
			customId: 'setPicsData',
			data: {a:1,b:2}
		},
		{
			customId: 'setPicsData2',
			data: {c:3,d:4}
		}
	]
);

//设置一项
this.$refs.inputs.setPicsUpLoadData(
	{
		customId: 'setPicsData',
		data: {a:1,b:2}
	}
);

this.$refs.inputs.setPicsUpLoadData({
	setPicsDatas: [
		{
			customId: 'setPicsData',
			data: {a:1,b:2}
		},
		{
			customId: 'setPicsData2',
			data: {c:3,d:4}
		}
	],
	scb(obj) {
		console.log('设置图片上传的自定义数据成功: ' + JSON.stringify(obj));
		uni.showToast({title:'设置图片上传的自定义数据成功'});
	},
	fcb() {
		console.log('设置图片上传的自定义数据失败');
		uni.showToast({title:'设置图片上传的自定义数据失败'});
	}
});
```


## 2.0.5 clearPicsUpLoadData示例

#### 传入参数:（Object | Array ）
```javascript
//清除多项
this.$refs.inputs.clearPicsUpLoadData(
	[
		{
			customId: 'setPicsData'
		},
		{
			customId: 'setPicsData2'
		}
	]
);


//清除一项
this.$refs.inputs.clearPicsUpLoadData(
	{
		customId: 'setPicsData'
	}
);

//清除全部
this.$refs.inputs.clearPicsUpLoadData();


//有回调函数
this.$refs.inputs.clearPicsUpLoadData({
	scb(obj) {
		console.log('清除成功');
		uni.showToast({title:'清除成功'});
	}
}); 
```


# 3. inputsArray详解
## `inputsArray项内公共属性`

| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 除input类型外是| String| | 该项的类型|
| title| 是| String| | 该项的标题|
| ignore| | Boolean| false| 是否可忽略该项（判断时可以为空）|
| nullErr| | String| `this.title + '不能为空'`| 为空时提示|
| variableName| | String| `(this.onloadData|'data_') + index`| 自定义变量名,取值时用|
| defaultValue| | 根据各类型而定| | 该项初始化默认值|
| segmentationTitle| | String| | 分割大标题|
| border_bottom| | String| | 下边框，例 `'1px solid #F2F2F2'`|
| border_top| | String| | 上边框，例 `'1px solid #F2F2F2'`|
| customId| | Any| | 自定义标识, 会在@inputsChange回调中返回 |
| hide(6.5新增)| | Boolean | | 是否隐藏当前项, 隐藏后默认可忽略该项, 除非ignore设置为false |

`注： 若inputsArray中的所有项都填写variableName属性时，将开启固定变量名模式， 详见4.0.1`

##  目前共十一种类型

### <span id="input">3.0.1  input</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| | String| | 不传该值(因默认为input)|
| placeholder| | String| `'请输入' + this.title`| input的placeholder文字|
| inputType| | String| `text`| 该项input的类型|
| password| | Boolean| false| 是否是密码类型, 为true时自动开启密码显隐功能|
| phone| | Boolean| false| 是否设此项为手机号input(判断时，判断此属性，最多设置一项)|
| disabled| | Boolean| false| 是否禁用|
| placeholder_style| | String| | 指定 placeholder 的样式|
| placeholder_class| | String| | 指定 placeholder 的样式类|
| maxlength| | Number| 140| 该项input的最大输入长度,-1则不限|
| cursor_spacing| | Number| | 详见官网input|
| focus| | Boolean| false| 获取焦点|
| confirm_type| | Number| done| 设置键盘右下角按钮的文字，仅在 `type="text"` 时生效|
| confirm_hold| | Number| | 详见官网input|
| selection_start| | Number| -1| 光标起始位置，自动聚集时有效，需与selection-end搭配使用|
| selection_end| | Number| -1| 光标结束位置，自动聚集时有效，需与selection-start搭配使用|
| cursor| | Number| | 指定focus时的光标位置|
| adjust_position| | Boolean| true| 详见官网input|
| tapClear| | Boolean| false| 是否开启`一键清除功能`|
| icon| | String| | input左边`自定义图标`(目前使用官方uniIcon，可自行修改)|
| iconColor| | String| `#999999`| 左边自定义图标与密码显示时图标颜色（密码显示默认颜色为`#33CC33`）|
| filterFc| | Fuction| | `自定义过滤值函数`, `自定义组件模式下APP、小程序不可用`|
| verifyFc| | Fuction| | `自定义校验值函数`, `自定义组件模式下APP、小程序不可用`|
| verifyErr| | String| | `校验错误提示`|
| verifyType| | String| | `内置正则校验`, 可取值见下方, 优先级大于自定义的verifyFc, 弥补自定义组件模式不能使用verifyFc的缺陷 |
| focusBorderStyle| | Color| `#999999`| input或textarea类型focus时的边框颜色, 优先级大于focusStyle |
| blurBorderStyle| |Color| `#f8f8f8`| input或textarea类型blur时的边框颜色, 优先级大于focusStyle |
| customId| |Any| | phone属性为true时可填写该属性，用来控制发送验证码发法的属性赋值走向 |
| filterType| | String| | `内置过滤函数`, 可取值见下方, 优先级大于自定义的verifyFc, 弥补自定义组件模式不能使用filterFc的缺陷 |
| customTap(v6.9新增)| | Boolean| false| 自定义图标点击事件, 由app.js中的inputCustomTapFc方法控制，并由inputCustomTapCatchFc控制异常|
| customTapIcon(v6.9新增)| | String| | 自定义图标点击事件的图标名称，目前使用uni-icon的字体图标，有需要的自行修改|
注：最好看源码对照官网属性

#### 3.0.1.0.1 filterFc示例  3.8更新

```javascript
{
 title: '有过滤函数的input'，
 filterFc: function(value) { // 必须接收一个参数
  value = '过滤后的值';
  return value; //必须return
 }
}
```

#### 3.0.1.0.2 verifyFc示例  4.3更新

```javascript
{
	title: "手机号校验",
	verifyFc: function(value) {
		if (/^[1][3,4,5,7,8][0-9]{9}$/.test(value))
			return true;
		return false;
	},
	verifyErr: "手机号校验错误"
}
```

注：`自定义组件模式下`APP、小程序, 传递不了function，所以filterFc与verifyFc不可用, 可以使用verifyType、filterType弥补（可以在app.js文件中相对应的代码下增加类型）

#### 3.0.1.0.3 verifyType属性可取值(内置正则校验)
| 可取值| 说明|
|------|-------|
| Tel| 手机号|
| Email| 电子邮箱|
| idCart| 身份证号|
| NationalNumber| 国内号码|
| QQ| QQ号|
| PostalCode| 邮政编码|
| IpAddress| IP地址|
| Chinese| 中文字符|
| Char| 英文字母|
| Int| 整数|
| Number| 数字|

#### 3.0.1.0.4 filterType属性可取值(内置过滤函数)
| 可取值| 说明|
|------|-------|
| twoDecimalPlaces| 数字并限制小数点后一位小数|

---

### <span id="textarea">3.0.2  textarea</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'textarea'`|
| height| | Number| .1| textarea的高度, 设备高度乘以此数值为textarea的高度|
| width| | String| `60`| textarea的宽度, 单位是`百分比`, 是按所在view的百分比|
| placeholder| | String| `'请输入' + this.title`| textarea的placeholder文字|
| disabled| | Boolean| false| 是否禁用|
| placeholder_style| | String| | 指定 placeholder 的样式|
| placeholder_class| | String| | 指定 placeholder 的样式类|
| maxlength| | Number| 140| 该项input的最大输入长度,-1则不限|
| focus| | Boolean| false| 获取焦点|
| auto_height| | Boolean| false| 是否自动增高，设置auto-height时，style.height不生效|
| fixed| | Boolean| false| 详见官网textarea|
| cursor_spacing| | Number| 0| 详见官网textarea|
| cursor| | Number| | 指定focus时的光标位置,详见官网textarea|
| show_confirm_bar| | Boolean| true| 是否显示键盘上方带有”完成“按钮那一栏,详见官网textarea|
| selection_start| | Number| -1| 光标起始位置，自动聚集时有效，需与selection-end搭配使用|
| selection_end| | Number| -1| 光标结束位置，自动聚集时有效，需与selection-start搭配使用|
| adjust_position| | Boolean| true| 详见官网textarea|
| backgroundColor| | Color| `#F8F8F8`| textarea背景颜色|
| color| | Color| `#666666`| textarea的文字颜色|
| filterFc| | Fuction| | `自定义过滤值函数`, 详见3.0.1 input类型的filterFc, `自定义组件模式下APP、小程序不可用`|
| verifyFc| | Fuction| | `自定义校验值函数`, 详见3.0.1 input类型的verifyFc, `自定义组件模式下APP、小程序不可用`|
| verifyErr| | String| | `校验错误提示`, 详见3.0.1 input类型的verifyErr|
| verifyType| | String| | `内置正则校验`, 可取值见下方, 优先级大于自定义的verifyFc, 详见3.0.1 input类型的verifyType |
| focusBorderStyle| | Color| `#999999`| input或textarea类型focus时的边框颜色, 优先级大于focusStyle |
| blurBorderStyle| | Color| `#f8f8f8`| input或textarea类型blur时的边框颜色, 优先级大于focusStyle |
| filterType| | String| | `内置过滤函数`, 可取值见下方, 优先级大于自定义的verifyFc, 弥补自定义组件模式不能使用filterFc的缺陷, 详见3.0.1 input类型的filterType|
注：最好看源码对照官网属性

---
### <span id="pics">3.0.3 上传图片</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'pics'`|
| itemArray| 是| Array\<Object\>| | 循环的图片数组，下方说明|
| title| | String| | 该项图片的标题|
| ~~cssMode（废弃，统一wrap布局）~~| | String| `wrap`| 项内布局方式|
| clearColor| | Color| `#f5105c`| 清除按钮颜色|
| customId| |Any| | 用来控制上传文件发法的属性赋值走向,在app.js文件中的UpLoadFile方法内判断此属性 |
| customTapId(7.4新增)| |Any| | 点击进入自定义事件而不选择图片, 触发inputs传入的@picsTap |

#### <span id="pics-itemArray">3.0.3.0.1 pics的itemArray属性说明</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| title| | String| | 该项图片的标题|
| nullErr| | String| `this.title + '不能为空'`| 为空时提示|
| ignore| | Boolean| `false`| 可以为空， 不判断是否为空,默认为必填，必填则在title前面有 * 标识|
| defaultValue| | String| | 该项pics的初始化默认图片路径(本地图片路径)|
注：若启用此项，则需完善app.js中的UpLoadFile上传图片至服务器方法，并且完善pics_splice拼接返回的图片路径方法<br />v7.0新增 域名替换机制 ,  若所上传的图片路径字符串开头4位是http， 则被认为是从后端获取的图片，此时会将此路径替换域名字符串为空后resolve出来

---
### <span id="radio">3.0.4 radio(单选)</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'radio'`|
| itemArray| 是| Array\<Object\>| | 需循环的radio数组|
| ~~cssMode（废弃，统一wrap布局）~~| | String| `wrap`| 项内布局方式|
| color| | Color| | radio的颜色|
| scale| | String| `.8`| 大小比例, 取0-1的值|

#### <span id="radio-itemArray">3.0.4.0.1 radio的itemArray属性说明</span>

| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| name| 是| String| | 该radio的标题|
| value| 是| | | 该项radio的值|
| defaultValue| | Boolean| `false`| 该项radio的初始化默认值,(只能设置一个true，若设置多个为true，则取最先为true的值)|
| disabled| | Boolean| `false`| 是否禁用|
| color| | Color| | radio的颜色|

注：itemArray的color优先于外部的color

---
### <span id="checkbox">3.0.5 checkbox(多选)</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'checkbox'`|
| itemArray| 是| Array\<Object\>| | 需循环的checkbox数组|
| ~~cssMode（废弃，统一wrap布局）~~| | String| `wrap`| 项内布局方式|
| color| | Color| | checkbox的颜色|
| scale| | String| `.8`| 大小比例, 取0-1的值|

#### <span id="1checkbox-itemArray">3.0.5.0.1checkbox的itemArray属性说明</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|-----|----|----|-------|
| name| 是| String| | 该checkbox的标题|
| value| 是| | | 该项checkbox的值|
| defaultValue| | Boolean| `false`| 该项checkbox的初始化默认值|
| disabled| | Boolean| `false`| 是否禁用|
| color| | Color| | checkbox的颜色|

注：checkbox返回数据为:{value,status}  3.7更新

---
### <span id="switch">3.0.6 switch</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'switch'`|
| disabled| | Boolean| `false`| 是否禁用|
| mode| | String| `switch`| switch的type|
| color| | Color| | switch的颜色|
| scale| | String| `.8`| 大小比例, 取0-1的值|

---
### <span id="slider">3.0.7 slider</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'slider'`|
| min| | Number| `0`| slider的最小值|
| max| | Number| `100`| slider的最大值|
| step| | Number| `1`| 步长，取值必须大于 0，并且可被(max - min)整除|
| disabled| | Boolean| false| 是否禁用|
| color| | Color| `#e9e9e9`| 背景条的颜色（请使用 backgroundColor）|
| selected_color| | Color| `#1aad19`| 已选择的颜色（请使用 activeColor）|
| activeColor| | Color| `#1aad19`| 已选择的颜色|
| backgroundColor| | Color| `#e9e9e9`| 背景条的颜色|
| block_size| | Number| `28`| 滑块的大小，取值范围为 12 - 28|
| block_color| | Color| `#ffffff`| 滑块的颜色|
| show_value| | Boolean| `false`| 是否显示当前 value|

---


### <span id="picker-date">3.0.8 picker-date 日期控件</span>
#### picker类型注意
若要设置picker的样式，比如我要设置picker高为5，picker内的行内样式高为1，这样可以显示5行，但是，不要把样式设置的太死，行内高设为.9或.8 即可，设置的太死会导致picker在选择最后一项时出现bug

| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'picker-date'`|
| indicatorStyle| | cssStyle| `'height: '+ 屏幕高度*.048 +'px;'`| picker的行内样式|
| height| | String| 屏幕高度*.2 px| picker的高度|
| mode| | String| `picker-date`| picker-date的类型|
| startYear| | Number| new Date().getFullYear() - 5（前五年）| 开始年份, 可直接输入四位数字|
| endYear| | Number| new Date().getFullYear() + 5 (后五年)|  结束年份, 可直接输入四位数字|
| defaultValue| |String| 现在| 默认日期,注意：格式尽量传`YYYY/MM/dd`的格式，不然iOS中有可能new不了Date对象! 例: '2019/03/30 10:00:00'、'2019/03/30',不支持直接初始化time|
| chooseName| | String| 选择日期| 选择日期按钮命名|
| editorName| | String| 更改| 更改日期按钮命名|
| confirmName| | String| 确定| 弹出时,确定选择日期按钮命名|
| onceShowDefaultValue| | Boolean| `false`| 初始化时是否显示初始值|
| placeholder| | String| 请选择| picker为arrowhead时的空占位字符|
#### 3.0.8.0.1 mode属性说明
| 值|  值类型|说明|
|------|----|----|----|-------|
| picker-dateTime| String| 日期加时间|
| picker-date| String| 日期|
| picker-time| String| 时间|

注：所传的defaultDate若不在范围中，则将显示范围内的最后一年最后一月最后一日, defaultValue中所传的月份需-1;

---
### <span id="picker-city">3.0.9 picker-city 城市选择</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'picker-city'`|
| indicatorStyle| | cssStyle| `'height: '+ 屏幕高度*.048 +'px;'`| picker的行内样式|
| height| | String| 屏幕高度*.2 px| picker的高度|
| defaultValue| |Array| `[0, 0, 0]`|默认城市(需注意对应的项是否存在)|
| chooseName| | String| 选择城市| 选择城市按钮命名|
| editorName| | String| 更改| 更改城市按钮命名|
| confirmName| | String| 确定| 弹出时,确定选择城市按钮命名|
| onceShowDefaultValue| | Boolean| `false`| 初始化时是否显示初始值|
| placeholder| | String| 请选择| picker为arrowhead时的空占位字符|

注：picker-city取值时返回对象，可根据需求修改

---
### <span id="picker-custom">3.1.0 picker-custom 自定义 （建议使用3.1.1 picker-custom2，返回的数据更简单）</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'picker-custom'`|
| itemArray|是 |Array| |自定义的picker数组，详见示例说明|
|linkage| | Boolean| `false`| 是否联动|
|steps|linkage为true时是| Object| | 自定义阶级变量名，详见下方示例与说明|
|linkageNum| | Number| | 联动级数|
| defaultValue| |Array| `[0,0,……]`|默认值(需注意对应的项是否存在)|
| indicatorStyle| | cssStyle| `'height: '+ 屏幕高度*.048 +'px;'`| picker的行内样式|
| height| | String| `屏幕高度*.2 px`| picker的高度|
| chooseName| | String| 选择| 选择按钮命名|
| editorName| | String| 更改| 更改按钮命名|
| confirmName| | String| 确定| 弹出时,确定选择按钮命名|
| onceShowDefaultValue| | Boolean| false| 初始化时是否显示初始值|
| async(7.3新增)| | Boolean| false| 是否逐级获取, 详见示例项目-高级-逐级获取示例|
| customId| | String\|Object| | 自定义标识|
| placeholder| | String| 请选择| picker为arrowhead时的空占位字符|

#### <span id="picker-custom-steps">3.1.0.0.1 picker-custom的steps属性说明</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| steps_1_value| | String| | 一级显示属性名|
| steps_2_value| |String| |二级显示属性名|
|steps_2_item| | String| | 二级联动数组属性名|
|steps_3_value| | String| | 三级显示属性名|
|steps_3_item| | String| | 三级联动数组属性名|
注：详见下方示例

##### 3.1.0.0.2无联动示例1：

```javascript
{ // 无联动示例1
	type: 'picker-custom',
	title: 'custom-无联动1',
	itemArray: [
		[0, 1, 2],
		[3, 4, 5]
	],
	defaultValue: [0, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
}

//返回数据格式: {"result":[0,3],"value":[0,0]}
```


##### 3.1.0.0.3 无联动示例2：

```javascript
{ // 无联动示例2
	type: 'picker-custom',
	title: 'custom-无联动2',
	itemArray: [
		[{
			name: 'a', //name变量名需与下方steps.steps_1_value相同
			value: 'a' //可添加多项自定义想要的数据
		}, {
			name: 'b',
			value: 'b'
		}, {
			name: 'c',
			value: 'c'
		}],
		[{
			name: 'd',
			value: 'd'
		}, {
			name: 'e',
			value: 'e'
		}, {
			name: 'f',
			value: 'f'
		}]
	], //name变量名与下方steps.steps_1_value相同
	defaultValue: [0, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
	steps: {
		steps_1_value: 'name'
	}
}

//返回数据格式: {"result":[{"name":"a","value":"a"},{"name":"d","value":"d"}],"value":[0,0]}
```
##### 3.1.0.0.4 二级联动示例1：

```javascript
{ // 二级联动示例1
	type: 'picker-custom',
	title: 'custom-二级联动示例1',
	defaultValue: [1, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
	itemArray: [{
		value_1: '蔬菜', //value_1变量名需与下方steps.steps_1_value相同
		/*
		可添加多项自定义想要的数据
		*/
		item_2: ['青菜'] //item_2变量名需与下方steps.steps_1_value相同
	}, {
		value_1: '荤菜',
		item_2: ['猪肉']
	}],
	steps: {
		steps_1_value: 'value_1',
		steps_2_item: 'item_2'
	},
	linkageNum: 2, //2 表示为2级联动
	linkage: true //true 表示开启联动
}

//返回数据格式: {"result":{"steps1":{"value_1":"荤菜","item_2":["猪肉"]},"steps2":"猪肉"},"value":[1,0]}
```

##### 3.1.0.0.5 二级联动示例2：

```javascript
{ // 二级联动示例2
	type: 'picker-custom',
	title: 'custom-二级联动示例2',
	defaultValue: [0, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
	itemArray: [{
		value_1: '蔬菜', //value_1变量名需与下方steps.steps_1_value相同
		/*
		可添加多项自定义想要的数据
		*/
		item_2: [{
			name: '青菜',
			value: '青菜' //可添加多项自定义想要的数据
		}] //item_2变量名需与下方steps.steps_1_value相同
	}, {
		value_1: '荤菜',
		item_2: [{
			name: '猪肉',
			value: '猪肉'
		}] //name变量名需与下方steps.steps_2_value相同
	}],
	steps: {
		steps_1_value: 'value_1',
		steps_2_value: 'name',
		steps_2_item: 'item_2'
	},
	linkageNum: 2, //2 表示为2级联动
	linkage: true //true 表示开启联动
}

//返回数据格式: {"result":{"steps1":{"value_1":"蔬菜","item_2":[{"name":"青菜","value":"青菜"}]},"steps2":{"name":"青菜","value":"青菜"}},"value":[0,0]}
```

##### 3.1.0.0.6 三级联动示例1：

```javascript
{ // 三级联动示例1
	type: 'picker-custom',
	title: 'custom',
	itemArray: [{
		value_1: '浙江', //value_1变量名需与下方steps.steps_1_value相同
		/*
		可添加多项自定义想要的数据
		*/
		item_2: [{		 //item_2变量名需与下方steps.steps_2_item相同
			value_2: '金华', //value_2变量名需与下方steps.steps_2_value相同
			/*
			可添加多项自定义想要的数据
			*/
			item_3: ['婺城区'] //item_3变量名需与下方steps.steps_3_item相同
		}, {
			value_2: '绍兴',
			item_3: ['越城区']
		}]
	}, {
		value_1: '江苏',
		item_2: [{
			value_2: '南京',
			item_3: ['玄武区'],
		}, {
			value_2: '无锡',
			item_3: ['锡山区']
		}]
	}],
	steps: {
		steps_1_value: 'value_1',
		steps_2_value: 'value_2',
		steps_2_item: 'item_2',
		steps_3_item: 'item_3'
	},
	defaultValue: [1, 0, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
	linkageNum: 3, //3 表示为3级联动
	linkage: true //true 表示开启联动
}

//返回数据格式: {"result":{"steps1":{"value_1":"江苏","item_2":[{"value_2":"南京","item_3":["玄武区"]},{"value_2":"无锡","item_3":["锡山区"]}]},"steps2":{"value_2":"南京","item_3":["玄武区"]},"steps3":"玄武区"},"value":[1,0,0]}
```

##### 3.1.0.0.7 三级联动示例2：

```javascript
{ // 三级联动示例2
	type: 'picker-custom',
	title: 'custom-三级联动示例2',
	itemArray: [{
		value_1: '江西', //value_1变量名需与下方steps.steps_1_value相同
		/*
		可添加多项自定义想要的数据
		*/
		item_2: [{		 //item_2变量名需与下方steps.steps_2_item相同
			value_2: '南昌', //value_2变量名需与下方steps.steps_2_value相同
			/*
			可添加多项自定义想要的数据
			*/
			item_3: [{ 	//item_3变量名需与下方steps.steps_3_item相同
				name: '东湖' ,//name变量名需与下方steps.steps_3_value相同
				/*
				可添加多项自定义想要的数据
				*/
			}]
		}, {
			value_2: '九江',
			item_3: [{
				name: '德安'
			}]
		}]
	}, {
		value_1: '山东',
		item_2: [{
			value_2: '济南',
			item_3: [{
				name: '历下'
			}],
		}, {
			value_2: '青岛',
			item_3: [{
				name: '市南'
			}]
		}]
	}],
	steps: {
		steps_1_value: 'value_1',
		steps_2_value: 'value_2',
		steps_2_item: 'item_2',
		steps_3_value: 'name',
		steps_3_item: 'item_3'
	},
	defaultValue: [1, 0, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
	linkageNum: 3, //3 表示为3级联动
	linkage: true //true 表示开启联动
}

//返回数据格式: {"result":{"steps1":{"value_1":"山东","item_2":[{"value_2":"济南","item_3":[{"name":"历下"}]},{"value_2":"青岛","item_3":[{"name":"市南"}]}]},"steps2":{"value_2":"济南","item_3":[{"name":"历下"}]},"steps3":{"name":"历下"}},"value":[1,0,0]}
```


注：picker-cutsom取值时无联动类型返回数组，联动类型返回对象

---
### <span id="picker-custom2">3.1.1 picker-custom2 自定义（同类型优化版,返回数据更简单）</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'picker-custom2'`|
| itemArray|是(若是无联动类型) |Array| |自定义的picker数组，详见示例说明（无联动请传此参数）|
| itemObject|是(若是联动类型) |Object| |自定义的picker对象，详见示例说明（联动类型请传此参数）|
|linkage| | Boolean| `false`| 是否联动|
|steps|linkage为true时是| Object| | 自定义阶级变量名，详见下方示例与说明|
|linkageNum| | Number| | 联动级数|
| defaultValue| |Array| `[0,0,……]`|默认值(需注意对应的项是否存在)|
| indicatorStyle| | cssStyle| `'height: '+ 屏幕高度*.048 +'px;'`| picker的行内样式|
| height| | String| `屏幕高度*.2 px`| picker的高度|
| chooseName| | String| 选择| 选择按钮命名|
| editorName| | String| 更改| 更改按钮命名|
| confirmName| | String| 确定| 弹出时,确定选择按钮命名|
| onceShowDefaultValue| | Boolean| `false`| 初始化时是否显示初始值|
| async(7.3新增)| | Boolean| false| 是否逐级获取, 详见示例项目-高级-逐级获取示例|
| customId| | String\|Object| | 自定义标识|
| placeholder| | String| 请选择| picker为arrowhead时的空占位字符|

#### <span id="picker-custom2-steps">3.1.1.0.1 picker-custom2的steps属性说明</span>
| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| step_1_value| | String| | 一级显示属性名|
| step_2_value| |String| |二级显示属性名|
|step_3_value| | String| | 三级显示属性名|
注：详见下方示例

##### 3.1.1.0.2 无联动示例1：

```javascript
{
	type: 'picker-custom2',
	title: 'custom2-无联动示例1',
	itemArray: [
		[0, 1, 2],
		[3, 4, 5]
	],
	defaultValue: [0, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
}

//返回数据格式: {"result":[0,3],"value":[0,0]}
```


##### 3.1.1.0.3 无联动示例2：

```javascript
{
	type: 'picker-custom2',
	title: 'custom2-无联动示例2',
	itemArray: [
		[{
			name: 'a', //name变量名需与下方steps.steps_1_value相同
			value: 'a' //可添加多项自定义想要的数据
		}, {
			name: 'b',
			value: 'b'
		}, {
			name: 'c',
			value: 'c'
		}],
		[{
			name: 'd',
			value: 'd'
		}, {
			name: 'e',
			value: 'e'
		}, {
			name: 'f',
			value: 'f'
		}]
	],
	steps: {
		step_1_value: 'name', //第一级显示的属性名
	},
	defaultValue: [0, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
}

//返回数据格式: {"result":[{"name":"a","value":"a"},{"name":"d","value":"d"}],"value":[0,0]}
```
##### 3.1.1.0.4 二级联动示例1：

```javascript
{
	type: 'picker-custom2',
	title: 'custom2-二级联动示例',
	itemObject: {
		step_1: [{
			"name": "蔬菜"
		}, {
			"name": "荤菜"
		}],
		step_2: [
			['青菜', '白菜'], //对应step_1的江西
			['猪肉', '牛肉'] //对应step_1的山东
		]
	},
	steps: {
		step_1_value: 'name', //第一级显示的属性名
		step_2_value: '', //第二级显示的属性名
		step_3_value: '' //第三级显示的属性名
	},
	defaultValue: [1, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
	linkageNum: 2, //3 表示为3级联动
	linkage: true //true 表示开启联动
}

//返回数据格式: {"data":{"result":{"steps1":{"name":"荤菜"},"steps2":"牛肉"},"value":[1,1]},"index":19,"type":"custom2"}
```

##### 3.1.1.0.5 三级联动示例1：

```javascript
{
	type: 'picker-custom2',
	title: 'custom2-三级联动示例',
	itemObject: {
		step_1: [{
			"name": "江西"
		}, {
			"name": "山东"
		}],
		step_2: [
			['南昌', '九江'], //对应step_1的江西
			['济南', '青岛'] //对应step_1的山东
		],
		step_3: [
			[
				[ //对应step_2的南昌
					'东湖'
				],
				[ //对应step_2的九江
					'德安'
				]
			],
			[
				[ //对应step_2的济南
					'历下',
				],
				[ //对应step_2的青岛
					'市南',
				]
			]
		]
	},
	steps: {
		step_1_value: 'name', //第一级显示的属性名
		step_2_value: '', //第二级显示的属性名
		step_3_value: '' //第三级显示的属性名
	},
	defaultValue: [1, 0, 0], //初始数据
	onceShowDefaultValue: true, //是否显示初始数据
	linkageNum: 3, //3 表示为3级联动
	linkage: true //true 表示开启联动
}

//返回数据格式: {"data":{"result":{"steps1":{"name":"山东"},"steps2":"青岛","steps3":"市南"},"value":[1,1,0]},"index":20,"type":"custom2"}
```

注：picker-cutsom取值时无联动类型返回数组，联动类型返回对象

### <span id="picker-provincialStreet">3.1.2 picker-provincialStreet 省市区乡镇街道选择</span>

乡镇街道数据文件完整的需1.5MB左右，目前使用的是600KB，只有街道name无code，若需完整街道数据文件，可以找我拿，甚至自定义生成省市区街道数据格式的方法也可以找我拿，若需求多，可上传为另一个插件

| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'picker-provincialStreet'`|
| indicatorStyle| | cssStyle| `'height: '+ 屏幕高度*.048 +'px;'`| picker的行内样式|
| height| | String| `屏幕高度*.2 px`| picker的高度|
| defaultValue| |Array| `[0, 0, 0, 0]`|默认城市(需注意对应的项是否存在)|
| chooseName| | String| 选择| 选择按钮命名|
| editorName| | String| 更改| 更改按钮命名|
| confirmName| | String| 确定| 弹出时,确定选择按钮命名|
| onceShowDefaultValue| | Boolean| `false`| 初始化时是否显示初始值|
| placeholder| | String| 请选择| picker为arrowhead时的空占位字符|

注：picker-provincialStreet取值时返回对象，可根据需求修改， 若无此类型需求并且嫌此组件体积过大可将乡镇街道数据文件(QuShe-inputs/mpvue-citypicker/city-data/streets.js)删除，并注释相关import代码(QuShe-inputs/mpvue-citypicker/picker-provincialStreet.vue)！

---


### <span id="text">3.1.3 text 用于展示信息</span>

| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'text'`|
| title| | String| | 展示的标题,在titleHide为true时会自动在右边显示|
| content| | String|  | 展示的内容|
| contentStyle| | cssStyle| | 展示内容的内联样式|
| ellipsis| | Boolean| `false`| 一行将要超出时是否隐藏多余的并加上省略号|

注：text类型在取值时不会判断该项，但是会占一个位子

### <span id="editor">3.1.4 editor 官方editor组件  `支持度随官方editor` （v6.9新增）</span>

| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'editor'`|
| title| | String| | editor类型不会展示title但是仍需传入|
| defaultValue| | |  | 初始内容|
| defaultValueType| | String| delta| 初始值类型html或delta|

注：editor类型是唯一的，只能有一个, 并且只在APP、微信小程序中的自定义组件模式下有效，需传入usingComponents属性为true, editor不支持动态增删

### <span id="infinitePics">3.1.5 infinitePics 无限上传图片（v6.9新增）</span>

| 属性名| 是否必填| 值类型| 默认值| 说明|
|------|----|----|----|-------|
| type| 是| String| | 传固定值 `type: 'infinitePics'`|
| max| | Number| 无限| 图片数量的限制数值|
| defaultValue |    |Array|    |初始默认图片数组, 数组中每项为图片地址|
| `v7.8新增` |    | | | |
| sortSelection |    |Boolean| false| 是否开启选择排序模式|
| showClose |    |Boolean| true| 是否显示删除图片按钮|
| showNext |    |Boolean| true| 是否显示添加下一项|
| defaultSelectAll |    |Boolean| false| 当sortSelection为true并用户未选择任何图片时，是否默认上传所有图片|

注：支持多选择，加强大图预览

---

# 4.其他
## 4.0.1 固定变量名模式(v6.5新增)
```
  在固定变量名模式下，inputs动态改变长度时，不会对已有值的项进行初始化
所谓固定变量名模式就是inputsArray中的所有项都填写唯一的自定义变量名属性--variableName
  经测试，在自定义组件模式下，inputsArray使用unshift、splice等会改变长度的方法时，switch能够监听到inputsArray的长度改变，而模板模式不能监听到长度的改变，只有对inputsArray重新赋值才能监听到长度的改变
  而若switch能监听到inputsArray长度改变时，可以去除一些无用的数据,故若使用模板模式编译则对inputsArray长度变化时，建议对inputsArray重新赋值
  示例见示例项目中的动态增删inputsArray示例
  `editor不支持动态增删`
```



# inputs代码示例

## html中使用

```html
<template>
  <view>
	<inputs 
	id="inputs" 
	ref="inputs" 
	:inputsArray="inputsArray" 
	activeName="获取输入" 
	:ruleSet="ruleSet" 
	ifRule 
	ifCode 
	@chaildOpenEvent="openWin"
	@activeFc="activeFc" 
	:onLoadData="onLoadData" 
	animationType="rotate3d-fade" 
	:animationDuration=".2" 
	submitReSet
	:buttonStyle="buttonStyle" 
	:inputDebounceSet="inputDebounceSet" 
	:focusStyle="focusStyle" 
	:fontSizeScaleSet="fontSizeScaleSet"
	:verifyStatusSet="verifyStatusSet"
	:usingComponents="usingComponents"
	@inputsChange="inputsChange($event)"/>

    

    <button type="primary" @tap="setfocus1()" style="margin-top: 50px;">设置textarea focus</button>
		<button type="primary" @tap="setfocus2()" style="margin-top: 5px;">设置input focus</button>
		<button type="primary" @tap="setInputsValue1()" style="margin-top: 5px;">外部指定inputs内部值示例1</button>
		<button type="primary" @tap="setInputsValue2()" style="margin-top: 5px;">外部指定inputs内部值示例2</button>
		<button type="primary" @tap="setInputsValue3()" style="margin-top: 5px;">外部指定inputs内部值示例3</button>
		<button type="primary" @tap="setInputsValue4()" style="margin-top: 5px;">外部指定inputs内部值示例4</button>
		<button type="primary" @tap="openTest()" style="margin-top: 5px;">打开test页面</button>
		<button type="primary" @tap="refActiveFc()" style="margin-top: 5px;">外部获取输入</button>
  </view>
</template>
```

## JS中引入、注册并使用组件
```javascript
<script>
	import inputs from "@/components/QuShe-inputs/inputs.vue";
	export default {
		data() {
			return {
				usingComponents: true,
				verifyStatusSet: {
					inputsId: 'inputs', // inputs组件的id属性值,自定义组件模式必填
					openVerifyStatus: true,
					openScroll: true,
					openChangeBorderColor: true,
					errNullColor: 'rgba(255,255,0,.7)',
					verifyErrorColor: 'rgba(245,16,92,.7)'
				},
				fontSizeScaleSet: { //inputs内的字体大小系数设置(字体大小为屏幕宽高度以此系数)
					allScale: .018,
					titleScale: .018,
					contentScale: .017
				},
				focusStyle: { //控制input或textarea类型focus或blur时的边框颜色
					focusBorderStyle: '#999999',
					blurBorderStyle: '#f8f8f8'
				},
				inputDebounceSet: { //input、textarea防抖设置
					openInputDebounce: true,
					delay: 500
				},
				"buttonStyle": { //按钮样式
					"activeButton": "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //主按钮样式
					"changeButton": "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型更改按钮样式
					"selectButton": "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型选择按钮样式
					"confirmButton": "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;", //picker类型弹出框中确定按钮样式
					"getcodeButton": "background-color: #c0ebd7;border-radius: 30px;box-shadow: 2px 2px 1px 1px #c0ebd7;" //获取验证码按钮样式
				},
				"inputsArray": [{
						"segmentationTitle": "展示信息", //分割大标题
						"border_top": "1px solid #f2f2f2", //上划线
						"type": "text",
						"title": "text示例",
						"content": "展示text信息展示text信息展示text信息展示text信息展示text信息展示text信息",
						"ellipsis": true
					}, {
						"segmentationTitle": "表单组件", //分割大标题
						"type": "slider", //类型
						"title": "slider", //标题
						"defaultValue": 50, //默认值
						"min": 0,
						"max": 100,
						"show_value": true,
						"disabled": false,
						"activeColor": "#c0ebd7",
						"step": 1,
						"border_top": "1px solid #f2f2f2", //上划线
						"variableName": "slider" //自定义变量名
					},
					{
						"type": "textarea",
						"title": "textarea",
						"defaultValue": "今天也要加油鸭~" //默认值
					},
					{
						"type": "switch",
						"title": "switch",
						"color": "#c0ebd7",
						"defaultValue": true,
						"scale": '.8', //比例大小
						"variableName": "switch" //自定义变量名
					},
					{
						"title": "radio",
						"type": "radio",
						"itemArray": [{ //子循环数组
							"name": "aa",
							"value": "aa",
							"defaultValue": true
						}, {
							"name": "bb",
							"value": "bb"
						}],
						"color": "#c0ebd7",
						"scale": '.8', //比例大小
					},
					{
						"title": "checkbox",
						"type": "checkbox",
						"itemArray": [{ //子循环数组
							"name": "a",
							"value": "a",
							"defaultValue": true
						}, {
							"name": "b",
							"value": "b",
							// "defaultValue": true,
							"disabled": true
						}, {
							"name": "c",
							"value": "c",
							"defaultValue": true
						}],
						"variableName": "checkbox",
						"scale": '.8', //比例大小
						"color": "#c0ebd7"
					}, {
						"title": "内置正则校验Email",
						"verifyType": "Email", // 内置正则校验
						"defaultValue": "494843897@qq"
					}, {
						"title": "内置过滤函数",
						"filterType": "twoDecimalPlaces",
						"ignore": true,
						"placeholder": "限制输入小数点后一位"
					}, {
						"title": "手机号校验",
						verifyFc: function(value) {
							if (/^[1][3,4,5,7,8][0-9]{9}$/.test(value))
								return true;
							return false;
						},
						"verifyErr": "手机号校验错误",
						"ignore": true
					}, {
						"title": "input",
						"ignore": true, //是否可忽略该值(判断时此项值可以为空)
						"defaultValue": "今天也要加油鸭~",
						"tapClear": true, //input一键清除功能
						"password": true, //input密码类型
						"icon": "search", //input左边图标
						"iconColor": "#c0ebd7", //input图标颜色
						filterFc: function(value) { //input值过滤函数
							//自定义过滤函数
							value = "filter过滤后的值";
							return value;
						},
						"variableName": "input" //自定义变量名
					}, {
						"segmentationTitle": "上传图片",
						"type": "pics",
						"title": "pics",
						"itemArray": [{
							"title": "测试1",
							"ignore": true
						}, {
							"title": "测试2",
							"ignore": true
						}, {
							"title": "测试3",
							"ignore": true
						}],
						"variableName": "pic",
						"border_top": "1px solid #f2f2f2",
						"clearColor": "#c0ebd7",
						"customId": "自定义一标识"
					},
					{
						"segmentationTitle": "picker类型",
						"border_top": "1px solid #f2f2f2",
						"type": "picker-provincialStreet",
						"title": "provincialStreet",
						"onceShowDefaultValue": true, //初始化时显示初始值
						"variableName": "provincialStreet"
					},
					{
						"type": "picker-date",
						"title": "date"
					},
					{
						"type": "picker-city",
						"title": "city",
						"defaultValue": [10, 6, 0],
						"onceShowDefaultValue": true,
						"variableName": "city"
					},
					{ // 无联动示例1
						"segmentationTitle": "picker-custom示例",
						"border_top": "1px solid #f2f2f2",
						"type": "picker-custom",
						"title": "custom-无联动示例1",
						"itemArray": [
							[0, 1, 2],
							[3, 4, 5]
						],
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
					},
					{ // 无联动示例2
						"type": "picker-custom",
						"title": "custom-无联动示例2",
						"itemArray": [
							[{
								"name": "a", //name变量名需与下方steps.steps_1_value相同
								"value": "a" //可添加多项自定义想要的数据
							}, {
								"name": "b",
								"value": "b"
							}, {
								"name": "c",
								"value": "c"
							}],
							[{
								"name": "d",
								"value": "d"
							}, {
								"name": "e",
								"value": "e"
							}, {
								"name": "f",
								"value": "f"
							}]
						],
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"steps": {
							"steps_1_value": "name"
						}
					},
					{ // 二级联动示例1
						"type": "picker-custom",
						"title": "custom-二级联动示例1",
						"defaultValue": [1, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"itemArray": [{
							"value_1": "蔬菜", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							"item_2": ["青菜"] //item_2变量名需与下方steps.steps_2_item相同
						}, {
							"value_1": "荤菜",
							"item_2": ["猪肉"]
						}],
						"steps": {
							"steps_1_value": "value_1",
							"steps_2_item": "item_2"
						},
						"linkageNum": 2, //2 表示为2级联动
						"linkage": true //true 表示开启联动
					},
					{ // 二级联动示例2
						"type": "picker-custom",
						"title": "custom-二级联动示例2",
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"itemArray": [{
							"value_1": "蔬菜", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							"item_2": [{ //item_2变量名需与下方steps_2_item相同
								"name": "青菜", //name变量名需与下方steps.steps_2_value相同
								"value": "青菜" //可添加多项自定义想要的数据
							}]
						}, {
							"value_1": "荤菜",
							"item_2": [{
								"name": "猪肉",
								"value": "猪肉"
							}]
						}],
						"steps": {
							"steps_1_value": "value_1",
							"steps_2_value": "name",
							"steps_2_item": "item_2"
						},
						"linkageNum": 2, //2 表示为2级联动
						"linkage": true //true 表示开启联动
					},
					{ // 三级联动示例1
						"type": "picker-custom",
						"title": "custom-三级联动示例1",
						"itemArray": [{
							"value_1": "浙江", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							"item_2": [{ //item_2变量名需与下方steps.steps_2_item相同
								"value_2": "金华", //value_2变量名需与下方steps.steps_2_value相同
								/*
								可添加多项自定义想要的数据
								*/
								"item_3": ["婺城区"] //item_3变量名需与下方steps.steps_3_item相同
							}, {
								"value_2": "绍兴",
								"item_3": ["越城区"]
							}]
						}, {
							"value_1": "江苏",
							"item_2": [{
								"value_2": "南京",
								"item_3": ["玄武区"],
							}, {
								"value_2": "无锡",
								"item_3": ["锡山区"]
							}]
						}],
						"steps": {
							"steps_1_value": "value_1",
							"steps_2_value": "value_2",
							"steps_2_item": "item_2",
							"steps_3_item": "item_3"
						},
						"defaultValue": [1, 0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"linkageNum": 3, //3 表示为3级联动
						"linkage": true //true 表示开启联动
					},
					{ // 三级联动示例2
						"type": "picker-custom",
						"title": "custom-三级联动示例2",
						"itemArray": [{
							"value_1": "江西", //value_1变量名需与下方steps.steps_1_value相同
							/*
							可添加多项自定义想要的数据
							*/
							"item_2": [{ //item_2变量名需与下方steps.steps_2_item相同
								"value_2": "南昌", //value_2变量名需与下方steps.steps_2_value相同
								/*
								可添加多项自定义想要的数据
								*/
								"item_3": [{ //item_3变量名需与下方steps.steps_3_item相同
									"name": "东湖", //name变量名需与下方steps.steps_3_value相同
									/*
									可添加多项自定义想要的数据
									*/
								}]
							}, {
								"value_2": "九江",
								"item_3": [{
									"name": "德安"
								}]
							}]
						}, {
							"value_1": "山东",
							"item_2": [{
								"value_2": "济南",
								"item_3": [{
									"name": "历下"
								}],
							}, {
								"value_2": "青岛",
								"item_3": [{
									"name": "市南"
								}]
							}]
						}],
						"steps": {
							"steps_1_value": "value_1",
							"steps_2_value": "value_2",
							"steps_2_item": "item_2",
							"steps_3_value": "name",
							"steps_3_item": "item_3"
						},
						"defaultValue": [1, 0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"linkageNum": 3, //3 表示为3级联动
						"linkage": true //true 表示开启联动
					}, {
						"type": "picker-custom2",
						"title": "custom2-无联动示例1",
						"itemArray": [
							[0, 1, 2],
							[3, 4, 5]
						],
						"steps": {
							"step_1_value": "", //第一级显示的属性名
							"step_2_value": "", //第二级显示的属性名
							"step_3_value": "" //第三级显示的属性名
						},
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
					}, {
						"type": "picker-custom2",
						"title": "custom2-无联动示例2",
						"itemArray": [
							[{
								"name": "a", //name变量名需与下方steps.steps_1_value相同
								"value": "a" //可添加多项自定义想要的数据
							}, {
								"name": "b",
								"value": "b"
							}, {
								"name": "c",
								"value": "c"
							}],
							[{
								"name": "d",
								"value": "d"
							}, {
								"name": "e",
								"value": "e"
							}, {
								"name": "f",
								"value": "f"
							}]
						],
						"steps": {
							"step_1_value": "name", //第一级显示的属性名
							"step_2_value": "", //第二级显示的属性名
							"step_3_value": "" //第三级显示的属性名
						},
						"defaultValue": [0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
					},
					{
						"type": "picker-custom2",
						"title": "custom2-二级联动示例",
						"itemObject": {
							"step_1": [{
								"name": "蔬菜",
								"value": "001"
							}, {
								"name": "荤菜",
								"value": "002"
							}],
							"step_2": [
								["青菜", "白菜"], //对应step_1的蔬菜
								["猪肉", "牛肉"] //对应step_1的荤菜
							]
						},
						"steps": {
							"step_1_value": "name", //第一级显示的属性名
							"step_2_value": "", //第二级显示的属性名
							"step_3_value": "" //第三级显示的属性名
						},
						"defaultValue": [1, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"linkageNum": 2, //3 表示为3级联动
						"linkage": true //true 表示开启联动
					},
					{
						"type": "picker-custom2",
						"title": "custom2-三级联动示例",
						"itemObject": {
							"step_1": [{
								"name": "江西"
							}, {
								"name": "山东"
							}],
							"step_2": [
								["南昌", "九江"], //对应step_1的江西
								["济南", "青岛"] //对应step_1的山东
							],
							"step_3": [
								[
									[ //对应step_2的南昌
										"东湖"
									],
									[ //对应step_2的九江
										"德安"
									]
								],
								[
									[ //对应step_2的济南
										"历下",
									],
									[ //对应step_2的青岛
										"市南",
									]
								]
							]
						},
						"steps": {
							"step_1_value": "name", //第一级显示的属性名
							"step_2_value": "", //第二级显示的属性名
							"step_3_value": "" //第三级显示的属性名
						},
						"defaultValue": [1, 0, 0], //初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
						"linkageNum": 3, //3 表示为3级联动
						"linkage": true //true 表示开启联动
					}, {
						"title": "手机号",
						"phone": true,
						"defaultValue": "13305679845",
						"customId": "验证码自定义标识"
					}
				],
				"ruleSet": {
					"color": "#c0ebd7",
					"checkbox_color": "#c0ebd7",
					"itemArray": [{
						"name": "某规则",
						"value": "aa"
					}],
				},
				"onLoadData": "data_",
			}
		},
		methods: {
			openWin(value) {
				//打开规则或协议页
				//若有一个以上的rule，则根据value打开规则页面
				console.log(value);
			},
			activeFc(res) {
				uni.showToast({
					title: "获取输入成功"
				})
				console.log(JSON.stringify(res));
			},
			openTest() {
				uni.navigateTo({
					url: '../test/test'
				})
			},
			setfocus1() { //设置focus示例1
				this.$refs.inputs.setFocus(2, true);
			},
			setfocus2() { //设置focus示例2
				this.$refs.inputs.setFocus((inputsArray) => {
					let i = inputsArray.findIndex((item) => { //findIndex方法 返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1
						return item.title === '手机号校验';
					})
					return i;
					//可以不使用findIndex方法，但是必须return一个Number
				}, true);
			},
			setInputsValue1() {
				this.$refs.inputs.setInputsValue(3, false);
			},
			setInputsValue2() {
				this.$refs.inputs.setInputsValue('textarea', 'setInputsValue示例2所设置的值');
			},
			setInputsValue3() {
				this.$refs.inputs.setInputsValue((inputsArray) => {
					let i = inputsArray.findIndex(item => item.title === 'textarea') //findIndex方法 返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1
					return i;
					//可以不使用findIndex方法，但是必须return一个Number
				}, 'setInputsValue示例3所设置的值');
			},
			setInputsValue4() {
				this.$refs.inputs.setInputsValue('notFind', 'setInputsValue示例4所设置的值', ()=>{
					uni.showToast({
						title: '错误回调：找不到相应的index哦',
						icon: 'none'
					})
				});
			},
			refActiveFc() {
				console.log('触发绑定的activeFc方法');
				this.$refs.inputs.activeFc();
			},
			inputsChange(res) {
				console.log('pickerChange绑定事件回调:' + JSON.stringify(res));
			}
		},
		components: {
			inputs
		}
	}
</script>
```



# 历次更新说明

| 版本号 | 更新说明 |
|--------|:----------|
| v7.9 | 1、修复app v3 不显示问题<br />2、修复checkbox 值判断问题<br />3、修复icons问题 |
| v7.8 | 1、infinitePics类型新增`选择排序模式`, 并增加设置参数sortSelection、showClose、showNext、defaultSelectAll等，详见 [3.1.5 infinitePics](#infinitePics), 详见<br /> 2、修复checkbox为空判断不正确问题<br />3、 优化 当显示picker时隐藏软键盘<br />4、优化 上传图片 域名替换机制判断为上传文件路径是是否包含interface.js中设置的域名  |
| v7.7 | 1、新增config目录，该目录下为inputs的配置文件，方便管理，以后更新也不用管app.js文件了，只要保留config目录更新即可<br />2、input样式内边距调整<br />3、手写签名示例优化在刚显示画布就滑动绘制导致画布初始设置失效的问题 |
| v7.6 | 1、ref调用方法新增设置上传图片自定义携带数据, 详见2.或示例项目中的ref调用示例<br />2、新增打印管理，详见app.js-log<br />3、修复radio和checkbox类型的value精确度问题，注：radio与checkbox的value会转为String类型，所以尽量使用String类型<br />4、修复验证码样式问题 |
| v7.5 | 1、修复pics类型点击穿透问题<br />2、修复 checkbox 初始值问题 |
| v7.4 | 1、新增picker显示模式，用pickerMode属性控制picker显示模式，默认为arrowhead模式, 并增加相应的空占位字符， 详见1.<br /> 2、详见2. 修复自定义组件模式下input、textarea的focus错乱问题<br />3、input的tapClear默认设为true<br />4、优化title块为text标签，可以用\n控制换行，并且title块可以伸缩，最大宽度为40%，由titleFixedWidth控制title块的宽度是否固定，text类型一直为固定，默认为不固定<br />5、pics类型的itemArray新增属性customTapId, 并在inputs组件上增加回调事件picsTap, 用于实现类似手写签名的功能, 示例项目新增 手写签名示例 详见 示例项目-高级，该功能参考了[手写签名](https://ext.dcloud.net.cn/plugin?id=331) 感谢！ <br />6、ref新增setValue方法，用于设置inputs内数据，支持设置多项, 详见2.<br />7、修复picker-custom2三级联动逐级获取的第三列数据不正确问题<br />8、app.js上传文件方法内对ios传参做了处理，请根据自己的需求修改，在下在项目中是需要这样做的，请一定要根据自己的需求来 |
| v7.3 | 1、picker-custom与picker-custom2新增逐级获取功能, 需要在app.js中配置getSendData与getAsyncDataFc两个方法<br />2、修复picker-date下mode为picker-time的问题, 并且picker-time支持初始化<br />3、修复app.js中的手机号正则判断(在下遇到了198的手机号，然后判断不通过……修改为必须以1开头的11位数字)<br />4、修复可能出现input输入报错问题(需要部分苹果机型的小伙伴测试一下) |
| v7.2 | 1、再一次修复固定变量名模式下初始化问题(啊，， 好失败啊，，) ， 这个问题是这样的，对于用户手动修改值后或者在初始化时有默认值的项将被判定为已初始化，下次初始化时不会改变原有的值, 而未判定为已初始化的值，在下次初始化时还是有机会初始化|
| v7.1 | 1、再次修复固定变量名模式下初始化问题(emmm...这次一定好啊啊啊啊)<br />2、infinitePics支持默认值, 详见3.1.5 |
| v7.0 | 1、优化上传图片功能-- 新增 域名替换机制：（上传图片时会判断是否是网络图片(后端获取的图片)，若是会replace此路径替换域名, 域名在app.js的interface中的baseUrl设置, 然后不执行上传功能直接resolve替换后的路径）具体位于app.js中的UpLoadFile方法, 不需要则可删除<br />2、修复 固定变量名模式下 替换inputsArray后 初始值不生效的问题 <br />3、更改默认字体大小系数为.029<br />4、otherSet属性新增 segmentationTitleSet属性，用于设置segmentationTitle的字体大小系数与样式, 详见1.1.3 <br />5、buttonStyle属性新增 changeButtonSizeScale、selectButtonSizeScale、getcodeButtonSizeScale属性, 目前用于修改 更改picker按钮、验证码按钮文字大小, 详见 1.0.5<br />6、修复ref调用的setFocus方法无效问题<br />7、优化picker-date类型返回值中若小于10则前面加零 |
| v6.8、6.9|  1、新增editor类型-官方示例, 详见3.1.4,在下没用过editor，只是搬了官方的示例过来，若有什么建议可以提哦~, ref中相应增加了外部设置editor内容的方法 <br />2、新增infinitePics类型-无限上传图片(支持一次性选择多张图片，加强大图预览),详见3.1.5 <br />3、废弃verifyStatusSet中的inputsId属性，直接从inputs传入, 详见1.<br />4、input新增customTap属性与customTapIcon属性，用于自定义input图标点击事件（例如扫码）， 详见3.0.1  |
| v6.7|  修复inputTap点击事件    |
| v6.6|  咳咳，下载过6.5的就不用下载了，只是发现上传图片的测试地址没删就再上传一遍    |
| v6.5`大更新` | 1、新增`固定变量名模式`, 所谓固定变量名模式就是inputsArray中的每一项都携带一个唯一的自定义变量名属性--`variableName`, 在此模式下，当inputsArray长度动态改变时将不会对已有值的项初始化, 详见4.0.1, 示例详见示例项目中的动态增删inputsArray示例<br /><br />2、更新示例项目为详细示例 <br /><br />3、inputs的字体大小更改为根据屏幕宽度而定,默认字体大小更改为屏幕宽度*.028<br /><br />4、inputsArray中新增公共属性hide, 用于隐藏<br /><br />5、inputs新增otherSet属性，目前验证码设置、必填标识设置，详见1.  <br /><br />6、优化inputs初始渲染效果<br /><br />7、优化部分ref调用方法中的传参方式<br /><br />8、ruleSet新增部分属性, 详见1.0.4|
| v6.4 | 因为有些小伙伴有自己的特殊需求，所以更新了如下内容: <br />1、inputs新增绑定事件inputsChange, inputs内的任何类型的值变更时的回调, 并且所有类型都增加了customId属性，可以用于inputsChange回调判断, 详见1.<br />2、inputs内新增setInputsValue方法, 用于从外部设置inputs内部值的方法，可以使用ref调用，详见2.<br />3、setFocus方法略有改动，详见2.<br /> |
| v6.3 | 1、修改textarea类型的宽高设置单位，详见3.0.2 <br /> 2、修复picker-custom与picker-custom2类型初始值在某些情况下的bug <br />3、修改了pickers-date文件名字为picker-date.vue, 覆盖的时候看下请把原先的pickers-date文件删除 |
| v6.2 | 1、修复picker类型的按钮会变形问题（定死按钮内的文字大小为所在view的60%, 所以在修改按钮样式时不要修改文字大小，以免变形）<br />2、修复picker类型可能出现初始值报错问题 |
| v6.1 | 1、修复非自定义组件模式校验失败不能滚动的问题(新增`usingComponents`属性),详见1.与1.1.1<br />2、更改verifyErrorCaolor属性为verifyErrorColor（上个版本没注意）<br />3、修复previewImage的App平台，在HX 1.9.5至1.9.8之间current参数不填报错的问题 |
| v5.9、6.0 | 1、修复使用多个inputs组件时判断出错问题<br />2、新增校验状态管理verifyStatusSet属性(自定义组件模式下滚动生效),详见1.<br />3、input防抖默认更改为开启|
| v5.7、v5.8<br />`重要` | 1、`如果用了pcis类型或者开启了发送验证码功能的小伙伴需要改一下代码了`,inputs代码中的`上传图片方法、发送验证码提取到app.js文件中`，方便修改，以后inputs组件更新，也不用很麻烦的去inputs里面更新，只要把原先的app.js里的代码复制一下就好, 并且pics、input类型新增`customId`属性，用来控制上传图片方法、发送验证码方法的属性赋值走向，`拼接上传图片返回数据的方法也转到了app.js中`, 详见3.0.3与1.中的ifcode项<br />2、input、textarea新增`filterType`内置过滤函数，详见3.0.1.0.4<br />3、修复了更新版本后自定义组件模式下APP、微信小程序无法选择图片的问题<br />4、新增`fontSizeScaleSet`属性，控制title、content字体大小系数，详见1.1.0<br />5、修复一些小问题|
| v5.6 | 修复setFocus方法传入参数为0时判断出错问题,顺便修复验证码框focusStyle问题|
| v5.5 | 1、inputs新增`focusStyle`属性(控制input、textarea类型focus或blur时的边框颜色)，input、textarea类型新增focusBorderStyle、blurBorderStyle属性(控制input、textarea类型focus或blur时的边框颜色,优先级大于focusStyle), 详见`1.`<br />2、inputs内新增`setFocus`方法, 用于设置指定的input或textarea的focus属性, 可用`ref方式`调用, 详见`2.0.1`<br />3、突然发现验证码的input框忘记加focusStyle了，下次更新吧|
| v5.4 | 1、input、textarea类型新增`verifyType`(内置正则验证, 有需求的自行添加)<br />2、验证码输入框强制防抖<br />3、修改picker类型的按钮字体大小默认大小与右边文字默认大小一致，并修复该类型的按钮会变形的bug<br />4、修改switch、radio、checkbox的scale默认值为'.8', 并且修改该属性的值类型为`String`<br />5、优化activeFc方法中判断pics的代码|
| v5.3 | 1、switch、radio、checkbox，新增`scale`属性<br />2、限制防抖只能input与textarea类型使用<br />3、pics类型图片选中后，增加阴影<br />4、`废弃cssMode属性`，统一wrap布局<br />5、test页面新增 根据后端获取值给inputs赋值`初始值示例`、`动态增加inputs类型示例`|
| v5.2 | 优化部分样式（pics与textarea类型，textarea类型新增width、backgroundColor、color属性）|
| v5.1 | 优化input类型输入`防抖间隔冲突`，防止用户在防抖间隔后立即输入时出现卡顿的感觉，优化用户体验|
| v5.0 | 优化input类型输入防抖（新增`inputDebounceSet`属性, 其实防抖的不止input类型，是除了picker与checkbox类型的其他类型）, 修复checkbox类型的初始值视图问题|
| v4.9 | 修复picker-provincialStreet类型在自定义组件模式下报错问题，并修复重庆、甘肃等地区的乡、镇、街道数据，若所选择的地区没有街道数据，则为空， 感谢qq：3127653386小伙伴发现的问题~|
| v4.8 | 修复picker-date类型在iOS上的问题（`初始化日期格式已定死`，详见 八、日期选择 的defaultValue属性），感谢unique542@qq.com(243558987)小伙伴发现并查找解决问题！|
| v4.7 | 1、修复picker-custom2所传的数据类型问题（如果使用无联动类型请传itemArray参数，如果使用联动类型请传itemObject参数，因为类型不同，不分开来会报错）<br />2、inputsArray循环时改为使用item.title作为key，所以title每项都必须传！！，不然报错|
| v4.6 | 修复没传buttonStyle就报错问题|
| v4.5 | 1、新增text类型用于展示信息<br />2、增强布局可控性（新增`titleHide`属性，可以隐藏title，并且在设置titleHide为true时，可控制右边部分的width-->contentSet.width，contentSet与titleSet的layout属性新增center值居中显示，因此，在设置titleHide为true并且设置contentSet.layout为center以及设置contentSet.width<100的值时，可以实现预览图中模拟登陆的布局效果）<br />3、获取验证码按钮移到了验证码input的右边<br />4、删除title的冒号，若要回复则在inputs.vue中将title相应的代码取消注释，并删除另外的<br />5、规则及协议改为居中布局<br />6、修复picker-custom2中itemArray的类型|
| v4.4 | 新增picker-custom优化版`picker-custom2`，解决custom数据类型无法使用问题，详见十（2）、picker-custom2， 修复示例中input类型的verifyFc示例 ， 有小伙伴反应picker-custom类型数据使用不了，其实是所传的数据不是json标准格式的数据导致JSON.parse不了，其实从后端拿数据应该不会有这样的问题的|
| v4.3 | input新增`校验功能`|
| v4.2 | 1、新增button样式控制(详见inputs属性说明-buttonStyle)<br />2、pics类型清除按钮新增颜色控制(详见pics类型)<br />3、废弃 titleFontColor 与 titleFontSize 与 contentFontSize 属性，统一归纳到titleSet、contentSet属性中，并增加左对齐或右对齐属性<br />4、废弃ruleArray属性，归纳到ruleSet属性中，并增加设置规则或协议文字颜色，选中框颜色<br />5、若不传activeName（主按钮名称）属性，则不显示主按钮，可以用ref调用inputs的activeFc方法获取输入|
| v4.1 | 新增`省市区乡镇街道四级联动类型`，详见十一、省市区乡镇街道选择<br />(乡镇街道数据文件完整的需1.5MB左右，目前使用的是600KB，只有街道name无code，若需完整街道数据文件，可以找我拿，甚至自定义生成省市区街道数据格式的方法也可以找我拿，若需求多，可上传为另一个插件， 另外， 若无此类型需求并且嫌此组件体积过大可将乡镇街道数据文件删除，并注释相关import代码)|
| v4.0 | 修复picker类型（特别是picker-date）在页面设置custom时picker选择问题|
| v3.9 | 模板中动态样式转到data中,修复textarea类型设置初始值删不掉bug|
| v3.8 | 1、input类型新增过滤函数属性-`filterFc`<br />2、修复h5日一列与时间显示不正确问题<br />|
| v3.7 | 1、增加checkbox类型返回选中状态<br />2、去除changeReset属性，父级传入的inputsArray改变时自动初始化数据<br />3、新增`submitReSet`属性：提交数据后是否重置inputs为初始化<br />4、优化细节<br />5、完善一些注释|
| v3.6 | 修复input类型的一键清除功能在空值时也显示的问题与多项input时inputTap事件无效问题|
| v3.5 | 修复1.8.0新版编译器picker类型bug，并优化picker类型选择记忆，优化picker类型细节，修改picker-date类型defaultValue属性类型为字符串<br />修复上传图片类型|
| v3.4 | input类型 新增 `左边自定义图标`、`一键清除数据功能`、`密码显隐功能`, 可直接拖进项目运行|
| v3.3 | 新增picker可联动自定义类型——picker-custom，(无线无联动+自定义二、三级联动) 详见 十、picker-custom<br />2、修改更新方向|
| v3.2 | 优化布局，新增`segmentationTitle`、`border_bottom`、`border_top`等项内公共属性，修复input无法输入问题|
| v3.1 | 新增textarea类型,完善input类型|
| v3.0 | 1、新增switch、slider，修复checkbox、radio、input（初始化后不改动的情况下）从后台进入前台视图还原为初始化问题（数据不变）<br />2、input、radio、checkbox、switch、slider，各增disabled属性<br />3、修复H5 picker-date类型月份显示不正确问题|
| v2.9 | 新增入场动画，animationType动画类型属性，animationDuration动画时长系数属性（父级需v-bind传入Number类型，不然H5会报错），这两个属性可以以父级属性统一传入，亦可以项内属性单独传入,详见下方 |
| v2.8 | 紧急修复从后台进入前台input视图为空bug（数据还在）,例如选择图片后返回时input视图为空 |
| v2.7 | 修复picker初始值显示，并增加该属性，详见picker类型 |
| v2.6 | 修复h5报错问题，修改picker类型选择方式为弹出,并增加picker按钮名属性 |
| v2.5 | 1、引入官方picker-city城市选择(稍做修改)<br>2、更改日期控件的默认值defaultDate属性为defaultValue<br>3、修复未判断picker-city的bug|
| v2.4 | 新增changeReSet属性|
| v2.3 | 1、新增defaultValue属性，支持input、radio、checkbox、pics的初始化默认值设置,详见一、input、二、pics、三、radio、四、checkbox， <br>2、新增选中的图片可大图预览|
| v2.2 | 新增时分秒选择与日期融合，详见 五、日期控件|
| v2.1 | 修复pics类型问题，与cssMode为scrollX时样式问题，修复H5 picker-date类型，defaultDate报错问题，修复H5|
| v2.0 | 1、修复input软键盘弹出式样式改变问题（统一单位使用px，数值使用windowHieght计算）<br>2、radio、checkbox、pics等类型统一指定项内数组名为itemArray<br>3、inputs属性改为inputsArray，便于区分<br>4、修复一些bug|
| v1.9 | 新增variableName属性，可自定义该项的变量名, 修复pickers组件的样式问题 |
| v1.8 | 新增日期选择控件 —— picker-date |
| v1.7 | 新增cssMode属性，可控制拥有子项数组的类型的项内布局方式,可在父组件传入，也可在项内属性中传入,默认为wrap |
| v1.6 | ruleName属性修改为ruleArray, 可以支持一个以上的规则或协议 |
| v1.5 | 新增radio(单选)类型，checkbox（多选）类型 |
|  | 为提升用户体验，在循环项数较多的情况下，防止超屏，新增overflow_x为scroll(x轴滚动) |
|  | 判断类型使用type判断 |
|  | 完善213-226行的判断写法不正确问题 |


