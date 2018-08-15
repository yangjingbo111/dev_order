//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  sendrequest: function(){
    console.log('button clicked')
    wx.request({
      url: 'https://www.ntdev.top',
      header: {
        'content-type': 'text/html'
      },
      success: function(res){
        console.log(res.data)
      }
    })
  },
  open_websocket: function(){
    var that = this;
    wx.connectSocket({
      url: 'wss://www.ntdev.top',
      protocols: ['echo-protocol'],
      fail: function(err){
        console.log('socket connected failed: ', err);
      },
      success: function(){
        console.log('socket connected');
      }
    })
    wx.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！');

    })
    
  },
  
  
  bindmsgcontent: function(e){
    this.setData({
      msg_content: e.detail.value
    })
  },
  sendmsg: function(res){
    var that = this;
    // var msg = {
    //   content: this.data.msg_content,
    //   time: 29
    // }
    var msg = this.data.msg_content;
    console.log('sending message...', msg);
    wx.sendSocketMessage({
      data: msg,//[JSON.stringify(msg)],
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    wx.onSocketMessage(function (res) {
      // var obj = JSON.parse(res.data);
      // console.log(obj);
      that.setData({
        recvdata: res.data,//obj.content,
      })
      console.log('recving: ', res.data);

    })
  },
  close_websocket: () => {
    wx.closeSocket({
      
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindShowWeather: function() {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  bindShowCamera: function() {
    wx.navigateTo({
      url: '../camera/camera',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      // wx.getUserInfo({
      //   success: res => {
      //     app.globalData.userInfo = res.userInfo
      //     this.setData({
      //       userInfo: res.userInfo,
      //       hasUserInfo: true
      //     })
      //   }
      // })
    }
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  data: {
    company_name: "江苏海湾电气科技有限公司", 
    connection_status: false,
    msg_content: "",
    recvdata: "",
  }
})
