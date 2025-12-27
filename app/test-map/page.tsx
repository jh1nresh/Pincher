'use client';

import { useEffect, useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function TestMapPage() {
  const [status, setStatus] = useState<string>('初始化中...');
  const [apiKey, setApiKey] = useState<string>('');
  const [testResults, setTestResults] = useState<{
    apiKeyExists: boolean;
    mapsLoaded: boolean;
    placesLoaded: boolean;
    geocodingWorks: boolean;
  }>({
    apiKeyExists: false,
    mapsLoaded: false,
    placesLoaded: false,
    geocodingWorks: false,
  });

  useEffect(() => {
    // Check API Key
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    setApiKey(key);

    if (!key) {
      setStatus('❌ 找不到 API Key');
      return;
    }

    setTestResults(prev => ({ ...prev, apiKeyExists: true }));
    setStatus('✅ API Key 已配置');

    // Check if Google Maps loads
    const checkInterval = setInterval(() => {
      if (window.google && window.google.maps) {
        setTestResults(prev => ({ ...prev, mapsLoaded: true }));
        setStatus('✅ Google Maps API 已加載');

        if (window.google.maps.places) {
          setTestResults(prev => ({ ...prev, placesLoaded: true }));
          setStatus('✅ Places API 已加載');
        }

        clearInterval(checkInterval);
      }
    }, 500);

    return () => clearInterval(checkInterval);
  }, []);

  // Test geocoding
  const testGeocoding = async () => {
    if (!window.google || !window.google.maps) {
      alert('Google Maps 還沒加載完成');
      return;
    }

    try {
      const geocoder = new google.maps.Geocoder();
      const result = await geocoder.geocode({ address: 'UCI' });

      console.log('Geocoding result:', result);

      // Check for errors
      if (!result) {
        alert('❌ Geocoding API 沒有返回任何結果\n可能原因：Geocoding API 未啟用');
        return;
      }

      if (result.results && result.results.length > 0) {
        setTestResults(prev => ({ ...prev, geocodingWorks: true }));
        alert(`✅ Geocoding 測試成功！\n找到地址：${result.results[0].formatted_address}`);
      } else {
        alert(`❌ Geocoding 失敗\n狀態：${JSON.stringify(result)}`);
      }
    } catch (error: any) {
      console.error('Geocoding error:', error);
      alert(`❌ Geocoding 錯誤：\n${error.message}\n\n請檢查：\n1. Geocoding API 是否已啟用\n2. API Key 限制是否正確配置`);
    }
  };

  const center = { lat: 33.6846, lng: -117.8265 };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🧪 Google Maps API 測試頁面
        </h1>

        {/* Status */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{testResults.apiKeyExists ? '✅' : '⏳'}</span>
            <div>
              <p className="font-semibold">API Key 配置</p>
              <p className="text-sm text-gray-600 font-mono">
                {apiKey ? `${apiKey.substring(0, 20)}...` : '未找到'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">{testResults.mapsLoaded ? '✅' : '⏳'}</span>
            <div>
              <p className="font-semibold">Maps JavaScript API</p>
              <p className="text-sm text-gray-600">
                {testResults.mapsLoaded ? '已加載' : '加載中...'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">{testResults.placesLoaded ? '✅' : '⏳'}</span>
            <div>
              <p className="font-semibold">Places API</p>
              <p className="text-sm text-gray-600">
                {testResults.placesLoaded ? '已加載' : '加載中...'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">{testResults.geocodingWorks ? '✅' : '⏹️'}</span>
            <div className="flex-1">
              <p className="font-semibold">Geocoding API</p>
              <button
                onClick={testGeocoding}
                disabled={!testResults.mapsLoaded}
                className="mt-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                測試 Geocoding
              </button>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-medium text-blue-900">
            當前狀態：{status}
          </p>
        </div>
      </div>

      {/* Map Test */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">地圖顯示測試</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '500px' }}>
          {apiKey ? (
            <APIProvider apiKey={apiKey}>
              <Map
                defaultCenter={center}
                defaultZoom={11}
                gestureHandling="greedy"
                disableDefaultUI={false}
              />
            </APIProvider>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-800 mb-2">
                  ❌ 找不到 API Key
                </p>
                <p className="text-sm text-gray-600">
                  請檢查 .env 文件中的 NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-yellow-900 mb-3">
            📋 如何判斷結果
          </h3>
          <ul className="space-y-2 text-sm text-yellow-800">
            <li>✅ <strong>全部打勾</strong> → Google Maps 配置正確，可以使用！</li>
            <li>⏳ <strong>Maps/Places 一直加載中</strong> → API 可能沒啟用，或 HTTP referrer 有問題</li>
            <li>❌ <strong>看不到地圖</strong> → 打開瀏覽器控制台（F12）查看錯誤信息</li>
            <li>🗺️ <strong>看到地圖和紅色標記</strong> → 地圖功能正常！</li>
          </ul>
        </div>

        {/* Console Errors */}
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">
            🐛 如果看到錯誤
          </h3>
          <p className="text-sm text-red-800 mb-3">
            打開瀏覽器控制台（按 F12），複製所有 Google Maps 相關的錯誤給我。
          </p>
          <p className="text-sm text-red-800">
            常見錯誤：<br />
            • <code className="bg-red-100 px-1">RefererNotAllowedMapError</code> → 需要添加 localhost 到 HTTP referrers<br />
            • <code className="bg-red-100 px-1">ApiNotActivatedMapError</code> → 需要啟用對應的 API<br />
            • <code className="bg-red-100 px-1">InvalidKeyMapError</code> → API Key 無效
          </p>
        </div>
      </div>

      {/* Back Link */}
      <div className="p-6">
        <a
          href="/uber"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700"
        >
          ← 返回主應用
        </a>
      </div>
    </div>
  );
}
