const app = getApp();

// Production boundary: the mini program should call a server endpoint.
// Never put Supabase service-role keys, SMS credentials, or WeChat secrets here.
function request(path, options = {}) {
  const baseUrl = app.globalData.apiBaseUrl;
  if (!baseUrl) {
    return Promise.reject(new Error("API_BASE_URL is not configured"));
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${path}`,
      method: options.method || "GET",
      data: options.data,
      header: options.header || {},
      success: (response) => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(response.data);
        } else {
          reject(new Error(`Request failed: ${response.statusCode}`));
        }
      },
      fail: reject,
    });
  });
}

module.exports = { request };
