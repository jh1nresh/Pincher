const app = getApp();

Page({
  data: {
    dateLabel: "明天",
    timeSlots: ["07:20", "07:40", "08:00", "17:30", "18:00"],
    timeIndex: 1,
    seats: 4,
    pickupPoints: ["医学部东门外 公交站（北行）", "医学部西门 出租车落客区", "校医院门口集合点"],
    pickupIndex: 0,
  },

  goBack() {
    wx.navigateBack();
  },

  onTimeChange(event) {
    this.setData({ timeIndex: Number(event.detail.value) });
  },

  onPickupChange(event) {
    this.setData({ pickupIndex: Number(event.detail.value) });
  },

  decreaseSeats() {
    if (this.data.seats > 2) this.setData({ seats: this.data.seats - 1 });
  },

  increaseSeats() {
    if (this.data.seats < 6) this.setData({ seats: this.data.seats + 1 });
  },

  submit() {
    const ride = app.addRide({
      dateLabel: this.data.dateLabel,
      time: this.data.timeSlots[this.data.timeIndex],
      pickup: this.data.pickupPoints[this.data.pickupIndex],
      seats: this.data.seats,
    });
    wx.showToast({ title: "拼车已发起", icon: "success" });
    setTimeout(() => wx.redirectTo({ url: `/pages/ride/ride?id=${ride.id}` }), 450);
  },
});
