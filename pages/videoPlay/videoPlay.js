// pages/videoPlay/videoPlay.js
import api from "../../api/api.js"
import format from "../../utils/util.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoData: {},
    videoUrl: "",
    limit: 10,
    hotComments: [],
    comments: [],
    total: 0,
    videoid: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      videoid: options.videoid
    })
    this.getVideoData(options.videoid);
    this.getComment();
  },

  // 获取单个视频数据
  getVideoData(id) {
    api.getVideo({
      data: {
        mvid: this.data.videoid
      },
      success: resp => {
        this.setData({
          videoData: resp.data.data,
          videoUrl: api.videobaseUrl + resp.data.data.brs[480]
        })
        wx.setNavigationBarTitle({
          title: resp.data.data.name
        })
      }
    })
  },
  getComment() {
    api.getVideoComment({
      data: {
        id: this.data.videoid,
        limit: this.data.limit
      },
      success: resp => {
        this.setData({
          comments: resp.data.comments,
          hotComments: resp.data.hotComments,
          total: resp.data.total
        })
      }
    })
  },
  bindwaiting(opt){
    console.log("缓冲"+opt)
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
    this.setData({
      limit: this.data.limit + 10
    })
    this.getComment()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(options) {
    console.log(options)
    if (options.from === 'button') {
      // 来自页面内转发按钮
      console.log(options)
    }
    return {
      title: this.data.videoData.name
    }
  },
})