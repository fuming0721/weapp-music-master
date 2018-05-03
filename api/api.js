const baseUrl = "http://47.98.103.249/api/";

const wxRequst = (params, url) => {
  // wx.showToast({
  //   title: '加载中...',
  //   icon: 'loading'
  // });
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
const getBannerImg = (parmas) => { wxRequst(parmas, baseUrl + 'banner') };
// 推荐音乐
const getRecommendMusicList = (parmas) => { wxRequst(parmas, baseUrl + 'personalized') };
// 推荐 MV
const getRecommendMV = (parmas) => { wxRequst(parmas, baseUrl + 'top/mv') };
// 获取歌单列表
const getMusicList = (parmas) => { wxRequst(parmas, baseUrl + 'playlist/detail') };
// 获取精品歌单列表
const getBoutiqueList = (parmas) => { wxRequst(parmas, baseUrl + 'top/playlist/highquality')};
// 获取mv信息
const getVideo = (parmas) => { wxRequst(parmas, baseUrl + 'mv')};
// 播放Mv
const videobaseUrl = baseUrl + 'mv/url?url='
// 获取mv评论
const getVideoComment = (parmas) => { wxRequst(parmas, baseUrl + 'comment/mv') };
// 获取最新mv
const getNewMV = (parmas) => { wxRequst(parmas, baseUrl + 'mv/first') };

module.exports = {
  getBannerImg,
  getRecommendMusicList,
  getRecommendMV,
  getMusicList,
  getBoutiqueList,
  getVideo,
  videobaseUrl,
  getVideoComment,
  getNewMV
}