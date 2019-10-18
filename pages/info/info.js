// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currenttab: 0,
    imageaddress: 'http://60.205.215.145/wximages/',


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  changeTab:function(res) {
    var that = this;
    if (res.target.dataset.index == that.data.currenttab) {
      return false;
    }
    that.setData({
      currenttab:res.target.dataset.index,
    })
  },

  swiperChange:function(res) {
    this.setData({
      currenttab:res.detail.current,
    })
  }
})