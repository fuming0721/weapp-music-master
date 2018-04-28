import api from '../../api/api.js';

const app = getApp();
const player = wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicData: {},
    innerHeight: "",
    playtime: 0,
    isplaying: false,
    musicListArr:[],
    musicIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      musicListArr: app.globalData.musicListArr,
      musicIndex: options.musicindex,
      musicData: app.globalData.musicListArr[options.musicindex]
    })
    // 设置页面高度
    wx.getSystemInfo({
      success: res => {
        this.setData({
          innerHeight: res.windowHeight
        })
      },
    })

    

    // 开始播放
    this.palyMusic();

  },
  // 开始播放
  palyMusic() {
    player.src = `https://music.163.com/song/media/outer/url?id=${this.data.musicData.id}.mp3`;
    player.title = this.data.musicData.name;
    player.coverImgUrl = this.data.musicData.album.picUrl;
    player.duration = this.data.musicData.duration;
    // 监听播放器的时间变化
    player.onTimeUpdate(() => {
      this.setData({
        playtime: player.currentTime,
        isplaying: !player.paused
      })
    })
    // 设置navbarTitle
    wx.setNavigationBarTitle({
      title: this.data.musicData.name
    })
  },

  // slider 的滑动
  sliderChange(e) {
    player.seek(e.detail.value)
  },
  // 音乐暂停
  pauseMusic() {
    player.pause()
  },
  nextMusic(){
    app.globalData.musicIndex = parseInt(this.data.musicIndex) + 1
    this.setData({
      musicData: this.data.musicListArr[parseInt(this.data.musicIndex) + 1],
      musicIndex: parseInt(this.data.musicIndex) + 1
    })
    this.palyMusic()
  },
  prevMusic(){
    app.globalData.musicIndex = parseInt(this.data.musicIndex) - 1
    this.setData({
      musicData: this.data.musicListArr[parseInt(this.data.musicIndex) - 1],
      musicIndex: parseInt(this.data.musicIndex) - 1
    })
    this.palyMusic()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
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