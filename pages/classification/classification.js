// pages/classification/classification.js
import { namww} from "../../api/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    namw:null,
    fication:null,
    Id: 1005000
  },
  my:function(e) {
    var _this = this;
    _this.setData({
      Id: e.currentTarget.dataset.index
    })
    _this.get(this.data.Id)
    // console.log(_this.data.Id);
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
    _this.get(this.data.Id)
    namww().then(function(res){
      _this.setData({
          namw: res
        })
    })
    // wx.request({
    //   url: 'https://www.heyuhsuo.xyz/heyushuo/category/indexaction',
    //   success: function (res) {
    //     console.log(res.data.categoryList);
    //     _this.setData({
    //       namw: res.data.categoryList
    //     })
    //   }
    // })
  },

  get(id){
    var _this = this;
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/category/currentaction',
      data: {
        id: id
      },
      success: function (res) {
        _this.setData({
          fication: res.data.data.currentOne
        })
      }
    })
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

  }
})