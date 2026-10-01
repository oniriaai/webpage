# ─── Base: pinned Node + pnpm activated from package.json "packageManager" ────
FROM node:22-alpine AS base

# libc6-compat lets the prebuilt glibc binaries (sharp, @swc/core) run on musl.
RUN apk add --no-cache libc6-compat && corepack enable

ENV PNPM_HOME=/pnpm \
    NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

# ─── Stage 1: Install dependencies ───────────────────────────────────────────
FROM base AS deps

# package.json is copied first so corepack resolves the pinned pnpm version.
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

# ─── Stage 2: Build ───────────────────────────────────────────────────────────
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# ─── Stage 3: Production runner ───────────────────────────────────────────────
FROM node:22-alpine AS runner

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

WORKDIR /app

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 --ingroup nodejs nextjs

# Copy the standalone output produced by Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static   ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public         ./public

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>process.exit(r.ok||r.status<400?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
