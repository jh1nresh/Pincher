const app = getApp();

Page({
  data: {
    demoMode: app.globalData.demoMode,
    countryCodes: ["+86", "+852", "+853", "+886"],
    countryIndex: 0,
    phone: "",
    code: "",
    agreed: false,
    codeSent: false,
  },

  onCountryChange(event) {
    this.setData({ countryIndex: Number(event.detail.value) });
  },

  onPhoneInput(event) {
    this.setData({ phone: event.detail.value });
  },

  onCodeInput(event) {
    this.setData({ code: event.detail.value });
  },

  toggleAgreement() {
    this.setData({ agreed: !this.data.agreed });
  },

  sendCode() {
    if (!this.data.phone.trim()) {
      wx.showToast({ title: "请先填写手机号", icon: "none" });
      return;
    }
    this.setData({ codeSent: true });
    wx.showToast({
      title: app.globalData.demoMode ? "体验验证码已发送" : "验证码已发送",
      icon: "none",
    });
  },

  submit() {
    if (!this.data.phone.trim() || this.data.code.trim().length < 6) {
      wx.showToast({ title: "请输入手机号和6位验证码", icon: "none" });
      return;
    }
    if (!this.data.agreed) {
      wx.showToast({ title: "请先同意用户协议", icon: "none" });
      return;
    }

    // Demo only. Production must verify the code on the server and return a JWT.
    app.saveUser({
      id: `phone:${this.data.countryCodes[this.data.countryIndex]}${this.data.phone.trim()}`,
      name: "新同学",
      phone: `${this.data.countryCodes[this.data.countryIndex]} ${this.data.phone.trim()}`,
      membership: "邀请制试点 · 待验证",
    });
    wx.showToast({ title: "登录成功", icon: "success" });
    setTimeout(() => wx.switchTab({ url: "/pages/home/home" }), 450);
  },
});
