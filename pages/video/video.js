//index.js
//获取应用实例
const app = getApp()
import api from '../../api/api.js';
Page({
  data: {
    recommendMVList: [],
    limit: 10
  },
  onLoad: function () {
    this.getRecommendMV();
  },
  // 获取推荐MV
  getRecommendMV() {
    api.getRecommendMV({
      data: {
        limit: this.data.limit
      },
      success: resp => {
        this.setData({
          recommendMVList: resp.data.data
        })
      }
    })
  },
  // 播放视频
  govideoDetai(options){
    wx.navigateTo({
      url: `../videoPlay/videoPlay?videoid=${options.currentTarget.dataset.id}`,
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this.setData({
        limit: this.data.limit + 10
      })
      this.getRecommendMV()
  }
})
