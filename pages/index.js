//获取应用实例
var app = getApp();
Page({
  data: {
    images: app.globalData.introduce.images,
    shortName: app.globalData.introduce.shortName,
    mapCopyright: app.globalData.introduce.mapCopyright,
    imgCDN: app.imgCDN,
    imgHeight: 100,
    imgWidth: 260
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: app.globalData.introduce.name
    })

    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //获取当前设备宽度与高度，用于定位控键的位置
        _this.setData({
          imgWidth: res.windowWidth/2,
          imgHeight: res.windowWidth /4
        })
      }
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: app.globalData.introduce.name + '校园导览',
      path: '/pages/index',
      imageUrl: app.imgCDN + app.globalData.introduce.share,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
})