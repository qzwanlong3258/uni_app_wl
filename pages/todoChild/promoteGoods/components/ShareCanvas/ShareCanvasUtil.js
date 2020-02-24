import { getUnlimited } from '@/api/wx.js';

/************************************ 工具类 *******************************/

/**
 * 字符串 工具类
 */
let stringUtil = {

	/**
	 * 给字符串分段
	 */
	stringSegment(content, segmentLength) {
		let stringArr = [];
		let tempStr = '';
		for (let i = 0; i < content.length; i++) {
			tempStr += content.charAt(i);
			if (i % segmentLength == segmentLength - 1 || i == content.length - 1) {
				stringArr.push(tempStr);
				tempStr = '';
			}
		}
		return stringArr;
	},

	/**
	 * 如果长度小于 n
	 * 往字符串前面添加 0
	 */
	add0InFront(value, n) {
		value = value.toString();
		if (value.length < n) {
			let addNum = n - value.length;
			for (let i = 0; i < addNum; i++) {
				value = "0" + value;
			}
		}
		return value;
	},

	/**
	 * 字符串倒置
	 */
	invert(value) {
		value = value.toString();
		return value.split("").reverse().join("");
	},

	/**
	 * 62进制转换为字符
	 */
	toCharBy62(code) {
		code = parseInt(code);
		if (code >= 0 && code <= 9)
			return String.fromCharCode(code + 48);
		if (code >= 10 && code <= 35)
			return String.fromCharCode(code + 87);
		if (code >= 36 && code <= 62)
			return String.fromCharCode(code + 29);
		else
			console.warn("该code无法转换为字符串,code必须大于等于0，小于或等于62");
		return null;
	},

	/**
	 * 解析字符串
	 */
	compression(str) {
		let equalSign = "%3D";
		let comma = "%26";
		let id = str.substring(str.indexOf(equalSign) + equalSign.length, str.indexOf(comma));
		let referrerId = str.substring(str.indexOf(equalSign) + equalSign.length);
		console.log(referrerId);
	},

	/**
	 * 该字符串是否包含另一个字符串
	 */
	isContain(contain, beContain) {
		return contain.indexOf(beContain) !== -1;
	},
};

/************************************ 结果类 *******************************/

export class Result {
	constructor(code, msg, data) {
		this.code = code;
		this.msg = msg;
		this.data = data;
	}

	setData(data) {
		this.data = data;
		return this;
	}
}

export let renum = {
	// 授权成功
	AUTHORIZEDSUCCESS: 88,

	// 授权失败
	AUTHORIZEDFAILURE: 89,

	// 无法授权
	UNAUTHORIZED: 90,

	// 有权限
	HASPERMISSION: 91,

	// 无权限
	NOPERMISSION: 92,

	// 执行成功
	SUCCESS: 93,

	// 执行失败
	FAIL: 94,

	// 主动参数
	INITIATIVE: 95
}

/************************************ 装饰微信方法 *******************************/

export const IWX = {

	/**
	 * wx方法 Promise包装
	 */
	invoke(methodName, objParam) {
		let asyn = new Promise((resolve, reject) => {
			let param = {
				success(res) {
					resolve(new Result(renum.SUCCESS).setData(res));
				},
				fail(err) {
					console.warn(err);
					reject(new Result(renum.FAIL).setData(err));
				}
			}
			Object.assign(param, objParam);
			wx[methodName](param);
		});
		return asyn;
	},

	/**
	 * 检测用户是否开启该权限
	 */
	getIsPermission(permission) {
		let asyn = new Promise((resolve, reject) => {
			wx.getSetting({
				success(res) {
					if (permission in res.authSetting && res.authSetting[permission]) {
						resolve(new Result(renum.HASPERMISSION).setData(res));
					} else {
						console.warn("没有" + permission + "权限");
						resolve(new Result(renum.NOPERMISSION).setData(res));
					}
				},
				fail(err) {
					console.warn("权限检测失败");
					reject(new Result(false, "权限检测失败", err));
				}
			});
		})
		return asyn;
	}
}

/************************************ 推广图类区 *******************************/

/**
 * 推广图 类
 */
export default class ShareCanvas {

	/**
	 * 通过ID获取推广图
	 */
	static getCanvasById(id) {
		return this;
	}

	/**
	 * 构造方法
	 */
	constructor({
		ctx,
		imgUrl,
		qRCodeUrl,
		title,
		price,
		width = 250,
		height = 400,
		qRCodeWidth = 280
	}) {
		// 画布对象
		this.ctx = ctx,

		// 画布底色
		this.backgroundColor = '#fff';

		// 正中大图片
		this.imgUrl = imgUrl;

		// 标题
		this.title = title;

		// 标题字体大小
		this.titleSize = 14;

		// 标题颜色
		this.titleColor = "#262626";

		// 价格
		this.price = price;

		// 价格文字颜色
		this.priceColor = "#E02832";

		// 推广图宽度
		this.width = width;

		// 推广图高度
		this.height = height;

		// 内边框上、右、左边距
		this.borderWidth = 10;

		// 内边框下边距
		this.borderBottom = this.height / 5;

		// 内边框线宽
		this.borderLineWidth = 1;

		// 内边框颜色
		this.borderColor = "#DEDEDE";

		// 内边框角部样式
		this.borderAngle = "miter";

		// 标题分段长度
		this.segmentLength = 12;

		// 二维码URL
		this.qRCodeUrl = qRCodeUrl;

		// 二维码宽度
		this.qRCodeWidth = qRCodeWidth;

		// 二维码说明文
		this.qRCodeDesc = "长按图片，识别二维码查看商品详情";

		// 二维码说明文字体大小
		this.qRCodeDescSize = 14;

		// 二维码说明文字颜色
		this.qRCodeDescColor = "#262626";

		// 是否已经绘制
		this.isDraw = false;
	}

	/**
	 * 获取设备高宽
	 */
	getSystemWidthHeight() {
		IWX.invoke("getSystemInfo").then((result) => {
			console.log(result);
		})
	}

	/**
	 * 绘制推广图
	 */
	draw() {
		return new Promise((resolve, reject) => {
			let p1 = this.checkPermission().then((result) => { // 如果用户曾经拒绝了授权，就需要跳转设置授权页面
				if (result.code == renum.UNAUTHORIZED)
					reject(result);
			});
			p1.then(() => {
				let p2 = this.drawImg();
				let p3 = this.drawLittleProgramCode().then((result) => {
					this.drawCodeDesc();
				});
				this.fillBackgroundColor();
				this.drawRet();
				let titleArr = stringUtil.stringSegment(this.title, this.segmentLength);
				this.drawTextArr(this.pruneTitleArr(titleArr));
				Promise.all([p2, p3]).then((result) => {
					this.ctx.draw();
					this.isDraw = true;
					resolve(renum.SUCCESS);
				});
			})
		});
	}

	/**
	 * 检测是否有保存图片到本地的权限
	 */
	checkPermission() {
		return new Promise((resolve, reject) => {
			IWX.getIsPermission("scope.writePhotosAlbum").then((result) => {
				if (result.code == renum.NOPERMISSION && result.data.authSetting["scope.writePhotosAlbum"] === false) {
					resolve(new Result(renum.UNAUTHORIZED));
				} else if (result.code == renum.NOPERMISSION || result.code == renum.HASPERMISSION) {
					resolve(result);
				}
			});
		});
	}

	/**
	 * 填充画布底色
	 */
	fillBackgroundColor() {
		this.ctx.setFillStyle(this.backgroundColor);
		this.ctx.fillRect(0, 0, this.width, this.height);
	}

	/**
	 * 绘制矩形边框
	 */
	drawRet() {
		this.ctx.setStrokeStyle(this.borderColor);
		let recWidth = this.width - 2 * this.borderWidth;
		let recHeight = this.height - this.borderBottom - this.borderWidth;
		this.drawLine(this.borderWidth, this.borderWidth, this.borderWidth, recHeight + this.borderWidth);
		this.drawLine(this.borderWidth, this.height - this.borderBottom, recWidth + this.borderWidth, recHeight + this.borderWidth);
		this.drawLine(recWidth + this.borderWidth, recHeight + this.borderWidth, recWidth + this.borderWidth, this.borderWidth);
		this.drawLine(recWidth + this.borderWidth, this.borderWidth, this.borderWidth, this.borderWidth);
	}

	/**
	 * 绘制直线
	 */
	drawLine(sx, sy, ex, ey) {
		this.ctx.beginPath();
		this.ctx.setStrokeStyle(this.borderColor);
		this.ctx.setLineWidth(this.borderLineWidth);
		this.ctx.setLineJoin(this.borderAngle);
		this.ctx.moveTo(sx, sy);
		this.ctx.lineTo(ex, ey);
		this.ctx.stroke();
	}

	/**
	 * 绘制标题文本(数组)
	 */
	drawTextArr(textArr) {
		let recHeight = this.height - this.borderBottom - this.borderWidth; // 内边框高度
		let imgHeight = this.width - 2 * this.borderWidth; // 正中图片高度
		let alignSpacing = this.titleAlignSpacing(recHeight, imgHeight, textArr);
		this.ctx.setFontSize(this.titleSize);
		this.ctx.setFillStyle(this.titleColor);
		this.ctx.setTextAlign('center');
		textArr.forEach((item, index) => {
			if (index == 2) {
				this.ctx.setFillStyle(this.priceColor);
			}
			this.ctx.fillText(item, this.width / 2, imgHeight + this.borderWidth + alignSpacing + this.titleSize);
			alignSpacing += parseInt(this.titleSize * 1.5);
		})
	}

	/**
	 * 调整标题字体间距
	 */
	titleAlignSpacing(recHeight, imgHeight, textArr) {
		let alignSpacing = parseInt((recHeight - imgHeight - this.titleSize * 1.5 * textArr.length) / 2); // 垂直间距
		let minAS = (recHeight - imgHeight) / 25; // 最小垂直间距
		while (alignSpacing < minAS && this.titleSize > 8) {
			if (alignSpacing < minAS)
				this.titleSize--;
			alignSpacing = parseInt((recHeight - imgHeight - this.titleSize * 1.5 * textArr.length) / 2); // 标题到文字的垂直距离
		}
		return alignSpacing;
	}

	/**
	 * 绘制小程序码
	 */
	drawLittleProgramCode() {
		this.qRCodeWidth = this.borderBottom - 2 * this.borderWidth;
		return new Promise((resolve, reject) => {
			console.log(this.qRCodeUrl);
			IWX.invoke("getImageInfo", {
				"src": this.qRCodeUrl
			}).then((result) => {
				this.ctx.drawImage(result.data.path, this.borderWidth, this.height - this.borderBottom + this.borderWidth,
					this.qRCodeWidth, this.qRCodeWidth);
				resolve(new Result(true, "绘制小程序码成功", result));
			});
		});
	}

	/**
	 * 修剪标题数组
	 * 如果大于两行，则省略第二行之后的标题内容，并且在第二行尾添加省略号
	 */
	pruneTitleArr(textArr) {
		let tempArr = [];
		if (textArr.length > 2) {
			tempArr[0] = textArr[0];
			tempArr[1] = textArr[1].substring(0. - 3) + "...";
			textArr = tempArr;
		}
		textArr.push("￥" + this.price.toFixed(2));
		return textArr;
	}

	/**
	 * 下载图片到临时地址,并绘制图片
	 */
	drawImg() {
		return new Promise((resolve, reject) => {
			let ctx = this.ctx;
			let p1 = this.borderWidth;
			let p2 = this.width - 2 * this.borderWidth;
			let url = this.urlConversion(this.imgUrl);
			IWX.invoke("getImageInfo", {
				"src": url
			}).then((result) => {
				ctx.drawImage(result.data.path, p1, p1, p2, p2);
				resolve(new Result(true, "推广图绘制正中大图成功"));
			})
		});
	}

	/**
	 * 图片URL转换为可下载URL
	 */
	urlConversion(url) {
		return url;
		// return (url && url.indexOf("https") === -1) ? url.substring(0, 4) + 's' + url.substring(4, 10) + 's' + url.substring(
		// 	10) : url;
	}

	/**
	 * 推广图保存到本地相册
	 * 检测有没有权限，有则保存图片
	 * 否则，申请权限，然后保存图片
	 */
	saveImgLocal(tempPath) {
		return new Promise((resolve, reject) => {
			this.checkPermission().then((result) => {
				if (result.code == renum.UNAUTHORIZED) {
					resolve(result);
				} else if (result.code == renum.NOPERMISSION) {
					this.applyAuthorization().then((result) => {
						IWX.invoke("saveImageToPhotosAlbum", {
							"filePath": tempPath
						}).then((result) => {
							resolve(new Result(renum.SUCCESS));
						}).catch((result) => {
							reject(result);
						});
					}).catch((result) => {
						reject(result);
					})
				} else if (result.code == renum.HASPERMISSION) {
					IWX.invoke("saveImageToPhotosAlbum", {
						"filePath": tempPath
					}).then((result) => {
						resolve(new Result(renum.SUCCESS));
					}).catch((result) => {
						reject(result);
					});
				}
			});
		});
	}

	/**
	 * 申请授权(图片保存到本地权限)
	 */
	applyAuthorization() {
		return new Promise((resolve, reject) => {
			IWX.invoke("authorize", {
				"scope": "scope.writePhotosAlbum"
			}).then((result) => {
				resolve(new Result(renum.AUTHORIZEDSUCCESS));
			}).catch((result) => {
				console.warn("用户拒绝了授权");
				reject(new Result(renum.AUTHORIZEDFAILURE));
			});
		});
	}

	/**
	 * 绘制二维码说明文
	 */
	drawCodeDesc() {
		let codeDescArr = stringUtil.stringSegment(this.qRCodeDesc, 10);
		let alignSpacing = this.codeDescAlignSpacing(codeDescArr);
		let x = (this.width - 3 * this.borderWidth - this.qRCodeWidth) / 2 + this.borderWidth + this.qRCodeWidth;
		this.ctx.setFontSize(this.qRCodeDescSize);
		this.ctx.setFillStyle(this.qRCodeDescColor);
		this.ctx.setTextAlign('center');
		codeDescArr.forEach((item, index) => {
			this.ctx.fillText(item, x, this.height - this.borderBottom + this.borderWidth + alignSpacing + this.qRCodeDescSize);
			alignSpacing += parseInt(this.qRCodeDescSize * 1.5);
		})
	}

	/**
	 * 调整二维码说明文行间距
	 */
	codeDescAlignSpacing(codeDescArr) {
		let alignSpacing = parseInt((this.borderBottom - this.borderWidth - this.qRCodeDescSize * 6 / 4 * codeDescArr.length) /
			2); // 标题到文字的垂直距离
		let minAS = this.borderBottom / 10;
		while (alignSpacing < minAS && this.qRCodeDescSize > 8) {
			if (alignSpacing < minAS)
				this.qRCodeDescSize--;
			alignSpacing = parseInt((this.borderBottom - this.borderWidth - this.qRCodeDescSize * 6 / 4 * codeDescArr.length) /
				2); // 标题到文字的垂直距离
		}
		return alignSpacing;
	}
}
