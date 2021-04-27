export default {
  tipPageUrl: '/common/act/2018/tipPage/',
  MZ: ['NFSAGO','NFSAG','AFSAGO','AFSAG','AFSXO','AFSX','NFSXO','NFSX',],// 满赠活动
  giftFree: ['AFSXO','AFSX','NFSXO','NFSX',],// 可选赠品
  defaultGoodsImage: 'https://img.yunpei.com/images/no_picture.gif',// 默认图片：狗
  regExpMobile: /^1[0-9]{10}$/, // 正则—手机号
  regExpPhone: /^(\d{3,4}-)?\d{7,8}(-\d{2,6})?$/, // 正则—座机
  regExpFloat2: /^([1-9]\d*(\.\d{1,2})?|0(\.(0[1-9]|[1-9]\d?)))$/, // 正则—可含两位小数的正数
  regExp0To1Float4: /^0\.\d{1,4}$/,// 正则—最多4位小数的0到1之间的数值
  regExp0To99999Float2: /^(([1-9]{1}\d{0,4})|(0{1}))(\.\d{1,2})?$/ , // 正则—0-99999(含0，99999)之间的数值，最多允许两位小数
  regExpEmotion: /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig, // 正则—表情符号的emotion
  regExpNoPositiveInt: /[^\d]+/g, // 正则—非正整数
}
