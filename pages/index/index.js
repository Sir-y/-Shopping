//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: "无法获取你的位置信息",
    mystat:null,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
    var _this = this;
    //调用定位方法
    _this.getLocation();
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/index/index',
      success:function(res){
        _this.setData({
          mystat: res.data
        })
      }
    })
  },
  getLocation: function() {
    var _this = this;
    wx.getSetting({
      success(res) {
        // console.log(res, res.authSetting['scope.userLocation'])
        if (res, res.authSetting['scope.userLocation'] != true) {
          wx.openSetting({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success(res) {
              var name = res.address + res.name
              _this.setData({
                name: "无法获取你的位置信息"
              })
            }
          })
        }
      }
    })
    // chooseLocation
    wx.chooseLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        console.log(res)
        var name = res.address + res.name
        if (name == "") {
          name: "无法获取你的位置信息"
        }
        else {
          _this.setData({
            name: name
          })
        }
      }
    })
  },
  getUserInfo: function() {
  }
})