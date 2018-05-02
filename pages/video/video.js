//index.js
//获取应用实例
const app = getApp()
import api from '../../api/api.js';
Page({
  data: {
    recommendMVList: [],
  },
  onLoad: function () {
    this.getRecommendMV();
  },
  // 获取推荐MV
  getRecommendMV() {
    api.getRecommendMV({
      data: {
        limit: 20
      },
      success: resp => {
        this.setData({
          recommendMVList: resp.data.data
        })
        console.log(this.data.recommendMVList)
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
  }
})
