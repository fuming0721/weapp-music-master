//index.js
//获取应用实例

import api from '../../api/api.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["个性推荐", "主播电台"],
    activeIndex: 0,
    sliderOffset: 0,
    bannerImgArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
  },
  getBanner() {
    api.getBannerImg({
      success: (resp) => {
        console.log(resp);
        this.setData({
          bannerImgArr: resp.data.banners
        })
      }
    })
  },
  tabClick: function (e) {
    console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.id*375,
      activeIndex: e.currentTarget.id
    });
  },
  swipeChange(e){
    this.setData({
      sliderOffset: e.detail.current*375,
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