(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/pincher/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ksfucvikvbnkocjkrvev.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZnVjdmlrdmJua29jamtydmV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2MDQ3NTQsImV4cCI6MjA4MjE4MDc1NH0.dvnPd1IMH1ANvjySFAnq5EhR_m-qTfb4xKmR845qfSg");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/SearchBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript) <export u as usePrivy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function SearchBox({ onPickupChange, onDropoffChange, className = "", externalPickupCoords, externalDropoffCoords, onRideCreated, isSidebarOpen, onOpenProfile }) {
    _s();
    const { user, authenticated, login, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"])();
    const [pickup, setPickup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dropoff, setDropoff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pickupCoords, setPickupCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropoffCoords, setDropoffCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const displayName = user?.email?.address || (user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : 'User');
    // ... (Existing Geolocation & Places Logic)
    // Sync with External Coordinates (e.g. Map Drag)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBox.useEffect": ()=>{
            if (externalPickupCoords && (!pickupCoords || externalPickupCoords.lat !== pickupCoords.lat || externalPickupCoords.lng !== pickupCoords.lng)) {
                setPickupCoords(externalPickupCoords);
                if (window.google && window.google.maps) {
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                        location: externalPickupCoords
                    }).then({
                        "SearchBox.useEffect": (response)=>{
                            if (response.results[0]) setPickup(response.results[0].formatted_address);
                        }
                    }["SearchBox.useEffect"]).catch({
                        "SearchBox.useEffect": (e)=>console.error("Reverse geocode failed", e)
                    }["SearchBox.useEffect"]);
                }
            }
        }
    }["SearchBox.useEffect"], [
        externalPickupCoords
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBox.useEffect": ()=>{
            if (externalDropoffCoords && (!dropoffCoords || externalDropoffCoords.lat !== dropoffCoords.lat || externalDropoffCoords.lng !== dropoffCoords.lng)) {
                setDropoffCoords(externalDropoffCoords);
                if (window.google && window.google.maps) {
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                        location: externalDropoffCoords
                    }).then({
                        "SearchBox.useEffect": (response)=>{
                            if (response.results[0]) setDropoff(response.results[0].formatted_address);
                        }
                    }["SearchBox.useEffect"]).catch({
                        "SearchBox.useEffect": (e)=>console.error("Reverse geocode failed", e)
                    }["SearchBox.useEffect"]);
                }
            }
        }
    }["SearchBox.useEffect"], [
        externalDropoffCoords
    ]);
    const [wechatId, setWechatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [departureTime, setDepartureTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locating, setLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDetails, setShowDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [placesApiReady, setPlacesApiReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pickupInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropoffInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pickupAutocompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropoffAutocompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Places API Check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBox.useEffect": ()=>{
            const checkPlacesAPI = {
                "SearchBox.useEffect.checkPlacesAPI": ()=>{
                    if (window.google && window.google.maps && window.google.maps.places) {
                        setPlacesApiReady(true);
                        return true;
                    }
                    return false;
                }
            }["SearchBox.useEffect.checkPlacesAPI"];
            if (checkPlacesAPI()) return;
            const interval = setInterval({
                "SearchBox.useEffect.interval": ()=>{
                    if (checkPlacesAPI()) clearInterval(interval);
                }
            }["SearchBox.useEffect.interval"], 1000);
            return ({
                "SearchBox.useEffect": ()=>clearInterval(interval)
            })["SearchBox.useEffect"];
        }
    }["SearchBox.useEffect"], []);
    // Autocomplete Setup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBox.useEffect": ()=>{
            if (!placesApiReady || !window.google || !window.google.maps || !window.google.maps.places) return;
            if (pickupInputRef.current && !pickupAutocompleteRef.current) {
                pickupAutocompleteRef.current = new google.maps.places.Autocomplete(pickupInputRef.current, {
                    componentRestrictions: {
                        country: 'us'
                    },
                    fields: [
                        'formatted_address',
                        'geometry',
                        'name'
                    ],
                    types: [
                        'establishment',
                        'geocode'
                    ]
                });
                pickupAutocompleteRef.current.addListener('place_changed', {
                    "SearchBox.useEffect": ()=>{
                        const place = pickupAutocompleteRef.current?.getPlace();
                        if (place?.geometry?.location) {
                            const address = place.formatted_address || place.name || '';
                            const coords = {
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng()
                            };
                            setPickup(address);
                            setPickupCoords(coords);
                            onPickupChange?.(address, coords);
                        }
                    }
                }["SearchBox.useEffect"]);
            }
            if (dropoffInputRef.current && !dropoffAutocompleteRef.current) {
                dropoffAutocompleteRef.current = new google.maps.places.Autocomplete(dropoffInputRef.current, {
                    componentRestrictions: {
                        country: 'us'
                    },
                    fields: [
                        'formatted_address',
                        'geometry',
                        'name'
                    ],
                    types: [
                        'establishment',
                        'geocode'
                    ]
                });
                dropoffAutocompleteRef.current.addListener('place_changed', {
                    "SearchBox.useEffect": ()=>{
                        const place = dropoffAutocompleteRef.current?.getPlace();
                        if (place?.geometry?.location) {
                            const address = place.formatted_address || place.name || '';
                            const coords = {
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng()
                            };
                            setDropoff(address);
                            setDropoffCoords(coords);
                            onDropoffChange?.(address, coords);
                            if (pickup) setShowDetails(true);
                        }
                    }
                }["SearchBox.useEffect"]);
            }
        }
    }["SearchBox.useEffect"], [
        placesApiReady,
        onPickupChange,
        onDropoffChange,
        pickup
    ]);
    const handleGetCurrentLocation = async ()=>{
        // ... (logic from before)
        if (!navigator.geolocation) {
            alert('Geolocation not supported');
            return;
        }
        if (!window.google || !window.google.maps) {
            alert('Map loading...');
            return;
        }
        setLocating(true);
        navigator.geolocation.getCurrentPosition(async (position)=>{
            const { latitude, longitude } = position.coords;
            try {
                const geocoder = new google.maps.Geocoder();
                const result = await geocoder.geocode({
                    location: {
                        lat: latitude,
                        lng: longitude
                    }
                });
                if (result.results?.[0]) {
                    const address = result.results[0].formatted_address;
                    const coords = {
                        lat: latitude,
                        lng: longitude
                    };
                    setPickup(address);
                    setPickupCoords(coords);
                    onPickupChange?.(address, coords);
                }
            } catch (e) {
                console.error(e);
            } finally{
                setLocating(false);
            }
        }, (error)=>{
            console.error(error);
            setLocating(false);
        });
    };
    const handleSubmit = async ()=>{
        if (!authenticated) {
            login();
            return;
        }
        if (!pickup || !dropoff || !wechatId) {
            alert('Please fill fields');
            return;
        }
        setLoading(true);
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('rides').insert([
                {
                    user_address: user?.wallet?.address || user?.email?.address || 'unknown',
                    pickup_location: pickup,
                    dropoff_location: dropoff,
                    departure_time: departureTime || new Date().toISOString(),
                    wechat_id: wechatId,
                    status: 'active',
                    pickup_lat: pickupCoords?.lat,
                    pickup_lng: pickupCoords?.lng,
                    dropoff_lat: dropoffCoords?.lat,
                    dropoff_lng: dropoffCoords?.lng
                }
            ]).select().single();
            if (error) throw error;
            alert('Ride published!');
            setDropoffCoords(null);
            setWechatId('');
            setDepartureTime('');
            setShowDetails(false);
            onRideCreated?.();
        } catch (e) {
            console.error(e);
            alert(e.message);
        } finally{
            setLoading(false);
        }
    };
    const handleManualGeocode = async (address, isPickup)=>{
        if (!address || !window.google || !window.google.maps) return;
        const geocoder = new google.maps.Geocoder();
        const result = await geocoder.geocode({
            address
        });
        if (result.results?.[0]) {
            const loc = result.results[0].geometry.location;
            const coord = {
                lat: loc.lat(),
                lng: loc.lng()
            };
            const addr = result.results[0].formatted_address;
            if (isPickup) {
                setPickup(addr);
                setPickupCoords(coord);
                onPickupChange?.(addr, coord);
            } else {
                setDropoff(addr);
                setDropoffCoords(coord);
                onDropoffChange?.(addr, coord);
                if (pickup) setShowDetails(true);
            }
        }
    };
    const handleSwap = ()=>{
        // ... swap logic
        const p = pickup, pc = pickupCoords;
        setPickup(dropoff);
        setPickupCoords(dropoffCoords);
        onPickupChange?.(dropoff, dropoffCoords || undefined);
        setDropoff(p);
        setDropoffCoords(pc);
        onDropoffChange?.(p, pc || undefined);
    };
    // If sidebar is open on mobile, hide the search box to resolve blocking issue
    // But on Desktop, it just slides.
    // We'll use CSS to handle this.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed md:absolute top-20 left-4 z-30 w-[94%] max-w-[400px] transition-all duration-300 ease-in-out font-sans ${className} ${isSidebarOpen ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`,
            children: [
                !placesApiReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 bg-yellow-50 text-yellow-600 text-xs p-2 rounded border border-yellow-200",
                    children: "Map Loading..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                    lineNumber: 224,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-xl border border-gray-100 relative overflow-visible",
                    children: [
                        authenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-12 right-0 md:hidden z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenProfile,
                                className: "w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors",
                                children: displayName[0].toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                lineNumber: 232,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                            lineNumber: 231,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-0 pt-2 pb-2 pl-2 pr-12 relative min-h-[100px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center pt-3 w-8 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-black shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px bg-gray-300 h-8 my-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-black shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                    lineNumber: 243,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: pickupInputRef,
                                            className: "w-full bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all placeholder-gray-500",
                                            placeholder: "Pickup location",
                                            value: pickup,
                                            onChange: (e)=>{
                                                setPickup(e.target.value);
                                                if (e.target.value === '') {
                                                    setPickupCoords(null);
                                                    onPickupChange?.('', undefined);
                                                }
                                            },
                                            onKeyDown: (e)=>e.key === 'Enter' && !placesApiReady && handleManualGeocode(pickup, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                            lineNumber: 251,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: dropoffInputRef,
                                            className: "w-full bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all placeholder-gray-500",
                                            placeholder: "Dropoff destination",
                                            value: dropoff,
                                            onChange: (e)=>{
                                                setDropoff(e.target.value);
                                                if (e.target.value === '') {
                                                    setDropoffCoords(null);
                                                    onDropoffChange?.('', undefined);
                                                }
                                            },
                                            onKeyDown: (e)=>e.key === 'Enter' && !placesApiReady && handleManualGeocode(dropoff, false)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                            lineNumber: 262,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                    lineNumber: 250,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSwap,
                                    className: "absolute bottom-3 right-3 p-1.5 text-gray-400 hover:text-black transition-colors",
                                    title: "Swap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                            lineNumber: 281,
                                            columnNumber: 97
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                        lineNumber: 281,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                    lineNumber: 276,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleGetCurrentLocation,
                                    className: "absolute top-4 right-3 p-1.5 text-gray-400 hover:text-blue-500 transition-colors",
                                    title: "Current Location",
                                    children: locating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "animate-spin w-4 h-4",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M12 2a10 10 0 100 20 10 10 0 000-20z",
                                                opacity: "0.3"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                lineNumber: 290,
                                                columnNumber: 88
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8v8H4z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                lineNumber: 290,
                                                columnNumber: 170
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                        lineNumber: 290,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                lineNumber: 290,
                                                columnNumber: 312
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                lineNumber: 290,
                                                columnNumber: 468
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                        lineNumber: 290,
                                        columnNumber: 233
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                    lineNumber: 285,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        (showDetails || pickup && dropoff) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 pb-3 pt-0 animate-in slide-in-from-top-2",
                            children: showDetails ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-2 border-t border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] uppercase font-bold text-gray-400",
                                                        children: "Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "datetime-local",
                                                        className: "w-full bg-gray-50 rounded p-2 text-xs font-bold",
                                                        value: departureTime,
                                                        onChange: (e)=>setDepartureTime(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                lineNumber: 301,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] uppercase font-bold text-gray-400",
                                                        children: "WeChat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "w-full bg-gray-50 rounded p-2 text-xs font-bold",
                                                        placeholder: "ID",
                                                        value: wechatId,
                                                        onChange: (e)=>setWechatId(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                                lineNumber: 305,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                        lineNumber: 300,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmit,
                                        disabled: loading || !wechatId,
                                        className: "w-full bg-black text-white py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-gray-800 disabled:opacity-50",
                                        children: loading ? 'Processing...' : authenticated ? 'Request Ride' : 'Connect Wallet'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                        lineNumber: 310,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                lineNumber: 299,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowDetails(true),
                                className: "w-full bg-black text-white py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-gray-800 mt-2",
                                children: "Continue"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                                lineNumber: 315,
                                columnNumber: 22
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                            lineNumber: 297,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/pincher/components/SearchBox.tsx",
            lineNumber: 220,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(SearchBox, "vOmkn3Z0ZuuKT/ZMeIy7J57nDis=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"]
    ];
});
_c = SearchBox;
var _c;
__turbopack_context__.k.register(_c, "SearchBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/lib/agent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateMatchScore",
    ()=>calculateMatchScore
]);
// Haversine formula to calculate distance in miles
/**
 *
 * @param coord1
 * @param coord2
 */ function calculateDistance(coord1, coord2) {
    const R = 3958.8; // Radius of Earth in miles
    const dLat = (coord2.lat - coord1.lat) * (Math.PI / 180);
    const dLon = (coord2.lng - coord1.lng) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(coord1.lat * (Math.PI / 180)) * Math.cos(coord2.lat * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
function calculateMatchScore(userPickup, userDropoff, ridePickup, rideDropoff) {
    if (!userPickup) return {
        score: 0,
        distance: 0
    };
    // 1. Calculate Distances
    const pickupDist = calculateDistance(userPickup, ridePickup);
    // If user hasn't entered dropoff, we only score based on pickup
    const dropoffDist = userDropoff ? calculateDistance(userDropoff, rideDropoff) : 0;
    // 2. Scoring Logic
    // Perfect score = 100
    // Penalty: -10 points per mile for pickup
    // Penalty: -5 points per mile for dropoff
    // Penalty: -3 points per mile for pickup
    // Penalty: -1 point per mile for dropoff (Ultra relaxed for demo)
    let score = 100 - pickupDist * 3;
    if (userDropoff) {
        score -= dropoffDist * 1;
    }
    // Cap score between 0 and 99 (nobody is perfect 100 unless exact calc)
    score = Math.max(10, Math.min(99, Math.round(score)));
    return {
        score,
        distance: parseFloat(pickupDist.toFixed(1))
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/RideList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RideList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$lib$2f$agent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/lib/agent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-client] (ecmascript) <export u as useWallets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript) <export u as usePrivy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/unit/parseUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
const BOOKING_PRICE_USDC = 0.01;
const BOOKING_PRICE_UNITS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUnits"])(BOOKING_PRICE_USDC.toString(), 6);
const ERC20_ABI = [
    {
        inputs: [
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'transfer',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
// ... (existing code)
const SHORT_USDC_ADDRESS = `${USDC_ADDRESS.slice(0, 6)}...${USDC_ADDRESS.slice(-4)}`;
const V2_CONTRACT_ADDRESS = "0x1225A84FC29FcdA297736ffe22977f8C594C21bc"; // Deployed on Base Sepolia
function RideList({ pickupCoords, dropoffCoords, onTopMatchUpdate, refreshTrigger = 0 }) {
    _s();
    const [rides, setRides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // rideId
    const [successTicket, setSuccessTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { wallets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__["useWallets"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"])();
    // -- Action Handlers --
    const handleBook = async (ride)=>{
        try {
            setActionLoading(ride.id);
            const wallet = wallets[0];
            if (!wallet) {
                alert("Connect wallet first!");
                return;
            }
            const configRes = await fetch('/api/escrow/config');
            const { address: agentAddress } = await configRes.json();
            if (!agentAddress) throw new Error("Agent address missing");
            await wallet.switchChain(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id);
            const provider = await wallet.getEthereumProvider();
            const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
                account: wallet.address,
                chain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
                transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)
            });
            const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                abi: ERC20_ABI,
                functionName: 'transfer',
                args: [
                    agentAddress,
                    BOOKING_PRICE_UNITS
                ]
            });
            // @ts-expect-error - KZG param not needed for simple transfer
            const hash = await client.sendTransaction({
                to: USDC_ADDRESS,
                data
            });
            const depositRes = await fetch('/api/escrow/deposit', {
                method: 'POST',
                body: JSON.stringify({
                    rideId: ride.id,
                    txHash: hash,
                    userAddress: wallet.address
                })
            });
            if (!depositRes.ok) throw new Error("Deposit failed");
            setRides((prev)=>prev.map((r)=>r.id === ride.id ? {
                        ...r,
                        status: 'escrow_holding',
                        isUnlocked: true
                    } : r));
            addToBooked(ride.id);
            setSuccessTicket({
                id: ride.id,
                tx: hash
            });
        } catch (e) {
            console.error("Booking failed:", e);
            if (!e.message?.includes("User rejected")) {
                alert(`Booking Failed: ${e.shortMessage || e.message}`);
            }
        } finally{
            setActionLoading(null);
        }
    };
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    const handleRelease = async (ride)=>{
        if (!navigator.geolocation) {
            alert("Geolocation is not supported");
            return;
        }
        setActionLoading(ride.id);
        navigator.geolocation.getCurrentPosition(async (position)=>{
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            if (ride.dropoff_lat && ride.dropoff_lng) {
                const distKm = getDistanceFromLatLonInKm(userLat, userLng, ride.dropoff_lat, ride.dropoff_lng);
                if (distKm * 0.621371 > 0.5) {
                    alert(`Too far from destination! You are ${(distKm * 0.621371).toFixed(2)} miles away.`);
                    setActionLoading(null);
                    return;
                }
            }
            try {
                const res = await fetch('/api/escrow/release', {
                    method: 'POST',
                    body: JSON.stringify({
                        rideId: ride.id
                    })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error);
                setRides((prev)=>prev.map((r)=>r.id === ride.id ? {
                            ...r,
                            status: 'completed'
                        } : r));
                alert(`Funds Released!`);
            } catch (e) {
                alert(`Release Failed: ${e.message}`);
            } finally{
                setActionLoading(null);
            }
        }, ()=>{
            alert("Could not get your location.");
            setActionLoading(null);
        });
    };
    const openInUber = (ride)=>{
        const pLat = ride.ride_pickup_coords?.lat;
        const pLng = ride.ride_pickup_coords?.lng;
        const dLat = ride.ride_dropoff_coords?.lat;
        const dLng = ride.ride_dropoff_coords?.lng;
        if (!pLat || !pLng || !dLat || !dLng) {
            alert("Missing coordinates.");
            return;
        }
        const baseUrl = "https://m.uber.com/ul/";
        const params = new URLSearchParams({
            action: 'setPickup',
            client_id: 'pincher_demo',
            'pickup[latitude]': pLat.toString(),
            'pickup[longitude]': pLng.toString(),
            'pickup[nickname]': ride.pickup_location,
            'dropoff[latitude]': dLat.toString(),
            'dropoff[longitude]': dLng.toString(),
            'dropoff[nickname]': ride.dropoff_location
        });
        window.open(`${baseUrl}?${params.toString()}`, '_blank');
    };
    const handleCopyWeChat = (text)=>{
        navigator.clipboard.writeText(text);
        alert("WeChat ID Copied!");
    };
    const [bookedRideIds, setBookedRideIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RideList.useEffect": ()=>{
            const stored = localStorage.getItem('pincher_booked_rides');
            if (stored) {
                try {
                    setBookedRideIds(JSON.parse(stored));
                } catch (e) {
                    console.error("Failed to parse booked rides", e);
                }
            }
        }
    }["RideList.useEffect"], []);
    const addToBooked = (id)=>{
        const updated = [
            ...bookedRideIds,
            id
        ];
        setBookedRideIds(updated);
        localStorage.setItem('pincher_booked_rides', JSON.stringify(updated));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RideList.useEffect": ()=>{
            fetchRides();
        }
    }["RideList.useEffect"], [
        refreshTrigger
    ]);
    async function fetchRides() {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('rides').select('*').order('departure_time', {
                ascending: true
            });
            if (error) throw error;
            const enrichedRides = (data || []).map((ride, index)=>{
                const hasRealCoords = ride.pickup_lat && ride.pickup_lng && ride.dropoff_lat && ride.dropoff_lng;
                let pLat, pLng, dLat, dLng;
                if (hasRealCoords) {
                    pLat = ride.pickup_lat;
                    pLng = ride.pickup_lng;
                    dLat = ride.dropoff_lat;
                    dLng = ride.dropoff_lng;
                } else {
                    const latOffset = (index % 5 - 2) * 0.005;
                    const lngOffset = (index % 3 - 1) * 0.005;
                    pLat = 33.6846 + latOffset;
                    pLng = -117.8265 + lngOffset;
                    dLat = 33.7 + latOffset;
                    dLng = -117.8 + lngOffset;
                }
                return {
                    ...ride,
                    price: 10 + ride.id % 25,
                    seats: 1 + ride.id % 3,
                    ride_pickup_coords: {
                        lat: pLat,
                        lng: pLng
                    },
                    ride_dropoff_coords: {
                        lat: dLat,
                        lng: dLng
                    },
                    match_score: 0,
                    isUnlocked: ride.status === 'completed' || ride.status === 'escrow_holding'
                };
            });
            setRides(enrichedRides);
        } catch (error) {
            console.error('Error fetching rides:', error?.message || error);
        } finally{
            setLoading(false);
        }
    }
    const sortedRides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RideList.useMemo[sortedRides]": ()=>{
            if (!rides.length) return [];
            if (!pickupCoords) return rides;
            const scored = rides.map({
                "RideList.useMemo[sortedRides].scored": (ride)=>{
                    if (!ride.ride_pickup_coords || !ride.ride_dropoff_coords) return ride;
                    const { score, distance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$lib$2f$agent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateMatchScore"])(pickupCoords, dropoffCoords, ride.ride_pickup_coords, ride.ride_dropoff_coords);
                    return {
                        ...ride,
                        match_score: score,
                        distance_from_user: distance
                    };
                }
            }["RideList.useMemo[sortedRides].scored"]);
            return scored.sort({
                "RideList.useMemo[sortedRides]": (a, b)=>(b.match_score || 0) - (a.match_score || 0)
            }["RideList.useMemo[sortedRides]"]);
        }
    }["RideList.useMemo[sortedRides]"], [
        rides,
        pickupCoords,
        dropoffCoords
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RideList.useEffect": ()=>{
            if (onTopMatchUpdate && sortedRides.length > 0) {
                onTopMatchUpdate(sortedRides[0]);
            }
        }
    }["RideList.useEffect"], [
        sortedRides,
        onTopMatchUpdate
    ]);
    const displayedRides = sortedRides.filter((r)=>{
        const GRACE_PERIOD_MS = 2 * 60 * 60 * 1000;
        const isExpired = new Date(r.departure_time).getTime() < Date.now() - GRACE_PERIOD_MS;
        if (r.status === 'completed' || r.status === 'cancelled') return false;
        if (r.status === 'escrow_holding') {
            const isOrganizer = user?.wallet?.address && r.user_address && user.wallet.address.toLowerCase() === r.user_address.toLowerCase();
            const isPassenger = bookedRideIds.includes(r.id);
            return isOrganizer || isPassenger;
        }
        if (r.status === 'active') return !isExpired;
        return true;
    });
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-6 h-6 border-2 border-slate-200 border-t-black rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
        lineNumber: 315,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            displayedRides.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl opacity-50",
                            children: "🚗"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                            lineNumber: 329,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                        lineNumber: 328,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-900 font-bold",
                        children: "No rides nearby"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                        lineNumber: 331,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                lineNumber: 326,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 pb-20 px-1",
                children: displayedRides.map((ride)=>{
                    const date = new Date(ride.departure_time);
                    const timeStr = date.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    const isBooking = actionLoading === ride.id;
                    const isExpanded = expandedRideId === ride.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>toggleExpand(ride.id),
                        className: `group px-4 py-3 bg-white border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-all cursor-pointer ${ride.status === 'escrow_holding' ? 'bg-yellow-50/50' : ride.status === 'completed' ? 'bg-green-50/50' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded",
                                                    children: timeStr
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 30
                                                }, this),
                                                (ride.match_score || 0) > 80 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold text-green-600 flex items-center gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-2.5 h-2.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 3,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 120
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 37
                                                        }, this),
                                                        ride.match_score,
                                                        "% Match"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 353,
                                            columnNumber: 26
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                ride.status === 'escrow_holding' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-bold text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded uppercase",
                                                    children: "Escrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 34
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-black text-black",
                                                    children: "0.01 USDC"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: `w-3 h-3 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`,
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 9l-7 7-7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 180
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 364,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                    lineNumber: 352,
                                    columnNumber: 21
                                }, this),
                                isExpanded ? // EXPANDED VIEW: Full Addresses
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 mt-1 py-2 border-l-2 border-black pl-3 ml-1 animate-in fade-in duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] uppercase font-bold text-gray-400",
                                                    children: "Pickup"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-black",
                                                    children: ride.pickup_location
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 378,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] uppercase font-bold text-gray-400",
                                                    children: "Dropoff"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-black",
                                                    children: ride.dropoff_location
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 382,
                                            columnNumber: 29
                                        }, this),
                                        ride.distance_from_user !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-500 italic",
                                            children: [
                                                (ride.distance_from_user * 0.621371).toFixed(1),
                                                " miles addition"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 387,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                    lineNumber: 377,
                                    columnNumber: 25
                                }, this) : // COLLAPSED VIEW: Summary Line
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs text-gray-900 font-bold leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate max-w-[45%]",
                                            children: ride.pickup_location.split(',')[0]
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 395,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300",
                                            children: "➜"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 396,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate max-w-[45%]",
                                            children: ride.dropoff_location.split(',')[0]
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 397,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                    lineNumber: 394,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        ride.status === 'active' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleBook(ride),
                                            disabled: isBooking,
                                            className: "w-full py-2 bg-black text-white rounded-md text-[10px] font-bold uppercase tracking-wider hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 transition-colors flex items-center justify-center gap-2",
                                            children: isBooking ? 'Processing...' : 'Pay Deposit (0.01 USDC) & Join'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 404,
                                            columnNumber: 29
                                        }, this),
                                        ride.status === 'escrow_holding' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2 mt-2 pt-2 border-t border-dashed border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-bold text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded uppercase",
                                                            children: "Ride In Progress"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 text-[10px] text-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold select-all",
                                                                    children: ride.wechat_id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        handleCopyWeChat(ride.wechat_id);
                                                                    },
                                                                    className: "hover:text-black",
                                                                    title: "Copy",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-3 h-3",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012 2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                                            lineNumber: 420,
                                                                            columnNumber: 124
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                                        lineNumber: 420,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: user?.wallet?.address && ride.user_address && user.wallet.address.toLowerCase() === ride.user_address.toLowerCase() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openInUber(ride),
                                                                className: "flex-1 py-1.5 bg-black text-white rounded text-[10px] font-bold hover:bg-gray-800",
                                                                children: "Open Uber"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>alert("Simulated: Customer support contacted."),
                                                                className: "flex-1 py-1.5 bg-gray-100 text-gray-600 rounded text-[10px] font-bold hover:bg-gray-200",
                                                                children: "Support"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 41
                                                    }, this) : /* Passenger Actions */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleRelease(ride),
                                                        disabled: isBooking,
                                                        className: "w-full py-2 bg-green-600 text-white rounded text-[10px] font-bold hover:bg-green-700 disabled:bg-green-400 shadow-sm",
                                                        children: isBooking ? 'Verifying...' : '✅ Confirm Pickup'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 414,
                                            columnNumber: 30
                                        }, this),
                                        ride.status === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full py-2 bg-gray-100 text-gray-500 rounded-md text-[10px] font-bold uppercase tracking-wider text-center cursor-default",
                                            children: "Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                            lineNumber: 458,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                    lineNumber: 402,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                            lineNumber: 350,
                            columnNumber: 17
                        }, this)
                    }, ride.id, false, {
                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                        lineNumber: 342,
                        columnNumber: 17
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                lineNumber: 334,
                columnNumber: 9
            }, this),
            successTicket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 relative overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 text-green-600",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 3,
                                        d: "M5 13l4 4L19 7"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                        lineNumber: 479,
                                        columnNumber: 27
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                    lineNumber: 478,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                lineNumber: 477,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-black text-black tracking-tight mb-2",
                                children: "Ride Confirmed"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                lineNumber: 483,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-6 max-w-[240px]",
                                children: "Deposit locked. Driver is on the way."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                lineNumber: 486,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-50 rounded-lg p-3 mb-6 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase font-bold text-gray-400 tracking-wider",
                                                children: "Ticket ID"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                lineNumber: 493,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono font-bold text-black",
                                                children: [
                                                    "#",
                                                    successTicket.id.toString().padStart(4, '0')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                lineNumber: 494,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                        lineNumber: 492,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-px bg-gray-200 my-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                        lineNumber: 496,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase font-bold text-gray-400 tracking-wider",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                lineNumber: 498,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full",
                                                children: "ACTIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                                lineNumber: 499,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                        lineNumber: 497,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                lineNumber: 491,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSuccessTicket(null),
                                        className: "w-full py-3 rounded-lg bg-black text-white font-bold text-sm hover:bg-gray-800 transition-all active:scale-[0.98]",
                                        children: "Track Driver"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                        lineNumber: 505,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://sepolia.basescan.org/tx/${successTicket.tx}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "block w-full text-center py-2 text-xs font-medium text-gray-400 hover:text-black transition-colors",
                                        children: "View Receipt on BaseScan ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                        lineNumber: 512,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                                lineNumber: 504,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                        lineNumber: 475,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                    lineNumber: 474,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/RideList.tsx",
                lineNumber: 473,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/RideList.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}
_s(RideList, "yxebYz5nPXTtSy40fs5QXbqF73U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__["useWallets"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"]
    ];
});
_c = RideList;
var _c;
__turbopack_context__.k.register(_c, "RideList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/MapSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript) <export u as usePrivy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$RideList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/RideList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MapSidebar({ isOpen, onToggle, pickupCoords, dropoffCoords, onTopMatchUpdate, refreshTrigger }) {
    _s();
    const { authenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"])();
    if (!authenticated) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: `absolute top-4 left-4 z-50 p-2.5 bg-white text-black rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 ease-in-out active:scale-95 pointer-events-auto border border-gray-100 ${isOpen ? 'md:translate-x-[320px] translate-x-0 opacity-0 md:opacity-100' // Hide on mobile when open (sheet covers it)
                 : 'translate-x-0 opacity-100'}`,
                "aria-label": "Toggle Sidebar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2.5,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2.5,
                        d: "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity",
                onClick: onToggle
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          fixed z-50 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out
          
          /* Mobile: Bottom Sheet */
          bottom-0 left-0 right-0 h-[85vh] w-full rounded-t-3xl
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}

          /* Desktop: Left Sidebar */
          md:top-0 md:left-0 md:bottom-0 md:h-full md:w-[320px] md:rounded-none md:transform-none
          ${isOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden w-full flex justify-center pt-3 pb-1",
                        onClick: onToggle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-1.5 bg-gray-300 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 md:py-6 border-b border-gray-100 bg-white shrink-0 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-black text-black tracking-tighter",
                                children: "Pincher"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggle,
                                className: "md:hidden p-2 text-gray-400 hover:text-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                                        lineNumber: 73,
                                        columnNumber: 96
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto bg-white overscroll-contain",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-0 pb-safe",
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$RideList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    pickupCoords: pickupCoords,
                                    dropoffCoords: dropoffCoords,
                                    onTopMatchUpdate: onTopMatchUpdate
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-gray-100 bg-gray-50 pb-8 md:pb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-[10px] text-gray-400 font-medium",
                            children: "Pincher Protocol © 2025"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/MapSidebar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MapSidebar, "LfpuVu6Y/Rl3+H8/O7P16Jhqogg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"]
    ];
});
_c = MapSidebar;
var _c;
__turbopack_context__.k.register(_c, "MapSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/UserProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript) <export u as usePrivy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
function UserProfile({ isOpen, onClose, onToggle }) {
    _s();
    const { user, logout, authenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"])();
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0.00');
    const [ethBalance, setEthBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0.00');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [faucetStatus, setFaucetStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProfile.useEffect": ()=>{
            if (authenticated && user?.wallet?.address && isOpen) {
                fetchBalance();
            }
        }
    }["UserProfile.useEffect"], [
        authenticated,
        user?.wallet?.address,
        isOpen
    ]);
    const fetchBalance = async ()=>{
        try {
            const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
                chain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
                transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])()
            });
            // Fetch USDC Balance
            // @ts-expect-error - viem type inference mismatch
            const usdcData = await client.readContract({
                address: USDC_ADDRESS,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20Abi"],
                functionName: 'balanceOf',
                args: [
                    user.wallet.address
                ]
            });
            const usdcFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(usdcData, 6);
            setBalance(parseFloat(usdcFormatted).toFixed(2));
            // Fetch ETH Balance
            const ethData = await client.getBalance({
                address: user.wallet.address
            });
            const ethFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(ethData, 18);
            setEthBalance(parseFloat(ethFormatted).toFixed(4));
        } catch (e) {
            console.error("Balance fetch error", e);
        }
    };
    const claimFaucet = async ()=>{
        if (!user?.wallet?.address) return;
        setFaucetStatus('claiming');
        try {
            const res = await fetch('/api/faucet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: user.wallet.address
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setFaucetStatus('success');
            // Re-check balance after short delay
            setTimeout(()=>{
                fetchBalance();
                setFaucetStatus('idle');
            }, 3000);
        } catch (e) {
            console.error("Faucet error", e);
            setFaucetStatus('error');
            setTimeout(()=>setFaucetStatus('idle'), 3000);
        }
    };
    if (!authenticated) return null;
    const displayName = user?.email?.address || (user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : 'User');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 z-60 backdrop-blur-sm transition-opacity md:hidden",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
            fixed z-70 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden
            bottom-0 left-0 right-0 h-[85vh] w-full rounded-t-3xl
            ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-center pt-3 pb-1",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-1.5 bg-gray-300 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 109,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-6 border-b border-gray-100 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg",
                                        children: displayName[0].toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 116,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold text-black leading-tight",
                                                children: displayName
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 font-mono",
                                                children: [
                                                    user?.wallet?.address?.slice(0, 6),
                                                    "...",
                                                    user?.wallet?.address?.slice(-4)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 119,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-full hover:bg-gray-100 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-gray-500",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 125,
                                        columnNumber: 110
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileContent, {
                            balance: balance,
                            ethBalance: ethBalance,
                            user: user,
                            copied: copied,
                            setCopied: setCopied,
                            fetchBalance: fetchBalance,
                            logout: logout,
                            claimFaucet: claimFaucet,
                            faucetStatus: faucetStatus
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block absolute top-4 right-4 z-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggle,
                        className: "flex items-center gap-2 bg-white rounded-full p-1 pr-4 shadow-md border border-gray-100 hover:shadow-lg transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs",
                                children: displayName[0].toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-700 font-mono",
                                children: user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : 'Profile'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gray-50 border-b border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg",
                                            children: displayName[0].toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                            lineNumber: 164,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-black",
                                                    children: displayName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-gray-400 font-mono break-all",
                                                    children: user?.wallet?.address
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                            lineNumber: 167,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                    lineNumber: 163,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 162,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileContent, {
                                    balance: balance,
                                    ethBalance: ethBalance,
                                    user: user,
                                    copied: copied,
                                    setCopied: setCopied,
                                    fetchBalance: fetchBalance,
                                    logout: logout,
                                    isDesktop: true,
                                    claimFaucet: claimFaucet,
                                    faucetStatus: faucetStatus
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                    lineNumber: 174,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 173,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 161,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(UserProfile, "+mfOvoIuIPNA4wq6ZJ4ZUzq0Dug=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"]
    ];
});
_c = UserProfile;
// Sub-component to share content between Mobile and Desktop
function ProfileContent({ balance, ethBalance, user, copied, setCopied, fetchBalance, logout, isDesktop, claimFaucet, faucetStatus }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-xl ${isDesktop ? 'px-1' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-900",
                                children: "Wallet Balance"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 201,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: fetchBalance,
                                className: "text-xs font-medium text-gray-500 hover:text-black transition-colors",
                                children: "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 202,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 200,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-xs text-black",
                                                    children: "$"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                lineNumber: 209,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-black",
                                                children: "USDC"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                lineNumber: 212,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 208,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono font-bold text-sm text-black",
                                        children: balance
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 214,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 207,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-xs text-black",
                                                    children: "Ξ"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                lineNumber: 220,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm text-black",
                                                children: "ETH"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                                lineNumber: 223,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 219,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono font-bold text-sm text-black",
                                        children: ethBalance
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 225,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 205,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this),
            parseFloat(balance) < 0.1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-xl ${isDesktop ? 'px-1' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold text-gray-900",
                            children: "Dev Tools"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                            lineNumber: 234,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 233,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: claimFaucet,
                        disabled: faucetStatus === 'claiming' || faucetStatus === 'success',
                        className: "w-full py-3 bg-black text-white hover:bg-gray-800 rounded-lg font-bold text-xs shadow-sm disabled:opacity-50 transition-all flex items-center justify-center gap-2 active:scale-[0.98]",
                        children: faucetStatus === 'claiming' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "animate-spin h-3 w-3 text-white",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                            lineNumber: 243,
                                            columnNumber: 102
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                            lineNumber: 243,
                                            columnNumber: 207
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                    lineNumber: 243,
                                    columnNumber: 33
                                }, this),
                                "Sending..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                            lineNumber: 242,
                            columnNumber: 30
                        }, this) : faucetStatus === 'success' ? 'Funds Sent!' : 'Get 0.05 Test-USDC'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 236,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-gray-400 mt-2 text-center",
                        children: "Only available on Base Sepolia Testnet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 252,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                lineNumber: 232,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-xl ${isDesktop ? 'px-1' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold text-gray-900",
                            children: "Official Faucets"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                            lineNumber: 261,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 260,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://portal.cdp.coinbase.com/products/faucet?projectId=866bc23f-cf9a-4445-b8c3-937b1853d5bb&token=ETH&network=base-sepolia",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "py-3 bg-white border border-gray-200 hover:border-black text-black rounded-lg font-bold text-[10px] flex items-center justify-center gap-2 transition-all hover:shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px]",
                                        children: "Ξ"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 270,
                                        columnNumber: 26
                                    }, this),
                                    "Base ETH"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 264,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://faucet.circle.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "py-3 bg-white border border-gray-200 hover:border-black text-black rounded-lg font-bold text-[10px] flex items-center justify-center gap-2 transition-all hover:shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px]",
                                        children: "$"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                        lineNumber: 279,
                                        columnNumber: 25
                                    }, this),
                                    "Circle USDC"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 273,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 263,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                lineNumber: 259,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `space-y-2 pt-2 ${isDesktop ? 'px-1' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (user?.wallet?.address) {
                                navigator.clipboard.writeText(user.wallet.address);
                                setCopied(true);
                                setTimeout(()=>setCopied(false), 2000);
                            }
                        },
                        className: "w-full py-2 px-3 rounded-lg border border-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-black hover:border-gray-300 transition-all flex justify-between items-center",
                        children: [
                            "Copy Address",
                            copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-black",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                                lineNumber: 298,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 287,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://sepolia.basescan.org/address/${user?.wallet?.address}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block w-full text-center py-2 px-3 rounded-lg border border-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-black hover:border-gray-300 transition-all",
                        children: "View on Explorer ↗"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 301,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: logout,
                        className: "w-full py-2 px-3 rounded-lg text-red-500 text-xs font-bold hover:bg-red-50 transition-all text-left pl-3",
                        children: "Sign Out"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                        lineNumber: 310,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
                lineNumber: 286,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/UserProfile.tsx",
        lineNumber: 197,
        columnNumber: 9
    }, this);
}
_c1 = ProfileContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "UserProfile");
__turbopack_context__.k.register(_c1, "ProfileContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/Directions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Directions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function Directions({ pickup, dropoff }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const routesLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"])('routes');
    const [directionsService, setDirectionsService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [directionsRenderer, setDirectionsRenderer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    // 1. Initialize Services
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Directions.useEffect": ()=>{
            if (!routesLibrary || !map) return;
            const ds = new routesLibrary.DirectionsService();
            // Suppress default markers so we can use our custom sexy markers
            const dr = new routesLibrary.DirectionsRenderer({
                map,
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: '#2563EB',
                    strokeWeight: 6,
                    strokeOpacity: 1.0
                }
            });
            setDirectionsService(ds);
            setDirectionsRenderer(dr);
            return ({
                "Directions.useEffect": ()=>{
                    dr.setMap(null); // Cleanup
                }
            })["Directions.useEffect"];
        }
    }["Directions.useEffect"], [
        routesLibrary,
        map
    ]);
    // 2. Fetch Route
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Directions.useEffect": ()=>{
            if (!directionsService || !directionsRenderer) return;
            // Check inputs
            if (!pickup || !dropoff) {
                // Clear route if points removed
                directionsRenderer.setDirections({
                    routes: []
                });
                return;
            }
            console.log("📍 Directions: Fetching route...", {
                pickup,
                dropoff
            });
            directionsService.route({
                origin: pickup,
                destination: dropoff,
                travelMode: google.maps.TravelMode.DRIVING
            }).then({
                "Directions.useEffect": (response)=>{
                    console.log("✅ Directions: Found route!", response);
                    directionsRenderer.setDirections(response);
                }
            }["Directions.useEffect"]).catch({
                "Directions.useEffect": (e)=>{
                    console.error("❌ Directions request failed", e);
                }
            }["Directions.useEffect"]);
        }
    }["Directions.useEffect"], [
        directionsService,
        directionsRenderer,
        pickup,
        dropoff
    ]);
    return null; // Logic only, renders directly on map instance
}
_s(Directions, "JzXQFrJPrwgcQ/1e4GCNJydpD44=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"]
    ];
});
_c = Directions;
var _c;
__turbopack_context__.k.register(_c, "Directions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/UserOnboarding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript) <export u as usePrivy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-client] (ecmascript) <export u as useWallets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/unit/formatEther.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])()
});
function UserOnboarding({ onComplete }) {
    _s();
    const { login, authenticated, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"])();
    const { wallets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__["useWallets"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [faucetStatus, setFaucetStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    // Step 1 -> 2: Auto transition when authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserOnboarding.useEffect": ()=>{
            if (authenticated && user?.wallet?.address) {
                setStep(2);
                checkBalance(user.wallet.address);
            }
        }
    }["UserOnboarding.useEffect"], [
        authenticated,
        user
    ]);
    const checkBalance = async (address)=>{
        setLoading(true);
        try {
            const ethBal = await client.getBalance({
                address: address
            });
            const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
            // @ts-expect-error - viem type mismatch
            const usdcBal = await client.readContract({
                address: USDC_ADDRESS,
                abi: [
                    {
                        name: 'balanceOf',
                        type: 'function',
                        inputs: [
                            {
                                name: 'owner',
                                type: 'address'
                            }
                        ],
                        outputs: [
                            {
                                name: 'balance',
                                type: 'uint256'
                            }
                        ],
                        stateMutability: 'view'
                    }
                ],
                functionName: 'balanceOf',
                args: [
                    address
                ]
            });
            const eth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEther"])(ethBal);
            const usdc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(usdcBal, 6);
            setBalance({
                eth,
                usdc
            });
        } catch (e) {
            console.error("Balance check failed", e);
        } finally{
            setLoading(false);
        }
    };
    const claimFaucet = async ()=>{
        if (!user?.wallet?.address) return;
        setFaucetStatus('claiming');
        try {
            const res = await fetch('/api/faucet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: user.wallet.address
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setFaucetStatus('success');
            // Re-check balance after short delay
            setTimeout(()=>checkBalance(user.wallet.address), 3000);
        } catch (e) {
            console.error("Faucet error", e);
            setFaucetStatus('error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-100 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[90%] max-w-[340px] bg-white border border-gray-100 rounded-3xl p-6 shadow-2xl relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-24 h-24 mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/pincher-v1.5.png",
                            alt: "Pincher Logo",
                            fill: true,
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-black text-black tracking-tight mb-1",
                        children: "Welcome to Pincher"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-medium text-gray-400 mb-6",
                        children: "Share Rides. Smart Fares."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 w-full text-left",
                        children: [
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-in fade-in slide-in-from-bottom-4 duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-gray-500 uppercase tracking-widest",
                                                children: "Step 1/2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-black uppercase tracking-widest",
                                                children: "Identity"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: login,
                                        className: "w-full py-4 bg-black hover:bg-gray-800 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.98]",
                                        children: "Login / Sign Up"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-in fade-in slide-in-from-bottom-4 duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-gray-500 uppercase tracking-widest",
                                                children: "Step 2/2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-black uppercase tracking-widest",
                                                children: "Gas & Tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                        lineNumber: 124,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 font-medium",
                                                        children: "Wallet Balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 22
                                                    }, this),
                                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400 animate-pulse",
                                                        children: "Scanning..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 26
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold text-black",
                                                                children: [
                                                                    balance?.usdc || '0.00',
                                                                    " USDC"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 30
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-mono text-gray-400",
                                                                children: [
                                                                    balance?.eth || '0.00',
                                                                    " ETH"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            balance && parseFloat(balance.usdc) < 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: claimFaucet,
                                                disabled: faucetStatus === 'claiming' || faucetStatus === 'success',
                                                className: "w-full py-3 bg-black text-white hover:bg-gray-900 rounded-lg font-bold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden active:scale-[0.98]",
                                                children: faucetStatus === 'claiming' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "animate-spin h-4 w-4 text-white",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    className: "opacity-25",
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "4",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 103
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    className: "opacity-75",
                                                                    fill: "currentColor",
                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 208
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 34
                                                        }, this),
                                                        "Sending Test Tokens..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 30
                                                }, this) : faucetStatus === 'success' ? 'Funds Received!' : 'Claim 50 Test-USDC & ETH'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                lineNumber: 143,
                                                columnNumber: 23
                                            }, this),
                                            balance && parseFloat(balance.usdc) >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-xs text-green-700 font-bold py-2 bg-green-50 rounded-lg border border-green-100",
                                                children: "Ready to use!"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                                lineNumber: 161,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onComplete,
                                        disabled: balance ? parseFloat(balance.usdc) < 1 : true,
                                        className: "w-full py-4 bg-black text-white hover:bg-gray-900 disabled:bg-gray-200 disabled:text-gray-400 rounded-xl font-bold text-lg tracking-wide transition-all shadow-lg active:scale-[0.98]",
                                        children: "Start Ride"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pincher/components/UserOnboarding.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(UserOnboarding, "GUuMFUtawNLy3a6wRdax1JBqPLs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__["useWallets"]
    ];
});
_c = UserOnboarding;
var _c;
__turbopack_context__.k.register(_c, "UserOnboarding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UberPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript) <export u as usePrivy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/SearchBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$MapSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/MapSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$UserProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/UserProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$Directions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/Directions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$UserOnboarding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/UserOnboarding.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function UberPage() {
    _s();
    const { authenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"])();
    const apiKey = ("TURBOPACK compile-time value", "AIzaSyAT5jr_r_gNpxfMVnDB3z5KOm5e5OBUsnk") || "";
    const [pickupCoords, setPickupCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [dropoffCoords, setDropoffCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProfileOpen, setIsProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topMatch, setTopMatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // State for Notification
    const [hasOnboarded, setHasOnboarded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Reset onboarding when user logs out
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UberPage.useEffect": ()=>{
            if (!authenticated) {
                setHasOnboarded(false);
            }
        }
    }["UberPage.useEffect"], [
        authenticated
    ]);
    // Auto-open sidebar if high match found? Or just show notification.
    // We'll show notification.
    // Default center: Orange County
    const center = pickupCoords || dropoffCoords || {
        lat: 33.6846,
        lng: -117.8265
    };
    const handlePickupChange = (_location, coords)=>{
        if (coords) {
            setPickupCoords(coords);
        }
    };
    const handleDropoffChange = (_location, coords)=>{
        if (coords) {
            setDropoffCoords(coords);
        }
    };
    const handleRideCreated = ()=>{
        setRefreshKey((prev)=>prev + 1);
        setIsSidebarOpen(true); // Auto open sidebar to see new ride
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !hasOnboarded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$UserOnboarding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onComplete: ()=>setHasOnboarded(true)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/app/page.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3d13115e38a7ee5e",
                children: ".pac-container{border:none;border-radius:8px;margin-top:4px;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;z-index:9999!important}.pac-item{cursor:pointer;border:none;padding:12px 16px;font-size:14px}.pac-item:hover{background-color:#f3f4f6}.pac-icon{display:none}.pac-item-query{color:#111827;font-size:14px;font-weight:500}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3d13115e38a7ee5e" + " " + "h-screen w-screen flex relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$MapSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isSidebarOpen,
                        onToggle: ()=>setIsSidebarOpen(!isSidebarOpen),
                        pickupCoords: pickupCoords,
                        dropoffCoords: dropoffCoords,
                        onTopMatchUpdate: setTopMatch,
                        refreshTrigger: refreshKey
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3d13115e38a7ee5e" + " " + "flex-1 relative h-full",
                        children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIProvider"], {
                            apiKey: apiKey,
                            libraries: [
                                "places",
                                "marker"
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                                    defaultCenter: center,
                                    defaultZoom: pickupCoords || dropoffCoords ? 13 : 11,
                                    gestureHandling: "greedy",
                                    disableDefaultUI: true,
                                    mapId: "DEMO_MAP_ID",
                                    mapTypeControlOptions: {
                                        position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlPosition"].BOTTOM_LEFT
                                    },
                                    className: "w-full h-full",
                                    children: [
                                        pickupCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                                            position: pickupCoords,
                                            draggable: true,
                                            onDragEnd: (e)=>{
                                                if (e.latLng) {
                                                    const newLat = e.latLng.lat();
                                                    const newLng = e.latLng.lng();
                                                    setPickupCoords({
                                                        lat: newLat,
                                                        lng: newLng
                                                    });
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pin"], {
                                                background: '#000000',
                                                glyphColor: '#ffffff',
                                                borderColor: '#000000'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/app/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/app/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this),
                                        dropoffCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                                            position: dropoffCoords,
                                            draggable: true,
                                            onDragEnd: (e)=>{
                                                if (e.latLng) {
                                                    const newLat = e.latLng.lat();
                                                    const newLng = e.latLng.lng();
                                                    setDropoffCoords({
                                                        lat: newLat,
                                                        lng: newLng
                                                    });
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pin"], {
                                                background: '#ffffff',
                                                glyphColor: '#000000',
                                                borderColor: '#000000'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/app/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/app/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$Directions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            pickup: pickupCoords,
                                            dropoff: dropoffCoords
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/app/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${center.lat}-${center.lng}`, true, {
                                    fileName: "[project]/Desktop/pincher/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onPickupChange: handlePickupChange,
                                    onDropoffChange: handleDropoffChange,
                                    externalPickupCoords: pickupCoords,
                                    externalDropoffCoords: dropoffCoords,
                                    onRideCreated: handleRideCreated,
                                    isSidebarOpen: isSidebarOpen,
                                    onOpenProfile: ()=>setIsProfileOpen(true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$UserProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isOpen: isProfileOpen,
                                    onClose: ()=>setIsProfileOpen(false),
                                    onToggle: ()=>setIsProfileOpen(!isProfileOpen)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/app/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                topMatch && topMatch.match_score > 60 && !isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setIsSidebarOpen(true),
                                    className: "jsx-3d13115e38a7ee5e" + " " + "absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-xl p-2 pr-4 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform animate-in slide-in-from-bottom-4 duration-500 z-50 border border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3d13115e38a7ee5e" + " " + "w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-3d13115e38a7ee5e" + " " + "text-sm font-bold text-green-700",
                                                children: [
                                                    topMatch.match_score,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/app/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/app/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3d13115e38a7ee5e" + " " + "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3d13115e38a7ee5e" + " " + "text-xs font-bold text-gray-900 border-b border-gray-100 pb-0.5",
                                                    children: "High Match Found!"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/app/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3d13115e38a7ee5e" + " " + "text-[10px] text-gray-500",
                                                    children: [
                                                        topMatch.seats,
                                                        " seats • $",
                                                        topMatch.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pincher/app/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/app/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3d13115e38a7ee5e" + " " + "w-8 h-8 rounded-full bg-black flex items-center justify-center text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-3d13115e38a7ee5e" + " " + "w-4 h-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 5l7 7-7 7",
                                                    className: "jsx-3d13115e38a7ee5e"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/app/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 106
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/app/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/app/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/app/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ "TURBOPACK unreachable"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/app/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(UberPage, "FkGukpmtIDgyY2IQc71//tfH0rQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"]
    ];
});
_c = UberPage;
var _c;
__turbopack_context__.k.register(_c, "UberPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_pincher_4de3a3c8._.js.map