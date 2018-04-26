import api from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songinfo:'',
    songinfoArr:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getsongInfo(options.songid)
    this.setData({
      songinfo: options
    })
    console.log(this.data.songinfo);
    this.getsongInfo()
  },
  // 获取歌曲信息
  getsongInfo() {
    api.getsongInfo({
      data: {
        ids: this.data.songinfo.songid
      },
      success: resp => {
      // 获取数据
        this.setData({
          songinfoArr: resp.data.songs[0]
        })
        console.log(this.data.songinfoArr)
        // 设置音乐的id和歌曲长度
        this.musicStart(this.data.songinfo.songid, this.data.songinfo.duration);
        // 设置navbarTitle
        wx.setNavigationBarTitle({
          title: resp.data.songs[0].name
        })
      }
    })
  },
  // 设置音乐
  musicStart(id, duration) {
    const song = wx.getBackgroundAudioManager();
    song.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    song.startTime = 0;
    song.duration = duration;
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