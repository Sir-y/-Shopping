// pages/cart/cart.js
import {
  shopping,
  shan
} from "../../api/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
    details: null,
    moey: 0,
    mmc: 0,
    check1: false,
    touchx: null,
    animation: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {



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
    var _this = this;
    shopping(_this.data.id).then(function(res) {
      for (var i = 0; i < res.length; i++) {
        // res[i].check= '';
        res[i].checked = false,
        res[i].animationData = ''
      }
      _this.setData({
        details: res
      })
      // var _this = this;
      // var c = _this.data.details
      // console.log(c,c.length)

    })

    // for (var i = 0; i < c.length; c++) {
    //   c[i].checked = false
    // }
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
 
  radiocon: function(e) {
    var _this = this;
    // var check = _this.data.check;
    // check = !check;
    var c = _this.data.details
    for (var i = 0; i < c.length; i++) {
      if (c[i].id == e.currentTarget.dataset.dd) {
        c[i].checked = !c[i].checked
      }
    };
    _this.moee();
    if (_this.data.mmc == c.length) {
      _this.setData({
        details: c,
        check1: !_this.data.check1
      })
    } else {
      _this.setData({
        details: c,
        check1: false
      });
    }
  },
  radiocon1: function(e) {
    var _this = this;
    var c1 = _this.data.details;
    c1.checked = !c1.checked
    var check = _this.data.check1;
    check = !check;
    for (var i = 0; i < c1.length; i++) {
      c1[i].checked = check;
    };
    _this.setData({
      details: c1,
      check1: check
    });
    _this.moee();
  },
  //开始滑动
  touchStart(e) {
    var _this = this;
    var c1 = _this.data.details;

    for (var i = 0; i < c1.length; i++) {
      if (true) {
        c1[i].animationData = _this.animationRight()
      }

    }
    _this.setData({
      details: c1,
      touchx: e.changedTouches[0].clientX
    })
  },
  //结束滑动
  touchEnd(e) {
    var _this = this;
    let x = _this.data.touchx;
    var c1 = _this.data.details;
    let x1 = e.changedTouches[0].clientX;
    let x2 = Math.abs(x - x1);
    if (x2 > 5) {
      for (var i = 0; i < c1.length; i++) {
        if (c1[i].id == e.currentTarget.dataset.dd) {
          c1[i].animationData = _this.animationLeft();
        }
      }
    }
    _this.setData({
      details: c1,
    })
  },
  //向左滑动
  animationLeft() {
    var animation = wx.createAnimation({});
    animation.left('-100rpx').step();
    return animation.export();
  },
  //向右滑动
  animationRight() {
    var animations = wx.createAnimation({});
    animations.left('0rpx').step();
    return animations.export();
  },
  //删除该元素
  deletes(e) {
    var _this = this;
    var c1 = _this.data.details;
    var index = null;
    for (var m = 0; m < c1.length; m++) {
      if (c1[m].id == e.currentTarget.dataset.shan) {
        index = m
        wx.showModal({
          title: '提示',
          content: '确认删除吗',
          success: function(res) {
            // console.log(res)
            if (res.confirm == true) {
              shan(e.currentTarget.dataset.shan).then(function(res) {
                var newarr = c1.filter((item) => {
                  return item.id != e.currentTarget.dataset.shan
                })
                _this.setData({
                  details: newarr
                })
              })
            }
          }
        })
      }
    }
  },
  // 计算总钱数
  moee() {
    var _this = this;
    var mo = 0; //总钱数
    var mmm = 0; //总个数
    var c1 = _this.data.details;
    for (var i = 0; i < c1.length; i++) {
      if (c1[i].checked == true) {
        mmm++;
        mo += parseFloat(c1[i].number) * parseFloat(c1[i].retail_price);
      }
    }

    _this.setData({
      moey: mo,
      mmc: mmm
    })
  }
})