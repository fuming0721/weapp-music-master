const baseUrl = "http://47.98.103.249/api/";

const wxRequst = (params, url)=>{
  wx.showToast({
    title: '加载中...',
    icon:'loading'
  });
  wx.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    },
    success:(resp)=>{
      params.success && params.success(resp)
      wx.hideToast()
    },
    fail:(resp)=>{
      params.fail && params.fail(resp)
    },
    complete: (resp) => {
      params.complete && params.complete(resp)
    }
  })
}


const getBannerImg = (parmas) => { wxRequst(parmas,baseUrl+'banner')};


module.exports = {
  getBannerImg
}