import { CloudEnvId, HeWeatherKey, } from './accountconfig';
App({
  onLaunch () {
    // wx.cloud.init({
    //   env: CloudEnvId,
    //   traceUser: true,
    // })
    this.globalData.platform = typeof tt !== 'undefined' ? 'tt' : 'wx';
    wx.getSystemInfo({
      success: (res) => {
