//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }],
    gridCol: 5,
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: '会员'
    }, {
      icon: 'recordfill',
      color: 'yellow',
      badge: 1,
      name: '排行'
    }, {
      icon: 'picfill',
      color: 'mauve',
      badge: 0,
      name: '完本'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '故事'
    }, {
      icon: 'upstagefill',
      color: 'orange',
      badge: 0,
      name: '免费'
    }],
  },

  onLoad: function () {
    console.log('onLoad')
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
})