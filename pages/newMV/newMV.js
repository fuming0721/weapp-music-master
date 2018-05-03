// pages/newMV/newMV.js
import api from "../../api/api.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvinfo:[],
    limit: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewMV()
  },
  getNewMV(){
    api.getNewMV({
      data:{
        limit: this.data.limit
      },
      success:resp=>{
        console.log(resp.data.data)
        var last = resp.data.data[resp.data.data.length-1];
        console.log(last)
        this.setData({
          mvinfo: resp.data.data
        })
      }
    })
  },
  change(option){
    console.log(option.detail.current)
    if (option.detail.current+1 == this.data.limit){
      this.setData({
        limit: this.data.limit + 1
      })
      this.getNewMV()
    }
    
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