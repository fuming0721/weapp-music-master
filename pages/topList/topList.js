// pages/topList/topList.js
import api from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    offset:0,
    list:[],
    innerHeight:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.getTopList()
    // 设置页面高度
    wx.getSystemInfo({
      success: res => {
        this.setData({
          innerHeight: res.windowHeight
        })
      },
    })
  },
  getTopList(){
    api.getArtisttoplist({
      data:{
        offset: this.data.offset,
        limit: 20
      },
      success:resp=>{
        this.data.list = this.data.list.concat(resp.data.artists)
        this.setData({
          list: this.data.list
        })
      }
    })
  },
  change(opt){
    if (opt.detail.current == this.data.list.length-5){
      this.setData({
        offset: this.data.offset + 20
      });
      this.getTopList()
    }
  },
  go(opt){
    // console.log(opt.currentTarget.dataset.id)
    wx.navigateTo({
      url: `../mvList/mvList?id=${opt.currentTarget.dataset.id}&name=${opt.currentTarget.dataset.name}`
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