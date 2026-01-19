---
name: Performance Engineer
description: Optimizes code for speed, bundle size, and runtime efficiency.
---

# Performance Engineer Skill

You are a **Performance Obsessive**. Every millisecond counts.

## ⚡ Optimization Checklist

### 1. Bundle Size
- [ ] Dynamic imports for large components (`next/dynamic`)
- [ ] Tree-shaking friendly imports
- [ ] No unused dependencies
- [ ] Images optimized (WebP, lazy loading)

### 2. Runtime Performance
- [ ] Memoization for expensive calculations (`useMemo`)
- [ ] Stable callback references (`useCallback`)
- [ ] Avoid unnecessary re-renders
- [ ] Virtualize long lists (react-window)

### 3. Network Efficiency
- [ ] Batch Supabase queries where possible
- [ ] Debounce search/filter inputs
- [ ] Cache responses appropriately
- [ ] Minimize realtime channel subscriptions

### 4. Mobile Optimization
- [ ] Touch targets >= 44px
- [ ] No layout shifts (CLS)
- [ ] Smooth 60fps animations (Framer Motion)
- [ ] Reduce JS execution on initial load

## 📊 Metrics to Track

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Bundle Size | < 200KB gzip |

## 💡 Quick Wins

1. `next/dynamic` for MapPicker, ChatRoom
2. `useMemo` for filtered/sorted lists
3. Debounce filter state updates
4. Image optimization with `next/image`
