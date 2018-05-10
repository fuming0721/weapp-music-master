// pages/search/search.js
import api from '../../api/api.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    haveValue: false,
    keywords: '',
    limit: 60,
    hotsearch: [],
    songArr: [],   //歌曲
    musicListArr: [],   //歌单
    singerArr: [],   //歌手
    videoArr: [], //视频
    showHotsearch: true,
    searchType: 1,
    navLinePosition: '53rpx',
    positionLeft: 0,
    innerHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gethotsearch();
    wx.getSystemInfo({
      success:res=> {
        console.log(res.windowHeight)
        this.setData({
          innerHeight: res.windowHeight*2-160
        })
      },
    })
  },
  // 搜索框输入后按搜索按钮时的搜索，参数都应是默认值
  startSearch(opt) {
    let keywords = '';
    if (!opt.detail.value){
      keywords = opt.currentTarget.dataset.value
    }else{
      keywords = opt.detail.value
    }
    // 搜索前先清空每个数组
    this.setData({
      haveValue: true,
      keywords: keywords,
      songArr: [],   //歌曲
      musicListArr: [],   //歌单
      singerArr: [],   //歌手
      videoArr: [], //视频
    })
    this.search();
  },
  // 实际进行搜索的函数
  search() {
    api.searchStart({
      data: {
        keywords: this.data.keywords,
        limit: this.data.limit,
        type: this.data.searchType,
      },
      success: resp => {
        switch (this.data.searchType) {
          case 1:
            this.setData({
              songArr: resp.data.result.songs,
              showHotsearch: false
            })
            break;
          case 1000:
            this.setData({
              musicListArr: resp.data.result.playlists,
              showHotsearch: false
            })
            break;
          case 100:
            this.setData({
              singerArr: resp.data.result.artists,
              showHotsearch: false
            })
            break;
          case 1004:
            this.setData({
              videoArr: resp.data.result.mvs,
              showHotsearch: false
            })
            break;
        }
      }
    })
  },
  // nav点击
  changeNav(opt) {
    switch (opt.currentTarget.dataset.type) {
      case '1':
        this.setData({
          navLinePosition: '53rpx',
          searchType: 1,
          positionLeft: 0
        })
        if (!this.data.songArr.length) {
          this.search();
        }
        break;
      case '1000':
        this.setData({
          navLinePosition: '240rpx',
          searchType: 1000,
          positionLeft: '-750rpx'
        })
        if (!this.data.musicListArr.length) {
          this.search();
        }
        break;
      case '100':
        this.setData({
          navLinePosition: '428rpx',
          searchType: 100,
          positionLeft: '-1500rpx'
        })
        if (!this.data.singerArr.length) {
          this.search();
        }
        break;
      case '1004':
        this.setData({
          navLinePosition: '616rpx',
          searchType: 1004,
          positionLeft: '-2250rpx'
        })
        if (!this.data.videoArr.length) {
          this.search();
        }
        break;
    }
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
  // 跳转到播放页
  playSong(opt) {
    api.getSongDetai({
      data: {
        ids: opt.currentTarget.dataset.itemid
      },
      success: resp => {
        app.globalData.musicListArr = resp.data.songs;
        wx.navigateTo({
          url: '../audioPage/audioPage?musicindex=0&duration=' + opt.currentTarget.dataset.duration,
        })
      }
    })
  },

  // 跳转到歌单
  goMusiclist(e) {
    wx.navigateTo({
      url: `../musicList/musicList?musicListID=${e.currentTarget.dataset.id}`,
    })
  },
  // 跳转到歌手MV
  goSingerMv(opt){
    wx.navigateTo({
      url: `../mvList/mvList?id=${opt.currentTarget.dataset.id}&name=${opt.currentTarget.dataset.name}`
    })
  },
  // 播放视频
  govideoDetai(opt) {
    wx.navigateTo({
      url: `../videoPlay/videoPlay?videoid=${opt.currentTarget.dataset.id}`,
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