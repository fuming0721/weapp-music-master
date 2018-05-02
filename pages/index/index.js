//index.js
//获取应用实例

import api from '../../api/api.js';
import util from '../../utils/util.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerImgArr: [],
    iconNav: [
      {
        name: "私人FM",
        url: "",
        icon: "iconfont icon-FM"
      },
      {
        name: "每日推荐",
        url: "",
        icon: "iconfont icon-rili"
      },
      {
        name: "精品歌单",
        url: "../../../../allMusiclist/allmusicList",
        icon: "iconfont icon-gedan"
      },
      {
        name: "排行榜",
        url: "",
        icon: "iconfont icon-paihang"
      }],
    recommendMusicList: [],
    isPlaying: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    this.getBanner();
    this.getRecommendMusicList();
  },
  // 获取banner图片
  getBanner() {
    api.getBannerImg({
      success: (resp) => {
        this.setData({
          bannerImgArr: resp.data.banners
        })
      }
    })
  },
  // 获取推荐歌单
  getRecommendMusicList() {
    api.getRecommendMusicList({
      success: (resp) => {
        this.setData({
          recommendMusicList: resp.data.result
        })
      }
    })
  },
  // 获取歌单id，跳转到歌单列表页，传送id
  getMusicList(e) {
    wx.navigateTo({
      url: `../musicList/musicList?musicListID=${e.currentTarget.dataset.id}`,
    })
  },
 
 
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      isPlaying: app.globalData.isplaying
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
})