// pages/special/special.js
import {
  getTopList
} from "../../api/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:1,
    allDate: null
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
    this.getTop(this.data.pageNum)
  },
  getTop(pageNum) {
    var _this = this;
    getTopList(pageNum).then(function(res) {
      // console.log(res)
      _this.setData({
        allDate: res
      })
      wx.stopPullDownRefresh() //阻止下拉刷新
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    getTopList()
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
    this.setData({
      pageNum:1
    })
    this.getTop(1)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    //上拉加载
    var _this = this;
    var page = _this.data.pageNum + 1
    console.log(page)
    getTopList(page).then(function (res) {
      console.log(res)
      if(res.length>0){
        var arr = _this.data.allDate;
        arr = [...arr,...res];
        _this.setData({
          allDate:arr,
          pageNum: page
        })
      }else{
        wx.showToast({
          title: '我也是一个有原则的人',
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})