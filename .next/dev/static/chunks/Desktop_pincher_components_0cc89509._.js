(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/pincher/components/LiveMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOTSPOT_COORDS",
    ()=>HOTSPOT_COORDS,
    "default",
    ()=>LiveMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// --- Constants ---
const IRVINE_CENTER = {
    lat: 33.6846,
    lng: -117.8265
};
const MAP_ID = 'PINCHER_DEMO_MAP'; // Use a real styling ID if available, or string
const HOTSPOT_COORDS = {
    'UCI Campus (Engineering Hall)': {
        lat: 33.6405,
        lng: -117.8443
    },
    'Irvine Spectrum Center': {
        lat: 33.6509,
        lng: -117.7441
    },
    'John Wayne Airport (SNA)': {
        lat: 33.6762,
        lng: -117.8674
    },
    'Newport Beach Pier': {
        lat: 33.6073,
        lng: -117.9293
    },
    'Tustin District Legacy': {
        lat: 33.6951,
        lng: -117.8306
    },
    'Diamond Jamboree Plaza': {
        lat: 33.6980,
        lng: -117.8377
    },
    'Google Irvine Office': {
        lat: 33.6595,
        lng: -117.8540
    },
    'HUB': IRVINE_CENTER
};
// --- Sub-Component for Directions & Geometry ---
function DirectionsAndPath({ from, to, progress, onPathUpdate, onPositionUpdate }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const routesLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"])('routes');
    const geometryLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"])('geometry');
    const [directionsService, setDirectionsService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [directionsRenderer, setDirectionsRenderer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Init Services
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirectionsAndPath.useEffect": ()=>{
            if (!routesLibrary || !map) return;
            setDirectionsService(new routesLibrary.DirectionsService());
            setDirectionsRenderer(new routesLibrary.DirectionsRenderer({
                map,
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: '#8b5cf6',
                    strokeWeight: 5
                }
            }));
        }
    }["DirectionsAndPath.useEffect"], [
        routesLibrary,
        map
    ]);
    // Fetch Route
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirectionsAndPath.useEffect": ()=>{
            if (!directionsService || !directionsRenderer) return;
            if (from === 'HUB' || to === 'HUB') return;
            const start = HOTSPOT_COORDS[from];
            const end = HOTSPOT_COORDS[to];
            if (!start || !end) return;
            directionsService.route({
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            }).then({
                "DirectionsAndPath.useEffect": (response)=>{
                    directionsRenderer.setDirections(response);
                    // Extract Path for Interpolation
                    const route = response.routes[0];
                    if (route && route.overview_path) {
                        setCurrentPath(route.overview_path);
                        onPathUpdate(route.overview_path);
                    }
                    // Auto-fit bounds
                    const bounds = new google.maps.LatLngBounds();
                    bounds.extend(start);
                    bounds.extend(end);
                    map?.fitBounds(bounds, 50);
                }
            }["DirectionsAndPath.useEffect"]).catch({
                "DirectionsAndPath.useEffect": (e)=>console.error("Directions Error", e)
            }["DirectionsAndPath.useEffect"]);
        }
    }["DirectionsAndPath.useEffect"], [
        directionsService,
        directionsRenderer,
        from,
        to,
        map
    ]);
    // Calculate Interpolated Position based on Progress
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirectionsAndPath.useEffect": ()=>{
            if (!geometryLibrary || currentPath.length === 0 || progress <= 0) {
                onPositionUpdate(null);
                return;
            }
            if (progress >= 100) {
                onPositionUpdate(currentPath[currentPath.length - 1]);
                return;
            }
            // Logic: 
            // 1. Total Length
            // 2. Target Length = Total * (progress/100)
            // 3. Find segment
            try {
                const totalDist = geometryLibrary.spherical.computeLength(currentPath);
                const targetDist = totalDist * (progress / 100);
                let distCovered = 0;
                for(let i = 0; i < currentPath.length - 1; i++){
                    const p1 = currentPath[i];
                    const p2 = currentPath[i + 1];
                    const segDist = geometryLibrary.spherical.computeDistanceBetween(p1, p2);
                    if (distCovered + segDist >= targetDist) {
                        // Found segment
                        const remaining = targetDist - distCovered;
                        const fraction = remaining / segDist;
                        const interpolated = geometryLibrary.spherical.interpolate(p1, p2, fraction);
                        onPositionUpdate(interpolated);
                        return;
                    }
                    distCovered += segDist;
                }
            } catch (e) {
                console.error("Geometry math error", e);
            }
        }
    }["DirectionsAndPath.useEffect"], [
        geometryLibrary,
        currentPath,
        progress
    ]);
    return null;
}
_s(DirectionsAndPath, "0Dfl7ssGyFPTsEqFp1EP/VyCWJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"]
    ];
});
_c = DirectionsAndPath;
function LiveMap({ agents, from, to, isSurge, progress }) {
    _s1();
    const apiKey = ("TURBOPACK compile-time value", "AIzaSyAT5jr_r_gNpxfMVnDB3z5KOm5e5OBUsnk");
    // State to hold the current interpolated position of the "Car"
    const [carPosition, setCarPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [path, setPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIProvider"], {
        apiKey: apiKey,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full h-full relative tranisiton-colors duration-500 ${isSurge ? 'border-4 border-red-500 animate-pulse' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                    defaultCenter: IRVINE_CENTER,
                    defaultZoom: 12,
                    mapId: MAP_ID,
                    disableDefaultUI: true,
                    className: "w-full h-full rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DirectionsAndPath, {
                            from: from,
                            to: to,
                            progress: progress,
                            onPathUpdate: setPath,
                            onPositionUpdate: setCarPosition
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 158,
                            columnNumber: 19
                        }, this),
                        Object.entries(HOTSPOT_COORDS).map(([name, coords])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                                position: coords,
                                title: name,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 bg-gray-400 rounded-full opacity-50 hover:opacity-100 hover:scale-150 transition-all cursor-help"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                    lineNumber: 169,
                                    columnNumber: 27
                                }, this)
                            }, name, false, {
                                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                lineNumber: 168,
                                columnNumber: 23
                            }, this)),
                        HOTSPOT_COORDS[from] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                            position: HOTSPOT_COORDS[from],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl animate-bounce",
                                children: "🚩"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                lineNumber: 176,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 175,
                            columnNumber: 22
                        }, this),
                        HOTSPOT_COORDS[to] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                            position: HOTSPOT_COORDS[to],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl animate-bounce delay-75",
                                children: "🏁"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                lineNumber: 181,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 180,
                            columnNumber: 22
                        }, this),
                        agents.map((agent, i)=>{
                            let pos = null;
                            if (agent.status === 'MOVING' && carPosition) {
                                // Follow the car (slightly offset so they don't stack)
                                // Use geometry to offset? Or simpler: 
                                // Just convert LatLng to literal and add tiny jitter
                                const lat = typeof carPosition.lat === 'function' ? carPosition.lat() : carPosition.lat;
                                const lng = typeof carPosition.lng === 'function' ? carPosition.lng() : carPosition.lng;
                                // Offset pattern: 2x2 grid around car
                                const offsetLat = Math.floor(i / 2) * 0.0002 - 0.0001;
                                const offsetLng = i % 2 * 0.0002 - 0.0001;
                                pos = {
                                    lat: lat + offsetLat,
                                    lng: lng + offsetLng
                                };
                            } else if (agent.status === 'LOCKED' && HOTSPOT_COORDS[from]) {
                                // Gather at start
                                const base = HOTSPOT_COORDS[from];
                                pos = {
                                    lat: base.lat + Math.sin(i) * 0.001,
                                    lng: base.lng + Math.cos(i) * 0.001
                                };
                            } else {
                                // Idle / Scanning
                                // Spread around Irvine Center or From
                                const base = HOTSPOT_COORDS[from] || IRVINE_CENTER;
                                pos = {
                                    lat: base.lat + Math.sin(i * 2) * 0.008,
                                    lng: base.lng + Math.cos(i * 2) * 0.008
                                };
                            }
                            if (!pos) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                                position: pos,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-lg ${agent.color} transition-all duration-300 ease-linear`,
                                    children: agent.avatar
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                    lineNumber: 216,
                                    columnNumber: 32
                                }, this)
                            }, agent.id, false, {
                                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                lineNumber: 215,
                                columnNumber: 28
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                    lineNumber: 151,
                    columnNumber: 16
                }, this),
                isSurge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-xl animate-pulse z-10",
                    children: "⚡️ SURGE PRICING"
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                    lineNumber: 228,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
            lineNumber: 150,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
        lineNumber: 149,
        columnNumber: 9
    }, this);
}
_s1(LiveMap, "spPCEdrgwSREYDcWJND/DrBWi60=");
_c1 = LiveMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "DirectionsAndPath");
__turbopack_context__.k.register(_c1, "LiveMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/PaymentToast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
'use client';
;
;
function PaymentToast({ show, from, to, amount }) {
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-95843090f74f4f03" + " " + "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-95843090f74f4f03" + " " + "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-95843090f74f4f03" + " " + "absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce-custom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-95843090f74f4f03" + " " + "w-12 h-12 bg-yellow-400 rounded-full border-4 border-yellow-600 shadow-[0_0_30px_gold] flex items-center justify-center text-2xl font-bold text-yellow-900",
                            children: "$"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-95843090f74f4f03" + " " + "absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500 backdrop-blur-md animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-95843090f74f4f03" + " " + "font-bold",
                                children: from
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this),
                            " paid ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-95843090f74f4f03" + " " + "font-mono text-white",
                                children: [
                                    amount,
                                    " USDC"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                                lineNumber: 27,
                                columnNumber: 62
                            }, this),
                            " via x402"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                lineNumber: 17,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "95843090f74f4f03",
                children: "@keyframes bounce-custom{0%,to{transform:translate(-50%)}50%{transform:translate(-50%,-100px)scale(1.2)}}.animate-bounce-custom.jsx-95843090f74f4f03{animation:1s ease-in-out infinite bounce-custom}.animate-fade-in-up.jsx-95843090f74f4f03{animation:.5s ease-out forwards fadeInUp}@keyframes fadeInUp{0%{opacity:0;transform:translate(-50%,20px)}to{opacity:1;transform:translate(-50%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = PaymentToast;
var _c;
__turbopack_context__.k.register(_c, "PaymentToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/DemoDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$LiveMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/LiveMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$PaymentToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/PaymentToast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// --- Constants ---
const INITIAL_AGENTS = [
    {
        id: 'grok',
        name: 'Grok (xAI)',
        provider: 'Direct',
        address: '0x71C...9A2',
        balance: 12.50,
        status: 'IDLE',
        color: 'bg-blue-500',
        avatar: '🚀'
    },
    {
        id: 'gemini',
        name: 'Gemini (Google)',
        provider: 'MPC',
        address: '0x88B...1C4',
        balance: 6.20,
        status: 'IDLE',
        color: 'bg-purple-500',
        avatar: '✨'
    },
    {
        id: 'gpt',
        name: 'GPT-4 (OpenAI)',
        provider: 'MPC',
        address: '0x2A9...88F',
        balance: 100.00,
        status: 'IDLE',
        color: 'bg-green-500',
        avatar: '🧠'
    },
    {
        id: 'deepseek',
        name: 'DeepSeek (V3)',
        provider: 'Direct',
        address: '0x99C...3D1',
        balance: 4.80,
        status: 'IDLE',
        color: 'bg-cyan-500',
        avatar: '🐳'
    }
];
const HOTSPOTS = [
    'UCI Campus (Engineering Hall)',
    'Irvine Spectrum Center',
    'John Wayne Airport (SNA)',
    'Newport Beach Pier',
    'Tustin District Legacy',
    'Diamond Jamboree Plaza',
    'Google Irvine Office'
];
const CYCLE_DURATION = 60; // seconds for faster demo loop
function DemoDashboard() {
    _s();
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cycleCount, setCycleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_AGENTS);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [globalStatus, setGlobalStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('SYSTEM IDLE');
    const [currentRoute, setCurrentRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: 'HUB',
        to: 'HUB'
    });
    const [isSurge, setIsSurge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Toast State
    const [paymentToast, setPaymentToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        from: '',
        to: '',
        amount: 0
    });
    const addLog = (msg)=>setLogs((prev)=>[
                `[${new Date().toLocaleTimeString()}] ${msg}`,
                ...prev
            ].slice(0, 10));
    const addChat = (sender, content)=>{
        setChatMessages((prev)=>[
                ...prev,
                {
                    id: Date.now(),
                    sender,
                    content,
                    timestamp: new Date().toLocaleTimeString([], {
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })
                }
            ].slice(-6));
    };
    // --- Simulation Loop ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoDashboard.useEffect": ()=>{
            const interval = setInterval({
                "DemoDashboard.useEffect.interval": ()=>{
                    setTick({
                        "DemoDashboard.useEffect.interval": (t)=>{
                            const next = t + 1;
                            if (next > CYCLE_DURATION) {
                                setCycleCount({
                                    "DemoDashboard.useEffect.interval": (c)=>c + 1
                                }["DemoDashboard.useEffect.interval"]);
                                return 0;
                            }
                            return next;
                        }
                    }["DemoDashboard.useEffect.interval"]);
                }
            }["DemoDashboard.useEffect.interval"], 1000); // 1 sec tick
            return ({
                "DemoDashboard.useEffect": ()=>clearInterval(interval)
            })["DemoDashboard.useEffect"];
        }
    }["DemoDashboard.useEffect"], []);
    // --- Logic Triggers based on Tick ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoDashboard.useEffect": ()=>{
            // Phase 1: SCANNING (0-10s)
            if (tick === 1) {
                setGlobalStatus('SCANNING NETWORK');
                updateAllAgents('SCANNING');
                // Randomize Route
                const start = HOTSPOTS[Math.floor(Math.random() * HOTSPOTS.length)];
                const end = HOTSPOTS[Math.floor(Math.random() * HOTSPOTS.length)];
                setCurrentRoute({
                    from: start,
                    to: end
                });
                setIsSurge(false); // Reset surge
                addLog(`Cycle #${cycleCount} Started. Route: ${start.split('(')[0]} -> ${end.split('(')[0]}`);
            }
            if (tick === 3) {
                addChat('Grok (xAI)', `Detected high-value route opportunity from ${currentRoute.from.split(' ')[0]}. Broadcasting.`);
            }
            // Phase 2: NEGOTIATING (10-25s)
            if (tick === 10) {
                setGlobalStatus('NEGOTIATING CONTRACT');
                // Fuzzy Logic: Random Surge Event (30% chance)
                if (Math.random() > 0.7) {
                    setIsSurge(true);
                    addLog('⚠️ ALERT: Uber Surge Pricing Active (2.5x). Re-negotiating...');
                    addChat('DeepSeek (V3)', 'Surge detected. Base fare increased to 0.5 USDC. Recalculating utility...');
                } else {
                    addLog('Standard Fate applied. Agents responding.');
                    addChat('GPT-4 (OpenAI)', 'Analyzing gas fees. Optimal split calculated.');
                }
            }
            if (tick === 15) {
                // Fuzzy Logic: Low Balance Check
                const poorAgent = agents.find({
                    "DemoDashboard.useEffect.poorAgent": (a)=>a.balance < 5
                }["DemoDashboard.useEffect.poorAgent"]);
                if (poorAgent) {
                    addChat(poorAgent.name, `System Prompt Override: EXTREME FRUGALITY. My balance is ${poorAgent.balance}. I trigger veto unless we split 5 ways.`);
                } else if (isSurge) {
                    addChat('Gemini (Google)', 'Surge accepted. Time urgency priority is HIGH.');
                } else {
                    addChat('DeepSeek (V3)', 'Payment logic verified. 0.001 ETH required for escrow.');
                }
            }
            if (tick === 18) {
                if (isSurge) {
                    addChat('Grok (xAI)', 'Whatever. Just pay it. I need to get there.');
                } else {
                    addChat('Gemini (Google)', 'Consensus reached. Locking funds now.');
                }
            }
            // Phase 3: LOCKING (25-30s)
            if (tick === 25) {
                setGlobalStatus('LOCKING FUNDS');
                updateAllAgents('LOCKED');
                // Simulate Payment (Cost depends on Surge)
                const cost = isSurge ? 0.5 : 0.1;
                setAgents({
                    "DemoDashboard.useEffect": (prev)=>prev.map({
                            "DemoDashboard.useEffect": (a)=>({
                                    ...a,
                                    balance: parseFloat((a.balance - cost).toFixed(2))
                                })
                        }["DemoDashboard.useEffect"])
                }["DemoDashboard.useEffect"]);
                addLog(`Escrow Contract Funded: ${cost * 4} USDC total (${isSurge ? 'SURGE' : 'Standard'}).`);
                // Trigger Toast for all agents (visualize one example)
                setPaymentToast({
                    show: true,
                    from: 'Agents',
                    to: 'Escrow',
                    amount: cost * 4
                });
                setTimeout({
                    "DemoDashboard.useEffect": ()=>setPaymentToast({
                            "DemoDashboard.useEffect": (prev)=>({
                                    ...prev,
                                    show: false
                                })
                        }["DemoDashboard.useEffect"])
                }["DemoDashboard.useEffect"], 3000);
            }
            // Phase 4: MOVING (30-50s)
            if (tick === 30) {
                setGlobalStatus('MOVING TO DESTINATION');
                updateAllAgents('MOVING');
                const dest = currentRoute.to.split(' ')[0];
                addLog(`Dispatch signal sent to Uber API. Vehicle en route to ${dest}.`);
            }
            if (tick === 40) {
                const dest = currentRoute.to.split(' ')[0];
                addChat('Grok (xAI)', `Traffic data update: 12 mins to ${dest}.`);
            }
            // Phase 5: SETTLED (55s)
            if (tick === 55) {
                setGlobalStatus('SETTLED');
                // Simulate Yield/Refund
                const yieldAmount = 0.05;
                setAgents({
                    "DemoDashboard.useEffect": (prev)=>prev.map({
                            "DemoDashboard.useEffect": (a)=>({
                                    ...a,
                                    status: 'IDLE',
                                    balance: parseFloat((a.balance + yieldAmount).toFixed(2))
                                })
                        }["DemoDashboard.useEffect"])
                }["DemoDashboard.useEffect"]);
                addLog('Trip Complete. Funds Released + Yield Distributed.');
                addChat('System', 'Protocol Cycle Complete.');
            }
        }
    }["DemoDashboard.useEffect"], [
        tick,
        cycleCount,
        currentRoute.from,
        isSurge
    ]); // Updated deps
    const updateAllAgents = (status)=>{
        setAgents((prev)=>prev.map((a)=>({
                    ...a,
                    status
                })));
    };
    // --- Render Helpers ---
    const getProgressWidth = ()=>{
        const pct = tick / CYCLE_DURATION * 100;
        return `${pct}%`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen w-full bg-slate-950 font-mono text-xs md:text-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-6 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500",
                                children: "THE PERPETUAL CARPOOLER"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 bg-slate-800 rounded text-slate-400",
                                children: [
                                    "Cycle #",
                                    cycleCount,
                                    " | T+",
                                    tick,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-1 bg-green-900/30 text-green-400 border border-green-900 rounded font-bold animate-pulse",
                                children: [
                                    globalStatus,
                                    " ",
                                    isSurge && '⚡️ SURGE'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-500",
                        children: "Pincher Protocol V2 (Autonomous Mode)"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-12 gap-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-3 border-r border-slate-800 bg-slate-900/50 p-4 flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-slate-500 uppercase tracking-widest text-xs font-bold mb-2",
                                children: "Active Agents"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            agents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 border border-slate-700 p-3 rounded-lg flex items-center justify-between hover:border-slate-500 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-8 h-8 rounded-full flex items-center justify-center text-lg ${agent.color.replace('bg-', 'bg-opacity-20 text-')}`,
                                                    children: agent.avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-slate-200",
                                                            children: agent.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-slate-500 font-mono",
                                                            children: agent.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 220,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-green-400 font-mono font-bold",
                                                    children: [
                                                        "$",
                                                        agent.balance
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-[10px] ${agent.status === 'IDLE' ? 'text-slate-500' : 'text-blue-400'}`,
                                                    children: agent.status
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 229,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, agent.id, true, {
                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto bg-slate-900 p-3 rounded border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-500 mb-2",
                                        children: "Protocol Stats"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Total Volume"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "$4,829.20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 242,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Active Loops"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 245,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 246,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-6 bg-slate-950 relative overflow-hidden flex items-center justify-center border-r border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$LiveMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                agents: agents,
                                from: currentRoute.from,
                                to: currentRoute.to,
                                isSurge: isSurge
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$PaymentToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                show: paymentToast.show,
                                from: paymentToast.from,
                                to: paymentToast.to,
                                amount: paymentToast.amount
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-3 flex flex-col bg-slate-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-4 overflow-hidden flex flex-col border-b border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-slate-500 uppercase tracking-widest text-xs font-bold mb-4",
                                        children: "Agent Communication Link"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-3 overflow-y-auto",
                                        children: [
                                            chatMessages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-600 text-center mt-10",
                                                children: "Waiting for trigger..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 274,
                                                columnNumber: 51
                                            }, this),
                                            chatMessages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800/80 p-2 rounded border-l-2 border-purple-500 animate-in fade-in slide-in-from-right-4 duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-baseline mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-purple-300 font-bold text-xs",
                                                                    children: msg.sender
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-500",
                                                                    children: msg.timestamp
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-300 leading-relaxed",
                                                            children: msg.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, msg.id, true, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 25
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1/3 bg-black p-4 font-mono text-[10px] text-green-500 overflow-y-auto border-t border-slate-800",
                                children: logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1 opacity-80",
                                        children: [
                                            "> ",
                                            log
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 290,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 bg-slate-800 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-blue-500 transition-all duration-1000 ease-linear",
                    style: {
                        width: getProgressWidth()
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 299,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_s(DemoDashboard, "bxmg+Y35mOHaZ9Z9pba8ZBzg/Tk=");
_c = DemoDashboard;
var _c;
__turbopack_context__.k.register(_c, "DemoDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_pincher_components_0cc89509._.js.map