const app = getApp();

Page({
  data: { ride: null, joined: false, messages: [], messageDraft: "", quickMessages: ["我到了", "還差 1 位", "我來叫車"] },

  onLoad(options) {
    this.rideId = options.id;
    this.refresh();
  },

  onShow() {
    if (this.rideId) this.refresh();
  },

  refresh() {
    const ride = app.getRide(this.rideId);
    const joined = app.isJoined(ride);
    const userId = app.globalData.user && app.globalData.user.id;
    const messages = app.getRideMessages(this.rideId).map((message) => ({
      ...message,
      mine: message.userId === userId,
    }));
    this.setData({ ride, joined, messages });
  },

  onMessageInput(event) {
    this.setData({ messageDraft: event.detail.value });
  },

  useQuickMessage(event) {
    this.setData({ messageDraft: event.currentTarget.dataset.message });
  },

  sendMessage() {
    const body = this.data.messageDraft.trim();
    if (!body) return;
    if (!app.addRideMessage(this.rideId, body)) {
      wx.showToast({ title: "加入拼车后才能发消息", icon: "none" });
      return;
    }
    this.setData({ messageDraft: "" });
    this.refresh();
  },

  toggleJoin() {
    if (!app.globalData.user) {
      wx.navigateTo({ url: "/pages/login/login" });
      return;
    }
    const ok = this.data.joined ? app.leaveRide(this.rideId) : app.joinRide(this.rideId);
    if (!ok && !this.data.joined) {
      wx.showToast({ title: "座位已满", icon: "none" });
      return;
    }
    this.refresh();
    wx.showToast({ title: this.data.joined ? "已取消加入" : "已加入拼车", icon: "success" });
  },
});
