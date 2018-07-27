const baseUrl = "https://www.tuwencity.com";

const wxRequst = (params, url) => {
  wx.showToast({
    title: '加载中...',
    icon: 'loading'
  });
  wx.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    },
    success: (resp) => {
      params.success && params.success(resp)
      wx.hideToast()
    },
    fail: (resp) => {
      params.fail && params.fail(resp)
    },
    complete: (resp) => {
      params.complete && params.complete(resp)
    }
  })
}

// banner图片
const getBannerImg = (parmas) => { wxRequst(parmas, baseUrl + '/api/banner') };
// 推荐音乐
const getRecommendMusicList = (parmas) => { wxRequst(parmas, baseUrl + '/api/personalized') };
// 推荐 MV
const getRecommendMV = (parmas) => { wxRequst(parmas, baseUrl + '/api/top/mv') };
// 获取歌单列表
const getMusicList = (parmas) => { wxRequst(parmas, baseUrl + '/api/playlist/detail') };
// 获取精品歌单列表
const getBoutiqueList = (parmas) => { wxRequst(parmas, baseUrl + '/api/top/playlist/highquality')};
// 获取mv信息
const getVideo = (parmas) => { wxRequst(parmas, baseUrl + '/api/mv')};
// 播放Mv
const videobaseUrl = baseUrl + '/api/mv/url?url='
// 获取mv评论
const getVideoComment = (parmas) => { wxRequst(parmas, baseUrl + '/api/comment/mv') };
// 获取热门歌手
const getArtisttoplist = (parmas) => { wxRequst(parmas, baseUrl + '/api/top/artists') };
// 获取热门歌手的mv
const getArtistMV = (parmas) => { wxRequst(parmas, baseUrl + '/api/artist/mv') };
// 获取开始搜索
const searchStart = (parmas) => { wxRequst(parmas, baseUrl + '/api/search') };
// 获取热门搜索
const getHotSearch = (parmas) => { wxRequst(parmas, baseUrl + '/api/personalized/newsong') };
// 获取歌曲详情
const getSongDetai = (parmas) => { wxRequst(parmas, baseUrl + '/api/song/detail') };


module.exports = {
  getBannerImg,
  getRecommendMusicList,
  getRecommendMV,
  getMusicList,
  getBoutiqueList,
  getVideo,
  videobaseUrl,
  getVideoComment,
  getArtisttoplist,
  getArtistMV,
  searchStart,
  getHotSearch,
  getSongDetai
}