// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: null,
    dss: false,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    inde: 0,
    openId:'',
    allnumber:'',
    animationData:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    _this.setData({
      openId:options.id
    })
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/goods/detailaction',
      data: {
        id: options.id,
        openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c'
      },
      success: function (res) {
        _this.setData({
          detail: res.data,
          allnumber: res.data.allnumber
        })
        WxParse.wxParse('articles', 'html', _this.data.detail.info.goods_desc, _this, 5);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  dnn: function() {
    var _this = this;
    _this.setData({
      dss: true
    })
    wx.nextTick(()=>{
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      animation.bottom(0).step()
      _this.setData({
        animationData: animation.export()
      })
    })
    
  },
  nss: function() {
    var _this = this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    animation.bottom(-500).step()
    _this.setData({
      animationData: animation.export()
    })
    setTimeout(() => {
      _this.setData({
        dss: false
      })
    }, 1000)
    // wx.nextTick(() => {
    //   _this.setData({
    //     dss: false
    //   })
    // })
    
  },
  big: function() {
    var _this = this;
    _this.setData({
      inde: ++_this.data.inde
    })
  },
  some: function() {
    var _this = this;
    var aa = --_this.data.inde;
    if (aa <= 0) {
      aa = 0;
    }
    _this.setData({
      inde: aa
    })
  },
  blur: function(e) {
    var _this = this;
    _this.setData({
      inde: parseInt(e.detail.value)
    })
  },
  showw: function() {
    var _this = this;
    if (_this.data.dss) {
      if (_this.data.inde >= 1) {
        wx.request({
          url: 'https://www.heyuhsuo.xyz/heyushuo/cart/addCart',
          method:"post",
          data: {
            goodsId: _this.data.openId,
            number: _this.data.inde,
            openId: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
          },
          success: function (res) {
            if (res.data.data=="success"){
              wx.showToast({
                title: '添加购物车成功',
              })
              var mydata = _this.data.allnumber
              mydata = parseInt(_this.data.allnumber) + parseInt(_this.data.inde)
              _this.setData({
                allnumber: mydata
              })
            }
          }
        })
        
      } else {
        wx.showModal({
          title: '提示',
          content: '请添加数量',
        })
      }
    } else {
      _this.dnn();


    }
  }
})