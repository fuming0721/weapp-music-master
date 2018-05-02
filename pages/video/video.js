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
        console.log(resp)
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
