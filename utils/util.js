const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const over10000 = num =>{
  if (num < 10000) {
    return value;
  } else if(num >= 100000000) {
    return parseInt(value / 100000000) + "亿";
  }else{
    return parseInt(value / 10000) + "万";
  }
}

module.exports = {
  formatTime,
  over10000
}

