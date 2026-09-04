const DEMO_RIDES = [
  {
    id: "demo-morning-0740",
    dateLabel: "明天",
    time: "07:40",
    pickup: "医学部东门外 公交站（北行）",
    origin: "北大医学部宿舍",
    destination: "北大医院",
    seats: 4,
    estimatedCost: "8–12",
    participants: [{ name: "林同学", role: "发起人" }, { name: "张同学", role: "乘客" }],
    messages: [
      { id: "demo-message-1", name: "林同学", role: "发起人", body: "我會提前 5 分鐘到東門外公交站。", time: "07:18" },
      { id: "demo-message-2", name: "张同学", role: "乘客", body: "好，我在北行站牌等。", time: "07:20" },
    ],
    status: "open",
  },
  {
    id: "demo-evening-1730",
    dateLabel: "今天",
    time: "17:30",
    pickup: "医学部西门 出租车落客区",
    origin: "北大医院",
    destination: "北大医学部宿舍",
    seats: 4,
    estimatedCost: "6–10",
    participants: [{ name: "陈同学", role: "发起人" }],
    messages: [],
    status: "open",
  },
];

App({
  globalData: {
    demoMode: true,
    apiBaseUrl: "",
    user: null,
    rides: DEMO_RIDES,
    route: {
      origin: "北大医学部宿舍",
      destination: "北大医院",
    },
  },

  onLaunch() {
    const user = wx.getStorageSync("pincher_user");
    const rides = wx.getStorageSync("pincher_rides");
    if (user) this.globalData.user = user;
    if (rides && rides.length) this.globalData.rides = rides;
  },

  persistRides() {
    wx.setStorageSync("pincher_rides", this.globalData.rides);
  },

  saveUser(user) {
    this.globalData.user = user;
    wx.setStorageSync("pincher_user", user);
  },

  clearUser() {
    this.globalData.user = null;
    wx.removeStorageSync("pincher_user");
  },

  getRide(id) {
    return this.globalData.rides.find((ride) => ride.id === id);
  },

  getRideMessages(id) {
    const ride = this.getRide(id);
    return (ride && ride.messages) || [];
  },

  isJoined(ride) {
    if (!ride || !this.globalData.user) return false;
    return ride.participants.some((person) => person.userId === this.globalData.user.id);
  },

  joinRide(id) {
    const ride = this.getRide(id);
    const user = this.globalData.user;
    if (!ride || !user || this.isJoined(ride)) return false;
    if (ride.participants.length >= ride.seats) return false;
    ride.participants.push({ name: user.name, role: "乘客", userId: user.id });
    this.persistRides();
    return true;
  },

  leaveRide(id) {
    const ride = this.getRide(id);
    const user = this.globalData.user;
    if (!ride || !user) return false;
    ride.participants = ride.participants.filter((person) => person.userId !== user.id);
    this.persistRides();
    return true;
  },

  addRideMessage(id, body) {
    const ride = this.getRide(id);
    const user = this.globalData.user;
    const text = body.trim();
    if (!ride || !user || !this.isJoined(ride) || !text || text.length > 200) return false;
    if (!ride.messages) ride.messages = [];
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    ride.messages.push({
      id: `message-${Date.now()}`,
      name: user.name,
      role: ride.participants.find((person) => person.userId === user.id)?.role || "乘客",
      userId: user.id,
      body: text,
      time,
    });
    this.persistRides();
    return true;
  },

  addRide(input) {
    const user = this.globalData.user;
    const ride = {
      id: `demo-${Date.now()}`,
      dateLabel: input.dateLabel,
      time: input.time,
      pickup: input.pickup,
      origin: this.globalData.route.origin,
      destination: this.globalData.route.destination,
      seats: input.seats,
      estimatedCost: "待实际车费确认",
      participants: [{ name: user.name, role: "发起人", userId: user.id }],
      messages: [],
      status: "open",
    };
    this.globalData.rides.unshift(ride);
    this.persistRides();
    return ride;
  },
});
