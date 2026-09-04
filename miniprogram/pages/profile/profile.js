const app = getApp();

Page({
  data: { user: null },

  onShow() {
    this.setData({ user: app.globalData.user });
  },

  bindWechat() {
    wx.showToast({ title: "微信绑定将在后端接入", icon: "none" });
  },

  logout() {
    app.clearUser();
    wx.showToast({ title: "已退出登录", icon: "success" });
    setTimeout(() => wx.navigateTo({ url: "/pages/login/login" }), 450);
  },
});
