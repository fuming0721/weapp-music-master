//app.js
App({
  globalData: {
    userInfo:"",
    musicListArr: [],      //歌单列表
    musicData: {},         //当前播放的歌曲信息
    musicIndex: -1,          //当前播放音乐的 index
    isplaying: false        //是否正在播放
  }
})