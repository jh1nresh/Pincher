module.exports = [
"[project]/Desktop/pincher/components/LiveMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOTSPOT_COORDS",
    ()=>HOTSPOT_COORDS,
    "default",
    ()=>LiveMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-ssr] (ecmascript)");
'use client';
;
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
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMap"])();
    const routesLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMapsLibrary"])('routes');
    const geometryLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMapsLibrary"])('geometry');
    const [directionsService, setDirectionsService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [directionsRenderer, setDirectionsRenderer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Init Services
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        routesLibrary,
        map
    ]);
    // Fetch Route
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!directionsService || !directionsRenderer) return;
        if (from === 'HUB' || to === 'HUB') return;
        const start = HOTSPOT_COORDS[from];
        const end = HOTSPOT_COORDS[to];
        if (!start || !end) return;
        directionsService.route({
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        }).then((response)=>{
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
        }).catch((e)=>console.error("Directions Error", e));
    }, [
        directionsService,
        directionsRenderer,
        from,
        to,
        map
    ]);
    // Calculate Interpolated Position based on Progress
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        geometryLibrary,
        currentPath,
        progress
    ]);
    return null;
}
function LiveMap({ agents, from, to, progress }) {
    const apiKey = ("TURBOPACK compile-time value", "AIzaSyAT5jr_r_gNpxfMVnDB3z5KOm5e5OBUsnk");
    // State to hold the current interpolated position of the "Car"
    const [carPosition, setCarPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [path, setPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APIProvider"], {
        apiKey: apiKey,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full relative tranisiton-colors duration-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Map"], {
                defaultCenter: IRVINE_CENTER,
                defaultZoom: 12,
                mapId: MAP_ID,
                disableDefaultUI: true,
                className: "w-full h-full rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DirectionsAndPath, {
                        from: from,
                        to: to,
                        progress: progress,
                        onPathUpdate: setPath,
                        onPositionUpdate: setCarPosition
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                        lineNumber: 157,
                        columnNumber: 19
                    }, this),
                    Object.entries(HOTSPOT_COORDS).map(([name, coords])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                            position: coords,
                            title: name,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-gray-400 rounded-full opacity-50 hover:opacity-100 hover:scale-150 transition-all cursor-help"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                lineNumber: 168,
                                columnNumber: 27
                            }, this)
                        }, name, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 167,
                            columnNumber: 23
                        }, this)),
                    HOTSPOT_COORDS[from] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                        position: HOTSPOT_COORDS[from],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl animate-bounce",
                            children: "🚩"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 175,
                            columnNumber: 26
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                        lineNumber: 174,
                        columnNumber: 22
                    }, this),
                    HOTSPOT_COORDS[to] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                        position: HOTSPOT_COORDS[to],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl animate-bounce delay-75",
                            children: "🏁"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 180,
                            columnNumber: 26
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                        lineNumber: 179,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                            position: pos,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-lg ${agent.color} transition-all duration-300 ease-linear`,
                                children: agent.avatar
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                lineNumber: 215,
                                columnNumber: 32
                            }, this)
                        }, agent.id, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 214,
                            columnNumber: 28
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                lineNumber: 150,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
            lineNumber: 149,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
        lineNumber: 148,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/pincher/components/PaymentToast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
'use client';
;
;
function PaymentToast({ show, from, to, amount }) {
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-95843090f74f4f03" + " " + "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-95843090f74f4f03" + " " + "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-95843090f74f4f03" + " " + "absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce-custom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-95843090f74f4f03" + " " + "absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500 backdrop-blur-md animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-95843090f74f4f03" + " " + "font-bold",
                                children: from
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this),
                            " paid ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/Desktop/pincher/components/MiniReceipt.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MiniReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
'use client';
;
;
function MiniReceipt({ show, txHash, amount, from, to }) {
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-5267024ed3e70cfe" + " " + "absolute top-20 right-4 z-50 animate-slide-in-right",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5267024ed3e70cfe" + " " + "bg-white rounded-lg shadow-xl border-l-4 border-green-500 overflow-hidden w-64 ring-1 ring-black/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5267024ed3e70cfe" + " " + "p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5267024ed3e70cfe" + " " + "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "text-[10px] font-bold text-gray-500 uppercase tracking-wider",
                                    children: "On-Chain Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 19,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5267024ed3e70cfe" + " " + "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "p-1.5 bg-green-100 rounded text-green-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        className: "jsx-5267024ed3e70cfe" + " " + "w-4 h-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M5 13l4 4L19 7",
                                            className: "jsx-5267024ed3e70cfe"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 25,
                                            columnNumber: 100
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                        lineNumber: 25,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-sm font-bold text-gray-900",
                                            children: [
                                                amount,
                                                " USDC"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 28,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-[10px] text-gray-500",
                                            children: "x402 Payment Success"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 29,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 27,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5267024ed3e70cfe" + " " + "space-y-1 bg-gray-50 p-2 rounded border border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "flex justify-between text-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-gray-400",
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 35,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "font-mono text-gray-700",
                                            children: from
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 36,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "flex justify-between text-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-gray-400",
                                            children: "To"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 39,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "font-mono text-gray-700",
                                            children: to
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 40,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "flex justify-between text-[10px] items-center pt-1 mt-1 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-gray-400",
                                            children: "Tx"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 43,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://sepolia.basescan.org/tx/${txHash}`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "jsx-5267024ed3e70cfe" + " " + "font-mono text-blue-600 hover:underline truncate w-24 text-right",
                                            children: [
                                                txHash.slice(0, 6),
                                                "...",
                                                txHash.slice(-4)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 44,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "5267024ed3e70cfe",
                children: "@keyframes slideInRight{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}.animate-slide-in-right.jsx-5267024ed3e70cfe{animation:.5s cubic-bezier(.16,1,.3,1) forwards slideInRight}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/pincher/components/DemoDashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/createPublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-ssr] (ecmascript) <export u as usePrivy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-ssr] (ecmascript) <export u as useWallets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$LiveMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/LiveMap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$PaymentToast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/PaymentToast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$MiniReceipt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/MiniReceipt.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'; // Base Sepolia
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPublicClient"])({
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSepolia"],
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])()
});
// --- Constants ---
const INITIAL_AGENTS = [
    {
        id: 'grok',
        name: 'Grok (xAI)',
        provider: 'Direct',
        address: '0x71C...9A2',
        balance: 12.50,
        creditScore: 720,
        co2Saved: 14.5,
        inventory: [
            'Basic Pass'
        ],
        lastSeen: Date.now(),
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
        creditScore: 810,
        co2Saved: 28.2,
        inventory: [
            'Genesis Key'
        ],
        lastSeen: Date.now(),
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
        creditScore: 785,
        co2Saved: 42.0,
        inventory: [
            'OG Badge',
            'VIP'
        ],
        lastSeen: Date.now(),
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
        creditScore: 650,
        co2Saved: 5.1,
        inventory: [],
        lastSeen: Date.now(),
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
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cycleCount, setCycleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_AGENTS);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [globalStatus, setGlobalStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('SYSTEM IDLE');
    const [currentRoute, setCurrentRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        from: 'HUB',
        to: 'HUB'
    });
    const [isLiveMode, setIsLiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Live Chain Toggle
    const { user, login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"])();
    const { wallets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__["useWallets"])(); // Get connected wallet
    // Toast State
    const [paymentToast, setPaymentToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        from: '',
        to: '',
        amount: 0
    });
    const [miniReceipt, setMiniReceipt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        txHash: '',
        amount: 0,
        from: '',
        to: ''
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Standard Interval
        const interval = setInterval(()=>{
            setTick((t)=>{
                const next = t + 1;
                if (next > CYCLE_DURATION) {
                    setCycleCount((c)=>c + 1);
                    return 0;
                }
                return next;
            });
        }, 1000); // 1 tick = 1 second
        return ()=>clearInterval(interval);
    }, []);
    // --- Logic Triggers based on Tick ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            addLog(`Cycle #${cycleCount} Started. Route: ${start.split('(')[0]} -> ${end.split('(')[0]}.`);
        }
        if (tick === 3) {
            addChat('Grok (xAI)', `Detected high-value route opportunity from ${currentRoute.from.split(' ')[0]}. Broadcasting.`);
        }
        // Phase 2: NEGOTIATING (10-25s)
        if (tick === 10) {
            setGlobalStatus('NEGOTIATING CONTRACT');
            addLog('Standard Fare applied. Agents responding.');
            addChat('GPT-4 (OpenAI)', 'Analyzing gas fees. Optimal split calculated.');
        }
        if (tick === 15) {
            // Simple logic check
            const poorAgent = agents.find((a)=>a.balance < 5);
            if (poorAgent) {
                addChat(poorAgent.name, `System Prompt Override: EXTREME FRUGALITY. My balance is ${poorAgent.balance}. I trigger veto unless we split 5 ways.`);
            } else {
                addChat('DeepSeek (V3)', 'Payment logic verified. 0.001 ETH required for escrow.');
            }
        }
        if (tick === 18) {
            addChat('Gemini (Google)', 'Consensus reached. Locking funds now.');
        }
        // Phase 3: LOCKING (25-30s)
        if (tick === 25) {
            setGlobalStatus('LOCKING FUNDS');
            updateAllAgents('LOCKED');
            // Standard Payment
            const cost = 0.1;
            setAgents((prev)=>prev.map((a)=>({
                        ...a,
                        balance: parseFloat((a.balance - cost).toFixed(2))
                    })));
            addLog(`Escrow Contract Funded: ${cost * 4} USDC total.`);
            // Trigger Toast for all agents (visualize one example)
            setPaymentToast({
                show: true,
                from: 'Agents',
                to: 'Escrow',
                amount: cost * 4
            });
            setTimeout(()=>setPaymentToast((prev)=>({
                        ...prev,
                        show: false
                    })), 3000);
            // Trigger Receipt
            setMiniReceipt({
                show: true,
                txHash: '0x7f2c8...3a1d',
                amount: cost * 4,
                from: 'Multiple Senders',
                to: 'Escrow Vault'
            });
            setTimeout(()=>setMiniReceipt((prev)=>({
                        ...prev,
                        show: false
                    })), 8000);
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
            const totalYield = 0.05;
            const scoreDelta = Math.floor(Math.random() * 5) + 2; // +2 to +6
            const co2Delta = 2.4; // constant per trip
            setAgents((prev)=>prev.map((a)=>{
                    // Penalty for low balance
                    let newScore = a.creditScore + scoreDelta;
                    if (a.balance < 5) newScore -= 10;
                    return {
                        ...a,
                        status: 'IDLE',
                        lastSeen: Date.now(),
                        balance: parseFloat((a.balance + totalYield).toFixed(2)),
                        creditScore: Math.min(850, Math.max(300, newScore)),
                        co2Saved: parseFloat((a.co2Saved + co2Delta).toFixed(1))
                    };
                }));
            addLog(`Trip Complete. CO2 Saved: ${co2Delta}kg. Yield: ${totalYield}.`);
            addChat('System', 'Protocol Cycle Complete. Carbon Offset NFT minted.');
        }
    }, [
        tick,
        cycleCount,
        currentRoute.from
    ]);
    // --- Live Chain Data Fetcher ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchBalances() {
            if (!isLiveMode) return;
            // Replace Agent 1 with User if connected
            let updatedAgents = [
                ...agents
            ];
            if (user?.wallet?.address) {
                updatedAgents[0] = {
                    ...updatedAgents[0],
                    address: user.wallet.address,
                    name: 'YOU (Agent 1)'
                };
            }
            // Fetch real balances
            try {
                const balances = await Promise.all(updatedAgents.map(async (agent)=>{
                    if (agent.address.includes('...')) return agent.balance; // Skip mocks
                    const bal = await client.readContract({
                        address: USDC_ADDRESS,
                        abi: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
                            'function balanceOf(address) view returns (uint256)'
                        ]),
                        functionName: 'balanceOf',
                        args: [
                            agent.address
                        ]
                    });
                    return parseFloat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(bal, 6)); // USDC 6 decimals
                }));
                setAgents((prev)=>prev.map((a, i)=>({
                            ...a,
                            balance: balances[i]
                        })));
                addLog('🔗 On-Chain Data Synced (Base Sepolia)');
            } catch (e) {
                console.error("Chain Read Error", e);
            }
        }
        if (isLiveMode && tick % 10 === 0) fetchBalances(); // Poll every 10s
    }, [
        isLiveMode,
        tick,
        user
    ]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen bg-black overflow-hidden font-mono text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$LiveMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    agents: agents,
                    from: currentRoute.from,
                    to: currentRoute.to,
                    progress: tick >= 30 && tick <= 55 ? (tick - 30) / 25 * 100 : 0
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 260,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-10 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-black italic tracking-tighter text-white drop-shadow-md",
                        children: [
                            "PINCHER ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-500",
                                children: "PROTOCOL"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 271,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 270,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsLiveMode(!isLiveMode),
                                className: `px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md transition-all ${isLiveMode ? 'bg-green-500/20 border-green-400 text-green-300' : 'bg-white/10 border-white/20 text-slate-300 hover:bg-white/20'}`,
                                children: isLiveMode ? '● LIVE CHAIN' : '○ SIMULATION'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 274,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs text-slate-400 border border-white/10",
                                children: [
                                    "Cycle #",
                                    cycleCount,
                                    " | T+",
                                    tick,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 280,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 273,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-10 flex flex-col items-end gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1 rounded-full text-xs font-bold bg-black/40 backdrop-blur-md border border-white/10 text-slate-300",
                        children: globalStatus
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 289,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 288,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-4 z-10 flex flex-col gap-2",
                children: agents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 pr-4 rounded-full border border-white/5 transition-all hover:scale-105",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-6 rounded-full flex items-center justify-center text-xs ${agent.color.replace('bg-', 'bg-opacity-80 text-white bg-')}`,
                                children: agent.avatar
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 299,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-200 leading-none",
                                        children: agent.name.split(' (')[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 303,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-green-400 font-mono leading-none",
                                        children: [
                                            "$",
                                            agent.balance.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 304,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 302,
                                columnNumber: 18
                            }, this),
                            agent.status === 'MOVING' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse ml-1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 306,
                                columnNumber: 48
                            }, this)
                        ]
                    }, agent.id, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 298,
                        columnNumber: 14
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-24 right-4 z-10 flex flex-col gap-2 w-72 pointer-events-none",
                children: chatMessages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/40 backdrop-blur-md p-3 rounded-2xl rounded-tr-none border border-white/10 text-xs shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-bold ${msg.sender.includes('Grok') ? 'text-blue-400' : msg.sender.includes('Gemini') ? 'text-purple-400' : msg.sender.includes('GPT') ? 'text-green-400' : 'text-cyan-400'}`,
                                        children: msg.sender.split(' (')[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 316,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-500",
                                        children: msg.timestamp
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 319,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 315,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-200 leading-snug",
                                children: msg.content
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 321,
                                columnNumber: 18
                            }, this)
                        ]
                    }, msg.id, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 314,
                        columnNumber: 14
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 w-full flex justify-center pb-10 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$PaymentToast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            show: paymentToast.show,
                            from: paymentToast.from,
                            to: paymentToast.to,
                            amount: paymentToast.amount
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$MiniReceipt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            show: miniReceipt.show,
                            txHash: miniReceipt.txHash,
                            amount: miniReceipt.amount,
                            from: miniReceipt.from,
                            to: miniReceipt.to
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                            lineNumber: 335,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 328,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-1 bg-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(168,85,247,0.5)]",
                    style: {
                        width: getProgressWidth()
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 347,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 346,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_pincher_components_d50e3ff8._.js.map