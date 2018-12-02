//获取应用实例
var app = getApp();
Page({
  data: {
    fullscreen: false,
    latitude: 34.435220,
    longitude: 115.622470,
    buildlData: app.globalData.map,
    windowHeight: "",
    windowWidth: "",
    isSelectedBuild: 0,
    isSelectedBuildType: 0,
    controls: [ ],
    imgCDN: app.imgCDN,
    islocation: true,
    extend:"∨",
    markers: [
      [{
        iconPath: "http://www.hanjp.top/static/ico/jd.png",
        id: 0,
        latitude: 34.436093,
        longitude: 115.622752
      },
      {
        iconPath: "http://www.hanjp.top/static/ico/jd.png",
        id: 1,
        latitude: 34.435151,
        longitude: 115.620627
      },
      {
        iconPath: "http://www.hanjp.top/static/ico/jd.png",
        id: 2,
        latitude: 34.435191,
        longitude: 115.617768
      },
      {
        iconPath: "http://www.hanjp.top/static/ico/jd.png",
        id: 3,
        latitude: 34.435251,
        longitude: 115.621327
      },
        {
          iconPath: "http://www.hanjp.top/static/ico/jd.png",
          id: 4,
          latitude: 34.434559,
          longitude: 115.623757
        }],
      [
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 0,
          latitude: 34.43301601642053,
          longitude: 115.62286152645872
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 1,
          latitude: 34.434536,
          longitude: 115.616775
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 2,
          latitude: 34.435644,
          longitude: 115.617279
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 3,
          latitude: 34.430771,
          longitude: 115.620015
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 4,
          latitude: 34.43124,
          longitude: 115.621409
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 5,
          latitude: 34.431735,
          longitude: 115.619325
        }
      ],
      [
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 0,
          latitude: 34.434268,
          longitude: 115.617258
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 1,
          latitude: 34.437163,
          longitude: 115.622147
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 2,
          latitude: 34.440229,
          longitude: 115.622728
        }
      ],
      [
      {
        iconPath: "http://www.hanjp.top/static/ico/jxl.png",
        id: 0,
          latitude: 34.435250,
          longitude: 115.622370
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 1,
          latitude: 34.435229,
          longitude: 115.622728
        }
      ],
      [
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 0,
          latitude: 34.4333890521,
          longitude: 115.622241244
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id:1,
          latitude: 34.435119,
          longitude: 115.616162
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/jxl.png",
          id: 2,
          latitude: 34.433890521,
          longitude: 115.6212241244
        }
      ],
      [
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 0,
          latitude: 34.437199,
          longitude: 115.62166
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 1,
          latitude: 34.437132,
          longitude: 115.621411
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 2,
          latitude: 34.438133,
          longitude: 115.621328
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 3,
          latitude: 34.438503,
          longitude: 115.621114
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 4,
          latitude: 34.438199,
          longitude: 115.622014
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 5,
          latitude: 34.438526,
          longitude: 115.621891
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 6,
          latitude: 34.439281,
          longitude: 115.622079
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 7,
          latitude: 34.438500,
          longitude: 115.623060
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 8,
          latitude: 34.438940,
          longitude: 115.623056
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/st.png",
          id: 9,
          latitude: 34.439807,
          longitude: 115.621747
        }
      ],
      [
        {
          iconPath: "http://www.hanjp.top/static/ico/boy_ss.png",
          id: 0,
          latitude: 34.438020,
          longitude: 115.623300
        },
        {
          iconPath: "http://www.hanjp.top/static/ico/boy_ss.png",
          id: 1,
          latitude: 34.432660,
          longitude: 115.623070
        }
      ]
    ]
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //获取当前设备宽度与高度，用于定位控键的位置
        _this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
        _this.setControls(res.windowWidth, res.windowHeight / 2)
        console.log(res.windowWidth)
      }
    })
    //载入更新后的数据
    this.setData({
      buildlData: app.globalData.map
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: app.globalData.introduce.name + ' - 校园导览',
      path: '/pages/map/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    // 选中 其对应的框
    this.setData({
      isSelectedBuild: e.markerId
    })
    console.log("e.markerId", e.markerId)
  },
  controltap(e) {
    if (e.controlId == -1) {
      wx.navigateTo({
        url: 'search'
      })
    } else if (e.controlId == -2) {
      this.location()
    } else {
      console.log("e.controlId", e.controlId)
    }
  },
  location: function () {
    var _this = this
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
      success: function (res) {
        app.globalData.latitude = res.latitude;
        app.globalData.longitude = res.longitude;
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
    console.log("latitude=", latitude)
  },
  clickButton: function (e) {
    //console.log(this.data.fullscreen)
    //打印所有关于点击对象的信息
    this.setData({ fullscreen: !this.data.fullscreen})
    if (this.data.fullscreen) {
      this.setControls(this.data.windowWidth, this.data.windowHeight - 25)
      this.setData({extend: "∧"})
    } else {
      this.setControls(this.data.windowWidth, this.data.windowHeight / 2)
      this.setData({ extend: "∨" })
    }
  },
  changePage: function (event) {
    this.setData({
      isSelectedBuildType: event.currentTarget.id,
      fullscreen: false,
      latitude: 34.435220,
      longitude: 115.622470,
      buildlData: app.globalData.map,
      windowHeight: "",
      windowWidth: "",
      isSelectedBuild: 0,
      controls: [],
      islocation: true
    });

  },
  // 修改控键位置
  setControls: function (width, height) {
    this.setData({
      controls: [{
        id: -1,
        iconPath: 'http://www.hanjp.top/static/search.png',
        position: {
          left: width - 50,
          top: height - 110,
          width: 40,
          height: 40
        },
        clickable: true
      }, {
        id: -2,
        iconPath: 'http://www.hanjp.top/static/location.png',
        position: {
          left: width - 50,
          top: height - 65,
          width: 40,
          height: 40
        },
        clickable: true
      }]
    })

  }
})