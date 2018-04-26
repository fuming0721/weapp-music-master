const baseUrl = "http://47.98.103.249/api/";

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
const getBannerImg = (parmas) => { wxRequst(parmas, baseUrl + 'banner') };
// 推荐音乐
const getRecommendMusicList = (parmas) => { wxRequst(parmas, baseUrl + 'personalized') };
// 推荐 MV
const getRecommendMV = (parmas) => { wxRequst(parmas, baseUrl + 'personalized/mv') };
// 独家放送
const getPrivateContent = (parmas) => { wxRequst(parmas, baseUrl + 'personalized/privatecontent')};
// 获取歌单列表
const getMusicList = (parmas) => { wxRequst(parmas, baseUrl + '/playlist/detail') };
// 获取歌曲信息
const getsongInfo = (parmas) => { wxRequst(parmas, baseUrl + '/song/detail') };


module.exports = {
  getBannerImg,
  getRecommendMusicList,
  getRecommendMV,
  getPrivateContent,
  getMusicList,
  getsongInfo
}