// pages/search/search.js
import api from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    haveValue: false,
    limit: 30,
    hotsearch: [],
    searchValue: "",
    searchList:[],
    showHotsearch: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gethotsearch()
  },
  // 热词搜索
  hotwordsearch(opt) {
    this.setData({
      searchValue: opt.currentTarget.dataset.value,
      haveValue: true
    });
    api.searchStart({
      data: {
        keywords: opt.currentTarget.dataset.value,
        limit: this.data.limit
      },
      success: resp => {
        this.setData({
          searchList: resp.data.result,
          showHotsearch: false
        })
      }
    })
  },
  // 开始搜索
  startSearch(opt) {
    api.searchStart({
      data: {
        keywords: opt.detail.value,
        limit: this.data.limit
      },
      success: resp => {
        console.log(resp.data.result)
        this.setData({
          searchList: resp.data.result,
          showHotsearch: false
        })
      }
    })
  },
  // 热门搜索
  gethotsearch() {
    api.getHotSearch({
      success: resp => {
        this.setData({
          hotsearch: resp.data.result
        })
      }
    })
  },
  // 输入中
  inputC(opt) {
    if (opt.detail.value.length) {
      this.setData({
        haveValue: true
      })
    } else {
      this.setData({
        haveValue: false,
        showHotsearch: true
      })
    }
  },
  // 清除vlaue
  clearValue() {
    this.setData({
      haveValue: false,
      showHotsearch: true
    })
  },
  // 返回上一页
  back() {
    wx.navigateBack()
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