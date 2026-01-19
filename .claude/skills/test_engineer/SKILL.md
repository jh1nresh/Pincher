---
name: test_engineer
description: Expert guidance for writing automated verification scripts and ensuring build integrity.
---

# Test Engineer Skill

Use this skill when verifying changes, setting up CI/CD checks, or debugging build failures.

## Core Principles

1.  **Trust but Verify**: Never assume a build works just because it compiled. Check the artifacts.
2.  **Smoke Testing**: Always implement a "Health Check" script (`scripts/smoke-test.js`) that runs post-build.
3.  **Fail Fast**: Scripts should exit with code 1 immediately upon detecting a critical error.

## Standard Protocols

### 1. The Verification Loop
When finishing a task:
1. Run `npm run lint` (Static Analysis)
2. Run `npm run build` (Compilation)
3. Run `npm run test:smoke` (Artifact Verification)
4. Only if ALL pass -> Deploy.

### 2. Smoke Test Checklist
Your smoke test MUST check:
- [ ] Existence of the output directory (`out/` or `.next/`)
- [ ] Existence of critical HTML entry points (`index.html`, `404.html`)
- [ ] Absence of runtime error signatures in generated HTML (e.g., "Application error")

### 3. Writing Test Scripts
- Use standard Node.js (`fs`, `path`) to avoid external dependencies.
- Log clearly with Emojis (✅, ❌) for readability.
- Use explicit exit codes (`process.exit(1)` for failure).

## Debugging Guide
- If `test:smoke` fails: Check the output logs first.
- If Next.js build fails: Check for type errors or circular dependencies.
- If Capacitor sync fails: Check `capacitor.config.json` validity.
