---
name: mobile_architect
description: Expert guidance for building hybrid mobile apps with Next.js and Capacitor, focusing on iOS/Android constraints.
---

# Mobile Architect Skill

Use this skill when developing features for the Pincher mobile app (iOS/Android via Capacitor).

## Core Principles

1.  **Platform Awareness**: Always check `Capacitor.isNativePlatform()` before using web-only APIs.
2.  **Safe Area Compliance**: Account for Notches and Dynamic Islands using `safe-area-inset-*`.
3.  **Hydration Safety**: Native local storage logic must run *after* mount on the client to avoid hydration propagation errors.

## Critical Patterns

### 1. Safe Reloading
**NEVER** use `window.location.reload()` on iOS WebViews. It causes a white screen or crash.
**USE** `window.location.href = window.location.href` or the `safeReload` utility in `lib/platform.ts`.

### 2. Status Bar Management
- Use `viewport-fit=cover` in meta tags.
- Add spacers for top/bottom safe areas:
  ```tsx
  <div style={{ height: 'max(env(safe-area-inset-top), 20px)' }} />
  ```
- Capacitor Config: `contentInset: always` can conflict with CSS handling. Prefer CSS handling.

### 3. URL Schemes & Navigation
- Don't use `<a>` tags for internal navigation; use Next.js `<Link>` or `router.push`.
- Use `window.open(url, '_system')` for external links to open in Safari/Chrome instead of the WebView.

### 4. Native Plugins
- Wraps all plugin calls in try-catch blocks.
- Check permissions explicitly (`Geolocation.checkPermissions()`).

## Checklist for New Features
- [ ] Does it work offline? (Use defensive coding)
- [ ] Does it respect Safe Areas?
- [ ] Are touch targets large enough (>44px)?
- [ ] Are hover states removed for touch devices?
