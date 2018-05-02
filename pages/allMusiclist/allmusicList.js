// pages/allMusiclist/allmusicList.js
import api from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[],
    limit: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBoutiqueList()
  },
  getBoutiqueList(){
    api.getBoutiqueList({
      data:{
        limit:this.data.limit
      },
      success:resp=>{
        this.setData({
          musicList: resp.data.playlists
        })
      }
    })
  },
  godetail(options){
    console.log(options.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../../../../musicList/musicList?musicListID=' + options.currentTarget.dataset.id
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
    this.setData({
      limit: this.data.limit + 10
    })
    this.getBoutiqueList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})