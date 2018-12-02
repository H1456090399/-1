
var app = getApp();
var amapFile = require('../../utils/amap-wx.js');
Page({
  data: {
    latitude: null,
    longitude: null,
    markers: [],
    distance: '',
    polyline: [],
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['1', '2', '3', '4', '5', '6'],//下拉列表的数据
    index: 0//选择的下拉列表下标
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      longitude: app.globalData.longitude,
      latitude: app.globalData.latitude
    })
    _this.routing(options);
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        app.globalData.latitude = res.latitude;
        app.globalData.longitude = res.longitude;
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
        _this.routing(options);
      },
      fail: function () {
        console.log("定位失败")
        wx.showModal({
          title: '无法使用该功能',
          content: '请点击右上角在“关于校园导览”设置中给予定位权限',
          showCancel: false,
          success: function (res) {
            wx.navigateBack({
              delta: 1
            })
            return;
          }
        })
      }
    })
  },
  routing: function (options){
    var _this = this;
    let distance = Math.abs(_this.data.longitude - options.longitude) + Math.abs(_this.data.latitude - options.latitude)
    console.log(distance);
    var myAmapFun = new amapFile.AMapWX({ key: require('../../config.js').key });
    let routeData = {
      origin: options.longitude + ',' + options.latitude,
      destination: _this.data.longitude + ',' + _this.data.latitude,
      success: function (data) {
        var points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        _this.setData({
          markers: [{
            "width": "25",
            "height": "35",
            iconPath: "http://www.hanjp.top/static/mapicon_end.png",
            latitude: options.latitude,
            longitude: options.longitude
          }, {
            "width": "25",
            "height": "35",
            iconPath: "http://www.hanjp.top/static/mapicon_start.png",
            latitude: _this.data.latitude,
            longitude: _this.data.longitude
          }],
          polyline: [{
            points: points,
            color: "#009fff",
            width: 4
          }]
        });
        if (data.paths[0] && data.paths[0].distance) {
          _this.setData({
            distance: data.paths[0].distance + '米'
          });
        }
      },
      fail: function (info) {
      }
    }
    if (distance < 0.85) {
      // getWalkingRoute 步行
      myAmapFun.getWalkingRoute(routeData)
    } else {
      // getDrivingRoute 驾车
      myAmapFun.getDrivingRoute(routeData)
    }
  }
})