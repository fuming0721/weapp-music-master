// pages/mvList/mvList.js
import api from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    mvs:[],
    innerHeight:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置页面高度
    wx.getSystemInfo({
      success: res => {
        this.setData({
          innerHeight: res.windowHeight
        })
      },
    })
    // 设置顶部名称
    wx.setNavigationBarTitle({
      title: options.name
    })
    
    this.setData({
      id: options.id
    })
    this.loadMV()
  },
  loadMV() {
    api.getArtistMV({
      data: { id: this.data.id },
      success: resp => {
        this.setData({
          mvs: resp.data.mvs
        })
      }
    })
  },
  // 播放视频
  govideoDetai(options) {
    wx.navigateTo({
      url: `../videoPlay/videoPlay?videoid=${options.currentTarget.dataset.id}`,
    })
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