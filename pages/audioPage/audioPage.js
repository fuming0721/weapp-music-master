import api from '../../api/api.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicData: {},
    innerHeight: "",
    playtime: 0,
    isplaying: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      musicData: app.globalData.musicData,
      playtime: app.globalData.musicPlayInfo.playtime
    })
    console.log(this.data.musicData)
    // this.getsongInfo();

    // 设置页面高度
    wx.getSystemInfo({
      success: res => {
        this.setData({
          innerHeight: res.windowHeight
        })
      },
    })
    // 设置navbarTitle
    wx.setNavigationBarTitle({
      title: this.data.musicData.name
    })
    // 页面加载时读取全局变量
    console.log(app.globalData.musicData.id)
    console.log(options.songid)
    if (app.globalData.musicData.id == options.songid){
      // 设置slider
      this.timeLeft();

      wx.showToast({
        title: '这里有个 bug，切换音乐时候需要把播放时间归零',
        icon: '',
        image: '',
        duration: 111110,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }else{
      this.setData({
        playtime: 0
      })
      app.globalData.musicPlayInfo.playtime = 0;
    }
    
    // 开始播放
    this.musicStart();
  },


   // 设置slider
  timeLeft() {
    let timer = setInterval(() => {
      if (this.data.playtime == app.globalData.musicData.duration) {
        clearInterval(timer);
      } else {
        this.setData({
          playtime: this.data.playtime + 1
        })
        app.globalData.musicPlayInfo.playtime = this.data.playtime;
      }
    }, 1000)
  },
  // slider 的滑动
  sliderChange(e) {
    this.setData({
      playtime: e.detail.value
    })
  },
  // 开始播放
  musicStart() {
    this.setData({
      isplaying: true
    })
    wx.playBackgroundAudio({
      dataUrl: `https://music.163.com/song/media/outer/url?id=${this.data.musicData.id}.mp3`,
      coverImgUrl: this.data.musicData.album.picUrl,
      title: this.data.musicData.name,
      success: res => {
        console.log(res)
      }
    })
    // this.setData({
    //   playtime: app.globalData.musicPlayInfo.playtime
    // })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 设置navBar title
    // wx.setNavigationBarTitle({
    //   // title: this.data.songInfo.name
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.setData({
    //   playtime: app.globalData.musicPlayInfo.playtime
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // clearInterval(timer);

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