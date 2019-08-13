// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onGotUserInfo: function (e) {
    wx.login({
      success:function(login){
        wx.request({
          url: '',
          data:{
            code:login.code
          },
          success:function(e){
            if (e.detail.userInfo) {
              wx.getStorageSync('isLogin', true)
              wx.navigateBack();
              // console.log('123')
            } else {
              wx.navigateBack()
            }
          }
        })
        // console.log(login.code)
      }
    })
    if (e.detail.userInfo){
      wx.getStorageSync('isLogin',true)
      wx.navigateBack();
      // console.log('123')
    }else{
      wx.navigateBack()
    }
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
  }
  // onGotUserInfo:function(res,e){
  //   console.log(res, e.detail.userInfo)
  // }
})