// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        {
          name:"我的订单",
          t_url:"icon-yijianfankui"
        },
        {
          name: "优惠卷",
          t_url: "icon-iconfontyouhuiquan"
        },
        {
          name: "我的足迹",
          t_url: "icon-zuji-"
        },
        {
          name: "我的收藏",
          t_url: "icon-shoucangicon-shoucang"
        },
        {
          name: "地址管理",
          t_url: "icon-dizhiguanli"
        },
        {
          name: "联系客服",
          t_url: "icon-lianxikefu"
        },
        {
          name: "帮助中心",
          t_url: "icon-icon_bangzhuzhongxin"
        },
        {
          name: "意见反馈",
          t_url: "icon-yijianfankui"
        }
      ],
      name:"请登录",
    img:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbWFEIJj8IpGeHM7dGic1aTFZALjWcMm9ltWfFiaQfVRYticWBfgGfzXWMt2EkJWiaicPtftHAlWxUibxQ/132"
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
    var isLogin = wx.getStorageSync('isLogin');
    if(!isLogin){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    wx.getUserInfo({
      success:function(res){
        _this.setData({
          name: res.userInfo.nickName,
          img: res.userInfo.avatarUrl
        })
      }
    })
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

  }
  // onGotUserInfo(res){
  //   var _this = this;
  //   _this.setData({
  //     name: res.detail.userInfo.nickName,
  //     img: res.detail.userInfo.avatarUrl
  //   })
  //   // console.log(res)
  // }
})