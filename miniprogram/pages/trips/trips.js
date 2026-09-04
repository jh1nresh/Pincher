const app = getApp();

Page({
  data: { user: null, rides: [] },

  onShow() {
    if (!app.globalData.user) {
      wx.navigateTo({ url: "/pages/login/login" });
      return;
    }
    this.setData({
      user: app.globalData.user,
      rides: app.globalData.rides.filter((ride) => app.isJoined(ride)),
    });
  },

  openRide(event) {
    wx.navigateTo({ url: `/pages/ride/ride?id=${event.currentTarget.dataset.id}` });
  },

  createRide() {
    wx.navigateTo({ url: "/pages/create/create" });
  },
});
