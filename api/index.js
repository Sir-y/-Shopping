export function getTopList(pageNum) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/topic/listaction',
      data: {
        page: pageNum
      },
      success: function(res) {
        resolve(res.data.data)
      },
      fail: function(error) {
        reject(error);
      }
    })
  })
}
export function namww() {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/category/indexaction',
      success: function(res) {
        resolve(res.data.categoryList)
      },
      fail: function(error) {
        reject(error);
      }
    })
  })
}

export function shopping(openId) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/cart/cartList',
      data: {
        openId: openId
      },
      success: function(res) {
        resolve(res.data.data)
      },
      fail: function(error) {
        reject(error);
      }
    })
  })
}

export function shan(id) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/cart/deleteAction',
      data: {
        id: id
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (error) {
        reject(error);
      }
    })
  })
}