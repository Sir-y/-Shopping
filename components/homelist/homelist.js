// components/homelist/homelist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mydate:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigate: function (e) {
      wx.navigateTo({
        url: '../../pages/detail/detail?id=' + e.currentTarget.dataset.i,
      })
    }
  }
})
