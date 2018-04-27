import api from '../../api/api.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songinfo: '',
    songinfoArr: "",
    innerHeight: "",
    songStart: false,
    playtime: 0,
    durationTime: 0,
    isplaying: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.songinfo.songid != options.songid){
      console.log(111)
      this.setData({
        songinfo: options
      })
      this.getsongInfo();
    }else{
      this.setData({
        isplaying: true
      })
    }
    

    wx.getSystemInfo({
      success: res => {
        this.setData({
          innerHeight: res.windowHeight
        })
      },
    })
  },


  // 设置页面高度

  // 获取歌曲信息
  getsongInfo() {
    api.getsongInfo({
      data: {
        ids: this.data.songinfo.songid
      },
      success: resp => {
        // 获取数据
        this.setData({
          songinfoArr: resp.data.songs[0],
          durationTime: parseInt(this.data.songinfo.duration/1000)
        })
        // 设置音乐的id和歌曲长度
        this.musicStart(this.data.songinfo.songid);

        // 设置slider
        this.timeLeft();
        // 设置navbarTitle
        wx.setNavigationBarTitle({
          title: resp.data.songs[0].name
        })
      }
    })
  },
  // 开始播放音乐的样式设置

  // 计算音乐播放时间
  timeLeft() {
    // let duration = this.data.durationTime;
    let timer = setInterval(() => {
      if (this.data.playtime == this.data.durationTime) {
        clearInterval(timer);
      } else {
        this.setData({
          playtime: this.data.playtime + 1
        })
      }
    }, 1000)
  },
  sliderChange(e) {
    console.log(e)
    this.setData({
      playtime: e.detail.value
    })

    // this.timeLeft()
  },
  // 设置音乐
  musicStart(id, duration) {
    // app.globalData.isplaying = true;
    this.setData({
      isplaying: true
    })

    console.log(this.data.songinfoArr)
    wx.playBackgroundAudio({
      dataUrl: `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
      coverImgUrl: this.data.songinfoArr.al.picUrl,
      title: this.data.name,
      success:res=>{
        console.log(res)
      }
    })
    
  
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