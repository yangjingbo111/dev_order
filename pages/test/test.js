Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: 'null',
  },
  bindRefresh: function() {
    var that = this
    console.log('refresh weather');
    // wx.chooseImage({
    //   sourceType: ['album', 'camera'],
    //   success: function(res) {
    //       console.log('complete');
    //       that.setData({
    //         cameraTip: 'open camera succeed'
    //       }) 
    //   },    
    // })
    wx.request({
      url: 'https://www.ntdev.top/postgresql_test', //仅为示例，并非真实的接口地址
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          weather: res.data['data'],
        })
      }
    })
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
    
  }
})