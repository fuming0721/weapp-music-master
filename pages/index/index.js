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
    tabs: ["个性推荐", "主播电台"],
    activeIndex: 0,
    sliderOffset: 0,
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
        name: "歌单",
        url: "",
        icon: "iconfont icon-gedan"
      },
      {
        name: "排行榜",
        url: "",
        icon: "iconfont icon-paihang"
      }],
    recommendMusicList: [],
    recommendMVList: [],
    privateContentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    this.getBanner();
    this.getRecommendMusicList();
    this.getRecommendMV();
    this.getPrivateContent();
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
          recommendMusicList: this.randomSixItem(resp.data.result) //随机六个
        })
      }
    })

  },

  // 获取推荐MV
  getRecommendMV() {
    api.getRecommendMV({
      success: resp => {
        this.setData({
          recommendMVList: resp.data.result
        })
      }
    })
  },
  // 获取独家放送
  getPrivateContent() {
    api.getPrivateContent({
      success: resp => {
        this.setData({
          privateContentList: resp.data.result
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
  // 随机6个不重复的歌单
  randomSixItem(arr) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      var r = Math.floor(Math.random() * (arr.length));
      if (!newArr.includes(arr[r]) && newArr.length < 6) {
        newArr.push(arr[r])
      }
    }
    return newArr;
  },
  tabClick(e) {
    this.setData({
      sliderOffset: e.currentTarget.id * 375,
      activeIndex: e.currentTarget.id
    });
  },
  swipeChange(e) {
    this.setData({
      sliderOffset: e.detail.current * 375,
      activeIndex: e.detail.current
    });
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